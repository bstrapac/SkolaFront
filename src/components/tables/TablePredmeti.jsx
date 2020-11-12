import React from 'react'
import Predmet from './bodyRow/Predmet'

const TablePredmeti = ({predmeti, remove, update}) => {
    return (
      <table>
      <thead>
        <tr>
          <th className="small_tb_head">Id</th>
          <th className="large_tb_head">Naziv</th>
          <th className="small_tb_head">Uredi</th>
          <th className="small_tb_head">Obriši</th>
        </tr>
      </thead>
      <tbody>
        {
          predmeti.map(
            predmet =>
            <Predmet 
              key={ predmet.id_predmet }
              predmet ={ predmet } 
              remove = { remove } 
              update = { update } 
            />
          )
        }
      </tbody>
    </table>
    )
}

export default TablePredmeti