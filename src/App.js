import React, { useState } from 'react';
import './styles.css';
import DateCard from './DateCard';
import Countdown from './Countdown';

const treeStructure = [
  [1],
  [2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21],
  [22, 23, 24]
];

// Create the Login component inside App.js for simplicity
function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'jori' && password === 'feauto') {
      onLogin(); // Calls the function to load the main content
    } else {
      setError('Incorrect username or password');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="page-container">
      {isAuthenticated ? (
        <>
          <div className="snowfall">
            {/* Generate 50 snowflakes for a good effect */}
            {[...Array(50)].map((_, index) => (
              <div key={index} className="snowflake"></div>
            ))}
          </div>
          <div className="calendar">
            <div className="tree">
              {treeStructure.map((row, rowIndex) => (
                <div key={rowIndex} className="row">
                  {row.map((day) => (
                    <DateCard key={day} day={day} />
                  ))}
                </div>
              ))}
            </div>
            <Countdown />
          </div>
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;