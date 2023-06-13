import React from 'react';
import s from './aboutMeGreet.module.scss';

const AboutMeGreet = () => {
    return (
        <div className={s.greetBlock}>
            <span className={s.introSpan}>
                    Привет Всем...
            </span>
            <h1 className={s.title}>
                Меня зовут <br/>
                 <span> Артем Чульц.
                </span>
            </h1>
            <p className={`${s.subTitle} ${s.textTyping}`}>Я Front-End разработчик</p>
        </div>
    );
};

export default AboutMeGreet;