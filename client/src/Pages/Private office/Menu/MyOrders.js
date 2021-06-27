import React from 'react'
import "./MyOrders.scss"

export const MyOrders = () => {
    return (
        <div className="ViewMyOrders">
            <h1 className="TitleInMyOrders">Мои заказы </h1>

            <div className="clearTable">
                <table>
                    <tr>
                        <th>Дата заказа :</th>
                        <th>Номер заказа :</th>
                        <th>Статус заказа :</th>
                    </tr>
                    <tr>
                        <td>25.02.2021</td>
                        <td>№ 636-737 </td>
                        <td>В пути</td>
                    </tr>
                </table>

            </div>
        </div>
    )
}

export default MyOrders;