import React from 'react';
import s from './skills.module.css';
import square from '../../../common/styles/square.module.css'

type SkillsPropsType = {
    descText?: string
    titleText?: string
}

const Skills = (props: SkillsPropsType) => {
    return (
        <div className={s.skillBlock}>
            <div className={`${s.square} ${square.square}`}></div>
            <h3 className={s.title}>{props.titleText}</h3>
            <span className={s.description}>
                {props.descText}
            </span>

        </div>
    );
};

export default Skills;