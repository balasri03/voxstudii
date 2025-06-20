import React, { useState } from 'react';
import axios from './Axios_config';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function AdminLogin() {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await axios.post('/admin', form); // Your backend expects /api/admin
    login(); // Set admin as logged in
    // Store username in localStorage for dashboard use
    localStorage.setItem('adminUsername', form.username);
    // Optionally, store belongsto as well:
    // localStorage.setItem('adminBelongsto', res.data.user.belongsto);
    navigate('/dashboard'); // Redirect to dashboard
  } catch {
    setError('Login failed');
  }
  };

  return (
    <div className="w-1/2 mx-auto mt-20 rounded-lg p-8 shadow-lg"
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
      }}>
      <form onSubmit={handleSubmit} className="max-full space-y-4 justify-center">
        <input
          type="text"
          name="username"
          placeholder="Username"
          className="w-full p-2 border-white border rounded mb-2 placeholder-white bg-transparent text-white"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full p-2 border-white border rounded mb-2 placeholder-white bg-transparent text-white"
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-green-600 w-full text-white px-4 py-2 rounded">
          Login
        </button>
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
}