import React from 'react';

interface BoardProps {
  isDarkMode: boolean;
}

const Board: React.FC<BoardProps> = ({ isDarkMode }) => {
  return (
    <div className={`p-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to the Board!</p>
    </div>
  );
};

export default Board; 