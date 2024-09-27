import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginValidation } from "./Validation";
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
  const [isSubmit, setIsSubmit] = useState(false);
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
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(error).length == 0 && isSubmit) {
      axios
        .post("https://yt5k4d-8080.csb.app/login", values)
        .then((res) => {
          navigate("/");
        })
        .catch((err) => console.log(err));
      console.log("Logged in Successfully");
      console.log(values);
    }
  }, [error]);

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
            <span className="text-danger">{error.first_name}</span>
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
            <span className="text-danger">{error.last_name}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
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
              placeholder="Password"
              onChange={handleChange}
            />
            {error.password && (
              <span className="text-danger">{error.password}</span>
            )}
          </div>
          <div className="mb-3">
            <button type="submit" className="btn btn-success w-100 mb-1">
              Submit
            </button>
            <p>
              <input type="checkbox" className="border" /> You agree to our
              terms and Conditions
            </p>
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
