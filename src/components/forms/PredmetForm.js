import React, { useState, useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';

import { getById, addPredmet, updatePredmet } from '../../services/PredmetService'

import Input from '../utils/Input'
import { Submit } from '../utils/Button'

const PredmetForm = ( props ) => {
  const initialPredmet = {
    id_predmet : '',
    naziv_predmet : ''
  }
  const [ predmet, setPredmet ] = useState(initialPredmet);
  const [ message ] = useState("");

  useEffect(()=>{
    getData( props.match.params.id );
  }, [ props.match.params.id ]);

  const getData = ( id ) => {
    if(id === "0"){
      //do nothing
    } else {
      getById(id).then(
        response => {
          setPredmet(response.data);
        });
    }
  };

  const onSubmit = (values) => {
    let predmet ={
      id_predmet: values.id_predmet || 0,
      naziv_predmet: values.naziv_predmet
    }
    if(predmet.id_predmet === 0){
      addPredmet(predmet).then(() =>{
        props.history.push('/');
      })
    } else {
      updatePredmet(predmet).then(() => {
        props.history.push('/')
      })
    }
  };

  const validate = (values) => {
    let errors = {};
    if(!values.naziv_predmet){
      errors.message = "Unesite naziv predmeta."
    }
    return errors;
  };

  let { id_predmet, naziv_predmet } = predmet;
  return (
      <div className="form">
        <h1>Predmet</h1>
        <Formik 
            enableReinitialize = { true }
            initialValues = { {
              id_predmet, 
              naziv_predmet,
              message
            } }
            onSubmit = { onSubmit }
            validateOnChange={ false }
            validateOnBlur={ false }
            validate={ validate }
          >
          {
          (props) => (
            <Form>
              <div className="errorMessage">
                <ErrorMessage name="message" component="p" className="alert alert-warning" />
              </div>
              <Input name = "id_predmet" >ID</Input>
              <Input name = "naziv_predmet" >Naziv</Input>
              <Submit/>
            </Form>
          )
        }
        </Formik>
      </div>
  )
};

export default PredmetForm;