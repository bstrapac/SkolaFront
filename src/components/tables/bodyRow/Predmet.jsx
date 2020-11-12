import React from 'react';
import { Option } from '../../utils/Button'

const Predmet = ( { predmet, remove, update  } ) => {
    return(
      <tr>
      <td>{ predmet.id_predmet }</td>
      <td>{ predmet.naziv_predmet }</td>
      <td>
        <Option action ={ update( predmet.id_predmet ) }> Uredi</Option>
      </td>
      <td>
        <Option action ={ remove( predmet.id_predmet ) }>Obriši</Option>
      </td>   
    </tr>
    )
  }

  export default Predmet;