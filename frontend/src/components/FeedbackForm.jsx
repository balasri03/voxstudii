import React, { useState } from 'react';
import axios from './Axios_config';

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: '', category: 'Food', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/feedback', form);
    setSubmitted(true);
    setForm({ name: '', category: 'Food', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full sm:w-3/4 md:w-1/2 mx-auto mt-10 rounded-lg p-4 sm:p-8"
      style={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        boxShadow: '0 8px 32px 0 rgba(0,0,0,0.37)',
      }}>
      <input
        type="text"
        name="name"
        placeholder="Your name (optional)"
        className="w-full p-2 border-white border rounded mb-2 placeholder-white bg-transparent text-white"
        value={form.name}
        onChange={handleChange}
      />
      <select
        name="category"
        className="w-full p-2 border-white border rounded mb-2 bg-transparent text-white"
        value={form.category}
        onChange={handleChange}
      >
        <option value="Food">Food</option>
        <option value="Academics">Academics</option>
        <option value="Hostel">Hostel</option>
        <option value="Others">Others</option>
      </select>
      <textarea
        name="message"
        placeholder="Your feedback"
        className="w-full p-2 border-white border rounded mb-2 placeholder-white bg-transparent text-white"
        rows={4}
        required
        value={form.message}
        onChange={handleChange}
      />
      <button type="submit" className="bg-blue-500 w-full text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
        Submit
      </button>
      {submitted && <p className="text-green-600">Feedback submitted!</p>}
      <style>
        {`
          select:focus {
            background-color: #444 !important;
            color: #fff !important;
          }
        `}
      </style>
    </form>
  );
}