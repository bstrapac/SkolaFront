import React, { useState, useEffect } from 'react';
import { getPredmeti, deletePredmet } from '../services/PredmetService'
import TablePredmeti from './tables/TablePredmeti'
import { Add } from './utils/Button'

const ListPredmeti = (props) => {
  const [predmeti, setPredmeti] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = () =>{
    Promise.all([getPredmeti()]).then(
      response => setPredmeti(response[0].data)
    ).catch(e => console.log(e))
  };

  const remove = (id) => (e) => {
    deletePredmet(id);
  };

  const update = (id) => (e) => {
    props.history.push(`/predmet/${id}`)
  };

  const add = () => (e) =>{
    props.history.push(`/predmet/0`)
  };

  return (
    <div className="container">
      <h3>Svi predmeti</h3>
      <div className="container">
        <TablePredmeti
          predmeti = { predmeti }
          update = { update }
          remove = { remove }
        />
        <Add action= { add() }> Dodaj predmet </Add>
      </div>
    </div>
  )
};

export default ListPredmeti;