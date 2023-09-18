import ApiClient from "./apiClient";

const { CARS_API_ENDPOINT } = process.env;

export const CARS_API = new ApiClient(CARS_API_ENDPOINT);
