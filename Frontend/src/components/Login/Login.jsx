import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import "./Login.css"; // Importing CSS file for additional styling
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!email || !password) {
      setError('Email and Password are required');
      return;
    }

    axios.post('http://localhost:3000/login', { email, password })
      .then(result => {
        console.log(result);
        if (result.data.message === "Success") {
          navigate('/home');
        } else {
          setError('Email and Password do not match');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="bg-slate-800 border border-slate-400 rounded-md p-4 shadow-md backdrop-filter backdrop-blur-sm bg-opacity-30 relative login-form">
          <h1 className="text-lg text-white font-bold text-center mb-2">Login</h1>
          <form onSubmit={handleSubmit} action="" style={{ paddingTop: "70px" }}>
            <div className="relative my-4">
              <input
                type="email"
                className="w-full block py-2 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder=""
                onChange={(e) => setEmail(e.target.value)}
              />
              <label
                htmlFor=""
                className="w-full absolute text-xs text-white duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Email
              </label>
              <BiUser className="absolute top-3 right-2" style={{ color: 'white' }} />
            </div>
            <div className="relative my-2">
              <input
                type="password"
                className="w-full block py-2 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
                placeholder=""
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor=""
                className="w-full absolute text-xs text-white duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Your Password
              </label>
              <AiOutlineUnlock className="absolute top-3 right-2" style={{ color: 'white' }} />
            </div>
            {error && <span className="text-red-500 text-xs">{error}</span>}
            <button className="w-full mt-2 text-sm rounded-full bg-white text-emerald-800 hover:bg-blue-500 hover:text-white py-2 transition-colors duration-300" type="submit" style={{ fontWeight: 'bold' }}>Login</button>
            <div>
              <span className="mt-2 text-xs" style={{ color: 'gray', fontWeight: 'bold' }}>New Here? Please <Link to="/register" className="text-blue-800">Register</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
