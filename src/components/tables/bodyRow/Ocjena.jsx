import React from 'react'
import { Option } from '../../utils/Button'

const Ocjena = ({ocjena, remove, getDetails}) => {
    return(
      <tr>
      <td className="small_tb_head"> { ocjena.id_ocjena } </td>
      <td
        className="medium_tb_head osobaDet"
        onClick = { getDetails( ocjena.id_osoba ) }
      > 
        { ocjena.ucenik } 
      </td>
      <td className="medium_tb_head"> { ocjena.predmet } </td>
      <td className="medium_tb_head"> { ocjena.datum } </td>
      <td className="medium_tb_head"> { ocjena.ocjena } </td>
      <td className="medium_tb_head"> { ocjena.nastavnik } </td>
      <td className="small_tb_head">
        <Option action= { remove(ocjena.id_ocjena) }> Obriši </Option> 
      </td>
    </tr>
    )
  }

export default Ocjena