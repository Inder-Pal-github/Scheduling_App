import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (username.trim() && password.trim()) {
      e.preventDefault();
      console.log(username, password);
      setPassword("");
      setUsername("");
    }
  };

  return (
    <main className="login">
      <form className="login_form">
        <h2 className="login_title">Log into your account</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          className="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton">LOG IN</button>
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          Don't have an account?
          <Link className="link" to="/register">
            Create One.
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Login;
