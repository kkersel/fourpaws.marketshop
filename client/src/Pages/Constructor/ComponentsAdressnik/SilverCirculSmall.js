import React from 'react'
import {NavLink} from "react-router-dom";
import "./AdressnikComp.scss"

export const SilverCirculSmall = (props) => {
    return (
        <div className="gridThree">
            <NavLink to="/ConstructorFrontTitle" className="btn">
                <img src="./images/Constructor/SilverCircul.png" alt=""/>
            </NavLink>
            <p className="InfoAboutAdressnik">{props.size}</p>
        </div>
    )
}

export default SilverCirculSmall;
