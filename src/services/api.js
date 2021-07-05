import axios from 'axios';

//baseUrl para consumir os dados da api
//https://sujeitoprogramador.com/r-api/?api=filmes

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
});

export default api;