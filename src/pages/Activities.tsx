import React, { useState, useMemo, useEffect } from 'react';
import { Mail, Twitter, Facebook, ChevronDown, ChevronUp, PlusCircle, X, Trash2 } from 'lucide-react';
import { useSpring, animated, config } from 'react-spring';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ActivitiesProps {
  isDarkMode: boolean;
}
interface Email {
  id: string;
  time: string;
  sender: string;
  subject: string;
  status: 'Drafted' | 'Sent' | 'Received';
}

interface StockData {
  symbol: string;
  name: string;
  data: {
    date: string;
    price: number;
  }[];
}

interface StockNews {
  title: string;
  url: string;
}

const mockEmails: Email[] = [
  { id: '1', time: '11:11 am', sender: 'thegrover@example.com', subject: 'Project Update', status: 'Drafted' },
  { id: '2', time: '10:12 am', sender: 'thuy@example.com', subject: 'Meeting Reminder', status: 'Sent' },
  { id: '3', time: '10:00 am', sender: 'taylor@example.com', subject: 'New Feature Proposal', status: 'Drafted' },
  { id: '4', time: '09:43 am', sender: 'wendy@example.com', subject: 'Client Feedback', status: 'Received' },
  { id: '5', time: '06:15 am', sender: 'petrichor@example.com', subject: 'Weekly Report', status: 'Drafted' },
  { id: '6', time: '05:30 pm', sender: 'john@example.com', subject: 'Product Launch Plan', status: 'Drafted' },
  { id: '7', time: '04:45 pm', sender: 'sarah@example.com', subject: 'Budget Proposal', status: 'Drafted' },
  { id: '8', time: '03:20 pm', sender: 'mike@example.com', subject: 'Team Building Event', status: 'Sent' },
  { id: '9', time: '02:10 pm', sender: 'lisa@example.com', subject: 'Customer Survey Results', status: 'Sent' },
  { id: '10', time: '01:05 pm', sender: 'david@example.com', subject: 'Quarterly Review', status: 'Drafted' },
  { id: '11', time: '12:30 pm', sender: 'emma@example.com', subject: 'New Client Onboarding', status: 'Sent' },
  { id: '12', time: '11:45 am', sender: 'alex@example.com', subject: 'Website Redesign', status: 'Drafted' },
  { id: '13', time: '11:20 am', sender: 'olivia@example.com', subject: 'Marketing Strategy', status: 'Drafted' },
  { id: '14', time: '10:55 am', sender: 'daniel@example.com', subject: 'Sales Forecast', status: 'Drafted' },
  { id: '15', time: '10:30 am', sender: 'sophia@example.com', subject: 'HR Policy Update', status: 'Drafted' },
  { id: '16', time: '10:05 am', sender: 'ethan@example.com', subject: 'IT Infrastructure Upgrade', status: 'Drafted' },
  { id: '17', time: '09:40 am', sender: 'ava@example.com', subject: 'Customer Feedback Analysis', status: 'Drafted' },
  { id: '18', time: '09:15 am', sender: 'noah@example.com', subject: 'Product Roadmap', status: 'Drafted' },
];

const deliveryData = [
  { day: 'Mon', Delivered: 20, Failed: 5, Undeliverable: 2, Bounced: 1, Suppressed: 1 },
  { day: 'Tue', Delivered: 25, Failed: 4, Undeliverable: 3, Bounced: 2, Suppressed: 1 },
  { day: 'Wed', Delivered: 30, Failed: 3, Undeliverable: 2, Bounced: 1, Suppressed: 1 },
  { day: 'Thu', Delivered: 28, Failed: 6, Undeliverable: 3, Bounced: 2, Suppressed: 1 },
  { day: 'Fri', Delivered: 35, Failed: 4, Undeliverable: 2, Bounced: 1, Suppressed: 1 },
  { day: 'Sat', Delivered: 22, Failed: 3, Undeliverable: 2, Bounced: 1, Suppressed: 1 },
  { day: 'Sun', Delivered: 18, Failed: 2, Undeliverable: 1, Bounced: 1, Suppressed: 1 },
];

const statusColors = {
  Delivered: '#3B82F6',
  Failed: '#93C5FD',
  Undeliverable: '#DBEAFE',
  Bounced: '#EFF6FF',
  Suppressed: '#F9FAFB',
};

const performanceData = [
  { label: 'Opened', value: 24.1, color: '#F59E0B' },
  { label: 'Clicked', value: 16.1, color: '#8B5CF6' },
  { label: 'Converted', value: 12.5, color: '#EC4899' },
  { label: 'Sent', value: 0.1, change: 0.3, increase: true },
  { label: 'Unsubscribed', value: 0.2, change: 0.1, increase: true },
  { label: 'Archived', value: 0.3, change: 0.7, increase: true },
  { label: 'Mark as spam', value: 0.4, change: 1.5, increase: true },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const RadarChart: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const size = 300;
  const center = size / 2;
  const radius = size * 0.4;
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  const points = [
    { x: center + radius * Math.cos(Math.PI / 6), y: center - radius * Math.sin(Math.PI / 6) },
    { x: center + radius * Math.cos(Math.PI / 2), y: center - radius * Math.sin(Math.PI / 2) },
    { x: center + radius * Math.cos(5 * Math.PI / 6), y: center - radius * Math.sin(5 * Math.PI / 6) },
    { x: center + radius * Math.cos(7 * Math.PI / 6), y: center - radius * Math.sin(7 * Math.PI / 6) },
    { x: center + radius * Math.cos(3 * Math.PI / 2), y: center - radius * Math.sin(3 * Math.PI / 2) },
    { x: center + radius * Math.cos(11 * Math.PI / 6), y: center - radius * Math.sin(11 * Math.PI / 6) },
  ];

  const dataPoints = [
    { x: center + radius * 0.8 * Math.cos(Math.PI / 6), y: center - radius * 0.8 * Math.sin(Math.PI / 6) },
    { x: center + radius * 0.9 * Math.cos(Math.PI / 2), y: center - radius * 0.9 * Math.sin(Math.PI / 2) },
    { x: center + radius * 0.7 * Math.cos(5 * Math.PI / 6), y: center - radius * 0.7 * Math.sin(5 * Math.PI / 6) },
    { x: center + radius * 0.6 * Math.cos(7 * Math.PI / 6), y: center - radius * 0.6 * Math.sin(7 * Math.PI / 6) },
    { x: center + radius * 0.8 * Math.cos(3 * Math.PI / 2), y: center - radius * 0.8 * Math.sin(3 * Math.PI / 2) },
    { x: center + radius * 0.9 * Math.cos(11 * Math.PI / 6), y: center - radius * 0.9 * Math.sin(11 * Math.PI / 6) },
  ];

  const areaAnimation = useSpring({
    from: { opacity: 0, scale: 0 },
    to: { opacity: 0.5, scale: 1 },
    config: { tension: 300, friction: 10 },
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      <rect x="0" y="0" width={size} height={size} fill={isDarkMode ? '#1F2937' : '#f0f0f0'} />

      <polygon 
        points={points.map(p => `${p.x},${p.y}`).join(' ')} 
        fill="none" 
        stroke={isDarkMode ? '#4B5563' : '#ccc'} 
        strokeWidth="2"
      />
      
      <animated.polygon 
        points={dataPoints.map(p => `${p.x},${p.y}`).join(' ')} 
        fill={isDarkMode ? 'rgba(59, 130, 246, 0.5)' : '#90EE90'} 
        stroke={isDarkMode ? '#3B82F6' : '#90EE90'} 
        strokeWidth="2"
        style={{
          opacity: areaAnimation.opacity,
          transform: areaAnimation.scale.to(s => `scale(${s})`),
          transformOrigin: 'center',
        }}
      />
      
      {points.map((point, index) => (
        <React.Fragment key={index}>
          <line 
            x1={center}
            y1={center}
            x2={point.x}
            y2={point.y}
            stroke={isDarkMode ? '#4B5563' : '#ccc'}
            strokeWidth="1"
          />
          <animated.text 
            x={point.x + (point.x > center ? 15 : -15)} 
            y={point.y + (point.y > center ? 15 : -15)} 
            textAnchor={point.x > center ? "start" : "end"} 
            dominantBaseline={point.y > center ? "hanging" : "text-bottom"}
            fontSize="12"
            fill={isDarkMode ? '#D1D5DB' : '#666'}
            style={{
              opacity: useSpring({ from: 0, to: 1, delay: index * 100 }).opacity,
            }}
          >
            0{index + 1}
          </animated.text>
        </React.Fragment>
      ))}

      {[
        { cx: center, cy: center - radius * 0.8, r: 20, fill: "#3b82f6" },
        { cx: center + radius * 0.7, cy: center, r: 15, fill: "#8b5cf6" },
        { cx: center - radius * 0.7, cy: center, r: 15, fill: "#ec4899" },
        { cx: center, cy: center + radius * 0.6, r: 15, fill: "#f59e0b" },
      ].map((circle, index) => (
        <animated.circle
          key={index}
          {...circle}
          onMouseEnter={() => setHoveredPoint(index)}
          onMouseLeave={() => setHoveredPoint(null)}
          style={{
            transform: useSpring({
              scale: hoveredPoint === index ? 1.2 : 1,
              config: { tension: 300, friction: 10 },
            }).scale.to(s => `scale(${s})`),
            transformOrigin: 'center',
          }}
        />
      ))}
    </svg>
  );
};

const AnimatedNumber: React.FC<{ n: number }> = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: config.molasses,
  });
  return <animated.span>{number.to((n) => n.toFixed(1))}</animated.span>;
};

const JourneyMetricsChart: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const metrics = [
    { label: 'Sent', value: 100.0 },
    { label: 'Opened', value: 30.6 },
    { label: 'Clicked', value: 2.4 },
    { label: 'Click to open', value: 4.3 },
    { label: 'Mark as spam', value: 1.5 },
  ];

  const generateGraph = () => {
    const bars = [];
    for (let i = 0; i < 300; i++) {
      const height = Math.random() * 100;
      bars.push(
        <div key={i} className="w-0.5 bg-blue-200" style={{ height: `${height}%` }}></div>
      );
    }
    return bars;
  };

  const currentDate = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-lg p-6`}>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Journey Metrics</h2>
        <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{currentDate}</span>
      </div>
      <div className="grid grid-cols-5 gap-4 mb-6">
        {metrics.map((metric, index) => (
          <div key={index} className="text-center">
            <div className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{metric.label}</div>
            <div className="text-lg font-bold">{metric.value.toFixed(1)}%</div>
          </div>
        ))}
      </div>
      <div className="h-24 flex items-end space-x-px">
        {generateGraph()}
      </div>
    </div>
  );
};

const generateHistoricalData = (startYear: number, endYear: number, initialPrice: number) => {
  const data = [];
  let currentPrice = initialPrice;
  for (let year = startYear; year <= endYear; year++) {
    for (let month = 0; month < 12; month++) {
      const date = new Date(year, month, 1);
      const volatility = 0.02; // 2% daily volatility
      const randomChange = Math.random() * 2 - 1; // Random number between -1 and 1
      const percentageChange = randomChange * volatility;
      currentPrice = currentPrice * (1 + percentageChange);
      
      // Add some longer-term trends
      if (year % 4 === 0) currentPrice *= 1.1; // Simulate growth every 4 years
      if (year === 2008) currentPrice *= 0.7; // Simulate 2008 financial crisis
      
      data.push({
        date: date.toISOString().split('T')[0],
        price: currentPrice
      });
    }
  }
  return data;
};

const StockSection: React.FC<{ isDarkMode: boolean }> = ({ isDarkMode }) => {
  const [stocks, setStocks] = useState<StockData[]>([
    { symbol: 'AAPL', name: 'Apple Inc.', data: generateHistoricalData(1992, new Date().getFullYear(), 0.64) },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', data: generateHistoricalData(2004, new Date().getFullYear(), 50) },
    { symbol: 'MSFT', name: 'Microsoft Corporation', data: generateHistoricalData(1992, new Date().getFullYear(), 2.41) },
  ]);

  const [showNewStocks, setShowNewStocks] = useState(false);
  const [stockNews, setStockNews] = useState<StockNews[]>([]);

  const newStocks: StockData[] = [
    { symbol: 'AMZN', name: 'Amazon.com Inc.', data: generateHistoricalData(1997, new Date().getFullYear(), 1.73) },
    { symbol: 'TSLA', name: 'Tesla Inc.', data: generateHistoricalData(2010, new Date().getFullYear(), 17) },
    { symbol: 'FB', name: 'Meta Platforms Inc.', data: generateHistoricalData(2012, new Date().getFullYear(), 38) },
    { symbol: 'NVDA', name: 'NVIDIA Corporation', data: generateHistoricalData(1999, new Date().getFullYear(), 1.64) },
    { symbol: 'JPM', name: 'JPMorgan Chase & Co.', data: generateHistoricalData(1980, new Date().getFullYear(), 25.33) },
    { symbol: 'V', name: 'Visa Inc.', data: generateHistoricalData(2008, new Date().getFullYear(), 44) },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setStocks(prevStocks => 
        prevStocks.map(stock => {
          const lastPrice = stock.data[stock.data.length - 1].price;
          const change = (Math.random() - 0.5) * 2; // Random change between -1% and 1%
          const newPrice = lastPrice * (1 + change / 100);
          
          return {
            ...stock,
            data: [
              ...stock.data,
              { date: new Date().toISOString().split('T')[0], price: newPrice }
            ]
          };
        })
      );
    }, 2000); // Update every 2 seconds

    return () => clearInterval(interval); // Clean up on component unmount
  }, []);

  const blueColor = isDarkMode ? '#3B82F6' : '#2563EB';

  const formatLargeNumber = (num: number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(2) + 'B';
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(2) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(2) + 'K';
    }
    return num.toFixed(2);
  };

  const handleAddStocks = () => {
    setShowNewStocks(true);
    // Simulating fetching more news
    setStockNews([
      { title: "Amazon's new AI initiative boosts productivity", url: "#" },
      { title: "Tesla's record-breaking quarter exceeds expectations", url: "#" },
      { title: "Meta's VR breakthrough: A new era of social interaction", url: "#" },
      { title: "NVIDIA's latest GPU release sets new performance standards", url: "#" },
      { title: "JPMorgan's fintech acquisition reshapes banking landscape", url: "#" },
      { title: "Visa's blockchain adoption streamlines cross-border payments", url: "#" },
      { title: "Apple unveils next-generation iPhone with revolutionary features", url: "#" },
      { title: "Google's quantum computing milestone: A leap into the future", url: "#" },
      { title: "Microsoft's cloud services see unprecedented growth", url: "#" },
      { title: "Netflix introduces AI-powered content recommendations", url: "#" },
      { title: "SpaceX successfully launches largest satellite constellation", url: "#" },
      { title: "Intel's new chip architecture promises 50% performance boost", url: "#" },
      { title: "Uber expands into autonomous delivery services", url: "#" },
      { title: "Airbnb partners with local governments to promote sustainable tourism", url: "#" },
      { title: "Twitter implements advanced AI for content moderation", url: "#" }
    ]);
  };

  const handleAddStock = (stock: StockData) => {
    setStocks(prevStocks => [...prevStocks, stock]);
    setNewStocks(prevNewStocks => prevNewStocks.filter(s => s.symbol !== stock.symbol));
  };

  const handleCloseNewStocks = () => {
    setShowNewStocks(false);
    setStockNews([]);
  };

  const handleRemoveStock = (symbol: string) => {
    setStocks(prevStocks => prevStocks.filter(stock => stock.symbol !== symbol));
  };

  return (
    <div className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} rounded-lg shadow-lg p-6 mt-4`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Stocks (Live Data)</h2>
        <button 
          onClick={handleAddStocks}
          className={`p-1 rounded-full ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-200'}`}
        >
          <PlusCircle size={24} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
        </button>
      </div>
      
      {/* Existing Stocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stocks.map((stock) => {
          const latestPrice = stock.data[stock.data.length - 1].price;
          const previousPrice = stock.data[stock.data.length - 2].price;
          const priceChange = latestPrice - previousPrice;
          const percentChange = (priceChange / previousPrice) * 100;

          return (
            <div 
              key={stock.symbol} 
              className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} p-4 rounded-lg relative`}
            >
              <button 
                onClick={() => handleRemoveStock(stock.symbol)}
                className={`absolute top-2 right-2 p-1 rounded-full ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-200'}`}
                title="Remove stock"
              >
                <Trash2 size={16} className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />
              </button>
              <div className="flex justify-between items-center mb-2">
                <div>
                  <h3 className="font-bold">{stock.symbol}</h3>
                  <p className="text-sm text-gray-500">{stock.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${formatLargeNumber(latestPrice)}</p>
                  <p className={`text-sm ${priceChange >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                    {priceChange >= 0 ? '+' : ''}{formatLargeNumber(priceChange)} ({percentChange.toFixed(2)}%)
                  </p>
                </div>
              </div>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={stock.data.slice(-100)}>
                    <XAxis 
                      dataKey="date" 
                      tick={{fontSize: 10}} 
                      tickFormatter={(tick) => new Date(tick).toLocaleDateString()}
                    />
                    <YAxis 
                      domain={['auto', 'auto']}
                      tickFormatter={(tick) => formatLargeNumber(tick)}
                    />
                    <Tooltip
                      contentStyle={{ backgroundColor: isDarkMode ? '#374151' : '#ffffff', border: 'none' }}
                      labelStyle={{ color: isDarkMode ? '#ffffff' : '#000000' }}
                      formatter={(value: number) => [`$${formatLargeNumber(value)}`, 'Price']}
                      labelFormatter={(label: string) => new Date(label).toLocaleString()}
                    />
                    <Line type="monotone" dataKey="price" stroke={blueColor} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          );
        })}
      </div>

      {/* New Stocks and News */}
      {showNewStocks && (
        <div className={`mt-4 p-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg`}>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">New Stocks</h3>
            <button onClick={handleCloseNewStocks}>
              <X size={20} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {newStocks.map((stock) => (
              <div key={stock.symbol} className={`p-4 ${isDarkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg`}>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <h4 className="font-bold">{stock.symbol}</h4>
                    <p className="text-sm text-gray-500">{stock.name}</p>
                  </div>
                  <button 
                    onClick={() => handleAddStock(stock)}
                    className={`px-2 py-1 rounded ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white`}
                  >
                    Add
                  </button>
                </div>
                <div className="h-24">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={stock.data.slice(-30)}>
                      <Line type="monotone" dataKey="price" stroke="#3B82F6" dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Latest News</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {stockNews.map((news, index) => (
                <div key={index} className={`p-4 ${isDarkMode ? 'bg-gray-600' : 'bg-white'} rounded-lg`}>
                  <a 
                    href={news.url} 
                    className={`text-blue-500 hover:underline ${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-600'}`}
                  >
                    {news.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const Activities: React.FC<ActivitiesProps> = ({ isDarkMode }) => {
  const [emails] = useState<Email[]>(mockEmails);
  const [activeTab, setActiveTab] = useState<'Drafted' | 'Sent' | 'Received'>('Drafted');

  const emailCounts = useMemo(() => {
    return {
      Drafted: emails.filter(email => email.status === 'Drafted').length,
      Sent: emails.filter(email => email.status === 'Sent').length,
      Received: emails.filter(email => email.status === 'Received').length,
    };
  }, [emails]);

  const filteredEmails = emails.filter(email => email.status === activeTab);

  const getColor = (status: string, value: number) => {
    const maxValue = Math.max(...deliveryData.map(d => d[status as keyof typeof d] as number));
    const opacity = value / maxValue;
    return `${statusColors[status as keyof typeof statusColors]}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
  };

  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.slow,
  });

  const slideInLeft = useSpring({
    from: { transform: 'translateX(-50px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    config: config.gentle,
  });

  const slideInRight = useSpring({
    from: { transform: 'translateX(50px)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    config: config.gentle,
  });

  const slideInUp = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: config.gentle,
  });

  return (
    <animated.div style={fadeIn} className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="p-4 grid grid-cols-3 gap-4">
        {/* Email and Delivery Section */}
        <animated.div style={slideInLeft} className="col-span-2 grid grid-cols-2 gap-4">
          {/* Email Content */}
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
            <div className="p-4">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-3">
                  JP
                </div>
                <div>
                  <h2 className="text-lg font-bold">Prem R</h2>
                  <div className="flex items-center text-xs text-gray-500">
                    <Mail size={12} className="mr-1" />
                    <span>premraviraj@gmail.com</span>
                    <Twitter size={12} className="ml-2 mr-1" />
                    <Facebook size={12} className="ml-1" />
                  </div>
                </div>
              </div>
              <div className="flex mb-4">
                {(['Drafted', 'Sent', 'Received'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`mr-3 pb-1 text-sm ${
                      activeTab === tab
                        ? isDarkMode
                          ? 'border-b-2 border-blue-400 text-blue-400'
                          : 'border-b-2 border-blue-500 text-blue-500'
                        : isDarkMode
                        ? 'text-gray-400'
                        : 'text-gray-500'
                    } font-medium`}
                  >
                    {tab} {emailCounts[tab]}
                  </button>
                ))}
              </div>
              <div className="mb-3 flex justify-between items-center text-xs">
                <span className="text-gray-500">Last updated today at 12:14 am</span>
              </div>
              <div className="max-h-64 overflow-y-auto custom-scrollbar">
                <ul>
                  {filteredEmails.map((email, index) => (
                    <li key={email.id} className="email-item flex items-center py-2 text-sm border-b border-gray-200 transition-all duration-300 ease-in-out" style={{animationDelay: `${index * 50}ms`}}>
                      <span className="w-16 text-xs text-gray-500">{email.time}</span>
                      <Mail size={12} className={`mr-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                      <span className="flex-grow text-xs truncate">{email.sender}</span>
                      <span className={`px-1 py-0.5 text-xs rounded ${
                        isDarkMode ? 'bg-yellow-700 text-yellow-200' : 'bg-yellow-200 text-yellow-800'
                      }`}>
                        {email.status}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Delivery Chart */}
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden`}>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">Delivery</h2>
              <p className="text-sm text-gray-500 mb-4">Email - From last 7 days</p>
              <div className="flex mb-4">
                <div className="flex flex-col justify-between text-xs text-right mr-2">
                  <span>100%</span>
                  <span>80%</span>
                  <span>60%</span>
                  <span>40%</span>
                  <span>20%</span>
                  <span>0%</span>
                </div>
                <div className="flex-grow">
                  <div className="grid grid-cols-7 gap-1 mb-1">
                    {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                      <div key={day} className="text-center text-xs font-medium">{day}</div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {deliveryData.map(data => (
                      <div key={data.day} className="grid grid-rows-5 gap-1">
                        {Object.entries(statusColors).map(([status]) => (
                          <div 
                            key={`${data.day}-${status}`} 
                            className="aspect-square rounded-sm" 
                            style={{ 
                              backgroundColor: getColor(status, data[status as keyof typeof data] as number),
                            }}
                          ></div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-500 mt-2">
                {Object.entries(statusColors).map(([status, color]) => (
                  <div key={status} className="flex items-center">
                    <div className="w-3 h-3 rounded-sm mr-1" style={{ backgroundColor: color }}></div>
                    <span>{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Journey Metrics Chart */}
          <animated.div style={slideInUp} className="col-span-2">
            <JourneyMetricsChart isDarkMode={isDarkMode} />
          </animated.div>
        </animated.div>

        {/* Performance and New Feature Section */}
        <animated.div style={slideInRight} className="col-span-1 flex flex-col h-full">
          {/* Performance Chart */}
          <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg overflow-hidden flex-grow`}>
            <div className="p-4 flex flex-col h-full">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-bold">Performance</h2>
              </div>
              <p className="text-sm text-gray-500 mb-4">Email - From last 7 days</p>
              <div className="flex-grow flex flex-col justify-between">
                <div className="w-full aspect-square flex justify-center items-center">
                  <RadarChart isDarkMode={isDarkMode} />
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {performanceData.slice(0, 3).map((item) => (
                    <div key={item.label} className="flex items-center">
                      <div className="w-3 h-3 rounded-sm mr-2" style={{ backgroundColor: item.color }}></div>
                      <span className="text-sm font-medium"><AnimatedNumber n={item.value} />% {item.label}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-2">
                  {performanceData.slice(3).map((item, index) => (
                    <div key={item.label} className="performance-item flex justify-between items-center transition-all duration-300 ease-in-out" style={{animationDelay: `${index * 50}ms`}}>
                      <span className="text-sm"><AnimatedNumber n={item.value} />% {item.label}</span>
                      <div className={`flex items-center ${item.increase ? 'text-green-500' : 'text-red-500'}`}>
                        {item.increase ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        <span className="text-sm"><AnimatedNumber n={item.change} />%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </animated.div>
      </div>

      {/* New Stocks Section */}
      <animated.div style={slideInUp} className="mt-4">
        <StockSection isDarkMode={isDarkMode} />
      </animated.div>
    </animated.div>
  );
};

export default Activities;
