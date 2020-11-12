import axios from 'axios'

const API_URL = 'http://localhost:3030/skola/osobe';
const axiosinstance = axios.create({
  baseURL : API_URL
});

const getOsobe = () => axiosinstance.get(`/`);

const getUcenici = () => axiosinstance.get(`/ucenici`);

const getNastavnici = () => axiosinstance.get(`/nastavnici`);

const getByID = (id) => axiosinstance.get(`/osoba/${id}`);

const deleteOsoba = (id) => axiosinstance.delete(`/osoba/delete/${id}`);

const updateOsoba = (osoba) => axiosinstance.put(`/osoba/update`, osoba);

const addOsoba = (osoba) => axiosinstance.post(`/osoba/add`, osoba);

export {
    getOsobe,
    getUcenici,
    getNastavnici,
    getByID,
    deleteOsoba,
    updateOsoba,
    addOsoba
}