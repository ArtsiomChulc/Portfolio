import React from 'react';
import s from './aboutMePhoto.module.css';
import myPhoto from '../../../common/img/myPhoto.jpg'

const AboutMePhoto = () => {
    return (
        <div className={s.photoBlock}>
            <img src={myPhoto} alt="my photo"/>
        </div>
    );
};

export default AboutMePhoto;