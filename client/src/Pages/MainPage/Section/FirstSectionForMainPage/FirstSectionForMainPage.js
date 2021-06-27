import React from 'react'
import './FirstSectionForMainPage.scss'
import LineForMainTitle from "../../../../Components/LineForMainTitleAllPages/LineForMainTitle";

export const FirstSectionForMainPage = () => {
    return (
        <div className="articleWrapper">
            <div className="LeftSide">
                <h1 className="FirstArticle">Адресник</h1>
                <LineForMainTitle/>
                <h2 className="SecondArticle">Это специальный жетон, изготовленный из высококачественной нержавеющей стали,
                    который прикрепрялется к ошейнику вашего питомца и содержит информацию,
                    которая позволит вернуть животное домой.</h2>
            </div>
        </div>
    )
}

export default FirstSectionForMainPage;