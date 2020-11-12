import React, {useState, useEffect} from 'react'
import { Formik, Form, ErrorMessage } from 'formik';
import DatePicker from "react-datepicker";

import { getPredmeti } from '../../services/PredmetService';
import { getUcenici, getNastavnici } from '../../services/OsobaService';
import { getMatch } from '../../services/PredmetOsobaService';
import { addOcjena } from '../../services/OcjenaService';

import DropDown from '../utils/DropDown'
import Input from '../utils/Input'
import { Submit } from '../utils/Button'

import "react-datepicker/dist/react-datepicker.css";

const OcjenaForm = () => {
  const [ucenik, setUcenik] = useState(0);
  const [predmet, setPredmet] = useState(0);
  const [nastavnik, setNastavnik] = useState(0);
  const [predmetosoba, setPredmetOsoba] = useState(0);
  const [predmeti, setPredmeti] = useState ([]);
  const [ucenici, setUcenici] = useState([]);
  const [nastavnici, setNastavnici] = useState([]);
  const [message] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  useEffect(()=>{
    getData();
    if(ucenik !== 0 && predmet !== 0){
      match(ucenik, predmet);
    };
  }, [ucenik, predmet]);

  const getData = () => {
    Promise.all([getPredmeti(), getUcenici(), getNastavnici()]).then(
      response =>{
        setPredmeti(response[0].data.map(
          d => ({
            "name" : "predmet",
            "value": d.id_predmet,
            "label" : d.naziv_predmet
          })
        ));
        setUcenici(response[1].data.map(
          d=>({ 
            "name" : "ucenik",
            "value" : d.id_osoba,
            "label" : d.ime + ' '+ d.prezime
          })
        ));
        setNastavnici(response[2].data.map(
          d => ({
            "name" : "nastavnik",
            "value" : d.id_osoba,
            "label" :  d.ime +' '+ d.prezime
          })
        ));
      }).catch (e => console.log(e) )
  };

  const onChange = (value)  => {
    switch(value.name){
      case "ucenik":
        setUcenik(value.value);
        break;
      case "predmet":
        setPredmet(value.value);
        break;
      case "nastavnik":
        setNastavnik(value.value);
        break;
      default:
        return;
    }
  }

  const match = (id_osoba, id_predmet) =>{
    getMatch(id_osoba, id_predmet).then(
      response => {
          setPredmetOsoba(response.data)
        }).catch(e => console.log(e))
  };

  const onSubmit = (values) => {
    let ocjena = {
      id_predmet_osoba : predmetosoba,
      ocjena : values.ocjena,
      datum : startDate.getFullYear() + '-' + ( startDate.getMonth() + 1 )+ '-' +startDate.getDate(),
      id_osoba_dod : nastavnik
    }
    console.log(ocjena);
    addOcjena(ocjena);
  };

  return (
    <div className = "form" >
        <h1>Ocjena</h1>
        <Formik
          enableReinitialize = { true }
          onSubmit = { onSubmit }
          initialValues= {{ ocjena: 0 }}
        >
          <Form>
            <div className="errorMessage">
              <ErrorMessage name="message" component="p" className="alert alert-warning" />
            </div>
            <DropDown data ={ ucenici } action = { onChange }> Učenik </DropDown>
            <DropDown data = {predmeti} action = {onChange}> Predmet </DropDown>
            <Input name="ocjena">Ocjena</Input>
            <fieldset  className="form-group">
              <label>Datum: </label>
              <DatePicker
                dateFormat="yyyy-MM-dd"
                selected={startDate} 
                onChange={date => setStartDate(date)} 
              />
            </fieldset>
            <DropDown data = {nastavnici} action = {onChange}> Nastavnik </DropDown>
            <Submit/>
          </Form>
        </Formik>
      </div>
  )
}

export default OcjenaForm