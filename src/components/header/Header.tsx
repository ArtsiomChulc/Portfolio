import React from 'react';
import s from './header.module.css';
import NavLink from "../navLink/NavLink";

const Header = () => {
    return (
        <div className={s.header}>
            <NavLink/>
        </div>
    );
};

export default Header;