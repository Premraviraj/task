import React from 'react';

const CalendarGrid = ({ currentDate, view }) => {
  const events = [
    { id: 1, title: 'Daily standup', start: '09:00', end: '10:00', day: 7, color: 'bg-red-100 border-l-4 border-red-500' },
    { id: 2, title: 'Weekly Review', start: '10:00', end: '12:00', day: 8, color: 'bg-red-100 border-l-4 border-red-500' },
    { id: 3, title: 'Check Up to Doctor', start: '09:00', end: '10:00', day: 9, color: 'bg-green-100 border-l-4 border-green-500' },
    { id: 4, title: 'Bazaar', start: '10:00', end: '12:00', day: 9, color: 'bg-blue-100 border-l-4 border-blue-500' },
    { id: 5, title: 'Agencies Birthday', start: '11:00', end: '13:00', day: 7, color: 'bg-blue-100 border-l-4 border-blue-500' },
    { id: 6, title: 'Meeting with Client', start: '12:00', end: '13:00', day: 8, color: 'bg-red-100 border-l-4 border-red-500' },
    { id: 7, title: 'Lunch Break', start: '12:00', end: '13:00', day: 9, color: 'bg-yellow-100 border-l-4 border-yellow-500' },
  ];

  const renderWeekView = () => {
    const days = ['Monday', 'Tuesday', 'Wednesday'];
    const hours = Array.from({ length: 4 }, (_, i) => i + 9);

    return (
      <div className="grid grid-cols-4 gap-4">
        <div className="col-span-1">
          <div className="h-12"></div>
          {hours.map((hour) => (
            <div key={hour} className="h-24 border-t flex items-center justify-end pr-2">
              <span className="text-sm text-gray-500">{`${hour.toString().padStart(2, '0')}:00`}</span>
            </div>
          ))}
        </div>
        {days.map((day, index) => (
          <div key={day} className="col-span-1">
            <div className="h-12 font-semibold">{day}</div>
            {hours.map((hour) => (
              <div key={hour} className="h-24 border-t border-l relative">
                {events
                  .filter((event) => event.day === index + 7 && parseInt(event.start) === hour)
                  .map((event) => (
                    <div
                      key={event.id}
                      className={`absolute top-0 left-0 right-0 p-2 ${event.color}`}
                      style={{
                        height: `${(parseInt(event.end) - parseInt(event.start)) * 24}px`,
                      }}
                    >
                      <div className="text-sm font-semibold">{event.title}</div>
                      <div className="text-xs">
                        {event.start} - {event.end}
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      {view === 'week' && renderWeekView()}
      {/* Implement day and month views similarly */}
    </div>
  );
};

export default CalendarGrid;