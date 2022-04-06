import axios, { AxiosRequestConfig } from 'axios';
import { AxiosInstance } from 'axios';

class HttpClient {
  private $http: AxiosInstance;
  private namespace = '';

  public constructor(namespace: string, urlHost?: string) {
    this.$http = axios.create({
      baseURL: urlHost,
    });

    this.namespace = namespace;

    this.$http.interceptors.request.use((config) => {
      config.headers = {
        ...config.headers,
        'Content-Type': 'application/json',
        Authorization: `Bearer ${'认证 token'}`,
      };
      config.url = this.addNamespaceUrl(config.url);
      return config;
    });

    this.$http.interceptors.response.use(
      (response) => {
        return response.data;
      },
      (error) => {
        const errorCode = error?.response?.data?.code;
        if (errorCode === 401) {
          // 认证失败
        }
        return Promise.reject(error);
      },
    );
  }

  public get<T = any, R = T>(url: string, config?: AxiosRequestConfig) {
    return this.$http.get<T, R>(url, config);
  }

  public post<T = any, R = T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) {
    return this.$http.post<T, R>(url, data, config);
  }

  public delete<T = any, R = T>(url: string, config?: AxiosRequestConfig) {
    return this.$http.delete<T, R>(url, config);
  }

  public put<T = any, R = T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) {
    return this.$http.put<T, R>(url, data, config);
  }

  public patch<T = any, R = T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ) {
    return this.$http.patch<T, R>(url, data, config);
  }

  // namesapce为空则直接按原请求转发
  private addNamespaceUrl(url: string | undefined) {
    if (!url) return '';

    if (this.namespace) {
      return '/'.concat(this.namespace).concat(url);
    }

    return url;
  }
}

export default HttpClient;
