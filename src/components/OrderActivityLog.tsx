import React, { useState } from 'react';

const OrderActivityLog = () => {
  const [selectedTab, setSelectedTab] = useState('All');

  const activities = [
    { id: 1, user: 'Jimmy', action: 'sent you a photo', time: 'Today, 10:50pm', images: ['https://via.placeholder.com/80x60', 'https://via.placeholder.com/80x60', 'https://via.placeholder.com/80x60'] },
    { id: 2, user: 'Ronny amaro', action: 'request new order', orderId: 'ID#1189', message: 'please respond now', time: 'Today, 09:30pm' },
    { id: 3, user: 'Items', orderId: 'ID#1090', action: 'delivered to Ardian destination', time: 'Today, 08:10pm', images: ['https://via.placeholder.com/80x60', 'https://via.placeholder.com/80x60'] },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h3 className="text-lg font-semibold mb-4">Order activity log</h3>
      <div className="flex space-x-4 mb-4">
        {['All', 'New order', 'Order placed', 'Order shipped', 'Order delivered', 'Order complete', 'Order canceled'].map((tab) => (
          <button
            key={tab}
            className={`text-sm ${selectedTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start">
            <img
              src={`https://i.pravatar.cc/40?img=${activity.id}`}
              alt={activity.user}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                    {activity.orderId && <span className="ml-1 px-2 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs">{activity.orderId}</span>}
                  </p>
                  {activity.message && <p className="text-sm text-gray-500">{activity.message}</p>}
                </div>
                <span className="text-xs text-gray-500">{activity.time}</span>
              </div>
              {activity.images && (
                <div className="mt-2 flex space-x-2">
                  {activity.images.map((image, index) => (
                    <img key={index} src={image} alt={`Activity ${activity.id} image ${index + 1}`} className="w-20 h-15 object-cover rounded" />
                  ))}
                </div>
              )}
              {activity.id === 1 && (
                <div className="mt-2 flex space-x-2">
                  <button className="px-3 py-1 bg-red-100 text-red-600 rounded-md text-sm">Delete</button>
                  <button className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-md text-sm">Open</button>
                </div>
              )}
              {activity.id === 3 && (
                <div className="mt-2">
                  <button className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-md text-sm">Track</button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 text-center">
        <button className="text-sm text-indigo-600 hover:text-indigo-800">View more</button>
      </div>
    </div>
  );
};

export default OrderActivityLog;