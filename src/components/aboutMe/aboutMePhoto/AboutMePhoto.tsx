import React from 'react';
import s from './aboutMePhoto.module.scss';
import example from '../../../common/img/exampleImg.jpg';

const AboutMePhoto = () => {
    return (
        <div className={s.wrapperPhotoBlock}>
            <div className={s.photoBlock}>
                <img src={example} alt="my photo"/>
            </div>
        </div>
    );
};

export default AboutMePhoto;