import React, {useEffect, useState} from 'react'
import "./SingIn.scss"
import {useHttp} from "../../hooks/http.hooks";
import {useMessage} from "../../hooks/messagehook";

// Front-end
export const SignIn = ({active, setActive}) => {

    // Back-end
    const message = useMessage()
    const {loading, request, error, clearError} = useHttp()
    const [form, setForm] = useState({
        email: '', password: ''
    })

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError]);


    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const signupHandler = async () => {
        try {
            const data = await request('/api/auth/signup', 'POST', {...form})
            console.log('Date', data)
        } catch (e) {
        }
    }

    // const registerHandler = async () => {
    //     try {
    //         const data = await request('/api/auth/singup', 'POST', {...form})
    //         console.log('Date', data)
    //     } catch (e) {
    //     }
    // }

    return (
        <div className={active ? "SingIn active" : "SingIn"} onClick={() => setActive(false)}>
            <div className={active ? "SingInInner active" : "SingInInner"} onClick={e => e.stopPropagation()}>
                <div className="inBlock">
                    <h1 className="EnterTitle">Вход</h1>
                        <input
                            id="email"
                            name="email"
                            placeholder="email"
                            className="inputInBlock"
                            onChange={changeHandler}
                            required=""
                            type="text"/>
                        <input
                            id="password"
                            name="password"
                            placeholder="password"
                            className="inputInBlock"
                            onChange={changeHandler}
                            required=""
                            type="password"/>
                        <div>
                            <button className="Button" disabled={loading}>
                                Войти
                            </button>
                        </div>
                        <div>
                            <button  className="Button" onClick={signupHandler} disabled={loading}>
                                Регистрация
                            </button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;