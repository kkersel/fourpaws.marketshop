import React from 'react'
import './Gallery.scss'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import LineForMainTitle from "../../Components/LineForMainTitleAllPages/LineForMainTitle";

export const Gellary = () => {
    return (
        <div className="GalleryWrapper">
            <Header/>
            <div className="GallerySectionOne">
                <h1 className="MainTitle">Фотографии</h1>
                <LineForMainTitle/>
            </div>

            {/* Блок с фотографиями №1 */}
            <div className="GallerySectionOneTwo">
                <div>
                    <img src="images/Gallary/1.jpeg" alt=""/>
                    <img src="images/Gallary/2.jpeg" alt=""/>
                    <img src="images/Gallary/3.jpeg" alt=""/>
                </div>
                <div>
                    <img src="images/Gallary/5.jpeg" alt=""/>
                    <img src="images/Gallary/6.jpeg" alt=""/>
                    <img src="images/Gallary/4.jpeg" alt=""/>
                </div>
            </div>

            <div className="GallerySectionTwo">
                <div className="WrapperLeft">
                    <h1 className="MainTitleForGallerySectionTwo">Почему стоит <br/>
                        покупать именно у нас? <br/>
                        Ответ прост - Качество</h1>
                    <hr className="LineForTitle"/>

                    <p className="TextBlockAboutUs">
                        Все изделия изготовлены из высококачественной нержавеющей стали.
                        Они состоят из 3-х простых элементов. <br/>
                        Основное кольцо - Крепится на ошейник. <br/>
                        Соеденительное кольцо - соеденяет основное кольцо и изделие. <br/>
                        Изделие, на котором с помощью лазерной гравировки нанесена информация.
                    </p>

                    {/* Три мини пикчи */}
                    <div className="WrapperForImgCircular">
                        <div className="Circular">
                            <img src="./images/Gallary/bigkolco.jpg" alt="ha-ha"/>
                            {/*<div className="infoOne">*/}
                            {/*    <h1>Основное кольцо</h1>*/}
                            {/*    <p>*/}
                            {/*        Это кольцо крепко крепится на ошейник. Благодаря этому адрессник никогда не потеряется и будет долго служить вам и вашему домашнему питомцу.*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                        </div>

                        <div className="Circular">
                            <img src="./images/Gallary/kolco.jpg" alt="ha-ha"/>
                        </div>

                        <div className="Circular">
                            <img src="./images/Gallary/adress.jpg" alt="ha-ha"/>
                        </div>
                    </div>
                </div>

                {/* Мы само совершенство! */}
                <div className="WrapperRight">
                   <div className="WrapperForBigPicture">
                       <img src="./images/Gallary/perfecrt.jpg" alt=""/>
                   </div>
                </div>
            </div>

            {/* Блок с фотографиями №2 */}
            <div className="GallerySectionThree">
                <div className="MainPicture">
                    <img src="./images/Gallary/One.jpg" alt=""/>
                </div>
                <div className="SecondPicture">
                    <div>
                        <img src="./images/Gallary/Three.jpg" alt=""/>
                    </div>
                    <div>
                        <img src="./images/Gallary/Two.jpg" alt=""/>
                    </div>
                </div>
            </div>

            <div className="GallerySectionFour">
                <div className="WrapperForTitleAboutInstagram">
                    <h1 className="AboutInstagram">
                        Еще больше фотографий вы можете посмотреть в нашем Instagram профиле
                    </h1>
                </div>
                <div>
                    <hr className="VerticalLine"/>
                </div>
                <div className="WrapperForInstImgAndButton">
                    <div>
                        <img src="./images/Gallary/inst.svg" alt=""/>
                    </div>
                    <form action="https://www.instagram.com/beautybay.russia/" target="_blank">
                        <button className="instbutton">Открыть</button>
                    </form>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Gellary;