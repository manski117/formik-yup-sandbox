//This is the way you do things with the useFormik hook

import React from 'react';
import {useFormik} from 'formik'
import { basicSchema } from '../schemas';

//setup your custom onSubmit needs
const onSubmit = async (values, actions) =>{
  //timeout and disabled button CSS let user know info is being submitted
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
}

//setup your formik component as a functional component
const BasicForm = () => {
  //any formik component must define 3 key props: initial values, validate, and onSubmit handler.
  //handleSubmit just calls onSubmit
  const {values, errors, touched, handleBlur, handleChange, handleSubmit, isSubmitting} = useFormik({
    initialValues: {
      email: '',
      age: '',
      password: '',
      confirmPassword: ''
    },
    validationSchema: basicSchema,
    onSubmit,
  });

  
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <label htmlFor="email">Email</label>
        <input 
          id="email" 
          type="email" 
          placeholder="Enter your email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur} 
          className={errors.email && touched.email ? 'input-error' : ''}
         
        />
        {errors.email && touched.email && <p className='error'>{errors.email}</p>}

        <label htmlFor="age">Age</label>
        <input 
          id="age" 
          type="number" 
          placeholder="Enter your age"
          value={values.age}
          onChange={handleChange}
          onBlur={handleBlur} 
          className={errors.age && touched.age ? 'input-error' : ''}
        />
        {errors.age && touched.age && <p className='error'>{errors.age}</p>}
        <label htmlFor="password">Password</label>
        <input 
          id="password" 
          type="password" 
          placeholder="Enter your password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur} 
          className={errors.password && touched.password ? 'input-error' : ''}
        />
        {errors.password && touched.password && <p className='error'>{errors.password}</p>}
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input 
          id="confirmPassword" 
          type="password" 
          placeholder="Confirm your password"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur} 
          className={errors.confirmPassword && touched.confirmPassword ? 'input-error' : ''}
        />
        {errors.confirmPassword && touched.confirmPassword && <p className='error'>{errors.confirmPassword}</p>}
        <button disabled={isSubmitting} type="submit">Submit</button>
      </form>
    );
  };
  export default BasicForm;