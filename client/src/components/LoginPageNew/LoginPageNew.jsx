import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";

function LoginPage(props) {
  let history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
    token: ""
  });

  function loginUser(event) {
    axios.post("http://localhost:5000/user/login", user).then((response) => {
      if (response.data.message === "Auth Successful!") {
        console.log(response.data);
        props.getUser(
          response.data.user._id,
          response.data.user.username,
          response.data.token
        );
        props.changeAuthStatus();
        history.push("/mainPage");
      } else {
        console.log(response.data);
      }
    });

    setUser({
      email: "",
      password: "",
      token: ""
    });

    event.preventDefault();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((preValues) => {
      return {
        ...preValues,
        [name]: value
      };
    });
  }

  return (
    <div className="welcome-body">
      <div className="container">
        <div className="row">
          <div className="col-lg-3"></div>
          <div className="col-lg-6 mt-4 sign-main">
            <h1 className="display-1 text-center" style={{ color: "#ffffff" }}>
              Log In
            </h1>
            <form className="from-group login-signup">
              <div className="mb-3">
                <label
                  for="email"
                  className="form-label"
                  style={{ color: "#ffffff" }}
                >
                  Email
                </label>
                <input
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={user.email}
                  className="form-control"
                  placeholder="Enter Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label style={{ color: "#ffffff" }}>Password</label>
                <input
                  onChange={handleChange}
                  id="ps"
                  type="password"
                  name="password"
                  value={user.password}
                  className="form-control"
                  placeholder="Enter Password"
                  minlength="8"
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button
                  onClick={loginUser}
                  className="btn btn-success"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
            <Link to="/signup">
              <p id="emailHelp" className="form-text small-text">
                Don't have an account? Click here to create!
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
