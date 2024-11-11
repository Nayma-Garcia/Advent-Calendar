import React from 'react';
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

function App() {
  return (
    <div className="page-container">
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
    </div>
  );
}

export default App;