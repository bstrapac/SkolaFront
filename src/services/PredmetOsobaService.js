import axios from 'axios'

const API_URL = 'http://localhost:3030/skola/predmetosoba';
const axiosinstance = axios.create({
  baseURL : API_URL
});

const getAll = () => axiosinstance.get(`/`);

const getByIDUcenik = (id) => axiosinstance.get(`/osoba/${id}`);

const getByIDPredmet = (id) => axiosinstance.get(`/predmet/${id}`);

const getByID = (id) => axiosinstance.get(`/${id}`);

const getMatch = (id_osoba, id_predmet) => axiosinstance.get(`/${id_osoba}/${id_predmet}`);

export {
    getAll,
    getByIDUcenik,
    getByIDPredmet,
    getByID,
    getMatch
}