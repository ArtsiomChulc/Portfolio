import React from 'react';
import s from './contacts.module.css';
import button from '../../common/styles/button.module.css';
import s_container from "../../common/styles/container.module.css";

const Contacts = () => {
    return (
        <div className={s.contactsBlock}>
            <div className={`${s_container.container} ${s.container}`}>
                <form className={s.form} method="post">
                    Введите имя: <input className={s.nameInput} type="text" name="FirstName" value="" placeholder={'Name'}/>
                    Введите фамилию: <input className={s.lastNameInput} type="text" name="LastName" value="" placeholder={'Last Name'}/>
                    <textarea placeholder={'Enter your text'}/>
                    <button className={`${button.btn} ${s.btn}`}>Отправить</button>
                </form>

            </div>
        </div>
    );
};

export default Contacts;