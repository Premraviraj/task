import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Zap, Calendar, Clipboard, Package, BarChart2, Users, UserCircle2, Settings, HelpCircle } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="bg-white w-80 h-full flex flex-col">
      <div className="p-4 flex items-center">
        <div className="bg-indigo-600 rounded-lg p-4">
          <span className="text-white font-bold">weihu</span>
        </div>
      </div>
      <nav className="flex-1 px-2 py-4 space-y-2">
        <SidebarItem icon={<Clipboard />} text="Tasks"to="/" active={location.pathname === '/'} />
        <SidebarItem icon={<Zap />} text="Activities" to="/activities" active={location.pathname === '/activities'} />
        <div className="pt-4 pb-2">
          <p className="px-4 text-xs font-bold text-gray-400 uppercase">MAIN</p>
        </div>
        <SidebarItem icon={<LayoutDashboard />} text="Dashboard" to="/dashboard" active={location.pathname === '/dashboard'} />
        <SidebarItem icon={<Calendar />} text="Schedule" to="/schedule" active={location.pathname === '/schedule'} />
        <SidebarItem icon={<Clipboard />} text="Note" to="/note" active={location.pathname === '/note'} />
        <SidebarItem icon={<BarChart2 />} text="Report" to="/report" active={location.pathname === '/report'} />
        <div className="pt-4 pb-2">
          <p className="px-4 text-xs font-bold text-gray-400 uppercase">RECORDS</p>
        </div>
        <SidebarItem icon={<Users />} text="Team" to="/team" active={location.pathname === '/team'} />
        <SidebarItem icon={<UserCircle2 />} text="Clients" to="/clients" active={location.pathname === '/clients'} />
        <SidebarItem icon={<Settings />} text="Settings" to="/settings" active={location.pathname === '/settings'} />
        <SidebarItem icon={<HelpCircle />} text="Support" to="/support" active={location.pathname === '/support'} />
      </nav>
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center">
          <img src="https://demo-source.imgix.net/head_shot.jpg" alt="User" className="w-8 h-8 rounded-full mr-0" />
          <div>
            <p className="text-sm font-medium">Prem R</p>
            <p className="text-xs text-gray-500">premraviraj2004@gmail.com</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

const SidebarItem = ({ icon, text, count, to, active }: { icon: React.ReactNode; text: string; count?: number; to: string; active: boolean }) => {
  return (
    <Link to={to} className={`flex items-center px-4 py-2 text-sm font-medium rounded-md ${active ? 'bg-indigo-100 text-indigo-600' : 'text-gray-600 hover:bg-gray-100'}`}>
      {icon}
      <span className="ml-3">{text}</span>
      {count && <span className={`ml-auto ${active ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-800'} py-0.5 px-2 rounded-full text-xs`}>{count}</span>}
    </Link>
  );
};

export default Sidebar;