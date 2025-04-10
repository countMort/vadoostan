// lib/axios.js
import axios, {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios';

// const apiClient = axios.create({
//   baseURL: '/', // replace with your base API URL
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export { apiClient };

const baseConfig: AxiosRequestConfig = {
  baseURL: '/', // replace with your base API URL
  headers: {
    'Content-Type': 'application/json',
  },
};
let axiosInstance: AxiosInstance;
export type SwaggerResponse<R> = R;

export interface ApiError {
  isSuccessful: boolean;
  message: string;
  traceId: string;
  errorCode: number;
}
export function getAxiosInstance(): AxiosInstance {
  if (!axiosInstance) {
    axiosInstance = axios.create(baseConfig);
    // Response interceptor
    axiosInstance.interceptors.response.use(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (async (response: AxiosResponse): Promise<SwaggerResponse<any>> => {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        /**
         * Example on response manipulation
         *
         * @example
         *   const swaggerResponse: SwaggerResponse = {
         *     ...response,
         *   };
         *   return swaggerResponse;
         */
        return response;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any,
      (error: AxiosError<ApiError>) => {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error

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
          console.log({ error });
          return Promise.reject(error);
        }
      }
    );
  }

  // ًًRequest interceptor
  axiosInstance.interceptors.request.use(
    async (requestConfig) => {
      return requestConfig;
    },
    (error) => {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  return axiosInstance;
}
