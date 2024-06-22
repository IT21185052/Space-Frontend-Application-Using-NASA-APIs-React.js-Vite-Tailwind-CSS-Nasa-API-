import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiUser } from "react-icons/bi";
import { AiOutlineUnlock } from "react-icons/ai";
import axios from 'axios';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check for empty fields
    if (!name || !email || !password) {
      const newErrors = {};
      if (!name) newErrors.name = 'Name is required';
      if (!email) newErrors.email = 'Email is required';
      if (!password) newErrors.password = 'Password is required';
      setErrors(newErrors);
      return;
    }

    // Password validation
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (!passwordRegex.test(password)) {
      setErrors({ password: 'Password must contain only letters and numbers' });
      return;
    }

    // Minimum password length validation
    if (password.length < 8) {
      setErrors({ password: 'Password must be at least 8 characters long' });
      return;
    }

    // Check if the email already exists
    axios.get(`http://localhost:3000/check-email?email=${email}`)
      .then(response => {
        if (response.data.exists) {
          setErrors({ email: 'Email is already registered' });
        } else {
          // If the email is not registered, submit the form
          axios.post('http://localhost:3000/register', { name, email, password })
            .then(result => {
              console.log(result);
              navigate('/login');
            })
            .catch(err => console.log(err));
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="p-16">
      <div className="bg-slate-800 border border-slate-400 rounded-md p-4 shadow-md backdrop-filter backdrop-blur-sm bg-opacity-30 relative login-form">
        <h1 className="text-lg text-white font-bold text-center mb-2">Register</h1>

        <form onSubmit={handleSubmit} action="" style={{ paddingTop: "45px" }}>
          <div className="relative my-2">
            <input
              type="text"
              className="w-full block py-2 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=""
              onChange={(e) => setName(e.target.value)}
            />
            <label
              htmlFor=""
              className="w-full absolute text-xs text-white duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
            <BiUser className="absolute top-3 right-2" style={{ color: 'white' }} />
            {errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
          </div>
          <div className="relative my-4" >
            <input
              type="email"
              className="w-full block py-2 px-4 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-blue-600 peer"
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="email"
              className="w-full absolute text-xs text-white duration-300 transform -translate-y-6 scale-75 top-2 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Your Email
            </label>
            <BiUser className="absolute top-3 right-2" style={{ color: 'white' }} />
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
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
            {errors.password && <span className="text-red-500 text-xs">{errors.password}</span>}
          </div>
          <button className="w-full mt-2 text-sm rounded-full bg-white text-emerald-800 hover:bg-blue-500 hover:text-white py-2 transition-colors duration-300" type="submit" style={{ fontWeight: 'bold' }}>Register</button>
          <div>
            <span className="mt-2 text-xs" style={{ color: 'gray', fontWeight: 'bold' }}>Already have an Account?Please <Link to="/login" className="text-blue-800">Login </Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
