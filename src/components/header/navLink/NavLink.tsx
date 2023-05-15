import React from 'react';
import s from './navLink.module.css';

const NavLink = () => {
    return (
        <div className={s.navBlock}>
            <a href="src/components/header/navLink/NavLink">Главная</a>
            <a href="src/components/header/navLink/NavLink">Проекты</a>
            <a href="src/components/header/navLink/NavLink">Работы</a>
            <a href="src/components/header/navLink/NavLink">Контакты</a>
        </div>
    );
};

export default NavLink;