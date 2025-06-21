import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_REACT_APP_BACKEND_URL // adjust if your backend runs elsewhere
});

export default instance;