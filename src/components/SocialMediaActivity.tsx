import React from 'react';

const SocialMediaActivity = () => {
  const data = [
    { name: 'Instagram', value: 40, color: 'bg-blue-500' },
    { name: 'X/Twitter', value: 30, color: 'bg-cyan-500' },
    { name: 'Facebook', value: 20, color: 'bg-indigo-500' },
    { name: 'Tiktok', value: 10, color: 'bg-green-500' },
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h3 className="text-lg font-semibold mb-4">Social media activity</h3>
      <div className="flex items-center">
        <div className="w-32 h-32 relative">
          <svg viewBox="0 0 36 36" className="w-full h-full">
            <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-gray-200" strokeWidth="4" />
            {data.map((item, index) => {
              const offset = data.slice(0, index).reduce((sum, d) => sum + d.value, 0);
              return (
                <circle
                  key={item.name}
                  cx="18"
                  cy="18"
                  r="16"
                  fill="none"
                  className={`stroke-current ${item.color}`}
                  strokeWidth="4"
                  strokeDasharray={`${item.value} ${100 - item.value}`}
                  strokeDashoffset={`-${offset}`}
                  transform="rotate(-90 18 18)"
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold">1.2M</span>
            <span className="text-sm text-gray-500">Impression</span>
          </div>
        </div>
        <div className="ml-8">
          <h4 className="font-semibold mb-2">Social media</h4>
          <p className="text-sm text-gray-500 mb-4">Impression</p>
          <div className="space-y-2">
            {data.map((item) => (
              <div key={item.name} className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>
                <span className="text-sm">{item.name}</span>
                <span className="text-sm ml-auto">{item.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaActivity;