const {Router} = require('express')
const router = Router()
const bcryptjs = require('bcryptjs')
const User = require('../models/Users')
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

// /api/auth/SignUp
router.post(
    '/signup',
    [
        check('email', 'Некоректный email').isEmail(),
        check('password', 'мин. длинна пароля 6 символов')
            .isLength({min: 6})
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req)

            if (errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорктный данные при регистрации.'
                })
            }
            const {email, password} = req.body

            const candidate = await User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: 'Такой пользователь уже существует'})
            }

            const hashPassword = await bcryptjs.hash(password, 12)
            const user = new User({email, password: hashPassword})

            await user.save()

            res.status(201).json({message: 'Создан'})

        } catch (e) {
            res.status(500).json({message: 'Ошибка'})
        }
    })

// /api/auth/SignIN
router.post(
    '/signin',
    [
        check('email', 'Введите кореектный email').normalizeEmail().isEmpty(),
        check('password', 'Введите пароль').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(res)
            if (errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некорктный данные при входе.'
                })
            }
            // Логика для пользователя!
            const {email, password} = req.body
            const user = await User.findOne({email})

            if (!user) {
                return res.status(400).json({message: 'Пользователь не найден'})
            }

            // Мы знаем что мы нашли пользователя
            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({message: 'Не верный пароль'})
            }

            const token = jwt.sign(
                {userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '1h'}
            )

            res.json({ token, userId: user.id})

        } catch (e) {
            res.status(500).json({message: 'Что-то не так..'})
        }
    })

module.exports = router