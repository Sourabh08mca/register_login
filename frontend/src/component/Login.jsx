import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data === "Successfully") {
          alert("Login successful!");
          navigate('/hero');
        }
      })
      .catch(err => {
        console.log(err);
        alert("Login failed. Please check your credentials.");
      });
  };

  return (
    <div>
      <div className="container px-4 mx-auto mt-18">
        <div className="max-w-lg mx-auto">
          <div className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold">Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block mb-2 font-bold">Email</label>
              <input 
                className="inline-block w-full p-4 leading-6 text-lg font-medium placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="email" 
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 font-bold">Password</label>
              <input 
                className="inline-block w-full p-4 leading-6 text-lg font-medium placeholder-indigo-900 bg-white shadow border-2 border-indigo-900 rounded"
                type="password" 
                placeholder="**********"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button 
              type="submit" 
              className="inline-block w-full py-3 px-3 mb-6 text-center text-lg leading-3 text-white font-extrabold bg-blue-600 hover:bg-indigo-900 border-3 border-indigo-900 shadow rounded transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
