import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginValidation from "./Validation";
import axios from "axios";
import Signup from "./Signup";
import "./App.css";

const Login = () => {
  const [values, setValues] = useState({
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
    setError(LoginValidation(values));

    if (error.email === "" && error.password === "") {
      axios
        .post("https://yt5k4d-8080.csb.app/login", values)
        .then((res) => {
          if (res.data === "Success") {
            navigate("/");
          } else {
            alert("No Record Exist");
          }
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
            <div className="mt-1">
              <input type="checkbox" /> You agree to our terms and Conditions
            </div>
            <Link
              to="/signup"
              className="btn btn-default bg-light mt-3 border text-decoration-none w-100"
              element={<Signup />}
            >
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
