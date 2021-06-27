import React from 'react'
import "./BuyInOneClick.scss"

const BuyInOneClickModal = ({active, setActive}) => {
    return (
        <div className={active ? "BuyNow active" : "BuyNow" } onClick={() => setActive(false)}>
            <div className={active ? "BuyNowInInner active" : "BuyNowInInner"} onClick={e => e.stopPropagation()}>
                <div className="WrappBuyNow">
                    <div className="headerBuyNow">
                        <h1 className="BuyNowTitle">Заполните форму</h1>
                    </div>
                    <div className="sectionBuyNow">
                        <form className="BuyNowForm" action="">
                            <input className="inputBuyNow" placeholder="Ввидете кличку питомца"/>
                            <input className="inputBuyNow" placeholder="Ввидете Номер телефона"/>
                        </form>
                    </div>
                    <div className="footerBuyNow">
                        <button className="ButtonBuyNow">
                            Оформить заказ
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BuyInOneClickModal;