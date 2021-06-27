import React from 'react'
import './InputsRegistration.scss'

export const InputsRegistration = (props) => {
    return (
        <div className="inputContainer">
            <input className="StyleForIn" placeholder= {props.placeholder}/>
        </div>
    )
}

export default InputsRegistration;