import React from 'react';
import s from './myServices.module.css';
import Skills from "./skills/Skills";
import s_container from "../../common/styles/container.module.css";

const MyServices = () => {
    return (
        <div className={s.servicesBlock}>
            <h2 className={s.title}>Мои скиллы</h2>
            <div className={s_container.container}>
                <div className={s.skill_container}>
                    <Skills/>
                    <Skills/>
                    <Skills/>
                    <Skills/>
                    <Skills/>
                </div>
            </div>
        </div>
    );
};

export default MyServices;