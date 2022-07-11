import axios from 'axios'

// https://api.themoviedb.org/3/movie/550?api_key=ce7ca7a441765f669c1388967eff6315
const api = axios.create({
    baseURL: 'https://themoviedb.org/3/'
})

export default api