import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5000/api', // replace with your backend URL
});

export const loginUser = async (email, password) => {
  return await API.post('/login', { email, password });
};

export const registerUser = async (username, email, password) => {
  return await API.post('/register', { username, email, password });
};

export const getRecipes = async () => {
  return await API.get('/recipes');
};

export const getUserProfile = async () => {
  return await API.get('/user-profile');
};

export const addFavorite = async (recipeId) => {
  return await API.post('/favorite', { recipeId });
};

export const removeFavorite = async (recipeId) => {
  return await API.delete(`/favorite/${recipeId}`);
};
