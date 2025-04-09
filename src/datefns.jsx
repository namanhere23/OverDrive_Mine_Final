import React, { useState, useEffect } from 'react';
import { 
  format, 
  addDays, 
  subDays, 
  differenceInDays, 
  parseISO, 
  isValid,
  isToday,
  isFuture,
  isPast,
  formatDistanceToNow
} from 'date-fns';

export default function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [inputDate, setInputDate] = useState('');
  const [parsedDate, setParsedDate] = useState(null);
  const [error, setError] = useState('');

  // Format current date for the date input default
  useEffect(() => {
    setInputDate(format(new Date(), 'yyyy-MM-dd'));
  }, []);

  // Handle date input change
  const handleDateChange = (e) => {
    const dateString = e.target.value;
    setInputDate(dateString);
    
    try {
      const parsed = parseISO(dateString);
      if (isValid(parsed)) {
        setSelectedDate(parsed);
        setParsedDate(parsed);
        setError('');
      } else {
        setError('Invalid date format');
        setParsedDate(null);
      }
    } catch (err) {
      setError('Error parsing date');
      setParsedDate(null);
    }
  };

  // Add days to selected date
  const handleAddDays = () => {
    const newDate = addDays(selectedDate, 7);
    setSelectedDate(newDate);
    setInputDate(format(newDate, 'yyyy-MM-dd'));
  };

  // Subtract days from selected date
  const handleSubtractDays = () => {
    const newDate = subDays(selectedDate, 7);
    setSelectedDate(newDate);
    setInputDate(format(newDate, 'yyyy-MM-dd'));
  };

  return (
    <div>
      <div>
        <label className="block text-gray-700 mb-2">Select a date:</label>
        <input
          type="date"
          value={inputDate}
          onChange={handleDateChange}
          className="border rounded p-2 w-full"
        />
        {error && <p className="text-red-500 mt-1">{error}</p>}
      </div>
      
      <div className="flex space-x-3 mb-4">
        <button 
          onClick={handleSubtractDays} 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          - 7 Days
        </button>
        <button 
          onClick={handleAddDays}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          + 7 Days
        </button>
      </div>
       
    </div>
  );
}