import './App.scss';
import React from "react";
import RegistrationPage from "./Pages/Registration/Registration";
import MainPage from "./Pages/MainPage/MainPage";
import Gellary from "./Pages/Gallery/Gellary";
import Delivery from "./Pages/Delivery/Delivery";
import Constructor from "./Pages/Constructor/Constructor";
import Offer from "./Pages/Offer/Offer"
import {Route, BrowserRouter} from "react-router-dom";
import PrivateOfficeBasket from "./Pages/Private office/PrivateOfficeBasket";
import ConstructorFrontTitle from "./Pages/Constructor/ConstructorFrontTitle/ConstructorFrontTitle";
import PrivateOfficeMyOrders from "./Pages/Private office/PrivateOfficeMyOrders";
import AdminPanel from "./Pages/AdminPanel/AdminPanel";

function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Route path="/MainPage" render = {() => <MainPage/>} />
                <Route path="/RegistrationPage" render = {() => <RegistrationPage/>} />
                <Route path="/Gellary" render = {() => <Gellary/>} />
                <Route path="/Delivery" render = {() => <Delivery/>} />
                <Route path="/Constructor" render = {() => <Constructor/>} />
                <Route path="/Offer" render ={() => <Offer/>} />
                <Route path="/PrivateOfficeBasket" render = {() => <PrivateOfficeBasket/>} />
                <Route path="/PrivateOfficeMyOrders" render = {() => <PrivateOfficeMyOrders/>} />
                <Route path="/ConstructorFrontTitle" render = {() => <ConstructorFrontTitle/>} />
                <Route path="/AdminPanel" render = {() => <AdminPanel />}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
