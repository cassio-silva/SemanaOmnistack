import Axios from 'axios'

const api = Axios.create({
    baseURL: 'http:10.0.0.113:3333',
});

export default api;