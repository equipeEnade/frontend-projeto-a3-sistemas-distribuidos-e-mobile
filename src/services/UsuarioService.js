import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/usuarios';

const UsuarioService = {
  get: async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  post: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  put: async (data) => {
    try {
      const response = await axios.put(`${API_BASE_URL}`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  deleteById: async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  findById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  login: async (data) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default UsuarioService;
