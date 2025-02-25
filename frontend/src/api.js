import axios from "axios";

const API_URL = "http://localhost:5000"; // Backend URL

// User Registration API
export const registerUser = async (username, email, password) => {
  return await axios.post(`${API_URL}/api/auth/register`, {
    username,
    email,
    password,
  });
};

// User Login API
export const loginUser = async (email, password) => {
  return await axios.post(`${API_URL}/api/auth/login`, {
    email,
    password,
  });
};

// Fetch User Profile
export const getUserProfile = async (token) => {
  return await axios.get(`${API_URL}/api/user/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
