import React from 'react';
import s from './freelance.module.scss';
import button from '../../common/styles/button.module.scss'
import s_container from "../../common/styles/container.module.css";
import {Fade} from "react-awesome-reveal";

const Freelance = () => {
    return (
        <div id='freelance' className={s.freelanceBlock}>
            <Fade direction='up'>
                <div className={`${s_container.container} ${s.container}`}>
                    <h2 className={s.title}>Рассматриваю варианты удаленной работы</h2>
                    <button className={button.btn}><span>Нанять меня</span></button>
                </div>
            </Fade>
        </div>
    );
};

export default Freelance;