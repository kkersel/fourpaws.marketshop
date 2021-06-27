import React from 'react'
import '../Components/StyleForSections.scss'
import ColorSizePriceBlackFonts from "../Components/ColorSizePriceBlackFonts";

export const FivethSectionForMainPage = () => {
    return (
        <div className="ContainerWrapper white">
            <div className="wrapper">
                <div className="divForImageProduct">
                    <img src="./images/RoseGoldBones.jpg" alt="картинка"/>
                </div>
                <ColorSizePriceBlackFonts Color="Розовое золото" Size="31x16" Price="500₽"/>
            </div>
        </div>
    )
}

export default FivethSectionForMainPage;