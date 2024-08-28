import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const token = localStorage.getItem('token');

const axiosConfig: AxiosRequestConfig = {
	baseURL: '',
};

const instance = axios.create(axiosConfig);

const authInstance = axios.create(axiosConfig);

authInstance.interceptors.request.use(
	(config) => {
		if (!token) {
			throw new Error('');
		}

		config.headers.authorization = `Bearer ${token}`;

		return config;
	},
	(error) => Promise.reject(error),
);

authInstance.interceptors.response.use(
	(response) => {
		return response?.data;
	},
	(error) => {
		return Promise.reject(error);
	},
);

export {instance, authInstance};
