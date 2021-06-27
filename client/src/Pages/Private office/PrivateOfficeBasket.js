import React from 'react'
import "./PrivateOffice.scss"
import Header from "../../Components/Header/Header";
import LineForMainTitle from "../../Components/LineForMainTitleAllPages/LineForMainTitle";
import ViewBasket from "./Menu/ViewBasket";
import {NavLink} from "react-router-dom";

export const PrivateOfficeBasket = () => {
    return (
        <div>
            <Header/>
            <div className="WrapForPrivateOffice">
                <h1 className="FirstArticle">
                    Личный кабинет
                </h1>
                <LineForMainTitle/>
                <div className="WrapFlex">
                    {/*Главный блок: Ава - Блок*/}
                    <div className="AvatarMenu">
                        <div className="AvatarNumber">
                            <div>
                                <img src="../images/Avatar.jpeg" alt="Avatar"/>
                                <h1 className="Number">+7-977-777-66-55</h1>
                            </div>
                        </div>
                        <div className="Menu">
                            <NavLink to="/PrivateOfficeBasket" className="linkStyle">Корзина</NavLink>
                            <NavLink to="/PrivateOfficeMyOrders" className="linkStyle">Мои заказы</NavLink>
                            <a className="linkStyle" href="">Выход</a>
                        </div>
                    </div>
                    {/* Блок где будут отображаться заказы и корзина */}
                    <ViewBasket/>
                </div>
            </div>
        </div>
    )
}

export default PrivateOfficeBasket;