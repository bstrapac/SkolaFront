import axios from 'axios';

const API_URL = 'http://localhost:3030/skola/ocjene'
  const axiosinstance = axios.create({
  baseURL: API_URL
});

const getOcjene = () => axiosinstance.get(`/`);

const getByID = (id) => axiosinstance.get(`/ocjena/${id}`);

const getByIdUcenik = (id) => axiosinstance.get(`/osoba/${id}`);

const getByIdPredmet = (id) => axiosinstance.get(`/predmeti/${id}`);

const addOcjena = (ocjena) =>  axiosinstance.post(`/ocjena/add`, ocjena);

const updateOcjena = (ocjena) => axiosinstance.put(`/ocjena/update`, ocjena);

const deleteOcjena = (id) => axiosinstance.delete(`/ocjena/delete/${id}`);

export {
  getOcjene,
  getByID,
  getByIdUcenik, 
  getByIdPredmet,
  addOcjena,
  updateOcjena, 
  deleteOcjena
}