import React from 'react';
import axios from 'axios';
import { Field, Formik, Form, ErrorMessage } from 'formik';

const API_URL = 'http://localhost:3030/skola/predmeti/predmet';
const axiosinstance = axios.create({
    baseURL: API_URL
});

class Predmet extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      predmet:  [],
      id: this.props.match.params.id,
      message: ""
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.validate = this.validate.bind(this)
  }
  componentDidMount() {
    console.log(this.state.id)
    if (this.state.id === 0) {
      return
    }else{
      axiosinstance.get(`/${this.state.id}`).then(
      response => {
        this.setState({ predmet: response.data })
      })
    }
  }

  onSubmit(values){
    let predmet = {
      id_predmet: values.id_predmet || 0,
      naziv_predmet: values.naziv_predmet
    }
    console.log(predmet.id_predmet + ' ' + predmet.naziv_predmet );
    console.log(this.state.id)
    if (predmet.id_predmet === 0) {
      axiosinstance.post(`/add`, predmet).then(() => this.props.history.push('/'))
    } else {
      axiosinstance.put(`/update`, predmet).then(() => this.props.history.push('/'))
    }
  }

  validate(values){
    let errors = {};
    if(!values.naziv_predmet){
      errors.message = "Unesite naziv predmeta."
      console.log(errors.message);
    }
    return errors;
  }


  render(){ 
    let { id_predmet, naziv_predmet } = this.state.predmet
    let { message } = this.state.message
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
            onSubmit = { this.onSubmit }
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
              <fieldset className="form-group">
                <label>Id</label>
                <Field className="form-control" type="text" name="id_predmet" disabled />
              </fieldset>
              <fieldset className="form-group">
                <label>Naziv</label>
                <Field className="form-control" type="text" name="naziv_predmet" />
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

export default Predmet;