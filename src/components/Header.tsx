import React from 'react';
import { Search, Keyboard, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0">
        <div className="flex justify-between items-center py-4">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">Welcome, Prem</h1>
            <p className="text-sm text-gray-500">Today is friday, Oct 19th, 2024</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Find something"
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Keyboard className="h-5 w-5 text-gray-500" />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Bell className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;