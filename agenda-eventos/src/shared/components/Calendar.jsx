import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarComponent = ({dateP}) => {
  console.log(dateP);
  const [date, setDate] = useState(new Date(dateP));

  return (
    <div>      
      <Calendar value={date} />      
    </div>
  );
};

export default CalendarComponent;
