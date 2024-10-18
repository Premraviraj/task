import React, { useState } from 'react'
import { Search, Grid, List, Plus, Clock, Users } from 'lucide-react'

interface Project {
  id: number
  name: string
  icon: string
  iconColor: string
  team: string
  timeLeft: string
  teamMembers: string[]
  progress: number
}

const projects: Project[] = [
  { id: 1, name: "App Development", icon: "📱", iconColor: "bg-pink-500", team: "Marketing Team", timeLeft: "1 Week Left", teamMembers: ["https://i.pravatar.cc/32?img=1", "https://i.pravatar.cc/32?img=2", "https://i.pravatar.cc/32?img=3"], progress: 34 },
  { id: 2, name: "Web Design", icon: "🖥️", iconColor: "bg-emerald-500", team: "Core UI Team", timeLeft: "2 Weeks Left", teamMembers: ["https://i.pravatar.cc/32?img=4"], progress: 76 },
  { id: 3, name: "Landing Page", icon: "🌐", iconColor: "bg-blue-500", team: "Marketing Team", timeLeft: "2 Days Left", teamMembers: ["https://i.pravatar.cc/32?img=5", "https://i.pravatar.cc/32?img=6", "https://i.pravatar.cc/32?img=7"], progress: 4 },
  { id: 4, name: "Business Compare", icon: "📊", iconColor: "bg-orange-500", team: "Marketing Team", timeLeft: "1 Month Left", teamMembers: ["https://i.pravatar.cc/32?img=8", "https://i.pravatar.cc/32?img=9"], progress: 90 },
  { id: 5, name: "Comerce Checkout", icon: "🛒", iconColor: "bg-purple-500", team: "Online Process Team", timeLeft: "1 Week Left", teamMembers: ["https://i.pravatar.cc/32?img=10"], progress: 65 },
  { id: 6, name: "Data Staging", icon: "📊", iconColor: "bg-orange-500", team: "Core Data Team", timeLeft: "2 Weeks Left", teamMembers: ["https://i.pravatar.cc/32?img=11", "https://i.pravatar.cc/32?img=12"], progress: 90 },
  { id: 7, name: "Campaign Store", icon: "🏪", iconColor: "bg-sky-500", team: "Internal Communication", timeLeft: "11 Days Left", teamMembers: ["https://i.pravatar.cc/32?img=13", "https://i.pravatar.cc/32?img=14"], progress: 24 },
  { id: 8, name: "Acquisition Mitra", icon: "🤝", iconColor: "bg-pink-500", team: "Marketing Team", timeLeft: "1 Week Left", teamMembers: ["https://i.pravatar.cc/32?img=15"], progress: 75 },
]

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-white rounded-lg shadow-md p-6">
    <div className="flex items-center mb-4">
      <div className={`w-10 h-10 rounded-full ${project.iconColor} flex items-center justify-center text-white text-xl mr-4`}>
        {project.icon}
      </div>
      <div>
        <h3 className="font-semibold text-lg">{project.name}</h3>
        <p className="text-gray-500 text-sm flex items-center">
          <Users className="w-4 h-4 mr-1" />
          {project.team}
        </p>
      </div>
    </div>
    <p className="text-gray-500 text-sm flex items-center mb-4">
      <Clock className="w-4 h-4 mr-1" />
      {project.timeLeft}
    </p>
    <div className="flex justify-between items-center mb-2">
      <div className="flex -space-x-2">
        {project.teamMembers.map((member, index) => (
          <img
            key={index}
            src={member}
            alt={`Team member ${index + 1}`}
            className="w-8 h-8 rounded-full border-2 border-white"
          />
        ))}
      </div>
      <span className="text-gray-600 font-semibold">{project.progress}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className="bg-blue-600 h-2 rounded-full"
        style={{ width: `${project.progress}%` }}
      ></div>
    </div>
  </div>
)

const FilterButton: React.FC<{ label: string; count: number; active: boolean; onClick: () => void }> = ({ label, count, active, onClick }) => (
  <button
    className={`flex items-center px-4 py-2 rounded-full ${
      active ? 'bg-blue-100 text-blue-600' : 'text-gray-600 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    <span className="mr-2">{label}</span>
    <span className="bg-gray-200 text-gray-600 rounded-full px-2 py-1 text-xs">{count}</span>
  </button>
)

export default function ReportingDashboard() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projects.filter(project =>
    project.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">Reporting</h1>
            <p className="text-gray-500">All projects in current month</p>
          </div>
          <button className="bg-blue-500 text-white p-2 rounded-lg">
            <Plus className="w-6 h-6" />
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <FilterButton label="All" count={projects.length} active={activeFilter === 'All'} onClick={() => setActiveFilter('All')} />
              <FilterButton label="Started" count={5} active={activeFilter === 'Started'} onClick={() => setActiveFilter('Started')} />
              <FilterButton label="Approve" count={2} active={activeFilter === 'Approve'} onClick={() => setActiveFilter('Approve')} />
              <FilterButton label="Completed" count={3} active={activeFilter === 'Completed'} onClick={() => setActiveFilter('Completed')} />
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 bg-gray-100 rounded-md">
                <Grid className="w-5 h-5 text-gray-600" />
              </button>
              <button className="p-2 bg-gray-100 rounded-md">
                <List className="w-5 h-5 text-gray-600" />
              </button>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}