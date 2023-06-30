import React from 'react';
import s from './burgerNavLink.module.scss';

type PropsType = {
    isOpen: boolean
}

const NavLink = (props: PropsType) => {

    let toggleClass = `${props.isOpen} ? ${s.burgerNavBlock} ${s.showMenu} : ${s.burgerNavBlock}`
    
    return (
        <div className={toggleClass}>
            <a href="src/components/header/navLink/NavLink">Главная</a>
            <a href="src/components/header/navLink/NavLink">Проекты</a>
            <a href="src/components/header/navLink/NavLink">Работы</a>
            <a href="src/components/header/navLink/NavLink">Контакты</a>
        </div>
    );
};

export default NavLink;