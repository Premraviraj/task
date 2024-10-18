import React from 'react';
import { motion } from 'framer-motion';
import EmployeeStats from '../components/dashboard/EmployeeStats';
import EmployeeChart from '../components/dashboard/EmployeeChart';
import RecentHires from '../components/dashboard/RecentHires';
import UpcomingEvents from '../components/dashboard/UpcomingEvents';
import PerformanceOverview from '../components/dashboard/PerformanceOverview';

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Employee Management Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <EmployeeStats />
        <EmployeeChart />
        <RecentHires />
        <UpcomingEvents />
        <PerformanceOverview />
      </div>
    </motion.div>
  );
};

export default Dashboard;