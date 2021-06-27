import React from 'react'
import "./ViewBasket.scss"

export const ViewBasket = () => {
    return (
        <div className="ViewMyOrders">
            <h1>Ваша коризна пуста</h1>
            <button className="AddOffer">Оформить заказ</button>
        </div>
    )
}

export default ViewBasket;