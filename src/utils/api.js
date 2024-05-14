import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

// Add sendMessage function
export const sendMessage = async (message) => {
  try {
    const response = await api.post('/api/chat', { message });
    return response.data;
  } catch (error) {
    console.error('Error sending message:', error);
    throw error;
  }
};

// Add login function
export const login = async (email, password) => {
  try {
    const response = await api.post('/api/auth/login', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Add signup function
export const signup = async (email, password) => {
  try {
    const response = await api.post('/api/auth/signup', { email, password });
    return response.data;
  } catch (error) {
    console.error('Error signing up:', error);
    throw error;
  }
};

// Add getChatHistory function
export const getChatHistory = async () => {
  try {
    const response = await api.get('/api/chat/history');
    return response.data;
  } catch (error) {
    console.error('Error retrieving chat history:', error);
    throw error;
  }
};