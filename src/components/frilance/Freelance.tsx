import React from 'react';
import s from './freelance.module.scss';
import button from '../../common/styles/button.module.scss'
import s_container from "../../common/styles/container.module.css";

const Freelance = () => {
    return (
        <div className={s.freelanceBlock}>
            <div className={`${s_container.container} ${s.container}`}>
                <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
                <button className={button.btn}><span>Нанять меня</span></button>
            </div>
        </div>
    );
};

export default Freelance;