import React, {useState} from 'react';
import s from './header.module.scss';
import NavLink from "./navLink/NavLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fab, faReact} from "@fortawesome/free-brands-svg-icons";
import {faCheckSquare, faCoffee, faCog, faQuoteLeft, faSpinner, faSquare} from '@fortawesome/free-solid-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";
import BurgerNavLink from "./navLink/burgerNavlink/BurgerNavLink";
import BurgerButton from "../../common/burgerBTN/BurgerButton";
import {Fade} from "react-awesome-reveal";

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
    const [isOpen, setIsOpen] = useState(false)
    const onClickHandler = () => {
        setIsOpen(!isOpen)
    }
    return (
        <div className={s.header}>
            <FontAwesomeIcon
                icon={faReact}
                pulse
                fixedWidth
                size="3x"
            />
            <NavLink/>
            {isOpen &&
                <Fade>
                    <BurgerNavLink isOpen = {isOpen}/>
                </Fade>
            }
            <BurgerButton onClickHandler={onClickHandler}/>
        </div>
    );
};

export default Header;