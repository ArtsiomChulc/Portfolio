import React from 'react';
import s from './myServices.module.css';
import Skills from "./skills/Skills";
import s_container from "../../common/styles/container.module.css";


const MyServices = () => {



    return (
        <div className={s.servicesBlock}>
            <h2 className={s.title}>Мои скиллы</h2>
            <div className={`${s_container.container} ${s.container}`}>
                <Skills
                    descText={"Lorem Ipsum is simply dummy text of the printing and typeseLorem Ipsum is simply dummy text of the pLorem Ipsum is simply dummy text of the printing and typrinting and typtting industry. "}
                    titleText={"HTML"}
                    customStyle={s.customStyleHtml}
                />
                <Skills
                    descText={"Contrary to popular belief, Lorem Ipsum is not simply random text. " +
                        "It has roots in a piece of classical Latin literature from 45 BC, " +
                        "making it over 2000 years old."}
                    titleText={"CSS"}
                    customStyle={s.customStyleCss}
                />
                <Skills
                    descText={"It is a long established fact that a reader will be " +
                        "distracted by the readable content of a page when looking at its layout."}
                    titleText={"JavaScript"}
                    customStyle={s.customStyleJS}
                />
            </div>
        </div>
    );
};

export default MyServices;