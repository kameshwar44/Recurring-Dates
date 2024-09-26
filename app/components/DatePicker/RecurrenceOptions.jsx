// app/components/DatePicker/RecurrenceOptions.jsx
import React from 'react';
import { useDatePicker } from '../../page';

export default function RecurrenceOptions() {
  const { recurrence, setRecurrence } = useDatePicker();

  const updateRecurrence = (key, value) => {
    setRecurrence({ ...recurrence, [key]: value });
  };

  return (
    <div className="mb-4">
      <label className="block text-gray-700">Recurrence Pattern:</label>
      <select
        value={recurrence.pattern}
        onChange={(e) => updateRecurrence('pattern', e.target.value)}
        className="mt-1 p-2 border rounded"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>

      {/* Customize recurrence intervals */}
      <label className="block mt-4 text-gray-700">Every:</label>
      <input
        type="number"
        min="1"
        value={recurrence.every}
        onChange={(e) => updateRecurrence('every', e.target.value)}
        className="mt-1 p-2 border rounded"
      />
    </div>
  );
}
