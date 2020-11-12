import React,{useState, useEffect} from 'react';
import { getByID } from '../services/OsobaService'
import { getByIDUcenik } from '../services/PredmetOsobaService';

const OsobaDetails = (props) => {
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
  const [predmetosoba, setPredmetOsoba] = useState([]);

  useEffect(()=>{
    getData(props.match.params.id)
  }, [props.match.params.id]);

  const getData = (id) => {
    Promise.all([getByID(id), getByIDUcenik(id)]).then(
      response => 
       { 
        setOsoba(response[0].data)
        setPredmetOsoba(response[1].data)
      }
    ).catch( e => console.log(e))
  };

  const update = (id) => (e) => {
    props.history.push(`/osoba/${id}`);
  }

  let { id_osoba, ime, prezime, oib, dob, kontakt, adresa, mail, tip } = osoba
  return (
    <div className = "osobaDetails">
        <div className= "osobaHead" >
          <h1 className = "osobaName"> { ime } { prezime }</h1>
          <h2 className= "osobaBasic" > { tip }, { oib }  </h2>
        </div>
        <div className = "osobaInfo">
          <button 
            className="btnAddNew"
            onClick = { update(id_osoba) }
          >
            Uredi podatke
          </button>
          <p>Datum rođenja: { dob }</p>
          <p>Adresa: { adresa }</p>
          <p>Kontakt: { kontakt }</p>
          <p>Mail: { mail } </p>
        </div>
        <div className = "osobaStats">
          <div>
            <h3>Upisani predmeti: </h3> 
            <button className="btnAddNew">Dodaj novi</button>
          </div>
        {
          predmetosoba.map(
            po => 
              <p key = { po.id_predmet }> { po.predmet } </p>
          )
        }
        </div>
      </div>
  )

}

export default OsobaDetails;