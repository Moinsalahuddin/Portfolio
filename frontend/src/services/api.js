import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Skills API
export const getSkills = () => api.get('/skills');
export const getSkillsByCategory = (category) => api.get(`/skills/category/${category}`);

// Projects API
export const getProjects = () => api.get('/projects');
export const getFeaturedProjects = () => api.get('/projects/featured');
export const getProjectById = (id) => api.get(`/projects/${id}`);

// Contact API
export const sendMessage = (messageData) => api.post('/contact', messageData);

export default api;

