import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

const ClockComponent = ({fechaHoraEvento}) => {
  console.log(fechaHoraEvento);
  const [time, setTime] = useState(new Date(fechaHoraEvento));

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      <Clock value={time} />
      
    </div>
  );
};

export default ClockComponent;
