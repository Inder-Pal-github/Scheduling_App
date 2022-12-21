import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.trim() && password.trim() && email.trim()) {
      console.log(email, username, password);
      setPassword("");
      setUsername("");
      setEmail("");
    }
  };
  return (
    <main className="signup">
      <form className="signup_form" onSubmit={handleSubmit}>
        <h2 className="signup_title">Create an account</h2>
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          className="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          className="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="signupButton">REGISTER</button>
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          Already have an account?
          <Link className="link" to="/">
            Sign in
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Signup;
