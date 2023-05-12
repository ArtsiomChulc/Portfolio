import React from 'react';
import s from './navLink.module.css';

const NavLink = () => {
    return (
        <div className={s.navBlock}>
            <a href="">Главная</a>
            <a href="">Проекты</a>
            <a href="">Работы</a>
            <a href="">Контакты</a>
        </div>
    );
};

export default NavLink;