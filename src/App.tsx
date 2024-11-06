import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Header from './components/Header';

import Sidebar from './components/Sidebar';

import Board from './components/Board';

import { ThemeToggle } from './components/ThemeToggle';

import Schedule from './pages/Schedule';

import Team from './pages/Team';

// import Clients from './pages/Clients';

// import Report from './pages/Report';

// import Note from './pages/Note';

import Activities from './pages/Activities';

import Settings from './pages/Settings';

import Support from './pages/Support';



const App: React.FC = () => {

  const [isDarkMode, setIsDarkMode] = useState(() => {

    const savedTheme = localStorage.getItem('theme');

    return savedTheme === 'dark';

  });



  useEffect(() => {

    document.documentElement.classList.toggle('dark', isDarkMode);

  }, [isDarkMode]);



  const toggleTheme = () => {

    setIsDarkMode(!isDarkMode);

    localStorage.setItem('theme', isDarkMode ? 'light' : 'dark');

  };



  const handleLogout = () => {

    localStorage.removeItem('isLoggedIn');

    window.location.href = '/';

  };



  return (

    <Router>

      <div className={`flex h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>

        <Sidebar onLogout={handleLogout} isDarkMode={isDarkMode} />

        <div className="flex-1 flex flex-col overflow-hidden">

          <Header isDarkMode={isDarkMode}>

            <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

          </Header>

          <main className={`flex-1 overflow-x-hidden overflow-y-auto ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-6`}>

            <Routes>

              <Route path="/dashboard" element={<Board isDarkMode={isDarkMode} />} />

              <Route path="/schedule" element={<Schedule isDarkMode={isDarkMode} />} />

              <Route path="/team" element={<Team isDarkMode={isDarkMode} />} />

              <Route path="/activities" element={<Activities isDarkMode={isDarkMode} />} />

              <Route path="/settings" element={<Settings isDarkMode={isDarkMode} />} />

              <Route path="/support" element={<Support isDarkMode={isDarkMode} />} />

              <Route path="/" element={<Navigate to="/dashboard" replace />} />

            </Routes>

          </main>

        </div>

      </div>

    </Router>

  );

};



export default App;



