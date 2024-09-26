// app/components/DatePicker/DateRangePicker.jsx
import React from 'react';
import { useDatePicker } from '../../page';

export default function DateRangePicker() {
  const { startDate, setStartDate, endDate, setEndDate } = useDatePicker();

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Start Date:</label>
      <input
        type="date"
        value={startDate || ''}
        onChange={(e) => setStartDate(e.target.value)}
        className="mt-1 p-2 border rounded"
      />
      <label className="block mt-4 text-gray-700">End Date (Optional):</label>
      <input
        type="date"
        value={endDate || ''}
        onChange={(e) => setEndDate(e.target.value)}
        className="mt-1 p-2 border rounded"
      />
    </div>
  );
}
