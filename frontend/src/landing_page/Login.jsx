
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const navigate = useNavigate();
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
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="card shadow-sm border-0 w-100" style={{ maxWidth: "420px" }}>
        
        {/* Header */}
        <div className="card-header bg-white border-0 text-center pt-4 pb-0">
          <img
            src="/src/assets/logo.svg"
            alt="Logo"
            style={{ height: "28px", marginBottom: "16px" }}
          />
          <h5 className="fw-semibold mb-0">Welcome back</h5>
          <p className="text-muted small mt-1">Login to your trading account</p>
        </div>

        {/* Body */}
        <div className="card-body px-4 py-4">
          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label small fw-medium">Email address</label>
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
                <label className="form-label small fw-medium">Password</label>
                <a href="#" className="small text-decoration-none text-primary">Forgot password?</a>
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

            <button
              type="submit"
              className="btn w-100 fw-semibold text-dark"
              style={{ backgroundColor: "#387ed1", color: "white" }}
            >
              Login
            </button>

          </form>
        </div>

        {/* Footer */}
        <div className="card-footer bg-white border-0 text-center pb-4">
          <p className="small text-muted mb-0">
            Don't have an account?{" "}
            <Link to="/signup" className="text-primary text-decoration-none fw-medium">
              Sign up free
            </Link>
          </p>
        </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;