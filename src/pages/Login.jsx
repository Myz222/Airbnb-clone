import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import api from '../api/api';
const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting login request with data:", formData);
      const response = await api.post('/auth/login', formData);
      localStorage.setItem('token', response.data.token);
      setMessage('Login successful');
      navigate('/');  // Redirect to homepage after successful login
    } catch (error) {
      console.error("Login Error:", error);
      setMessage(error.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Login</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input name="email" placeholder="Email" onChange={handleChange} className="block border p-2 mb-4" required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="block border p-2 mb-4" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
      </form>
      {message && <p className="mt-4">{message}</p>}
    </div>
  );
};

export default Login;
