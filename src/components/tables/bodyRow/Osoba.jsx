import React from 'react'
import { Option } from '../../utils/Button'

const Osoba = ({ osoba, remove, update, getDetails }) => {
    return (
      <tr>
        <td className="small_tb_head">{ osoba.id_osoba }</td>
        <td 
          className="medium_tb_head osobaDet"
          onClick = { getDetails( osoba.id_osoba ) }
        >
            { osoba.ime } { osoba.prezime }
        </td>
        <td className="medium_tb_head" >{ osoba.kontakt }</td>
        <td className="large_tb_head">{ osoba.mail }</td>
        <td className="small_tb_head">
          <Option action={ update( osoba.id_osoba) }>Uredi</Option>
        </td>
        <td className="small_tb_head">
          <Option action={ remove( osoba.id_osoba ) }>Obriši</Option>
        </td>
      </tr>
    )
  };

  export default Osoba