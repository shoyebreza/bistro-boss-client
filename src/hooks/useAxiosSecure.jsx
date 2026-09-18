import axios from 'axios';

export const axiosSecure = () => {
    return axios.create({
        baseURL: 'http://localhost:3000',
        withCredentials: true
    });
};

const useAxiosSecure = () => {
    const instance = axiosSecure();

    instance.interceptors.request.use(
        function(config) {
            const token = localStorage.getItem('access_token');
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        },
        function(error) {
            return Promise.reject(error);
        }
    );

    instance.interceptors.response.use(
        function(response) {
            return response;
        },
        function(error) {
            const status = error.response ? error.response.status : null;
            if (status === 401 || status === 403) {
                // Handle unauthorized or forbidden responses
            }
            return Promise.reject(error);
        }
    );

    return instance;
};

export default useAxiosSecure;