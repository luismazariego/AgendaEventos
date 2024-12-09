import axios from 'axios';

const api = 
    axios.create({
        baseURL: 'http://localhost:5265/api'
    });

api.interceptors.request.use(
    config => {
        const user = JSON.parse(localStorage.getItem('usuario'));
        if (user) {
            const { token } = user;
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => Promise.reject(error)
);

export default api;