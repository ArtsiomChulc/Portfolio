import React from 'react';
import s from './LogIn.module.scss';
import button from "../styles/button.module.scss";

const LogIn = () => {
    return (
        <div className={s.container}>
            <div className={s.brand_logo}></div>
            <div className={s.brand_title}>Contacts form</div>
            <div className={s.inputs}>
                <label>Enter your Name</label>
                <input className={s.input} type="text" placeholder="Name"/>
                <label>Enter your Last Name</label>
                <input className={s.input} type="text" placeholder="Last Name"/>
                <label>Describe your wishes</label>
                <input className={s.input} placeholder={'Enter your text'}/>
                <button className={`${button.btn} ${s.button}`} type="submit">Отправить</button>
            </div>
        </div>
    );
};

export default LogIn;