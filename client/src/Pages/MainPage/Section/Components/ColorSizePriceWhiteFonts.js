import React, {useState} from 'react'
import './ColorSizePrice.scss'
import ButtonForBuy from "./ButtonForBuy/ButtonForBuy";
import BuyInOneClickModal from "./ModalForBuy/BuyInOneClickModal";

export const ColorSizePriceBlackFonts = (props) => {
    const [BuyNowActive, setBuyNowActive] = useState(false)

    const BuyInOneClick = () => {
        setBuyNowActive(true)
    }

    return (
        <div>
            <div className="divForArticleProduct White">
                <p className="PriceColorSize Color">{props.Color}</p>
                <p className="PriceColorSize Size">{props.Size}</p>
                <p className="PriceColorSize Price">{props.Price}</p>
                <ButtonForBuy Title="Купить" onClick={BuyInOneClick} />
            </div>
                <BuyInOneClickModal active={BuyNowActive} setActive={setBuyNowActive}/>
        </div>
    )
}

export default ColorSizePriceBlackFonts;