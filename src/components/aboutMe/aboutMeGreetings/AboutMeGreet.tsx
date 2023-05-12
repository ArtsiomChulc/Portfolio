import React from 'react';
import s from './aboutMeGreet.module.css'

const AboutMeGreet = () => {
    return (
        <div className={s.greetBlock}>
            <span>Привет всем!!!</span>
            <h1>Меня зовут Артем Чульц.</h1>
            <p>Я front-end разработчик</p>
        </div>
    );
};

export default AboutMeGreet;