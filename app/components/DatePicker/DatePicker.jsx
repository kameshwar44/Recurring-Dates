// app/components/DatePicker/DatePicker.jsx
import React from 'react';
import DateRangePicker from './DateRangePicker';
import RecurrenceOptions from './RecurrenceOptions';
import CalendarPreview from './CalendarPreview';

export default function DatePicker() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Select Recurring Dates</h2>
      <DateRangePicker />
      <RecurrenceOptions />
      <CalendarPreview />
    </div>
  );
}
