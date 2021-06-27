import React from 'react'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Delivery.scss"
import MapLeaflet from "./Leaflet/Leaflet";
import LineForMainTitle from "../../Components/LineForMainTitleAllPages/LineForMainTitle";

export const Delivery = () => {
    return (
        <div>
            <Header/>
            <div className="DeliveryWrapper">
                <div className="test">
                    <h1 className="MainTitleDelivery">
                        Доставка
                    </h1>
                </div>
                <LineForMainTitle/>
                <div className="DeliveryWrapperForBlock">
                    <div className="DeliveryWhiteBlock">
                        <h1 className="TitleInBlockDelivery">Самовывоз</h1>
                        <p className="TextInBlockDelivery">Вы можете самостоятельно забрать оформленный и оплаченный на
                            сайте заказ после подтверждения
                            о готовности, по адресу:</p>
                        <p className="TextInBlockDelivery">Ст. метро "Речной вокзал" первый вагон из центра.</p>
                        <p className="TextInBlockDelivery">Стоимость доставки 0 рублей. </p>
                    </div>
                    <div className="DeliveryWhiteBlock">
                        <h1 className="TitleInBlockDelivery">Почта России</h1>
                        <p className="TextInBlockDelivery">Доставка по Москве и в другие регионы, а так же за границу.
                            Способо доставки “Ускоренный” 1-2
                            дня.</p>
                        <p className="TextInBlockDelivery">Стоимость доставки 200 рублей. </p>
                    </div>
                </div>
            </div>
            <MapLeaflet/>
            <Footer/>
        </div>
    )
}
export default Delivery;