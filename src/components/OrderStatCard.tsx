import React from 'react';
import { MoreHorizontal } from 'lucide-react';

interface OrderStatCardProps {
  title: string;
  count: number;
  increase: number;
  increaseText: string;
  color: string;
}

const OrderStatCard: React.FC<OrderStatCardProps> = ({ title, count, increase, increaseText, color }) => {
  return (
    <div className={`${color} rounded-lg p-6`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
      <div className="flex items-baseline space-x-2">
        <span className="text-2xl font-bold">{count.toLocaleString()}</span>
        <span className={`text-sm font-medium px-2 py-1 rounded-full bg-green-500 text-white`}>
          +{increase}%
        </span>
      </div>
      <p className="text-sm text-gray-500 mt-2">{increaseText}</p>
      <div className="mt-4 grid grid-cols-6 gap-1">
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className={`h-8 rounded-sm ${
              Math.random() > 0.5 ? `${color} opacity-100` : `${color} opacity-30`
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default OrderStatCard;