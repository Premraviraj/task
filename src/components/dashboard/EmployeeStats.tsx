import React from 'react';
import { motion } from 'framer-motion';
import { Users, UserPlus, UserMinus, Award } from 'lucide-react';

const stats = [
  { name: 'Total Employees', value: 250, icon: Users, color: 'bg-blue-500' },
  { name: 'New Hires', value: 15, icon: UserPlus, color: 'bg-green-500' },
  { name: 'Resignations', value: 5, icon: UserMinus, color: 'bg-red-500' },
  { name: 'Top Performers', value: 30, icon: Award, color: 'bg-yellow-500' },
];

const EmployeeStats = () => {
  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white p-6 rounded-lg shadow-md col-span-full"
    >
      <h2 className="text-xl font-semibold mb-4">Employee Statistics</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.05 }}
            className={`${item.color} p-4 rounded-lg text-white`}
          >
            <item.icon className="w-8 h-8 mb-2" />
            <p className="text-2xl font-bold">{item.value}</p>
            <p className="text-sm">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default EmployeeStats;