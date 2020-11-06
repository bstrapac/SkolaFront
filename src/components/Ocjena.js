import React from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3030/skola/ocjene/ocjena'
const axiosinstance = axios.create({
  baseURL: API_URL
});
class Ocjena extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      ocjena: [],
      id: this.props.match.params.id,
      message: ""
    }
  }

  componentDidMount(){
    this.getAll();
  }

  getAll(){
    axiosinstance.get(`/${this.state.id}`).then(
      response => {
        console.log(response)
        this.setState({ocjena: response.data})
    })
  }
  render(){
    let {ucenik, predmet, ocjena, datum, nastavnik } = this.state.ocjena
    return(
      <div>
        <h3>Ocjena { predmet }, { ucenik }</h3>
        <p>Ocjena: { ocjena } </p>
        <p>Datum : { datum }</p>
        <p>Ocjenu dodjelio: {nastavnik}</p>
        <button>Spremi</button>
      </div>
    )
  }
}

export default Ocjena;