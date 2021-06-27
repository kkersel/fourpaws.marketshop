import React from 'react'
import '../Components/StyleForSections.scss'
import ColorSizePriceBlackFonts from "../Components/ColorSizePriceBlackFonts";

export const ThirdSectionForMainPage = () => {
    return (
        <div className="ContainerWrapper white">
            <div className="wrapper">
                <div className="divForImageProduct">
                    <img src="./images/CircularRainbow.jpg" alt="картинка"/>
                </div>
                <ColorSizePriceBlackFonts Color="Радужный" Size="25x25" Price="500₽"/>
            </div>
        </div>
    )
}

export default ThirdSectionForMainPage;