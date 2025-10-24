//Base da URL https://api.themoviedb.org/3/
//URL da API https://api.themoviedb.org/3/movie/now_playing?api_key=35fda0787e88bf35b2eba0e2cbaddae7&language=pt-BR

import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/"

})

export default api;