import React, { useState, useEffect } from 'react';
import { getOcjene, deleteOcjena } from '../services/OcjenaService';
import TableOcjene from './tables/TableOcjene'
import { Add } from './utils/Button'

const OcjeneList = (props) => {
  const [ocjene, setOcjene] = useState([]);

  useEffect(() =>{
    getData()
  }, []);

  const getData = () => {
    getOcjene().then(
      response =>{
        setOcjene(response.data);
      }).catch(e => {
        console.log(e);
      });
  };

  const remove = (id) => (e) => {
    deleteOcjena(id);
  };

  const add = () => (e) => {
    props.history.push(`/ocjenaform`);
  }

  const getDetails = (id) => (e) => {
    props.history.push(`/osobaDetails/${id}`);
  }

  return (
    <div>
    <h3>Sve ocjene</h3>
    <Add action={ add() } >Dodaj novi</Add>
    <div>
      <TableOcjene 
        ocjene = {ocjene}
        remove = { remove }
        getDetails = { getDetails }
      />
    </div>
  </div>
  )
}
export default OcjeneList;