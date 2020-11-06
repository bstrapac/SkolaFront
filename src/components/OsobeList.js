import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3030/skola/osobe';
const axiosinstance = axios.create({
  baseURL : API_URL
});
class OsobeList extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      osobe : []
    }
    this.getAll = this.getAll.bind(this)
    this.updateOsoba = this.updateOsoba.bind(this)
    this.addOsoba = this.addOsoba.bind(this)
  }

  componentDidMount(){
    this.getAll()
  }

  getAll(){
    axiosinstance.get(`/`).then(
      response =>{
        this.setState({ osobe : response.data })
      }
    )
  }

  updateOsoba(id){
    this.props.history.push(`/osoba/${id}`)
  }
  
  addOsoba(){
    this.props.history.push('/osoba/0')
  }
  
  getDetails(id){
    this.props.history.push(`/osobaDetails/${id}`);
  }

  render(){
    return(
      <div>
        <div>
          <h3>Sve osobe</h3>
        </div>
        <div>
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
              this.state.osobe.map(
                osoba => 
                <tr key= { osoba.id_osoba }>
                  <td>{ osoba.id_osoba }</td>
                  <td 
                    onClick = { () => this.getDetails( osoba.id_osoba ) }
                    className = "osobaDet" 
                  >
                      { osoba.ime } { osoba.prezime }
                  </td>
                  <td>{ osoba.kontakt }</td>
                  <td>{ osoba.mail }</td>
                  <td>
                    <button 
                      onClick = { ()=> this.updateOsoba( osoba.id_osoba) } 
                      className = "btnOption"
                    >
                      Uredi
                    </button>
                  </td>
                  <td>
                    <button 
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
          <button
            onClick = { () => this.addOsoba() }
            className= "btnAddNew"
          >
            Nova osoba
          </button>
        </div>
      </div>
    )
  }

}

export default OsobeList;