import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3030/skola/ocjene'
const axiosinstance = axios.create({
baseURL: API_URL
});

class OcjeneList extends React.Component{
  constructor(props){
    super(props);
      this.state = {
      ocjene: []
    }
    this.getAll = this.getAll.bind(this)
    this.deleteOcjena = this.deleteOcjena.bind(this)
    this.updateOcjena = this.updateOcjena.bind(this)
  }

  componentDidMount(){
    this.getAll();
  }

  getAll(){
    axiosinstance.get(`/`).then(
      response => {
        this.setState({ ocjene: response.data })
      }
    )
  }

  updateOcjena(id){
    this.props.history.push(`/ocjena/${id}`)
  }

  deleteOcjena(id){
    axiosinstance.delete(`ocjena/delete/${id}`).then(
      this.getAll()
      )
  }

  getDetails(id){
    this.props.history.push(`/osobaDetails/${id}`);
  }

  render(){
    let count = 0;
    return (
      <div>
        <h3>Sve ocjene</h3>
        <div>
          <table>
            <thead>
              <tr>
                <th className="small_tb_head">ID</th>
                <th className="medium_tb_head">Učenik</th>
                <th className="medium_tb_head">Predmet</th>
                <th className="medium_tb_head">Datum</th>
                <th className="medium_tb_head">Ocjena</th>
                <th className="medium_tb_head">Nastavnik</th>
                <th className="small_tb_head">Uredi</th>
                <th className="small_tb_head">Obriši</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.ocjene.map(
                  ocjena => 
                  <tr key= { count++ }>
                    <td> { ocjena.id_predmet_osoba } </td>
                    <td
                      /*onClick = { () => this.getDetails( osoba.id_osoba ) }*/
                      className = "osobaDet"
                    > 
                      { ocjena.ucenik } 
                    </td>
                    <td> { ocjena.predmet } </td>
                    <td> { ocjena.datum } </td>
                    <td> { ocjena.ocjena } </td>
                    <td> { ocjena.nastavnik } </td>
                    <td>
                      <button 
                        onClick= { () => this.updateOcjena(ocjena.id_predmet_osoba) }
                        className = "btnOption"
                      >
                        Uredi
                      </button>
                    </td>
                    <td>
                      <button 
                        onClick = { () => this.deleteOcjena(ocjena.id_predmet_osoba) }
                      className = "btnOption"
                      >
                        Obriši
                      </button>  
                    </td>
                  </tr>
                )
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default OcjeneList;