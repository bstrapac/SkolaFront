import React, { useState, useEffect } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';

import { getByID, addOsoba, updateOsoba } from '../../services/OsobaService'

import Input from '../utils/Input'
import { Submit } from '../utils/Button'

const OsobaForm = (props) => {
  const initialOsoba = {
      id_osoba : 0,
      ime : "",
      prezime : "",
      oib : "",
      dob : "",
      kontakt : "",
      adresa : "",
      mail : "",
      id_tip_osoba : null
  }
  
  const [osoba, setOsoba] = useState(initialOsoba);
  const [message] = useState("");

  useEffect(() => {
    getData(props.match.params.id)
  }, [props.match.params.id]);
  
  const getData = (id) => {
    if (id === "0"){
      console.log(id)
    } else {
      getByID(id).then(
        response => {
          setOsoba(response.data);
        })
    }
  };

  const onSubmit = ( values ) => {
    console.log(values);
    let osoba = {
      id_osoba : values.id_osoba || 0,
      ime : values.ime,
      prezime : values.prezime,
      oib : values.oib,
      dob : values.dob,
      kontakt : values.kontakt,
      adresa : values.adresa,
      mail : values.mail,
      id_tip_osoba : 2
    }
    if(osoba.id_osoba === 0){
      addOsoba(osoba).then( () =>{
        props.history.push('/');
      })
    } else {
      updateOsoba(osoba).then(()=>{
        props.history.push('/');
      })
    }
  };

  const validate = (values) => {
    let errors = {};
    if(!values){
      errors.message = "Unesite podatke";
    }
    return errors;
  };

  let { id_osoba, ime, prezime, oib, dob, kontakt, adresa, mail, tip } = osoba;
  return  (
    <div className="form">
    <h1>Osoba</h1>
    <Formik
      enableReinitialize = { true }
      initialValues = { {
        id_osoba, ime, prezime, oib, dob, kontakt, adresa, mail, tip,
        message
      } }
      onSubmit = {onSubmit}
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
          <Input name = "id_osoba">ID</Input>
          <Input name = "prezime">Prezime</Input>
          <Input name = "ime">Ime</Input>
          <Input name = "oib"> OIB </Input>
          <Input name = "dob" >Datum rođenja</Input>
          <Input name = "adresa" >Adresa</Input>
          <Input name = "mail">Mail</Input>
          <Input name = "tip">Tip</Input>
          <Submit/>
        </Form>
      )
    }
    </Formik>
  </div>
  )
};

export default OsobaForm;
