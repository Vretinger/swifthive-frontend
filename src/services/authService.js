import axios from 'axios';

const API_URL = 'https://swifthive-api-bad383c6f380.herokuapp.com//auth/';

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_URL}login`, { email, password });
    return response.data;
  } catch (error) {
    console.error('Error during login', error);
    throw error;
  }
};

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}signup`, userData);
    return response.data;
  } catch (error) {
    console.error('Error during signup', error);
    throw error;
  }
};
