import React from 'react';
import s from "./infoForFooter.module.scss";
import square from "../../../common/styles/square.module.css";

type PropsType = {
    customStyle: string
    link: string
}

const InfoForFooter = (props: PropsType) => {
    return (
        <a className={s.wrap} href={props.link} target={"_blank"}>
            <span className={`${props.customStyle} ${s.iconBlock} ${square.square}`}></span>
        </a>
    );
};

export default InfoForFooter;