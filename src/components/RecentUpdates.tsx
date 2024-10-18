import React from 'react';

const RecentUpdates = () => {
  const updates = [
    { id: 1, user: 'Toddy aljazair', action: 'commented on your new post', time: '2m' },
    { id: 2, user: 'Nirina zubir', action: 'liked your new post', time: '8m' },
    { id: 3, user: 'Arhan maukemana', action: 'liked your new post', time: '15m' },
    { id: 4, user: 'Suka kelepasan', action: 'mentioned you', time: '20m' },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Recent update</h3>
        <button className="text-sm text-indigo-600 hover:text-indigo-800">See more</button>
      </div>
      <div className="space-y-4">
        {updates.map((update) => (
          <div key={update.id} className="flex items-start">
            <img
              src={`https://i.pravatar.cc/40?img=${update.id}`}
              alt={update.user}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">{update.user}</span> {update.action}
              </p>
              <p className="text-xs text-gray-500">{update.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentUpdates;