import React from 'react';
import s from './app.module.css';
import Header from "./components/header/Header";
import AboutMe from "./components/aboutMe/AboutMe";
import MyServices from "./components/myServices/MyServices";
import MyWorks from "./components/myWorks/MyWorks";
import Freelance from "./components/frilance/Freelance";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import LogIn from "./common/login/LogIn";

function App() {

    return (
        <div className={s.App}>
            <Header/>
            <AboutMe/>
            <MyServices/>
            <MyWorks/>
            <Freelance/>
            <LogIn/>
            <Footer/>
        </div>
    );
}

export default App;
