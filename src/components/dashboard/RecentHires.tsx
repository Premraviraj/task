import React from 'react';
import { motion } from 'framer-motion';

const recentHires = [
  { name: 'John Doe', position: 'Software Engineer', date: '2023-06-01' },
  { name: 'Jane Smith', position: 'Product Manager', date: '2023-05-28' },
  { name: 'Mike Johnson', position: 'UX Designer', date: '2023-05-25' },
];

const RecentHires = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">Recent Hires</h2>
      <ul className="space-y-4">
        {recentHires.map((hire, index) => (
          <motion.li
            key={index}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex items-center space-x-4"
          >
            <img
              src={`https://i.pravatar.cc/40?img=${index}`}
              alt={hire.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">{hire.name}</p>
              <p className="text-sm text-gray-500">{hire.position}</p>
              <p className="text-xs text-gray-400">{hire.date}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default RecentHires;