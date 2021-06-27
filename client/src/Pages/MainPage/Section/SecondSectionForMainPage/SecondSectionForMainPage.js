import React from 'react'
import '../Components/StyleForSections.scss'
import ColorSizePriceWhiteFonts from "../Components/ColorSizePriceWhiteFonts";

export const SecondSectionForMainPage = (props) => {

    return (
        <div className="ContainerWrapper black">
            <div className="wrapper">
                <div className="divForImageProduct">
                    <img src="./images/CircularRoseGold.jpg" alt="картинка"/>
                </div>
                <ColorSizePriceWhiteFonts Color="Розовое золото" Size="30x30" Price="500₽"/>
            </div>
        </div>
    )
}

export default SecondSectionForMainPage;