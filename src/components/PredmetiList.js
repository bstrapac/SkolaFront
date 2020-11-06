import React from 'react';
import axios from 'axios';


const API_URL = 'http://localhost:3030/skola/predmeti';
const axiosinstance = axios.create({
  baseURL: API_URL
});
class ListPredmeti extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      predmeti: []
    }
    this.refreshList = this.refreshList.bind(this)
    this.deletePredmet = this.deletePredmet.bind(this)
    this.updatePredmet = this.updatePredmet.bind(this)
    this.addPredmet = this.addPredmet.bind(this)
  }

  componentDidMount() {
    this.refreshList()
  }

  refreshList() {
    axiosinstance.get(`/`).then(
      response => {
      console.log(response);
      this.setState({ predmeti: response.data })
    })
  }

  deletePredmet(id){
    axiosinstance.delete(`/predmet/delete/${id}`).then(
      this.refreshList()
    )
  }

  updatePredmet(id){
    this.props.history.push(`/predmet/${id}`)
  }

  addPredmet(){
    this.props.history.push(`/predmet/0`)
  }
  render() {
      return (
        <div className="container">
          <h3>Svi predmeti</h3>
          <div className="container">
            <table className="table">
              <thead>
                <tr>
                  <th className="small_tb_head">Id</th>
                  <th className="large_tb_head">Naziv</th>
                  <th className="small_tb_head">Obriši</th>
                  <th className="small_tb_head">Uredi</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.predmeti.map(
                    predmet =>
                      <tr key={ predmet.id_predmet }>
                        <td>{ predmet.id_predmet }</td>
                        <td>{ predmet.naziv_predmet }</td>
                        <td>
                          <button 
                            onClick={() => this.deletePredmet( predmet.id_predmet )}
                            className = "btnOption"
                          >
                            Delete
                          </button>
                        </td>   
                        <td>
                          <button 
                            onClick={() => this.updatePredmet( predmet.id_predmet )}
                            className = "btnOption"
                          > 
                            Update 
                          </button>
                        </td>
                      </tr>
                  )
                }
              </tbody>
            </table>
            <button 
              onClick={() => this.addPredmet()} 
              className= "btnAddNew"
            > 
              Novi predmet 
            </button>
          </div>
        </div>
      )
    }
}

export default ListPredmeti;