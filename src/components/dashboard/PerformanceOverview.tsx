import React from 'react';
import { motion } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PerformanceOverview = () => {
  const data = {
    labels: ['Excellent', 'Good', 'Average', 'Below Average'],
    datasets: [
      {
        data: [35, 45, 15, 5],
        backgroundColor: ['#4CAF50', '#2196F3', '#FFC107', '#F44336'],
        hoverBackgroundColor: ['#45A049', '#1E88E5', '#FFB300', '#E53935'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
      title: {
        display: true,
        text: 'Employee Performance Distribution',
      },
    },
  };

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="bg-white p-6 rounded-lg shadow-md"
    >
      <h2 className="text-xl font-semibold mb-4">Performance Overview</h2>
      <Doughnut data={data} options={options} />
    </motion.div>
  );
};

export default PerformanceOverview;