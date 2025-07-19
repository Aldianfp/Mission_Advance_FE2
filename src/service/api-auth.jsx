import axios from "axios";

const BASE_URL = "https://686bba5be559eba90873cafa.mockapi.io";

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = (endpoint, data) => {
  return api.post(endpoint, data);
};

export const loginUser = async ({ email, password }) => {
  const res = await api.get("/user", {
    params: { email, password },
  });
  const user = res.data[0];

  if (user) {
    return { user };
  } else {
    throw new Error("Login gagal");
  }
};

export default api;
