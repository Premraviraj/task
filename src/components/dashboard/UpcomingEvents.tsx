import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const events = [
  { name: 'Team Building', date: '2023-06-15', time: '14:00' },
  { name: 'Quarterly Review', date: '2023-06-30', time: '10:00' },
  { name: 'New Employee Orientation', date: '2023-07-05', time: '09:00' },
];

const UpcomingEvents = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <motion.li
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center space-x-4"
          >
            <Calendar className="w-6 h-6 text-blue-500" />
            <div>
              <p className="font-semibold">{event.name}</p>
              <p className="text-sm text-gray-500">{event.date} at {event.time}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default UpcomingEvents;