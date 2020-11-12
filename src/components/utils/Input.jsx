import React from 'react'
import { Field } from 'formik';

const Input = ({name, children}) =>{
    return (
      <fieldset className="form-group">
      <label>{ children }</label>
      <Field className="form-control" type="text" name ={name}/>
    </fieldset>
    )
  }

export default Input