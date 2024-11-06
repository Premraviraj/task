import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Trash2, ChevronDown, Cloud, Music, Clock } from 'lucide-react';

interface ScheduleProps {
  isDarkMode: boolean;
}

interface Event {
  id: string;
  title: string;
  description: string;
  time: string;
  date: Date;
  color: string;
}

const Schedule: React.FC<ScheduleProps> = ({ isDarkMode }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState<Event[]>(() => {
    const savedEvents = localStorage.getItem('events');
    return savedEvents ? JSON.parse(savedEvents).map((event: Event) => ({
      ...event,
      date: new Date(event.date)
    })) : [];
  });
  const [newEvent, setNewEvent] = useState({ 
    title: '', 
    description: '',
    time: '', 
    period: 'AM', 
    date: new Date().toISOString().split('T')[0] 
  });
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isWidgetDropdownOpen, setIsWidgetDropdownOpen] = useState(false);
  const [activeWidget, setActiveWidget] = useState<'clock' | 'weather' | 'spotify'>('clock');

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const deleteEvent = (id: string) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== id));
  };

  const formatTime = (date: Date) => {
    const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
    const [mainTime, period] = timeString.split(' ');
    return { mainTime, period };
  };

  const getRandomPastelColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, 70%, 80%)`;
  };

  const ClockWidget: React.FC = () => {
    const seconds = currentTime.getSeconds();
    const minutes = currentTime.getMinutes();
    const hours = currentTime.getHours() % 12;
    const { mainTime, period } = formatTime(currentTime);

    return (
      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} mb-4 flex flex-col items-center justify-center`}>
        <div className="w-32 h-32 rounded-full border-4 border-gray-300 relative mb-2">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-0.5 h-2 bg-gray-300"
              style={{
                transform: `rotate(${i * 30}deg)`,
                transformOrigin: 'bottom center',
                left: 'calc(50% - 0.25px)',
                bottom: '50%',
              }}
            />
          ))}
          <div
            className="absolute w-1 h-10 bg-black origin-bottom"
            style={{
              transform: `rotate(${(hours * 30) + (minutes * 0.5)}deg)`,
              left: 'calc(50% - 0.5px)',
              bottom: '50%',
            }}
          />
          <div
            className="absolute w-0.5 h-14 bg-black origin-bottom"
            style={{
              transform: `rotate(${minutes * 6}deg)`,
              left: 'calc(50% - 0.25px)',
              bottom: '50%',
            }}
          />
          <div
            className="absolute w-0.5 h-16 bg-red-500 origin-bottom"
            style={{
              transform: `rotate(${seconds * 6}deg)`,
              left: 'calc(50% - 0.25px)',
              bottom: '50%',
            }}
          />
        </div>
        <div className="text-2xl font-bold">
          {mainTime} <span className="text-xl">{period}</span>
        </div>
      </div>
    );
  };

  const WeatherForecast: React.FC = () => {
    return (
      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} mb-4 flex flex-col items-center justify-center`}>
        <Cloud size={32} className={isDarkMode ? 'text-white' : 'text-gray-800'} />
        <h2 className="text-2xl font-bold mt-2">23°C</h2>
        <p className="text-sm mt-1">Partly Cloudy</p>
        <p className="text-xs mt-1">High: 26°C | Low: 18°C</p>
      </div>
    );
  };

  const SpotifyPlayer: React.FC = () => {
    return (
      <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'} mb-4 flex flex-col items-center justify-center`}>
        <Music size={32} className={isDarkMode ? 'text-white' : 'text-gray-800'} />
        <h2 className="text-lg font-bold mt-2">Now Playing</h2>
        <p className="text-sm mt-1">Song Title</p>
        <p className="text-xs">Artist Name</p>
        <div className="mt-2 flex space-x-2">
          <button className="px-3 py-1 bg-green-500 text-white rounded-full text-xs">Play</button>
          <button className="px-3 py-1 bg-gray-500 text-white rounded-full text-xs">Pause</button>
        </div>
      </div>
    );
  };

  const getEventsForDateAndHour = (date: Date, hour: number) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      const isSameDate = eventDate.toDateString() === date.toDateString();
      const isSameHour = eventDate.getHours() === hour;
      return isSameDate && isSameHour;
    });
  };

  const getWeekDates = (date: Date) => {
    const start = new Date(date);
    start.setDate(start.getDate() - start.getDay() + (start.getDay() === 0 ? -6 : 1)); // Start from Monday
    return Array.from({ length: 7 }, (_, i) => {
      const day = new Date(start);
      day.setDate(day.getDate() + i);
      return day;
    });
  };

  const weekDates = getWeekDates(selectedDate);

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } } // Reduced from 0.5 to 0.2
  };

  const slideIn = (direction: 'left' | 'right' | 'up' | 'down') => ({
    hidden: { 
      x: direction === 'left' ? -50 : direction === 'right' ? 50 : 0,
      y: direction === 'up' ? 50 : direction === 'down' ? -50 : 0,
      opacity: 0 
    },
    visible: { 
      x: 0, 
      y: 0, 
      opacity: 1, 
      transition: { 
        type: 'spring',
        stiffness: 200, // Increased from 100 to 200
        damping: 12,    // Reduced from 15 to 12
        duration: 0.2   // Added duration
      } 
    }
  });

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1, 
      transition: { 
        type: 'spring',
        stiffness: 400,  // Increased from 300 to 400
        damping: 15,     // Reduced from 20 to 15
        duration: 0.2    // Added duration
      } 
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05 // Reduced from 0.1 to 0.05
      }
    }
  };

  // Update button hover animations
  const buttonHoverProps = {
    whileHover: { scale: 1.05, transition: { duration: 0.1 } },
    whileTap: { scale: 0.95, transition: { duration: 0.1 } }
  };

  // Update event animations
  const eventAnimationProps = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.15 } }
  };

  // Update dropdown animations
  const dropdownAnimationProps = {
    initial: { opacity: 0, y: -10 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.15 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.1 } }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-200`}
    >
      <div className="container mx-auto px-4 py-4 h-[calc(100vh-64px)] flex flex-col">
        <motion.div variants={slideIn('down')} className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold">
            {selectedDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </h2>
          <div className="flex items-center">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedDate(new Date())} 
              className={`mr-2 px-3 py-1 ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded transition-colors duration-200`}
            >
              Today
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const newDate = new Date(selectedDate);
                newDate.setDate(newDate.getDate() - 7);
                setSelectedDate(newDate);
              }}
              className={`mr-1 p-1 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200`}
            >
              <ChevronLeft size={24} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                const newDate = new Date(selectedDate);
                newDate.setDate(newDate.getDate() + 7);
                setSelectedDate(newDate);
              }}
              className={`p-1 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'} transition-colors duration-200`}
            >
              <ChevronRight size={24} />
            </motion.button>
          </div>
        </motion.div>
        <div className="flex flex-1 overflow-hidden">
          <motion.div variants={slideIn('left')} className="flex-grow mr-4">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg p-4 h-[calc(100vh-96px)] overflow-y-auto`}>
              <motion.div variants={staggerChildren} className="grid grid-cols-8 gap-1">
                <div className="col-span-1"></div>
                {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day, index) => (
                  <motion.div 
                    key={day} 
                    variants={scaleIn}
                    className={`text-center font-semibold ${
                      weekDates[index].toDateString() === new Date().toDateString() 
                        ? (isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-200 text-blue-800') 
                        : ''
                    } rounded`}
                  >
                    {day}
                    <div className={`text-sm ${
                      weekDates[index].toDateString() === new Date().toDateString() ? 'font-bold' : ''
                    }`}>
                      {weekDates[index].getDate()}
                    </div>
                  </motion.div>
                ))}
                {Array.from({ length: 13 }, (_, i) => i + 8).map(hour => (
                  <React.Fragment key={hour}>
                    <motion.div variants={slideIn('left')} className="text-right pr-2 text-sm">{hour % 12 || 12} {hour >= 12 ? 'PM' : 'AM'}</motion.div>
                    {weekDates.map(date => (
                      <motion.div 
                        key={date.toISOString()} 
                        variants={scaleIn}
                        className={`border ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} min-h-[60px] relative ${
                          date.toDateString() === new Date().toDateString() 
                            ? (isDarkMode ? 'bg-blue-900 bg-opacity-30' : 'bg-blue-100') 
                            : ''
                        }`}
                      >
                        <AnimatePresence>
                          {getEventsForDateAndHour(date, hour).map(event => (
                            <motion.div
                              key={event.id}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                              className="absolute inset-0 m-1 p-1 text-xs rounded overflow-hidden flex flex-col justify-between"
                              style={{ backgroundColor: event.color }}
                            >
                              <div>
                                <span className="font-bold text-black">{event.title}</span>
                                <span className="ml-1 text-gray-700">({event.time})</span>
                              </div>
                              <p className="text-gray-700 truncate">{event.description}</p>
                              <motion.button
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  deleteEvent(event.id);
                                }}
                                className="absolute top-0 right-0 text-red-500 hover:text-red-700"
                              >
                                <Trash2 size={12} />
                              </motion.button>
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </motion.div>
                    ))}
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </motion.div>
          <motion.div 
            variants={slideIn('right')}
            className="w-1/3"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl shadow-2xl p-4 h-[calc(100vh-96px)] flex flex-col relative`}
            >
              <div className="flex justify-between items-center mb-4">
                <h1 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>My Schedule</h1>
                <div className="relative">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsWidgetDropdownOpen(!isWidgetDropdownOpen)}
                    className={`flex items-center px-3 py-1 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded transition-colors duration-200`}
                  >
                    Widgets <ChevronDown size={16} className="ml-1" />
                  </motion.button>
                  <AnimatePresence>
                    {isWidgetDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`absolute right-0 mt-2 w-48 rounded-md shadow-lg ${isDarkMode ? 'bg-gray-800' : 'bg-white'} ring-1 ring-black ring-opacity-5 z-10`}
                      >
                        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                          <button onClick={() => { setActiveWidget('weather'); setIsWidgetDropdownOpen(false); }} className={`block w-full text-left px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} flex items-center`} role="menuitem">
                            <Cloud className="mr-2" size={16} /> Weather Forecast
                          </button>
                          <button onClick={() => { setActiveWidget('clock'); setIsWidgetDropdownOpen(false); }} className={`block w-full text-left px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} flex items-center`} role="menuitem">
                            <Clock className="mr-2" size={16} /> Clock
                          </button>
                          <button onClick={() => { setActiveWidget('spotify'); setIsWidgetDropdownOpen(false); }} className={`block w-full text-left px-4 py-2 text-sm ${isDarkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-100'} flex items-center`} role="menuitem">
                            <Music className="mr-2" size={16} /> Spotify Music Player
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <motion.div 
                variants={scaleIn}
                className="flex-none"
              >
                {activeWidget === 'clock' && <ClockWidget />}
                {activeWidget === 'weather' && <WeatherForecast />}
                {activeWidget === 'spotify' && <SpotifyPlayer />}
              </motion.div>
              <motion.div 
                variants={slideIn('up')}
                className="mt-4 flex-grow"
              >
                <h2 className={`text-xl font-semibold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>Add Event</h2>
                <motion.div variants={staggerChildren} className="space-y-2 mb-2">
                  <input
                    type="text"
                    placeholder="Event title"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                    className={`w-full p-2 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'}`}
                  />
                  <textarea
                    placeholder="Event description"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                    className={`w-full p-2 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'}`}
                    rows={3}
                  />
                  <input
                    type="date"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
                    className={`w-full p-2 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'}`}
                  />
                  <div className="flex space-x-2">
                    <input
                      type="time"
                      value={newEvent.time}
                      onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })}
                      className={`flex-grow p-2 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'}`}
                    />
                    <select
                      value={newEvent.period}
                      onChange={(e) => setNewEvent({ ...newEvent, period: e.target.value as 'AM' | 'PM' })}
                      className={`p-2 rounded-md ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-white text-gray-800'}`}
                    >
                      <option value="AM">AM</option>
                      <option value="PM">PM</option>
                    </select>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      if (newEvent.title && newEvent.time && newEvent.date) {
                        const [hours, minutes] = newEvent.time.split(':').map(Number);
                        let eventHours = hours;
                        if (newEvent.period === 'PM' && hours !== 12) {
                          eventHours += 12;
                        } else if (newEvent.period === 'AM' && hours === 12) {
                          eventHours = 0;
                        }
                        const eventDate = new Date(newEvent.date);
                        eventDate.setHours(eventHours, minutes, 0, 0);
                        
                        const newEventObj: Event = {
                          id: Date.now().toString(),
                          title: newEvent.title,
                          description: newEvent.description,
                          time: `${eventHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`,
                          date: eventDate,
                          color: getRandomPastelColor(),
                        };
                        console.log('Adding new event:', newEventObj);
                        setEvents(prevEvents => [...prevEvents, newEventObj]);
                        setNewEvent({ 
                          title: '', 
                          description: '',
                          time: '', 
                          period: 'AM',
                          date: new Date().toISOString().split('T')[0]
                        });
                      }
                    }}
                    className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 mt-2"
                  >
                    Add Event
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Schedule;
