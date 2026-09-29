import axios from 'axios';
import { useMemo } from 'react';
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

    const instance = useMemo(() => {
        const secureInstance = axiosSecure();

        secureInstance.interceptors.request.use(
            function(config) {
                const token = localStorage.getItem('access-token');
                if (token) {
                    config.headers.authorization = `Bearer ${token}`;
                }
                return config;
            },
            function(error) {
                return Promise.reject(error);
            }
        );

        secureInstance.interceptors.response.use(
            function(response) {
                return response;
            },
            async function (error) {
                const status = error.response ? error.response.status : null;
                if (status === 401 || status === 403) {
                    await logOut();
                    localStorage.removeItem('access-token');
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );

        return secureInstance;
    }, [logOut, navigate]);

    return instance;
};

export default useAxiosSecure;