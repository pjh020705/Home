import React from "react";
import calendarData from "../assets/calendarData.ts";
import Month from "./Month.tsx";
import "../styles/calendar.css";

const Calendar: React.FC = () => {
  return (
    <div className="calendar-container">
      {calendarData.map((item) => (
        <Month key={item.month} month={item.month} image={item.image} />
      ))}
    </div>
  );
};

export default Calendar;
