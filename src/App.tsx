import React, { useState } from "react";
import Header from "./components/Header.tsx";
import MonthView from "./components/MonthView.tsx";
import CalendarSelector from "./components/CalendarSelector.tsx";

const calendarData = [
  { month: "January", image: "/assets/images/1.jpg", days: 31 },
  { month: "February", image: "/assets/images/2.jpg", days: 28 },
  { month: "March", image: "/assets/images/3.jpg", days: 31 },
  { month: "April", image: "/assets/images/4.jpg", days: 30 },
  { month: "May", image: "/assets/images/5.jpg", days: 31 },
  { month: "June", image: "/assets/images/6.jpg", days: 30 },
  { month: "July", image: "/assets/images/7.jpg", days: 31 },
  { month: "August", image: "/assets/images/8.jpg", days: 31 },
  { month: "September", image: "/assets/images/9.jpg", days: 30 },
  { month: "October", image: "/assets/images/10.jpg", days: 31 },
  { month: "November", image: "/assets/images/11.jpg", days: 30 },
  { month: "December", image: "/assets/images/12.jpg", days: 31 },
];

const App: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState(0);

  const handleMonthSelect = (index: number) => {
    setCurrentMonth(index);
  };

  return (
    <div>
      <Header />
      <CalendarSelector
        months={calendarData.map((data, index) => ({ month: data.month, index }))}
          onMonthSelect={handleMonthSelect}/>
      <MonthView
        month={calendarData[currentMonth].month}
        image={calendarData[currentMonth].image}
        days={calendarData[currentMonth].days}
      />
    </div>
  );
};

export default App;
