import React from 'react'
import './Registration.scss'
import InputsRegistration from "../../Components/inputREG/InputsRegistration";
import ReactDOM from "react-dom";

export const RegistrationPage = () => {
    return (
        <div className="container">
            <div className="blockLogin">
                <div className="inBlock">
                    <h1>Регистрация</h1>
                    <InputsRegistration placeholder="Введите Имя"/>
                    <InputsRegistration placeholder="Введите фамилию"/>
                    <InputsRegistration placeholder="Введите Email"/>
                    <InputsRegistration placeholder="Введите Телефон"/>
                    <a href="/Entrance">Войти</a>
                </div>
            </div>
        </div>
    )
}

export default RegistrationPage;