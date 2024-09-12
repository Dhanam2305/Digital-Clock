import React, { useState, useEffect } from 'react';

const DateTimeDisplay = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  // Format time as HH:MM:SS
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  // Format day of the week
  const formatDay = (date) => {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return daysOfWeek[date.getDay()];
  };

  // Format date as DD/MM/YYYY
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="clockContainerStyle">
        <h1 className='A'>Digital Clock</h1>
      <h1 className='B'>{formatTime(currentTime)}</h1>
      <h2 className="dayStyle">{formatDay(currentTime)}</h2>
      <h2 className="dateStyle">{formatDate(currentTime)}</h2>
    </div>
  );
};

// Simple inline styles for appearance
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#000', // Black background
  color: '#00ff00', // Neon green text
  fontFamily: 'Courier New, monospace',
};

const timeStyle = {
  fontSize: '64px',
  margin: '10px 0',
};

const dateStyle = {
  fontSize: '32px',
  margin: '5px 0',
};

export default DateTimeDisplay;
