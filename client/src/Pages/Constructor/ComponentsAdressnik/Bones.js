import React from 'react'
import {NavLink} from "react-router-dom";
import "../Constructor.scss"

export const Bones = () => {
    return (
        <div className="gridTwo">
            <NavLink to="/ConstructorFrontTitle" className="btn">
                <img src="./images/Constructor/Bones.png" alt=""/>
            </NavLink>
            <p className="InfoAboutAdressnik">31x16</p>
        </div>
    )
}

export default Bones;