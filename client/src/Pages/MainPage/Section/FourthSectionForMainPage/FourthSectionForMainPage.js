import React from 'react'
import '../Components/StyleForSections.scss'
import ColorSizePriceWhiteFonts from "../Components/ColorSizePriceWhiteFonts";

export const FourthSectionForMainPage = () => {
    return (
        <div className="ContainerWrapper black">
            <div className="wrapper">
                <div className="divForImageProduct">
                    <img src="./images/CircularSilver.jpg" alt="картинка"/>
                </div>
                <ColorSizePriceWhiteFonts Color="Серебро" Size="30x30" Price="500₽"/>
            </div>
        </div>
    )
}

export default FourthSectionForMainPage;