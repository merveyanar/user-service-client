import axios from "axios";

const API_URL = "http://localhost:8081/auth"; // Spring Boot user-service URL

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data; // { token: "..." }
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data; // { token: "..." }
};
