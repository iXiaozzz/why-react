import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { BASE_URL, TIMEOUT } from "./config";
import { useHistory } from "react-router-dom";

export interface iResponse extends AxiosResponse {
  code?: number | string;
  msg?: string;
  data: any;
}

const service: AxiosInstance = axios.create({
  withCredentials: true,
  baseURL: BASE_URL,
  timeout: TIMEOUT,
});

// 请求前拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = window.localStorage.getItem("token") || "";
    config.data = Object.assign({}, config.data, {
      token: token,
    });

    config.headers = {
      "Content-Type": "application/json; charset=utf-8",
      Authorization: token,
    };

    return config;
  },
  (error) => Promise.reject(error)
);

// 请求返回拦截
service.interceptors.response.use(
  (response: iResponse) => {
    const { code, data } = response;
    switch (code) {
      case 200:
        return data;
      case 401:
        // 没有权限
        break;
      case 403:
        // token过期
        break;
      default:
        return response;
    }
  },
  (error) => Promise.reject(error)
);

interface iConfig {
  method: any;
  url: string;
  params?: any;
  [key: string]: any;
}

export default {
  request(config: iConfig) {
    const { method, url, params = {}, ...rest } = config;
    return service.request({
      method: method,
      url: url,
      params: params,
      ...rest,
    });
  },
  get(url: string, params: any) {
    return service.get(url, params);
  },
  post(url: string, params: any) {
    return service.post(url, params);
  },
  put(url: string, params: any) {
    return service.put(url, params);
  },
  delete(url: string, params: any) {
    return service.delete(url, params);
  },
  patch(url: string, params: any) {
    return service.patch(url, params);
  },
};
