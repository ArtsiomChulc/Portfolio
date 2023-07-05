import React from 'react';
import s from './LogIn.module.scss';
import button from "../../common/styles/button.module.scss";
import reactImg from '../../common/icons/iconForMyWorksExample/react.svg'
import {useFormik} from "formik";

export type LoginType = {
    name: string
    lastName: string
    text: string
}
export type LoginTypeError = {
    name?: string
    lastName?: string
    text?: string
}

const LogIn = () => {

    const formik = useFormik<LoginType>({
        initialValues: {
            name: '',
            lastName: '',
            text: ''
        },
        onSubmit: (values: LoginType) => {
            alert(JSON.stringify(values))
            formik.resetForm()
        },
        validate: (values) => {
            const errors:LoginTypeError = {}
            if (!values.name) {
                errors.name = 'Required'
            } else if (values.name.length < 3) {
                errors.name = 'Name must be at least three characters long'
            }
            if(values.lastName.length < 3) {
                errors.lastName = 'Last Name must be at least three characters long'
            }
            if (values.text.length < 5 || values.text.length > 20) {
                errors.text = 'Text must be more than 5 characters but not more than 20'
            }
            return errors
        }
    })

    return (
        <div id='contacts' className={s.container}>
            <div className={s.brand_title}>Contacts form</div>
            <div className={`${s.brand_logo} ${s.pulse}`}>
                <img src={reactImg} alt="React logo"/>
            </div>
            <form onSubmit={formik.handleSubmit} className={s.inputs}>
                <div>
                    <label>Enter your Name</label>
                    <input className={s.input} {...formik.getFieldProps('name')}/>
                    {formik.touched.name && formik.errors.name && <div className={s.errorMessage}>{formik.errors.name}</div>}
                </div>
                <div>
                    <label>Enter your Last Name</label>
                    <input className={s.input} {...formik.getFieldProps('lastName')}/>
                    {formik.touched.lastName && formik.errors.lastName && <div className={s.errorMessage}>{formik.errors.lastName}</div>}
                </div>
                <div>
                    <label>Describe your wishes</label>
                    <input className={s.input} placeholder={'Enter your text'} {...formik.getFieldProps('text')}/>
                    {formik.touched.text && formik.errors.text && <div className={`${s.errorMessageText} ${s.errorMessage}`}>{formik.errors.text}</div>}
                </div>
                <button className={`${button.btn} ${s.button}`} type="submit"><span>Отправить</span></button>
            </form>
        </div>
    );
};

export default LogIn;