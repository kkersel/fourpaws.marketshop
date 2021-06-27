import React from 'react'
import "./ConstructorFrontTitle.scss"
import Header from "../../../Components/Header/Header";
import LineForMainTitle from "../../../Components/LineForMainTitleAllPages/LineForMainTitle";
import {NavLink} from "react-router-dom";
import SilverCirculSmall from "../ComponentsAdressnik/SilverCirculSmall";

export const ConstructorFrontTitle = () => {
    return (
        <div>
            <Header/>
            <div className="WrapperConstructor">
                <h1 className="MainTitleConstructor">Введите кличку
                    <br/> вашего питомца</h1>
                <LineForMainTitle/>
                <div className="BlockForChooseTitle">
                    <NavLink className="TitleForChoose" to="/Constructor">
                        <h1 className="TitleForChoose">Назад</h1>
                    </NavLink>
                    <SilverCirculSmall/>
                    <div className="inputButton">
                        <input type="text" className=""/>
                        <button>Далее</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConstructorFrontTitle;