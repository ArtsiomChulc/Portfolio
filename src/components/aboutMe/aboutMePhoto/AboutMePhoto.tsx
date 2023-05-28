import React from 'react';
import s from './aboutMePhoto.module.css';
import example from '../../../common/img/exampleImg.jpg';

const AboutMePhoto = () => {
    return (
        <div className={s.photoBlock}>
            <img src={example} alt="my photo"/>
        </div>
    );
};

export default AboutMePhoto;