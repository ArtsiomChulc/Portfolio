import React from 'react';
import s from './exampleOfWork.module.scss'

type ExamplePropsType = {
    photo: string
    description: string
    nameProject: string
    href: string
}

const ExampleOfWork = (props: ExamplePropsType) => {
    return (
        <div className={s.exampleBlock}>
            <div className={s.wrapRelative}>
                <img src={props.photo} alt="My work photo"/>
                <a href={props.href} target={"_blank"} className={s.btn}>Look</a>
            </div>
            <div className={s.wrapText}>
                <p className={s.projectName}>{props.nameProject}</p>
                <span className={s.descProject}>{props.description}</span>
            </div>
        </div>
    );
};

export default ExampleOfWork;