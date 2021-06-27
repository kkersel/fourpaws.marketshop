import React from 'react'
import "./Constructor.scss"
import Header from "../../Components/Header/Header";
import LineForMainTitle from "../../Components/LineForMainTitleAllPages/LineForMainTitle";
import {NavLink} from "react-router-dom";
import SilverCircul from "./ComponentsAdressnik/SilverCircul";
import Bones from "./ComponentsAdressnik/Bones";
import SilverCirculSmall from "./ComponentsAdressnik/SilverCirculSmall";

export const Constructor = () => {
    return (
        <div>
            <Header/>
            <div className="WrapperConstructor">
                <h1 className="MainTitleConstructor">Добро пожаловать
                    <br/> в Конструктор!</h1>
                <LineForMainTitle/>
                <div className="BlockForChoose">
                    <h1 className="TitleForChoose">Выберите макет</h1>
                    <div className="WrapperForImages">
                        {/* Grid Таблица */}
                       <SilverCircul size="30x30"/>
                        <Bones/>
                       <SilverCirculSmall size="25x25"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Constructor;


{/*А это через флексящие боксы, мне не понравилось*/}
{/*<div className="FirstBlank">*/}
{/*    <img src="./images/Constructor/SilverCircul.png" alt=""/>*/}
{/*    <p className="InfoAboutAdressnik">30x30</p>*/}
{/*</div>*/}
{/*<div className="SecondBlank">*/}
{/*    <img src="./images/Constructor/Bones.png" alt=""/>*/}
{/*    <p className="InfoAboutAdressnik">31x16</p>*/}
{/*</div>*/}
{/*<div className="ThirdBlank">*/}
{/*    <img src="./images/Constructor/SilverCircul.png" alt=""/>*/}
{/*    <p className="InfoAboutAdressnik">25x25</p>*/}
{/*</div>*/}