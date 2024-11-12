import axios, {AxiosRequestConfig, AxiosInstance} from 'axios';
import Config from 'react-native-config';

const axiosConfig: AxiosRequestConfig = {
  baseURL: Config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 10000,
};

const httpClient: AxiosInstance = axios.create(axiosConfig);

httpClient.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    return Promise.reject(error);
  },
);

export default httpClient;
