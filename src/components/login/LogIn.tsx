import React from 'react';
import s from './LogIn.module.scss';
import button from "../../common/styles/button.module.scss";
import reactImg from '../../common/icons/iconForMyWorksExample/react.svg'

const LogIn = () => {
    return (
        <div className={s.container}>
            <div className={s.brand_title}>Contacts form</div>
            <div className={`${s.brand_logo} ${s.pulse}`}>
                <img src={reactImg} alt="React logo"/>
            </div>
            <div className={s.inputs}>
                <label>Enter your Name</label>
                <input className={s.input} type="text" placeholder="Name"/>
                <label>Enter your Last Name</label>
                <input className={s.input} type="text" placeholder="Last Name"/>
                <label>Describe your wishes</label>
                <input className={s.input} placeholder={'Enter your text'}/>
                <button className={`${button.btn} ${s.button}`} type="submit"><span>Отправить</span></button>
            </div>
        </div>
    );
};

export default LogIn;