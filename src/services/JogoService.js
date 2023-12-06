import axios from 'axios';

const API_BASE_URL = 'http://localhost:3001/api/jogos';

const JogoService = {
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

  postComentario: async (nomeUsuario, comentario, idJogo) => {
    const jsonComentario = { "comentario": nomeUsuario + ": " + comentario }
    try {
      const response = await axios.post(`${API_BASE_URL}/comentar/${idJogo}`, jsonComentario);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  put: async (data) => {
    try {
      const response = await axios.put(`${API_BASE_URL}/`, data);
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

  verificarEstoquePorId: async (id) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${id}`);
      if(response.data.id < 0) return true
      else return false
    } catch (error) {
      throw error;
    }
  },

};

export default JogoService;
