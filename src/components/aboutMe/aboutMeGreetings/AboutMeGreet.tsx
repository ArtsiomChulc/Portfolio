import React from 'react';
import s from './aboutMeGreet.module.css'

const AboutMeGreet = () => {
    return (
        <div className={s.greetBlock}>
            <span>Привет всем!!!</span>
            <h1>Меня зовут Артем Чульц.</h1>
            <span>Я front-end разработчик</span>
        </div>
    );
};

export default AboutMeGreet;