import React, {useState} from 'react';
import s from './LogIn.module.scss';
import button from "../../common/styles/button.module.scss";
import reactImg from '../../common/icons/iconForMyWorksExample/react.svg'
import {useFormik} from "formik";
import {EmailJSResponseStatus} from "@emailjs/browser";
import emailjs from "@emailjs/browser";
import {toast} from "react-toastify";



export type LoginType = {
    name: string
    email: string
    text: string
}
export type LoginTypeError = {
    name?: string
    email?: string
    text?: string
}

const LogIn = () => {


    const formik = useFormik<LoginType>({
        initialValues: {
            name: '',
            email: '',
            text: ''
        },
        onSubmit: (values: LoginType) => {
            const serviceId: string = 'service_test';
            const templateId: string = 'contact_form';
            const publicKey: string = 'Ty6sfNI-2HBuIvpmT';
            // alert(JSON.stringify(values))
            emailjs.send(serviceId, templateId, values, publicKey)
                .then((result: EmailJSResponseStatus) => {
                    toast.success("Thank you for your letter!");
                }, (error: EmailJSResponseStatus) => {
                    console.log(error.text);
                });
            formik.resetForm()
        },
        validate: (values) => {
            const errors:LoginTypeError = {}
            if (!values.name) {
                errors.name = 'Required'
            } else if (values.name.length < 3) {
                errors.name = 'Name must be at least three characters long'
            }
            if (!values.email) {
                errors.email = 'E-Mail must be at least three characters long';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            // if(values.email.length < 3) {
            //     errors.email = 'Last Name must be at least three characters long'
            // }
            if (values.text.length < 5) {
                errors.text = 'Text must be more than 5 characters'
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
                    <input className={s.input} placeholder={'Name'} {...formik.getFieldProps('name')}/>
                    {formik.touched.name && formik.errors.name && <div className={s.errorMessage}>{formik.errors.name}</div>}
                </div>
                <div>
                    <label>Enter your E-mail</label>
                    <input className={s.input} placeholder={'example@test.com'} {...formik.getFieldProps('email')}/>
                    {formik.touched.email && formik.errors.email && <div className={s.errorMessage}>{formik.errors.email}</div>}
                </div>
                <div>
                    <label>Describe your wishes</label>
                    <input className={s.input} placeholder={'Enter your text'} {...formik.getFieldProps('text')}/>
                    {formik.touched.text && formik.errors.text && <div className={s.errorMessage}>{formik.errors.text}</div>}
                </div>
                <button className={`${button.btn} ${s.button}`} type="submit"><span>Отправить</span></button>
            </form>
        </div>
    );
};

export default LogIn;