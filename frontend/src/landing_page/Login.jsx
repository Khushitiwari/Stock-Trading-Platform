import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const [inputValue, setInputValue] = useState({ email: "", password: "" });
  const { email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) => toast.error(err, { position: "bottom-left" });
  const handleSuccess = (msg) => toast.success(msg, { position: "bottom-left" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3002/login",
        { ...inputValue },
        { withCredentials: true }
      );
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          window.location.href = "http://localhost:3000/";
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({ email: "", password: "" });
  };

  return (
    <div className="pt-auth-page">
      <div className="pt-auth-card">
        <div className="pt-auth-header">
          <img src="/src/assets/logo.svg" alt="PulseTrade" style={{ height: "32px", marginBottom: "1rem" }} />
          <h5 className="fw-bold mb-1">Welcome back</h5>
          <p className="text-muted small">Sign in to your PulseTrade account</p>
        </div>

        <div className="pt-auth-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                className="form-control"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="mb-4">
              <div className="d-flex justify-content-between">
                <label className="form-label">Password</label>
                <a href="#" className="small text-decoration-none">Forgot password?</a>
              </div>
              <input
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                className="form-control"
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="pt-btn-gradient w-100 py-2">
              Sign in
            </button>
          </form>
        </div>

        <div className="text-center pb-4">
          <p className="small text-muted mb-0">
            Don't have an account?{" "}
            <Link to="/signup" className="text-decoration-none fw-semibold">
              Create one free
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
