import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import CalendarSidebar from '../components/schedule/CalendarSidebar';
import CalendarGrid from '../components/schedule/CalendarGrid';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 2, 1)); // March 2024
  const [view, setView] = useState('week');

  const changeMonth = (delta) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + delta, 1));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex">
        <CalendarSidebar currentDate={currentDate} />
        <div className="flex-1 ml-8">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Calendar</h2>
              <div className="flex items-center mt-2">
                <button onClick={() => changeMonth(-1)}>
                  <ChevronLeft className="w-5 h-5 text-gray-500" />
                </button>
                <h3 className="text-xl font-semibold mx-4">
                  {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
                </h3>
                <button onClick={() => changeMonth(1)}>
                  <ChevronRight className="w-5 h-5 text-gray-500" />
                </button>
                <span className="ml-4 text-blue-500">45 event's</span>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                className={`px-4 py-2 rounded-full ${
                  view === 'day' ? 'bg-gray-200' : 'bg-white'
                }`}
                onClick={() => setView('day')}
              >
                Day
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  view === 'week' ? 'bg-gray-200' : 'bg-white'
                }`}
                onClick={() => setView('week')}
              >
                Week
              </button>
              <button
                className={`px-4 py-2 rounded-full ${
                  view === 'month' ? 'bg-gray-200' : 'bg-white'
                }`}
                onClick={() => setView('month')}
              >
                Month
              </button>
            </div>
          </div>
          <CalendarGrid currentDate={currentDate} view={view} />
        </div>
      </div>
    </div>
  );
};

export default Schedule;