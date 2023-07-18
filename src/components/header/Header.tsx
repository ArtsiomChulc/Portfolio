import React, {useState} from 'react';
import s from './header.module.scss';
import NavLink from "./navLink/NavLink";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {fab, faReact} from "@fortawesome/free-brands-svg-icons";
import {faCheckSquare, faCoffee, faCog, faQuoteLeft, faSpinner, faSquare} from '@fortawesome/free-solid-svg-icons'
import {library} from "@fortawesome/fontawesome-svg-core";
import BurgerNavLink from "./navLink/burgerNavlink/BurgerNavLink";
import BurgerButton from "../../common/burgerBTN/BurgerButton";

library.add(
    fab,
    faCoffee,
    faCog,
    faSpinner,
    faQuoteLeft,
    faSquare,
    faCheckSquare
)

type PropsType = {
    isOpen: boolean
    setIsOpen: (x: boolean) => void
}

const Header = (props: PropsType) => {
    const {isOpen, setIsOpen} = props
    // const [isOpen, setIsOpen] = useState(false)
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
             <BurgerNavLink setIsOpen={setIsOpen} isOpen = {isOpen}/>
            <BurgerButton onClickHandler={onClickHandler}/>
        </div>
    );
};

export default Header;