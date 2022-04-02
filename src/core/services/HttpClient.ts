import axios, { AxiosInstance, AxiosResponse } from "axios";

declare module "axios" {
  interface AxiosResponse<T = any> extends Promise<T> {}
}

export abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor() {
    this.instance = axios.create({
      baseURL: "https://coding-challenge-api.aerolab.co/",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjQ2YzYwY2ExNDE5YzAwMjFmMmE3ZDMiLCJpYXQiOjE2NDg4MDUzODh9.hPTzYsH2RchKBeime97QwOESbEoJtqijCD5vDO0hRpg`,
      },
    });

    this._initializeResponseInterceptor();
  }

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError
    );
  };

  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => Promise.reject(error);
}
