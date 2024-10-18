import axios from "axios";

// Base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=5b2d39e0954c645642b9a9488a57f14f&language=pt-br

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})

export default api
