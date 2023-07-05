import React from 'react';
import s from './aboutMePhoto.module.scss';
import example from '../../../common/img/myPhoto.jpg';
import {Tilt} from 'react-tilt';

const AboutMePhoto = () => {

    const myOptions = {
        reverse: true,  // reverse the tilt direction
        max: 10,     // max tilt rotation (degrees)
        perspective: 900,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.03,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 2000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }
    return (
        <div className={s.wrapperPhotoBlock}>
                <div className={s.photoBlock}>
                    <Tilt options={myOptions}>
                        <img src={example} alt="my photo"/>
                    </Tilt>
                </div>
        </div>
    );
};

export default AboutMePhoto;