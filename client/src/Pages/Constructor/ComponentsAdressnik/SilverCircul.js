import React from 'react'
import {NavLink} from "react-router-dom";
import "../Constructor.scss"

export const SilverCircul = (props) => {
    return (
        <div className="gridOne">
            <NavLink to="/ConstructorFrontTitle" className="btn">
                <img src="./images/Constructor/SilverCircul.png" alt=""/>
            </NavLink>
            <p className="InfoAboutAdressnik">{props.size}</p>
        </div>
    )
}

export default SilverCircul;
