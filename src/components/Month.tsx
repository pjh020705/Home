import React from "react";
import "../styles/monthView.css";

interface MonthViewProps {
  month: string;
  image: string;
  days: number;
}

const MonthView: React.FC<MonthViewProps> = ({ month, image, days }) => {
  return (
    <div className="month-view">
      <img src={image} alt={month} className="month-image" />
      <h2 className="month-title">{month}</h2>
      <div className="month-dates">
        {Array.from({ length: days }, (_, i) => (
          <span key={i} className="date">{i + 1}</span>
        ))}
      </div>
    </div>
  );
};

export default MonthView;
