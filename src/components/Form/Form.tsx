import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './style.css'
import { Feedback } from '../FeedBack/FeedBack';
import { IValueProps } from './types';

export const FormSubmit = ({setValue}: IValueProps) => {
  
  
  
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
        email: Yup.string().email('Valid email required')
        .matches(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/, 'Invalid email format')
        .required('e-mail required'),
      }),
    onSubmit: values => {
      setValue('Thanks for subscribing')
      
    },
  });
  
  const inputClass = formik.touched.email && formik.errors.email ? 'input-error' : '';
  const textClass = formik.touched.email && formik.errors.email ? 'text-error' : '';


  

  return (
  
    <form onSubmit={formik.handleSubmit} className='form form-center'>
      <label htmlFor="email" className='email'>Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className={`input-center ${inputClass} ${textClass}`}
        placeholder='E-mail'
        
      />
      {formik.touched.email && formik.errors.email ? (
         <div className='error'>{formik.errors.email}</div>
       ) : null}
       <button type="submit" className='btn'>Subscribe to monthly newsletter</button>
    </form>
  
  );
};




