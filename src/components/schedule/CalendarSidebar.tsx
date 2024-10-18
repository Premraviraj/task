import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarSidebar = ({ currentDate }) => {
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const scheduleItems = [
    'Daily Standup',
    'Weekly Review',
    'Team Meeting',
    'Lunch Break',
    'Client Meeting',
    'Other',
  ];

  const categories = [
    { name: 'Work', count: 18 },
    { name: 'Personal', count: 5 },
    { name: 'Learning', count: 2 },
  ];

  return (
    <div className="w-64 bg-white rounded-lg shadow p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">All Calendar</h3>
        <ChevronRight className="w-5 h-5 text-gray-500" />
      </div>
      <p className="text-sm text-gray-500 mb-4">Personal, Teams</p>
      <div className="flex justify-between items-center mb-4">
        <button>
          <ChevronLeft className="w-5 h-5 text-gray-500" />
        </button>
        <h4 className="text-lg font-semibold">
          {currentDate.toLocaleString('default', { month: 'long' })}
        </h4>
        <button>
          <ChevronRight className="w-5 h-5 text-gray-500" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 mb-4">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day) => (
          <div key={day} className="text-center text-sm font-medium text-gray-500">
            {day}
          </div>
        ))}
        {[...Array(firstDayOfMonth - 1)].map((_, index) => (
          <div key={`empty-${index}`} />
        ))}
        {[...Array(daysInMonth)].map((_, index) => (
          <div
            key={index}
            className={`text-center py-1 ${
              index + 1 === currentDate.getDate()
                ? 'bg-blue-500 text-white rounded-full'
                : ''
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      <div className="mb-4">
        <h4 className="text-sm font-semibold mb-2">My Schedule</h4>
        {scheduleItems.map((item, index) => (
          <div key={index} className="flex items-center mb-2">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
      <div>
        <h4 className="text-sm font-semibold mb-2">Categories</h4>
        {categories.map((category, index) => (
          <div key={index} className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <div
                className={`w-3 h-3 rounded-full mr-2 ${
                  index === 0 ? 'bg-red-500' : index === 1 ? 'bg-blue-500' : 'bg-green-500'
                }`}
              />
              <span className="text-sm">{category.name}</span>
            </div>
            <span className="text-sm text-gray-500">{category.count}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarSidebar;