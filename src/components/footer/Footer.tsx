import React from 'react';
import s from './footer.module.scss';
import s_container from '../../common/styles/container.module.css';
import InfoForFooter from "./infoForFooter/InfoForFooter";


const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${s_container.container} ${s.container}`}>
                <h4 className={s.name}>Чульц Артем</h4>
                <div className={s.iconsBlock}>
                    <InfoForFooter link={'https://www.facebook.com/profile.php?id=100077324141821'} customStyle={s.facebook}/>
                    <InfoForFooter link={'https://www.linkedin.com/in/artem-chults-753996256/'} customStyle={s.linkedin}/>
                    <InfoForFooter link={'https://twitter.com/artemorsha'} customStyle={s.twitter}/>
                    <InfoForFooter link={'https://github.com/ArtsiomChulc'} customStyle={s.github}/>
                    <InfoForFooter link={'https://www.instagram.com/artemchults/'} customStyle={s.instagram}/>
                </div>
                <span className={s.copyRight}>
                    &copy; 2023 Все права защищены
                </span>
            </div>
        </div>
    );
};

export default Footer;