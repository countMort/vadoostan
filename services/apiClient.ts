// lib/axios.js
import { ApiError, ApiResponse, SwaggerResponse } from '@/types/services.type';
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';
import { getCookie } from 'cookies-next';

const baseConfig: AxiosRequestConfig = {
  baseURL: '/', // replace with your base API URL
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'sag',
  },
};
export const axiosInstance: AxiosInstance = axios.create(baseConfig);
axiosInstance.interceptors.response.use(
  (async (
    response: AxiosResponse<ApiResponse>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): Promise<SwaggerResponse<any>> => {
    return response;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }) as any,
  (error: AxiosError<ApiError>) => {
    if (error.response?.data.message) {
      const data = error.response?.data;
      return Promise.reject(data);
    } else {
      const error: ApiError = {
        errorCode: 0,
        isSuccessful: false,
        message: 'خطایی رخ داد',
        traceId: '0',
      };
      return Promise.reject(error);
    }
  }
);

axiosInstance.interceptors.request.use(
  async (requestConfig) => {
    const token = getCookie('token') as string;
    requestConfig.headers.Authorization = token;
    return requestConfig;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);
