import React from 'react';
import s from './app.module.css';
import Header from "./components/header/Header";
import AboutMe from "./components/aboutMe/AboutMe";
import MyServices from "./components/myServices/MyServices";

function App() {
    return (
        <div className={s.App}>
            <Header/>
            <AboutMe/>
            <MyServices/>
        </div>
    );
}

export default App;
