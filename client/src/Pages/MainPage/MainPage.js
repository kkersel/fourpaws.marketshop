import React from 'react'
import './MainPage.scss'
import Header from "../../Components/Header/Header";
import FirstSectionForMainPage from "./Section/FirstSectionForMainPage/FirstSectionForMainPage";
import SecondSectionForMainPage from "./Section/SecondSectionForMainPage/SecondSectionForMainPage";
import ThirdSectionForMainPage from "./Section/ThirdSectionForMainPage/ThirdSectionForMainPage";
import FourthSectionForMainPage from "./Section/FourthSectionForMainPage/FourthSectionForMainPage";
import FivethSectionForMainPage from "./Section/FivethSectionForMainPage/FivethSectionForMainPage";
import SixthSectionForMainPage from "./Section/SixthSectionForMainPage/SixthSectionForMainPage";
import Footer from "../../Components/Footer/Footer";


export const MainPage = () => {
    return (
        <div className="WrapperMain">
            <Header/>
            <FirstSectionForMainPage/>
            <SecondSectionForMainPage/>
            <ThirdSectionForMainPage/>
            <FourthSectionForMainPage/>
            <FivethSectionForMainPage/>
            <SixthSectionForMainPage/>
            <Footer/>
        </div>
    )
}

export default MainPage;