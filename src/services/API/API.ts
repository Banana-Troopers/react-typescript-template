import axios, { AxiosInstance } from 'axios';

export class API {
  private transport: AxiosInstance;

  constructor() {
    this.transport = axios.create({
      headers: {
        'Accept': 'application/json',
        'Content-type': 'application/json',
      },
    });
  }
}
