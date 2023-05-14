import React from 'react';
import s from './aboutMe.module.css';
import s_container from '../../common/styles/container.module.css'
import AboutMeGreet from "./aboutMeGreetings/AboutMeGreet";
import AboutMePhoto from "./aboutMePhoto/AboutMePhoto";

const AboutMe = () => {
    return (
        <div className={s.aboutMeBlock}>
            <div className={`${s_container.container} ${s.container}`}>
                <AboutMeGreet/>
                <AboutMePhoto/>
            </div>
        </div>
    );
};

export default AboutMe;