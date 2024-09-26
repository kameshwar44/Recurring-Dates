"use client"
// app/page.js
import React, { createContext, useContext, useState } from 'react';
import DatePicker from './components/DatePicker/DatePicker';

const DatePickerContext = createContext();

const useDatePicker = () => useContext(DatePickerContext);

export default function Home() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [recurrence, setRecurrence] = useState({
    pattern: 'daily',
    every: 1,
    daysOfWeek: [],
    nthDayOfMonth: null,
  });

  const contextValue = {
    startDate,
    setStartDate,
    endDate,
    setEndDate,
    recurrence,
    setRecurrence,
  };

  return (
    <DatePickerContext.Provider value={contextValue}>
      <div className="min-h-screen p-8 bg-gray-100 flex justify-center items-center">
        <DatePicker />
      </div>
    </DatePickerContext.Provider>
  );
}

export { useDatePicker };
