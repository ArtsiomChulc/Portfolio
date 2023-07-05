import React, {useState} from 'react';
import s from './burgerNavLink.module.scss';
import {Link} from "react-scroll";

type PropsType = {
    isOpen: boolean
    setIsOpen: (x: boolean) => void
}

const NavLink = (props: PropsType) => {

    let toggleClass = props.isOpen ? `${s.wrapperNav} ${s.showMenu}` : s.wrapperNav
    
    return (
        <div id='nav' className={toggleClass}>
            <div className={s.burgerNavBlock}>
                <Link activeClass={s.active}
                      to="main"
                      spy={true} smooth={true}
                      offset={-80} duration={300}>Главная</Link>
                <Link activeClass={s.active}
                      to="mySkill"
                      spy={true} smooth={true}
                      offset={-80} duration={300}>Мои скилы</Link>
                <Link activeClass={s.active}
                      to="myWorks"
                      spy={true} smooth={true}
                      offset={-80} duration={300}>Работы</Link>
                <Link activeClass={s.active}
                      to="freelance"
                      spy={true} smooth={true}
                      offset={-70} duration={300}>Freelance</Link>
                <Link activeClass={s.active}
                      to="contacts"
                      spy={true} smooth={true}
                      offset={-80} duration={300}>Контакты</Link>
            </div>
        </div>
    );
};

export default NavLink;