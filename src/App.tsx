import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Board from './components/Board';
import Activities from './pages/Activities';
import Dashboard from './pages/Dashboard';
import Schedule from './pages/Schedule';
import Note from './pages/Note';
import Products from './pages/Products';
import Report from './pages/Report';
import Team from './pages/Team';
import Clients from './pages/Clients';
import Settings from './pages/Settings';
import Support from './pages/Support';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
            <Routes>
              <Route path="/" element={<Board />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/note" element={<Note />} />
              <Route path="/products" element={<Products />} />
              <Route path="/report" element={<Report />} />
              <Route path="/team" element={<Team />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/support" element={<Support />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;