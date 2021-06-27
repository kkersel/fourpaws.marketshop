import React, {useState} from 'react'
import './Header.scss'
import {NavLink} from "react-router-dom";
import SingIn from "../../Pages/SingIn/SingIn";

export const Header = () => {
    const [SingInActive, setSingInActive] = useState(false)
    return (
        <header>
            <div className="Wrap">
                {/* Меню навигационного бара */}
                <h1 className="Logo">
                    <NavLink className="Logo" to="/MainPage">FOURPAWS <br/>MARKETSHOP</NavLink>
                </h1>
                <nav>
                    <NavLink to="/MainPage" className="linkStyle">Главная</NavLink>
                    <NavLink to="/Delivery" className="linkStyle">Доставка</NavLink>
                    <NavLink to="/Gellary" className="linkStyle">Фото</NavLink>
                    <NavLink to="/Constructor" className="linkStyle">Конструктор</NavLink>
                </nav>
                <div>
                    <NavLink className="linkStyle" to="#" onClick={() => setSingInActive(true)}>Вход</NavLink>
                </div>
            </div>
            <SingIn active={SingInActive} setActive={setSingInActive}/>
        </header>
    )
}
export default Header;