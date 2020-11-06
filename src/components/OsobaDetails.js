import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3030/skola/osobe/osoba';
const axiosinstance = axios.create({
  baseURL: API_URL
});

class OsobaDetails extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      osoba : [],
      id : this.props.match.params.id
    }
    this.updateOsoba = this.updateOsoba.bind(this)
  }

  componentDidMount(){
      axiosinstance.get(`/${this.state.id}`).then(
      response =>{
        this.setState({ osoba : response.data })
      })
  }

  updateOsoba(id){
    this.props.history.push(`/osoba/${id}`)
  }

  render(){
    let { id_osoba, ime, prezime, oib, dob, kontakt, adresa, mail, tip } = this.state.osoba
    return (
      <div className = "osobaDetails">
        <div className= "osobaHead" >
          <h1 className = "osobaName"> { ime } { prezime }</h1>
          <h2 className= "osobaBasic" > { tip }, { oib }  </h2>
        </div>
        <div className = "osobaInfo">
          <button 
            className="btnAddNew"
            onClick = {() => this.updateOsoba(id_osoba)}
          >
            Uredi podatke
          </button>
          <p>Datum rođenja: { dob }</p>
          <p>Adresa: { adresa }</p>
          <p>Kontakt: { kontakt }</p>
          <p>Mail: { mail } </p>
        </div>
        <div className = "osobaStats">
          <p>Datum rođenja: { dob }</p>
          <p>Adresa: { adresa }</p>
          <p>Kontakt: { kontakt }</p>
          <p>Mail: { mail } </p>
        </div>
      </div>
    )
  }
}

export default OsobaDetails;