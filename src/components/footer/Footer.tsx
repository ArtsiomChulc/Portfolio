import React from 'react';
import s from './footer.module.css';
import s_container from '../../common/styles/container.module.css';
import square from '../../common/styles/square.module.css';


const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${s_container.container} ${s.container}`}>
                <h4 className={s.name}>Чульц Артем</h4>
                <div className={s.iconsBlock}>
                    <span className={`${s.iconBlock} ${square.square}`}></span>
                    <span className={`${s.iconBlock} ${square.square}`}></span>
                    <span className={`${s.iconBlock} ${square.square}`}></span>
                    <span className={`${s.iconBlock} ${square.square}`}></span>
                </div>
                <span className={s.copyRight}>
                    &copy; 2023 Все права защищены
                </span>
            </div>
        </div>
    );
};

export default Footer;