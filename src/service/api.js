import axios from "axios";


const api = axios.create({
    baseURL: 'http://192.168.41.218:3000',
}); 

export default api;