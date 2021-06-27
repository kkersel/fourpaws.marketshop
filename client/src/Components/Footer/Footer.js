import React from 'react'
import './Footer.scss'
import {NavLink} from "react-router-dom";

export const Footer = () => {
    return (
        <div className="containerWrapper">
            <div className="Wrapper">
                {/*Текстовые ссылки*/}
                <div className="Menu">
                    <ul>
                        <li>
                            <NavLink to="/Gellary" className="linkStyle">Галерея</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" className="linkStyle">Информация о товарах</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Constructor" className="linkStyle">Конструтор</NavLink>
                        </li>
                    </ul>
                </div>

                {/*Ссылки на соц.сети*/}
                <div className="MessengersLinks">
                    <h1>Есть вопрос ? Задай его нам:</h1>
                    <ul>
                        <li>
                            <a href="https://t.me/innv1">
                                <img src="./images/Footer/teleg.png" alt=""/>
                            </a>
                            {/*<a className="TG" href="">Telegram</a>*/}
                        </li>
                        <li>
                            <a href="https://vk.com/fourpaws.marketshop">
                                <img src="./images/Footer/vk.png" alt=""/>
                            </a>
                            {/*<a className="VK" href="">Vkontakte</a>*/}
                        </li>
                        <li>
                            <a href="https://www.instagram.com/restriction/49">
                                <img src="./images/Footer/inst.png" alt=""/>
                            </a>
                            {/*<a className="INST" href="">Instagram</a>*/}
                        </li>
                        <li>
                            <a href="https://wa.me/79776829895">
                                <img src="./images/Footer/WA.png" alt=""/>
                            </a>
                            {/*<a className="WA" href="">WhatsApp</a>*/}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;