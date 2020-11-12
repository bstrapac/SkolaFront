import React from 'react';
import { Option } from '../../utils/Button'

const Predmet = ( { predmet, remove, update  } ) => {
    return(
      <tr>
      <td className="small_tb_head">{ predmet.id_predmet }</td>
      <td className="large_tb_head">{ predmet.naziv_predmet }</td>
      <td className="small_tb_head">
        <Option action ={ update( predmet.id_predmet ) }> Uredi</Option>
      </td>
      <td className="small_tb_head">
        <Option action ={ remove( predmet.id_predmet ) }>Obriši</Option>
      </td>   
    </tr>
    )
  }

  export default Predmet;