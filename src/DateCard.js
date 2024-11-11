import React, { useState } from 'react';
import './styles.css';

const messages = {
  1: { message: "Time to put up the tree! 🎄", image: "/api/placeholder/300/200" },
  2: { message: "Make some hot cocoa! ☕", image: "/api/placeholder/300/200" },
  3: { message: "Write your wishlist! ✍️", image: "/api/placeholder/300/200" },
  4: { message: "Donate to charity! 💝", image: "/api/placeholder/300/200" },
  5: { message: "Sing a carol! 🎵", image: "/api/placeholder/300/200" },
  6: { message: "Make paper snowflakes! ❄️", image: "/api/placeholder/300/200" },
  7: { message: "Watch a holiday movie! 🎬", image: "/api/placeholder/300/200" },
  8: { message: "Bake cookies! 🍪", image: "/api/placeholder/300/200" },
  9: { message: "Call a loved one! 📞", image: "/api/placeholder/300/200" },
  10: { message: "Wrap some presents! 🎁", image: "/api/placeholder/300/200" },
  11: { message: "Make a gingerbread house! 🏠", image: "/api/placeholder/300/200" },
  12: { message: "Light a festive candle! 🕯️", image: "/api/placeholder/300/200" },
  13: { message: "Write holiday cards! 💌", image: "/api/placeholder/300/200" },
  14: { message: "Hang stockings! 🧦", image: "/api/placeholder/300/200" },
  15: { message: "Make snow angels! 👼", image: "/api/placeholder/300/200" },
  16: { message: "Visit a Christmas market! 🎪", image: "/api/placeholder/300/200" },
  17: { message: "String popcorn garland! 🍿", image: "/api/placeholder/300/200" },
  18: { message: "Build a snowman! ⛄", image: "/api/placeholder/300/200" },
  19: { message: "Drink eggnog! 🥛", image: "/api/placeholder/300/200" },
  20: { message: "Wear a holiday sweater! 🧥", image: "/api/placeholder/300/200" },
  21: { message: "Go caroling! 🎤", image: "/api/placeholder/300/200" },
  22: { message: "Make mulled wine! 🍷", image: "/api/placeholder/300/200" },
  23: { message: "Set out milk and cookies! 🥛", image: "/api/placeholder/300/200" },
  24: { message: "Santa comes tonight! 🎅", image: "/api/placeholder/300/200" }
};

function DateCard({ day }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div 
        className={`date-card ${isOpen ? 'open' : ''}`} 
        onClick={handleClick}
      >
        <div className="card-content">
          <span>{day}</span>
        </div>
      </div>
      
      {isOpen && (
        <div className="modal-overlay" onClick={handleClick}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-card">
              <div className="modal-number">{day}</div>
              <img 
                src={messages[day].image} 
                alt={`Day ${day}`}
                className="modal-image"
              />
              <div className="modal-message">{messages[day].message}</div>
              <button className="modal-close" onClick={handleClick}>×</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DateCard;