import React from 'react';
import s from './burgerNavLink.module.scss';
import {Link} from "react-scroll";

type PropsType = {
    isOpen: boolean
}

const NavLink = (props: PropsType) => {

    let toggleClass = props.isOpen ? `${s.wrapperNav} ${s.showMenu}` : s.wrapperNav
    
    return (
        <div className={toggleClass}>
            <div className={s.burgerNavBlock}>
                {/*<a href="src/components/header/navLink/NavLink">Главная</a>*/}
                {/*<a href="src/components/header/navLink/NavLink">Проекты</a>*/}
                {/*<a href="src/components/header/navLink/NavLink">Работы</a>*/}
                {/*<a href="src/components/header/navLink/NavLink">Контакты</a>*/}
                <Link activeClass={s.active}
                      to="main"
                      spy={true} smooth={true}
                      offset={-80} duration={300}>Главная</Link>
                <Link activeClass={s.active}
                      to="mySkill"
                      spy={true} smooth={true}
                      offset={-80} duration={300}>Навыки</Link>
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