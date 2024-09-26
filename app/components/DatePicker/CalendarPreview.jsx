// app/components/DatePicker/CalendarPreview.jsx
import React from 'react';
import { useDatePicker } from '../../page';

export default function CalendarPreview() {
  const { startDate, recurrence } = useDatePicker();

  const generatePreview = () => {
    if (!startDate) return 'No date selected';

    let preview = `Starting from ${startDate}, `;
    switch (recurrence.pattern) {
      case 'daily':
        preview += `every ${recurrence.every} day(s)`;
        break;
      case 'weekly':
        preview += `every ${recurrence.every} week(s)`;
        break;
      case 'monthly':
        preview += `every ${recurrence.every} month(s)`;
        break;
      case 'yearly':
        preview += `every ${recurrence.every} year(s)`;
        break;
      default:
        preview += 'unknown pattern';
    }
    return preview;
  };

  return (
    <div className="mt-4 p-4 border rounded bg-gray-50">
      <h3 className="font-semibold">Recurrence Preview</h3>
      <p>{generatePreview()}</p>
    </div>
  );
}
