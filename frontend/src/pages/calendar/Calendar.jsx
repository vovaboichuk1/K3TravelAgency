import React, { useState, useEffect } from 'react';
import './Calendar.css';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [calendarDays, setCalendarDays] = useState([]);

  useEffect(() => {
    renderCalendar();
  }, [currentDate]);

  const renderCalendar = () => {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    const monthYear = `${currentDate.toLocaleString('uk-UA', { month: 'long' })} ${currentDate.getFullYear()}`;

    const days = [];
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push(
        <div key={i} className="calendar-day" onClick={() => selectDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), i))}>
          {i}
        </div>
      );
    }

    setCalendarDays(days);
    document.getElementById('monthYear').textContent = monthYear;
  };

  const selectDate = (date) => {
    setSelectedDate(date);
    renderCalendar();
  };

  const prevMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() - 1);
    setCurrentDate(newDate);
  };

  const nextMonth = () => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + 1);
    setCurrentDate(newDate);
  };

  return (
    <div className="calendar_page">
      <div className="Main_calendar">
        <div className="calendar-header">
          <button id="prevMonth" onClick={prevMonth}>&lt;</button>
          <h2 id="monthYear">Місяць Рік</h2>
          <button id="nextMonth" onClick={nextMonth}>&gt;</button>
        </div>
        <div className="weekdays">
          <div className="weekday">Пн</div>
          <div className="weekday">Вт</div>
          <div className="weekday">Ср</div>
          <div className="weekday">Чт</div>
          <div className="weekday">Пт</div>
          <div className="weekday">Сб</div>
          <div className="weekday">Нд</div>
        </div>
        <div id="calendarDays" className="calendar-days">
          {calendarDays}
        </div>
        <div id="eventList" className="event-list"></div>
      </div>
    </div>
  );
};

export default Calendar;
