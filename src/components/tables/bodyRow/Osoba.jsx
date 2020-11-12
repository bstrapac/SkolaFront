import React from 'react'
import { Option } from '../../utils/Button'

const Osoba = ({ osoba, remove, update, getDetails }) => {
    return (
      <tr>
        <td>{ osoba.id_osoba }</td>
        <td 
          onClick = { getDetails( osoba.id_osoba ) }
          className = "osobaDet" 
        >
            { osoba.ime } { osoba.prezime }
        </td>
        <td>{ osoba.kontakt }</td>
        <td>{ osoba.mail }</td>
        <td>
          <Option action={ update( osoba.id_osoba) }>Uredi</Option>
        </td>
        <td>
          <Option action={ remove( osoba.id_osoba ) }>Obriši</Option>
        </td>
      </tr>
    )
  };

  export default Osoba