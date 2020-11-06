import React from 'react'
import axios from 'axios'
import { Field, Formik, Form, ErrorMessage } from 'formik';
import Select from 'react-select';

const API_URL = 'http://localhost:3030/skola/';
const axiosinstance = axios.create({
  baseURL: API_URL
});

class OcjenaForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      ocjena: [],
      predmeti: [],
      ucenici: [],
      nastavnici: [],
      predmetosoba : [],
      message : "",
      id_osoba : 0,
      id_osoba_dod : 0,
      id_predmet : 0
    }
    this.getData =  this.getData.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  componentDidMount(){
    this.getData()
  }

  getData(){
    axiosinstance.get(`predmeti/`).then(
      response => {
        this.setState ({ predmeti : response.data })
      }
    )
    axiosinstance.get(`osobe/ucenici`).then(
      response => {
        this.setState ({ ucenici : response.data })
      }
    )
    axiosinstance.get(`osobe/nastavnici`).then(
      response => {
        this.setState ({ nastavnici : response.data })
      }
    )
    axiosinstance.get(`predmetosoba/`).then(
      response => {
        this.setState ({ predmetosoba : response.data })
      }
    )
  }

  onChange(e){
    let stateObject = { [e.name] : e.value}
    this.setState( stateObject )
  }

  onSubmit(values){
    console.log(this.state.predmetosoba)
    if(values.id_osoba in this.state.predmetosoba && values.id_predmet in this.state.predmetosoba ){
      console.log(values.id_osoba + " is in list predmetosoba")
      console.log(this.state.predmetosoba.id_predmet_osoba)
    }
    console.log(values)
  }

  render(){
    let optionUcenici = this.state.ucenici.map(
      ucenik =>({
        "name" : "id_osoba",
        "value" : ucenik.id_osoba,
        "label" : ucenik.ime + ' ' + ucenik.prezime 
      })
    )
    let optionPredmeti = this.state.predmeti.map(
      predmet => ({
        "name" : "id_predmet",
        "value" : predmet.id_predmet,
        "label" : predmet.naziv_predmet
      })
    )
    let optionNastavnici = this.state.nastavnici.map(
      nastavnik => ({
        "name" : "id_osoba_dod",
        "value" : nastavnik.id_osoba,
        "label" : nastavnik.ime + ' ' + nastavnik.prezime 
      })
    )
    let { id_osoba, id_predmet, id_osoba_dod } = this.state
    return(
      <div className = "form" >
        <h1>Ocjena</h1>
        <Formik
          enableReinitialize = { true }
          onSubmit = { this.onSubmit }
          initialValues= {{
              id_osoba,
              id_predmet,
              ocjena : 0,
              id_osoba_dod,
            }}
        >
          <Form>
            <div className="errorMessage">
              <ErrorMessage name="message" component="p" className="alert alert-warning" />
            </div>
            <fieldset className="form-group">
              <label>Učenik</label>
              <Select
                name = "id_osoba"
                isClearable = { true }
                isSearchable = { true }
                options={ optionUcenici } 
                value = { optionUcenici.value }
                onChange = {this.onChange }
              />
            </fieldset>
            <fieldset className="form-group">
              <label>Predmet</label>
              <Select
                name = "id_predmet"
                isClearable = { true }
                isSearchable = { true }
                options = { optionPredmeti } 
                value = { optionPredmeti.value }
                onChange = { this.onChange }
              />
            </fieldset>
            <fieldset className="form-group">
                <label>Ocjena</label>
                <Field className="form-control" type="text" name ="ocjena"/>
              </fieldset>
            <fieldset className="form-group">
              <label>Nastavnik</label>
              <Select
                name = "id_osoba_dod"
                isClearable = { true }
                isSearchable = { true } 
                options = { optionNastavnici } 
                value = { optionNastavnici.value }
                onChange = { this.onChange  }
              /> 
            </fieldset>
            <button className="btnAddNew" type="submit">Spremi</button>
          </Form>
        </Formik>
      </div>
    )
  }
}

export default OcjenaForm