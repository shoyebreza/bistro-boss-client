import axios from 'axios';
import { useNavigate } from 'react-router';
import useAuth from './useAuth';

export const axiosSecure = () => {
    return axios.create({
        baseURL: 'http://localhost:3000',
        withCredentials: true
    });
};

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();
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
        async function (error) {
            const status = error.response ? error.response.status : null;
            if (status === 401 || status === 403) {
                // Handle unauthorized or forbidden responses
                await logOut();
                localStorage.removeItem('access_token');
                navigate('/login');
            }
            return Promise.reject(error);
        }
    );

    return instance;
};

export default useAxiosSecure;