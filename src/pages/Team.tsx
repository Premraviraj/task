import React from 'react';

interface TeamProps {
  isDarkMode: boolean;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  { name: 'Jessica Dobrev', role: 'Backend Lead', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=707b9c33066bf8808c934c8ab394dff6' },
  { name: 'Drew Cano', role: 'Head of UX', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f' },
  { name: 'Sasha Kindred', role: 'VP of Marketing', image: 'https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=aa3a807e1bbdfd4364d1f449eaa96d82' },
  { name: 'Emily Donnavan', role: 'Product Lead', image: 'https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' },
  { name: 'Orlando Diggs', role: 'Co-Founder and COO', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' },
  { name: 'Sophie Chamberlain', role: 'Head of Sales', image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' },
  { name: 'Lana Steiner', role: 'VP of Customer Success', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' },
  { name: 'Emmy Rosum', role: 'Co-Founder and CEO', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ' },
];

const Team: React.FC<TeamProps> = ({ isDarkMode }) => {
  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} py-12 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            We bring a wealth of skills and experience
          </h2>
          <h3 className="text-3xl font-extrabold sm:text-4xl mb-4">
            from a wide range of backgrounds.
          </h3>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Our philosophy is simple: hire great people and give them
            the resources and support to do their best work.
          </p>
        </div>

        <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-4 lg:max-w-none">
          {teamMembers.map((member) => (
            <div key={member.name} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
              <div className="flex-shrink-0 relative overflow-hidden group">
                <img 
                  className="h-48 w-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110" 
                  src={member.image} 
                  alt={member.name} 
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
              </div>
              <div className={`flex-1 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-6 flex flex-col justify-between`}>
                <div className="flex-1">
                  <p className={`text-xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{member.name}</p>
                  <p className={`mt-3 text-base ${isDarkMode ? 'text-gray-300' : 'text-gray-500'}`}>{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
