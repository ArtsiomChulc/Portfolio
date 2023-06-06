import React from 'react';
import s from "./infoForFooter.module.css";
import square from "../../../common/styles/square.module.css";



const InfoForFooter = (props: {customStyle: string}) => {
    return (
        <>
            <span className={`${props.customStyle} ${s.iconBlock} ${square.square}`}></span>
        </>
    );
};

export default InfoForFooter;