// App.js
import React, { useState } from 'react';
import './styles.css';
import DateCard from './DateCard';
import Countdown from './Countdown';
import Login from './Login';

const treeStructure = [
  [1],
  [2, 3],
  [4, 5, 6],
  [7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20, 21],
  [22, 23, 24]
];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleSuccessfulLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleSuccessfulLogin} />;
  }

  return (
    <div className="page-container">
      <div className="snowfall">
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
    </div>
  );
}

export default App;