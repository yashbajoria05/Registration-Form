import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignupValidation from "./SignupValidation";
import axios from "axios";
import Login from "./Login";
import "./App.css";

const Signup = () => {
  const [values, setValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleChange = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setError(SignupValidation(values));
    if (
      error.first_name === "" &&
      error.last_name === "" &&
      error.email === "" &&
      error.password === ""
    ) {
      axios
        .post("https://yt5k4d-8080.csb.app/signup", values)
        .then((res) => {
          navigate("/login");
        })
        .catch((err) => console.log(err));
    }
    event.target.reset();
  };

  return (
    <div className="signup_container bg-primary bg-gradient">
      <div className="signup_box bg-light-subtle">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first_name" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              name="first_name"
              placeholder="Yash"
              onChange={handleChange}
            />
            {error.first_name && (
              <span className="text-danger">{error.first_name}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="last_name" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              name="last_name"
              placeholder="Bajoria"
              onChange={handleChange}
            />
            {error.last_name && (
              <span className="text-danger">{error.last_name}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
            />
            {error.email && <span className="text-danger">{error.email}</span>}
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              placeholder="**************"
              onChange={handleChange}
            />
            {error.password && (
              <span className="text-danger">{error.password}</span>
            )}
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success w-100">
              Submit
            </button>
            <p>You agree to our terms and Conditions</p>
            <Link
              to="/login"
              className="btn btn-default bg-light border text-decoration-none w-100"
              element={<Login />}
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Signup;
