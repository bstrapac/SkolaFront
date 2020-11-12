import axios from 'axios'

const API_URL = 'http://localhost:3030/skola/predmeti';
const axiosinstance = axios.create({
  baseURL: API_URL
});

const getPredmeti = () => axiosinstance.get('/');

const getById = (id) => axiosinstance.get(`/predmet/${id}`);

const deletePredmet = (id) => axiosinstance.delete(`/predmet/delete/${id}`);

const updatePredmet = (predmet) => axiosinstance.put(`/predmet/update`, predmet);

const addPredmet = (predmet) => axiosinstance.post(`/predmet/add`, predmet);

export { 
  getPredmeti, 
  getById,
  deletePredmet,
  updatePredmet,
  addPredmet
};
