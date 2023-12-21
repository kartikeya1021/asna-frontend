import axios from "axios";


const api = axios.create({
    baseURL: 'https://aasna-backend.onrender.com',
}); 

api.interceptors.request.use(async config => {
    //exclude login or register api
    if (config.url.includes('/auth')) return config;
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
export default api;