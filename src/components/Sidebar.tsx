import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Calendar, Users, Settings, HelpCircle, MessageSquare, LogOut, ChevronRight, Mail, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

interface SidebarProps {
  onLogout: () => void;
  isDarkMode: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ onLogout, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isLogoHovered, setIsLogoHovered] = useState(false);
  const [showCredentials, setShowCredentials] = useState(false);

  const menuItems = [
    { icon: <LayoutDashboard className="w-6 h-6" />, label: 'Dashboard', path: '/dashboard' },
    { icon: <Calendar className="w-6 h-6" />, label: 'Schedule', path: '/schedule' },
    { icon: <MessageSquare className="w-6 h-6" />, label: 'Activities', path: '/activities' },
    { icon: <Users className="w-6 h-6" />, label: 'Team', path: '/team' },
  ];

  const sidebarVariants = {
    open: { width: '16rem' },
    closed: { width: '5rem' },
  };

  const menuItemVariants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: -20 },
  };

  const logoVariants = {
    hovered: { scale: 1.2, rotate: 360 },
    unhovered: { scale: 1, rotate: 0 },
  };

  const chevronVariants = {
    open: { rotate: 0 },
    closed: { rotate: 180 },
  };

  const credentialsVariants = {
    hidden: { opacity: 0, y: -20, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <motion.div
      variants={sidebarVariants}
      initial="open"
      animate={isOpen ? 'open' : 'closed'}
      transition={{ duration: 0.3, type: 'tween' }}
      className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} h-screen flex flex-col justify-between relative`}
    >
      <div className="p-4">
        <div className="mb-6 flex justify-between items-center">
          <motion.div
            variants={logoVariants}
            initial="unhovered"
            animate={isLogoHovered ? 'hovered' : 'unhovered'}
            transition={{ duration: 0.3 }}
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
            onClick={() => setShowCredentials(!showCredentials)}
            className="relative w-12 h-12 rounded-full overflow-hidden cursor-pointer"
          >
            <img 
              src={logo} 
              alt="P" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.button
            variants={chevronVariants}
            initial="open"
            animate={isOpen ? 'open' : 'closed'}
            transition={{ duration: 0.3 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>
        </div>

        <AnimatePresence>
          {showCredentials && isOpen && (
            <motion.div
              variants={credentialsVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className={`absolute top-20 left-4 right-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-lg shadow-lg z-50`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">User Profile</h3>
                <button 
                  onClick={() => setShowCredentials(false)}
                  className={`p-1 rounded-full ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}
                >
                  ×
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <div>
                    <div className="font-semibold">Prem R</div>
                    <div className="text-sm text-gray-500">Administrator</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Mail size={14} />
                  <span>premraviraj@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Phone size={14} />
                  <span>+91 9876543210</span>
                </div>
                <div className={`text-xs mt-2 p-2 rounded ${isDarkMode ? 'bg-gray-600' : 'bg-gray-200'}`}>
                  Last login: {new Date().toLocaleString()}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <nav>
          <AnimatePresence>
            {menuItems.map((item, index) => (
              <motion.div
                key={item.path}
                variants={menuItemVariants}
                initial="closed"
                animate="open"
                exit="closed"
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  to={item.path}
                  className={`flex items-center space-x-4 mb-4 p-2 rounded ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'} transition-colors duration-200`}
                >
                  {item.icon}
                  {isOpen && <span>{item.label}</span>}
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </nav>
      </div>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onLogout}
        className={`p-4 ${isDarkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-700'} transition-colors duration-300 flex items-center justify-center`}
        title="Logout"
      >
        <LogOut className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
};

export default Sidebar;
