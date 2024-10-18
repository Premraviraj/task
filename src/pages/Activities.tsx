import React, { useState } from 'react';
import { MoreHorizontal, ChevronDown, Edit2 } from 'lucide-react';
import OrderStatCard from '../components/OrderStatCard';
import SocialMediaActivity from '../components/SocialMediaActivity';
import RecentUpdates from '../components/RecentUpdates';
import CustomerList from '../components/CustomerList';
import OrderActivityLog from '../components/OrderActivityLog';

const Activities = () => {
  const [selectedMonth, setSelectedMonth] = useState('This Month');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Activities</h1>
        <div className="relative">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-sm leading-5 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <ChevronDown className="h-4 w-4" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <OrderStatCard
          title="Order placed"
          count={12455}
          increase={20}
          increaseText="+2k today"
          color="bg-indigo-100"
        />
        <OrderStatCard
          title="Order packed"
          count={2345}
          increase={15}
          increaseText="+554 today"
          color="bg-cyan-100"
        />
        <OrderStatCard
          title="Order shipped"
          count={4556}
          increase={10}
          increaseText="+848 today"
          color="bg-purple-100"
        />
        <OrderStatCard
          title="Order delivered"
          count={14333}
          increase={20}
          increaseText="+2k today"
          color="bg-teal-100"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <SocialMediaActivity />
          <OrderActivityLog />
        </div>
        <div className="space-y-6">
          <RecentUpdates />
          <CustomerList />
        </div>
      </div>
    </div>
  );
};

export default Activities;