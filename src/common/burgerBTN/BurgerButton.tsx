import React from 'react';
import s from './burgerBTN.module.scss'

type PropsType = {
    onClickHandler: () => void
}

const BurgerButton = (props: PropsType) => {
    return (
        <div onClick={props.onClickHandler} id={s.menuToggle}>
            <input type="checkbox" />
            <span id={s.span1}></span>
            <span id={s.span2}></span>
            <span id={s.span3}></span>
        </div>
    );
};

export default BurgerButton;