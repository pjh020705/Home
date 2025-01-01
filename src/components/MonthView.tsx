import React from "react";
import "../styles/calendarSelector.css";

interface CalendarSelectorProps {
  months: { month: string; index: number }[];
  onMonthSelect: (index: number) => void;
}

const CalendarSelector: React.FC<CalendarSelectorProps> = ({ months, onMonthSelect }) => {
  return (
    <div className="calendar-selector">
      {months.map(({ month, index }) => (
        <button key={index} onClick={() => onMonthSelect(index)} className="month-button">
          {month}
        </button>
      ))}
    </div>
  );
};

export default CalendarSelector;
