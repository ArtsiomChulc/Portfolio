import React from 'react';
import s from './freelance.module.css';
import button from '../../common/styles/button.module.css'
import s_container from "../../common/styles/container.module.css";

const Freelance = () => {
    return (
        <div className={s.freelanceBlock}>
            <div className={`${s_container.container} ${s.container}`}>
                <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
                <button className={button.btn}>Нанять меня</button>
            </div>
        </div>
    );
};

export default Freelance;