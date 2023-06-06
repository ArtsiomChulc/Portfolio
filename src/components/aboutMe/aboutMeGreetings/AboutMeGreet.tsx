import React from 'react';
import s from './aboutMeGreet.module.css';

const AboutMeGreet = () => {

    return (
        <div className={s.greetBlock}>
            <span className={s.introSpan}>
                    Привет всем!!!
            </span>
            <h1 className={s.title}>
                Меня зовут <br/>
                 <span> Артем Чульц.
                </span>
            </h1>
            <p id={'result'} className={s.subTitle}>Я Front-End разработчик</p>
        </div>
    );
};

export default AboutMeGreet;