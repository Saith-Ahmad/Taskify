import React, { useState } from 'react';
import './LoginPage.css'; // Optional: if using custom CSS

const LoginPage = () => {
  const [emailOrUsername, setEmailOrUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for logging in goes here
    console.log({ emailOrUsername, password, rememberMe });
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/logo.png" alt="Taskify Logo" className="logo" />

        <h2 className="welcome-text">
          <span className="highlight">Welcome to Taskify.</span><br />
          The only project management system you need to handle all your organizational processes.
        </h2>
        <p className="subtext">
          We will be happy to provide you the management services what you <span className="highlight">deserve</span>!
        </p>

        <form onSubmit={handleLogin} className="login-form">
          <input
            type="text"
            placeholder="Username Or Email Address"
            value={emailOrUsername}
            onChange={(e) => setEmailOrUsername(e.target.value)}
            className="input-field"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field"
          />

          <div className="remember-me">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label>Remember Me</label>
          </div>

          <button type="submit" className="login-button">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;