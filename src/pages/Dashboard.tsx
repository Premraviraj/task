import { ChevronDown, ChevronRight, MoreHorizontal, CheckCircle2 } from 'lucide-react'
import { useState } from 'react'

const ProjectsCompleted = () => {
  return (
    <div className="bg-white p-6 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Projects completed</h2>
        <div className="flex items-center">
          <span className="mr-2">This Week</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </div>
      <div className="mb-4">
        <div className="relative pt-1">
          <div className="flex mb-2 items-center justify-between">
            <div>
              <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-purple-600 bg-purple-200">
                Total progress
              </span>
            </div>
            <div className="text-right">
              <span className="text-xs font-semibold inline-block text-purple-600">
                55%
              </span>
            </div>
          </div>
          <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
            <div style={{ width: "55%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-4">
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          </div>
          <h3 className="font-semibold mb-1">Online-store rebranding</h3>
          <p className="text-gray-600">16/20</p>
        </div>
        <div className="text-center">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-2">
            <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>
          </div>
          <h3 className="font-semibold mb-1">Launch campaign</h3>
          <p className="text-gray-600">4/6</p>
        </div>
        <div className="text-center">
          <h3 className="font-semibold mb-1">Average score</h3>
          <p className="text-4xl font-bold">6.5</p>
          <ChevronRight className="w-6 h-6 mx-auto mt-2" />
        </div>
      </div>
    </div>
  )
}

const TasksProgress = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-3xl text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Tasks progress</h2>
        <ChevronRight className="w-6 h-6" />
      </div>
      <div className="grid grid-cols-4 gap-4 mb-4">
        <div>
          <p className="text-green-400">+5%</p>
          <p>Prototype</p>
        </div>
        <div>
          <p>-</p>
          <p>Promo</p>
        </div>
        <div>
          <p className="text-green-400">+10%</p>
          <p>Wireframes</p>
        </div>
        <div>
          <p className="text-red-400">-6%</p>
          <p>Branding</p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-purple-500 h-24 rounded-lg"></div>
        <div className="bg-white h-16 rounded-lg mt-8"></div>
        <div className="bg-orange-500 h-32 rounded-lg"></div>
        <div className="bg-gray-500 h-12 rounded-lg mt-12"></div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-2">
        <div>51%</div>
        <div>26%</div>
        <div>55%</div>
        <div>17%</div>
      </div>
    </div>
  )
}

const ExperienceCard = () => {
  return (
    <div className="bg-purple-300 p-6 rounded-3xl relative overflow-hidden">
      <img src="/placeholder.svg?height=48&width=48" alt="User" className="rounded-full mb-4" />
      <p className="text-sm mb-2">Let's start</p>
      <h2 className="text-3xl font-bold mb-4">Experience the power of seamless task management</h2>
      <div className="flex space-x-2">
        <button className="bg-white text-purple-500 rounded-full p-2">
          <ChevronRight className="w-6 h-6" />
        </button>
        <button className="bg-white text-purple-500 rounded-full p-2">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      <div className="absolute top-0 right-0 w-full h-full">
        <svg className="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="rgba(255,255,255,0.1)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.2,15.3,83.8,30.6,75.6,43.9C67.4,57.1,55.4,68.3,41.6,76.3C27.9,84.3,13.9,89.1,-0.4,89.8C-14.7,90.5,-29.4,87.1,-43.2,80.3C-57,73.4,-69.8,63.2,-77.6,49.6C-85.4,36,-88.1,18,-87.7,0.2C-87.3,-17.6,-83.8,-35.2,-75.7,-50.5C-67.6,-65.7,-54.9,-78.5,-40.3,-85.4C-25.6,-92.3,-12.8,-93.2,1.3,-95.4C15.3,-97.6,30.7,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>
    </div>
  )
}

const MaxResult = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-3xl text-white">
      <h2 className="text-lg font-bold mb-2">Max. result</h2>
      <div className="flex items-center justify-between mb-2">
        <span className="text-3xl font-bold">16/30</span>
        <span className="text-sm">Finished tasks</span>
      </div>
      <div className="relative h-12">
        <div className="absolute inset-0 overflow-hidden">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
            <path d="M0 50 C20 30, 40 30, 60 50 S80 70, 100 50" stroke="rgba(255,255,255,0.2)" fill="none" />
            <path d="M0 50 C20 30, 40 30, 60 50 S80 70, 100 50" stroke="#FF6B6B" fill="none" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute top-0 right-0 bg-red-500 rounded-full w-3 h-3"></div>
      </div>
    </div>
  )
}

const ShareProgress = () => {
  return (
    <div className="bg-white p-4 rounded-3xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold">Share progress</h2>
        <MoreHorizontal className="w-6 h-6" />
      </div>
      <div className="flex items-center justify-between">
        <img src="/placeholder.svg?height=48&width=48" alt="User" className="rounded-full" />
        <button className="bg-gray-100 rounded-full p-2">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
        </button>
      </div>
    </div>
  )
}

const NovemberTotals = () => {
  const [selectedDays, setSelectedDays] = useState([1, 2, 3, 7, 8, 9, 10, 14, 15, 16, 17, 21, 22, 23])

  const renderCalendar = () => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
    const totalDays = 30
    const calendar = []

    for (let i = 0; i < totalDays; i++) {
      const day = i + 1
      const isSelected = selectedDays.includes(day)
      calendar.push(
        <div
          key={i}
          className={`w-8 h-8 flex items-center justify-center rounded-full ${
            isSelected ? 'bg-white text-orange-500' : 'text-white'
          } ${day > 14 ? 'opacity-50' : ''}`}
          onClick={() => {
            if (day <= 14) {
              setSelectedDays(prev =>
                prev.includes(day) ? prev.filter(d => d !== day) : [...prev, day]
              )
            }
          }}
        >
          {day}
        </div>
      )
    }

    return (
      <div className="grid grid-cols-7 gap-2">
        {days.map(day => (
          <div key={day} className="text-center text-white text-xs mb-2">{day}</div>
        ))}
        {calendar}
      </div>
    )
  }

  return (
    <div className="bg-orange-500 p-4 rounded-3xl text-white">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">November totals</h2>
        <ChevronDown className="w-6 h-6" />
      </div>
      <div className="flex items-center mb-4">
        <span className="text-4xl font-bold mr-2">14</span>
        <span>Days</span>
        <div className="ml-auto flex items-center">
          <span className="mr-2">2</span>
          <CheckCircle2 className="w-6 h-6" />
          <span className="ml-2">Completed</span>
        </div>
      </div>
      {renderCalendar()}
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="grid grid-cols-2 gap-8">
        <ProjectsCompleted />
        <TasksProgress />
        <div className="col-span-2 grid grid-cols-3 gap-8">
          <ExperienceCard />
          <div className="space-y-8">
            <MaxResult />
            <ShareProgress />
          </div>
          <NovemberTotals />
        </div>
      </div>
    </div>
  )
}