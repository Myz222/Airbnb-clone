import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from '../api/api';
const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('http://localhost:5000/api/auth/signup', formData);
      setMessage(response.data.message);
      navigate('/'); 
    } catch (error) {
      setMessage(error.response.data.error || 'Something went wrong');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Signup</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input name="name" placeholder="Name" onChange={handleChange} className="block border p-2 mb-4" required />
        <input name="email" placeholder="Email" onChange={handleChange} className="block border p-2 mb-4" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="block border p-2 mb-4" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Signup</button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};
export default Signup;
