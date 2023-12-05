import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/compras';

const CompraService = {
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

  findCompraById: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  findComrasByIdUsuario: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/usuario/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  findComprasByIdProduto: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/produto/${id}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default CompraService;
