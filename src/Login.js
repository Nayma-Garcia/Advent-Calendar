// Login.js
import React, { useState } from "react";

function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (username === "jori" && password === "feauto") {
      onLogin();
    } else {
      setError("Incorrect username or password");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-100 to-green-100 flex items-center justify-center p-4">
      <div className="login-card">
        <div className="login-header">
          <div className="icon-container">
            <span className="tree-icon">🎄</span>
            <span className="gift-icon">🎁</span>
            <span className="tree-icon">🎄</span>
          </div>
          <h2 className="login-title">Welcome Jori</h2>
        </div>
        <div className="login-content">
          <div className="input-group">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onKeyPress={handleKeyPress}
              className="login-input"
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              className="login-input"
            />
          </div>
          <button
            onClick={handleLogin}
            className="login-button"
          >
            Sign In
          </button>
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;