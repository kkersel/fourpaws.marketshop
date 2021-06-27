import React from 'react'
import "./ButtonBuy.scss"

const ButtonForBuy = ({Title, onClick}) => {
    return (
        <div className="wrap">
            <button onClick={onClick} className="ButtonBuy">{Title}</button>
        </div>
    )
}

export default ButtonForBuy;