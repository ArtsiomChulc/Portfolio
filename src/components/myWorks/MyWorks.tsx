import React from 'react';
import s from './myWorks.module.css';
import s_container from "../../common/styles/container.module.css";
import ExampleOfWork from "./exampleOfWork/ExampleOfWork";
import workPhoto1 from '../../common/img/EXEMPLEofWORK/work1.jpg';
import workPhoto2 from '../../common/img/EXEMPLEofWORK/work2.jpg';

const MyWorks = () => {
    return (
        <div className={s.myWorksBlock}>
            <h2 className={s.title}>Мои работы</h2>
            <div className={`${s_container.container} ${s.container}`}>
                <ExampleOfWork
                    photo={workPhoto1}
                    nameProject={"Название проекта"}
                    description={"The standard chunk of Lorem Ipsum used since the 1500sis reproduced " +
                        "below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et" +
                        " Malorum by Cicero are also reproduced in their exact original form,accompanied by English " +
                        "versions from the 1914 translation by H. Rackham."}
                />
                <ExampleOfWork
                    photo={workPhoto2}
                    nameProject={"Название проекта"}
                    description={"The standard chunk of Lorem Ipsum used since the 1500sis reproduced " +
                        "below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et" +
                        " Malorum by Cicero are also reproduced in their exact original form,accompanied by English " +
                        "versions from the 1914 translation by H. Rackham."}
                />
            </div>
        </div>
    );
};

export default MyWorks;