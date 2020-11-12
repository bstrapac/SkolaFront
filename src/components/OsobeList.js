import React, { useState, useEffect } from 'react';

import { getOsobe, deleteOsoba } from '../services/OsobaService';

import TableOsobe from './tables/TableOsobe'
import { Add } from './utils/Button'

const ListOsobe = (props) => {
  const [osobe, setOsobe] = useState([]);

  useEffect(() => {
    getData()
  }, []);

  const getData = () =>{
    getOsobe().then(
      response => {
        setOsobe(response.data);
        console.log(response.data);
      }).catch(e => {
        console.log(e);
      });
  };

  const remove = (id) => (e) => {
    deleteOsoba(id);
  };

  const update = (id) => (e) => {
    props.history.push(`/osoba/${id}`)
  };

  const add = () => (e) => {
    props.history.push(`/osoba/0`)
  }

  const getDetails = (id) => (e) => {
    props.history.push(`/osobaDetails/${id}`);
  }

  return (
    <div>
        <div>
          <h3>Sve osobe</h3>
        </div>
        <div>
         <TableOsobe
          osobe = { osobe }
          remove = { remove } 
          update = { update }
          getDetails = { getDetails }
         />
         <Add action ={ add() }>Nova osoba</Add>
        </div>
      </div>
  )
};

export default ListOsobe;