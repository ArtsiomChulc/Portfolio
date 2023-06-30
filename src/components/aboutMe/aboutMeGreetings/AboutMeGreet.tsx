import React from 'react';
import s from './aboutMeGreet.module.scss';
import Typewriter from 'typewriter-effect';


const AboutMeGreet = () => {
    const text = 'Я Front-End разработчик'
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
            {/*<p className={`${s.subTitle} ${s.textTyping}`}>Я Front-End разработчик</p>*/}
            <span className={s.subTitle}>
                <Typewriter
                    options={{
                        strings: [text],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>

        </div>
    );
};

export default AboutMeGreet;