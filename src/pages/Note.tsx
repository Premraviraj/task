import React, { useState } from 'react'
import { Clock, Inbox, Star, Tag, FileText, Search, Plus, MoreHorizontal } from 'lucide-react'

const NavItem = ({ icon, label, isActive, onClick }) => (
  <button
    className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
      isActive 
        ? 'bg-gray-200 text-gray-900 font-medium' 
        : 'text-gray-600 hover:bg-gray-100'
    }`}
    onClick={onClick}
  >
    {icon}
    <span>{label}</span>
  </button>
)

const NoteCard = ({ content, title, category, onClick }) => (
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer" onClick={onClick}>
    <p className="text-gray-700 mb-4 line-clamp-4">{content}</p>
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <FileText className="w-4 h-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-900">{title}</span>
      </div>
      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{category}</span>
    </div>
  </div>
)

const SearchBar = ({ onSearch }) => {
  return (
    <div className="relative mb-6">
      <input
        type="text"
        placeholder="Search notes..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => onSearch(e.target.value)} />
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
    </div>
  )
}

export default function NotesApp() {
  const [activeNav, setActiveNav] = useState('Recent')
  const [searchTerm, setSearchTerm] = useState('')
  const [notes, setNotes] = useState([
    {
      id: 1,
      content: "Pay attention to continuity between shots. Each shot should logically follow the previous one in terms of action, position, and story progression.",
      title: "Match Action and Continuity",
      category: "Literature"
    },
    {
      id: 2,
      content: "Trust your instincts to select one task each day, whether it's urgent, joyful, or satisfying. This empowers you to create your own reality instead of letting other people dictate your life.",
      title: "Daily Highlight Method",
      category: "Permanent"
    },
    {
      id: 3,
      content: "When writing notes, write in your own words. You're not creating your own Wikipedia or Google, you already have those at your disposal. You're writing and formulating your own ideas, arguments, and truths.",
      title: "Don't create your own Google",
      category: "Literature"
    },
    {
      id: 4,
      content: "Having repeatedly done a task, one might mistakenly attribute their sense of familiarity to their expertise in that task.",
      title: "Mere Exposure Effect",
      category: "Literature"
    },
    {
      id: 5,
      content: "Every problem we solve strengthens us, much like the process of muscle hypertrophy. Just like when our muscle fibers break down, we feel weak, but as we recover and repeat the process, we get stronger over time.",
      title: "Be like our Muscular System",
      category: "Literature"
    },
    {
      id: 6,
      content: "Wu wei is the art of not forcing, where your actions feel natural without any mental resistance. It is not about doing nothing or taking the easy way out, it requires confidence in yourself and your system to move gracefully from one task to another.",
      title: "Art of Not Forcing",
      category: "Permanent"
    }
  ])

  const filteredNotes = notes.filter(note => 
    note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleNoteClick = (id) => {
    // In a real app, this would open the note for editing
    console.log(`Note ${id} clicked`)
  }

  const handleAddNote = () => {
    const newNote = {
      id: notes.length + 1,
      content: "New note content...",
      title: "New Note",
      category: "Uncategorized"
    }
    setNotes([newNote, ...notes])
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Notes</h1>
          <button 
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors flex items-center"
            onClick={handleAddNote}
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Note
          </button>
        </div>
        <nav className="flex space-x-1 mb-8 bg-white p-1 rounded-lg shadow-sm">
          <NavItem icon={<Clock className="w-5 h-5" />} label="Recent" isActive={activeNav === 'Recent'} onClick={() => setActiveNav('Recent')} />
          <NavItem icon={<Inbox className="w-5 h-5" />} label="Inbox" isActive={activeNav === 'Inbox'} onClick={() => setActiveNav('Inbox')} />
          <NavItem icon={<Star className="w-5 h-5" />} label="Favorites" isActive={activeNav === 'Favorites'} onClick={() => setActiveNav('Favorites')} />
          <NavItem icon={<Tag className="w-5 h-5" />} label="Topics" isActive={activeNav === 'Topics'} onClick={() => setActiveNav('Topics')} />
          <NavItem icon={<FileText className="w-5 h-5" />} label="All Notes" isActive={activeNav === 'All Notes'} onClick={() => setActiveNav('All Notes')} />
        </nav>
        <SearchBar onSearch={setSearchTerm} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNotes.map((note) => (
            <NoteCard key={note.id} {...note} onClick={() => handleNoteClick(note.id)} />
          ))}
        </div>
      </div>
    </div>
  )
}