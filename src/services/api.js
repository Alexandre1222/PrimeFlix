//URL DA APLICAÇÃO: https://api.themoviedb.org/3/movie/now_playing?api_key=c9e68b81904ac2ef48d82dbdbe634ccf&language=pt-BR  
//URL DA API: https://api.themoviedb.org/3/ 

import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;