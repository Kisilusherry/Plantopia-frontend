import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:3000' });

// Optionally, add interceptors here for request/response handling
// API.interceptors.request.use(...);
// API.interceptors.response.use(...);

export default API;
