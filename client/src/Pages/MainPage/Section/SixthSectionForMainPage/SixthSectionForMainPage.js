import React from 'react'
import '../Components/StyleForSections.scss'
import ColorSizePriceWhiteFonts from "../Components/ColorSizePriceWhiteFonts";

export const SixthSectionForMainPage = () => {
    return (
        <div className="ContainerWrapper black">
            <div className="wrapper">
                <div className="divForImageProduct">
                    <img src="./images/SilverBones.jpg" alt="картинка"/>
                </div>
                <ColorSizePriceWhiteFonts Color="Серебро" Size="31x16" Price="500₽"/>
            </div>
        </div>
    )
}

export default SixthSectionForMainPage;