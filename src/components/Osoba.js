import React from 'react';
import axios from 'axios';
import { Field, Formik, Form, ErrorMessage } from 'formik';

const API_URL = 'http://localhost:3030/skola/osobe/osoba';
const axiosinstance = axios.create({
  baseURL: API_URL
});

class Osoba extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      osoba: [],
      id: this.props.match.params.id,
      message: ""
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
  }

  componentDidMount(){
    console.log(this.state.id )
    if(this.state.id === 0){
      return
    }else{
      axiosinstance.get(`/${this.state.id}`).then(
      response =>{
        this.setState({ osoba : response.data })
      })
    }
  }
  onSubmit(values){
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
      axiosinstance.post(`/add`, osoba).then(() => this.props.history.push('/osobe'))
    }

    axiosinstance.put(`/update`, osoba).then( () => this.props.history.push('/osobe'))
  }
  validate(values){
    let errors = {};
    if(!values){
      errors.message = "Unesite podatke."
    }
    return errors;
  }
  render(){
  let { id_osoba, ime, prezime, oib, dob, kontakt, adresa, mail, tip } = this.state.osoba
  let { message } = this.state.message 
    return (
      <div className="form">
        <h1>Osoba</h1>
        <Formik
          enableReinitialize = { true }
          initialValues = { {
            id_osoba, ime, prezime, oib, dob, kontakt, adresa, mail, tip,
            message
          } }
          onSubmit = {this.onSubmit}
          validateOnChange={ false }
          validateOnBlur={ false }
          validate={ this.validate }
        >
          
        {
          (props) => (
            <Form>
              <div className="errorMessage">
                 <ErrorMessage name="message" component="p" className="alert alert-warning" />
              </div>
              <fieldset className="form-group" hidden = {this.state.id <= 0}>
                <label>ID </label>
                <Field className="form-control" type="text" name="id_osoba" disabled />
              </fieldset>
              <fieldset className="form-group">
                <label>Osoba </label>
                <Field className="form-control" type="text" name="ime" />
                <Field className="form-control" type="text" name="prezime" />
              </fieldset>
              <fieldset className="form-group">
                <label>OIB </label>
                <Field className="form-control" type="text" name="oib" />
              </fieldset>
              <fieldset className="form-group">
                <label>Datum rođenja </label>
                <Field className="form-control" type="text" name="dob" />
              </fieldset>
              <fieldset className="form-group">
                <label>Adresa </label>
                <Field className="form-control" type="text" name="adresa" />
              </fieldset>
              <fieldset className="form-group">
                <label>Mail </label>
                <Field className="form-control" type="text" name="mail" />
              </fieldset>
              <fieldset className="form-group">
                <label>Tip </label>
                
                <Field className="form-control" type="text" name="tip" disabled = { this.state.id > 0 } />
              </fieldset>
              <button className="btnAddNew" type="submit">Save</button>
            </Form>
          )
        }
        </Formik>
      </div>
    )
  }
}

export default Osoba;
