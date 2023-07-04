import React from 'react';
import s from './navLink.module.scss';
import {Link} from "react-scroll";

const NavLink = () => {

    return (
        <div className={s.navBlock}>
            <Link activeClass={s.active}
                  to="main"
                  spy={true} smooth={true}
                  offset={-80} duration={800}>Главная</Link>
            <Link activeClass={s.active}
                  to="mySkill"
                  spy={true} smooth={true}
                  offset={-80} duration={800}>Мои скилы</Link>
            <Link activeClass={s.active}
                  to="myWorks"
                  spy={true} smooth={true}
                  offset={-80} duration={800}>Работы</Link>
            <Link activeClass={s.active}
                  to="freelance"
                  spy={true} smooth={true}
                  offset={-70} duration={800}>Freelance</Link>
            <Link activeClass={s.active}
                  to="contacts"
                  spy={true} smooth={true}
                  offset={-80} duration={800}>Контакты</Link>
        </div>
    );
};

export default NavLink;