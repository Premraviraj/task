import React from 'react';



interface HeaderProps {
  isDarkMode: boolean;
  username: string;
  children?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ isDarkMode, username, children }) => {
  return (
    <header className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} border-b border-gray-200 px-6 py-4`}>
      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold">
          Welcome {username}
        </div>
        <div>
          {children}
        </div>
      </div>
    </header>
  );
};

export default Header;
