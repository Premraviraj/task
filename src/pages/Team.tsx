import React, { useState } from 'react'
import { Heart, MoreHorizontal, LayoutGrid, LayoutList } from 'lucide-react'

interface TeamMember {
  id: number
  name: string
  email: string
  imageUrl: string
  isFavorite: boolean
}

const TeamMemberCard: React.FC<{ member: TeamMember; onToggleFavorite: (id: number) => void }> = ({ member, onToggleFavorite }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center relative">
      <button 
        className="absolute top-2 left-2 text-gray-400 hover:text-blue-500 transition-colors"
        onClick={() => onToggleFavorite(member.id)}
      >
        <Heart className={`w-5 h-5 ${member.isFavorite ? 'fill-blue-500 text-blue-500' : ''}`} />
      </button>
      <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors">
        <MoreHorizontal className="w-5 h-5" />
      </button>
      <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover" />
      <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
      <p className="text-sm text-gray-500">{member.email}</p>
    </div>
  )
}

export default function TeamMembersDisplay() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([
    { id: 1, name: "Allyson Booker", email: "allyson.booker@gmail.com", imageUrl: "https://i.pravatar.cc/150?img=${i + 1}", isFavorite: true },
    { id: 2, name: "Nikolas Cabrera", email: "nikolas.cabrera@gmail.com", imageUrl: "https://i.pravatar.cc/150?img=61/150?img=${i + 1}", isFavorite: false },
    { id: 3, name: "Cristofer Leblanc", email: "cristofer.leblanc@gmail.com", imageUrl: "https://i.pravatar.cc/150?img=45/150?img=${i + 1}", isFavorite: true },
    { id: 4, name: "Jordan Villarreal", email: "jordan.villarreal@gmail.com", imageUrl: "https://i.pravatar.cc/150?img=63c/150?img=8/150?img=${i + 1}", isFavorite: false },
    { id: 5, name: "Damon Baxter", email: "damon.baxter@gmail.com", imageUrl: "https://i.pravatar.cc/150?img=${i + 1}", isFavorite: false },
    { id: 6, name: "Bryant Diaz", email: "bryant.diaz@gmail.com", imageUrl: "https://i.pravatar.cc/150?img=64/150?img=${i + 1}", isFavorite: true },
    { id: 7, name: "Patience Harrington", email: "patience.harrington@gmail.com", imageUrl: "https://i.pravatar.cc/150?img=38/150?img=${i + 1}", isFavorite: true },
    { id: 8, name: "Cristian Mullins", email: "cristian.mullins@gmail.com", imageUrl: "https://i.pravatar.cc/150?img=54/150?img=22/150?img=${i + 1}", isFavorite: true },
    { id: 9, name: "Kira Collier", email: "kira.collier@gmail.com", imageUrl: "https://i.pravatar.cc/150?img=54/150?img=${i + 1}", isFavorite: false },
    { id: 10, name: "Jaelyn Ferrell", email: "jaelyn.ferrell@gmail.com", imageUrl: "https://i.pravatar.cc/150?img=38c/150?img=${i + 1}", isFavorite: true },
    { id: 11, name: "Ross Jordan", email: "ross.jordan@gmail.com", imageUrl: "https://i.pravatar.cc/150?img=36/150?img=${i + 1}", isFavorite: false },
    { id: 12, name: "Monica Dickerson", email: "monica.dickerson@gmail.com", imageUrl: "https://i.pravatar.cc/150?img=78/150?img=${i + 1}", isFavorite: false },
  ])

  const toggleFavorite = (id: number) => {
    setTeamMembers(members =>
      members.map(member =>
        member.id === id ? { ...member, isFavorite: !member.isFavorite } : member
      )
    )
  }

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center mb-8">
          <div className="bg-blue-500 text-white p-2 rounded mr-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Team Members</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map(member => (
            <TeamMemberCard key={member.id} member={member} onToggleFavorite={toggleFavorite} />
          ))}
        </div>
      </div>
    </div>
  )
}