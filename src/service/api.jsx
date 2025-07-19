import axios from "axios";

const BASE_URL = "https://686bba5be559eba90873cafa.mockapi.io/content";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getContents = (endpoint) => {
  return api.get(endpoint);
};

export const postContent = (endpoint, data) => {
  return api.post(endpoint, data);
};

export const putContent = async (endpoint, data) => {
  return api.put(endpoint, data);
};

export const deleteContent = async (endpoint) => {
  return api.delete(endpoint);
};

export default api;
