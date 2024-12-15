import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/UserContext';


import "../styles/Login.css";
//import User from "../../../models/User";



const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState("");
  //const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous error

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", formData);
      //alert(response.data.user.id);
      localStorage.setItem('id', response.data.user.id);
      localStorage.setItem('username',response.data.user.username);
      localStorage.setItem('token',response.data.token);
      localStorage.setItem('name',response.data.user.name);
      localStorage.setItem('user',response.data.user)
      //console.log(response);
      //UserContext.setUser(response.data.email);
      navigate("/dashboard"); // Redirect to dashboard on successful login
    } catch (error) {
      const errorMsg = error.response?.data?.message || "Something went wrong!";
      setErrorMessage(errorMsg);
    }
  };

  return (
    <div className="login-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <button type="submit" className="btn-signin">Sign In</button>
      </form>
      <p>
        <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
      </p>
    </div>
  );
};

export default Login;
