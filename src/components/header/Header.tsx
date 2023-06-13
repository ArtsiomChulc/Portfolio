import React from 'react';
import s from './header.module.scss';
import NavLink from "./navLink/NavLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faReact} from "@fortawesome/free-brands-svg-icons";
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare
} from '@fortawesome/free-solid-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";

library.add(
    fab,
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare
)

const Header = () => {
    return (
        <div className={s.header}>
            <FontAwesomeIcon
                icon={faReact}
                pulse
                fixedWidth
                size="3x"
            />
            {/*<FontAwesomeIcon size="3x" className={s.icon} icon={faReact}/>*/}
            <NavLink/>
        </div>
    );
};

export default Header;