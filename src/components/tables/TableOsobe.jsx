import React from 'react'
import Osoba from './bodyRow/Osoba'

const TableOsobe = ({ osobe, remove, update, getDetails }) => {
    return( 
     <table>
     <thead>
       <tr>
         <th className="small_tb_head">ID</th>
         <th className="medium_tb_head">ImePrezime</th>
         <th className="medium_tb_head">Kontakt</th>
         <th className="large_tb_head">Mail</th>
         <th className="small_tb_head" >Uredi</th>
         <th className="small_tb_head" >Obriši</th>
       </tr>
     </thead>
     <tbody>
     {
       osobe.map(
         osoba => 
        <Osoba 
          key= { osoba.id_osoba }
          osoba = {osoba} 
          remove = {remove} 
          update = { update }
          getDetails = {getDetails}
         /> 
       )
     }
     </tbody>
   </table>
   )
   }

export default TableOsobe