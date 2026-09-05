import axios from 'axios';

export const axiosSecure = () => {
    return axios.create({
        baseURL: 'http://localhost:3000',
        withCredentials: true
    });
};

const useAxiosSecure = () => {
    return axiosSecure();
};

export default useAxiosSecure;