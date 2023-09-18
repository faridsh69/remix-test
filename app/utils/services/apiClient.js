import axios from "axios";

export default class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
    this.httpClient = axios.create({ baseURL });
  }

  get({ endpoint, params, options }) {
    return this.httpClient.get(endpoint, {
      params,
      ...options,
    });
  }
}
