import React from 'react'
import "./Offer.scss"
import Header from "../../Components/Header/Header";

export const Offer = () => {
    return (
        <div>
            <Header/>
            <div>
                <div className="WrapperOffer">
                    <h1 className="MainTitleOffer">Оформление заказа</h1>
                    <div className="WrapperDiv">

                        {/* #1 */}
                        <div className="OneTwo">

                            <div className="One">
                                <h1 className="TitleInDiv">1. Куда доставить?</h1>
                                <div className="InOne">
                                    <form action="">
                                        <input className="InputOne" placeholder="Ваш город"/>
                                        <input className="InputOne" placeholder="Индекс"/>
                                    </form>
                                </div>
                            </div>

                            {/* #2 */}
                            <div className="Two">
                                <h1 className="TitleInDiv">2. Способ доставки</h1>
                                <div className="InTwo">
                                    <div className="DeliveryRadio">
                                        <label>
                                            Самовывоз. м. Речной вокзал
                                            <input type="radio" name="Delivery"/>
                                        </label>
                                    </div>
                                    <div className="DeliveryRadio">
                                        <label>
                                            Почта России
                                            <input type="radio" name="Delivery"/>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* #3 */}
                        <div className="ThreeFour">

                            <div className="Three">
                                <h1 className="TitleInDiv">3. Способ оплаты</h1>
                                <div className="InThree">
                                    <div className="PayBox">
                                        <form action="">
                                            <input type="radio"/>
                                            <label htmlFor="">Безналичный платеж
                                                Банковские карты, Интернет-банки, Электронные кошельки, Наличные в терминале и
                                                др.</label>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            {/* #4 */}
                            <div className="Four">
                                <h1 className="TitleInDiv">4. Покупатель</h1>
                                <form className="InFour" action="">
                                    <input className="InputFour" placeholder="ФИО"/>
                                    <input className="InputFour" placeholder="E-mail"/>
                                    <input className="InputFour" placeholder="Номер телефона"/>
                                </form>
                            </div>

                        </div>

                        {/* Корзина
                                    Сюда нужен вывод товаров, которые пользователи добавят в корзину!
                        */}
                        <div className="WrapperForBasket">
                            <div className="Basket">
                                <h1 className="TitleInDiv">Корзина</h1>
                                <div className="Grid">
                                    <div className="BasketLine">
                                        <p>Общая сумма</p>
                                        <p>Доставка:</p>
                                    </div>
                                    <div className="BasketLine">
                                        <p>500₽</p>
                                        <p>не расчитана</p>
                                    </div>
                                </div>
                                <div className="BasketLine">
                                    <h1>Итог:</h1>
                                    <h1>500₽</h1>
                                </div>
                                <button className="Pay">{}</button>
                            </div>
                        </div>
                    </div>
                </div>
                <section>

                </section>
            </div>

        </div>
    )
}

export default Offer;