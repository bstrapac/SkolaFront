import React from 'react'
import Ocjena from './bodyRow/Ocjena'

const TableOcjene = ({ ocjene, remove, getDetails }) => {
   return (
    <table>
    <thead>
      <tr>
        <th className="small_tb_head">ID</th>
        <th className="medium_tb_head">Učenik</th>
        <th className="medium_tb_head">Predmet</th>
        <th className="medium_tb_head">Datum</th>
        <th className="medium_tb_head">Ocjena</th>
        <th className="medium_tb_head">Nastavnik</th>
        <th className="small_tb_head">Obriši</th>
      </tr>
    </thead>
    <tbody>
      {
        ocjene.map(
          ocjena => 
          <Ocjena
            key= { ocjena.id_ocjena }
            ocjena = { ocjena }
            remove = { remove } 
            getDetails = { getDetails}
          />               
        )
      }
    </tbody>
  </table>
   )
}
export default TableOcjene