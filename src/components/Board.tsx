import React, { useState } from 'react';
import { Filter, Plus } from 'lucide-react';
import TaskColumn from './TaskColumn';
import CreateTaskModal from './CreateTaskModal';

interface Task {
  id: number;
  title: string;
  tags: string[];
  progress?: number;
  assignees: number;
  comments: number;
  color: string;
  status: string;
}

const initialTasks: Task[] = [
  // ... (copy the tasks from the previous TaskColumn component here)
];

const Board = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const handleCreateTask = (newTask: Task) => {
    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
  };

  const getTasksByStatus = (status: string) => {
    return tasks.filter(task => task.status === status);
  };

  return (
    <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-0 py-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-3xl font-bold text-gray-900">Board</h2>
          <select className="border-none bg-transparent text-gray-500 focus:outline-none">
            <option>Daily Tasks</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex -space-x-2">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                className="w-8 h-8 rounded-full border-2 border-white"
                src={`https://i.pravatar.cc/150?img=${i + 1}`}
                alt={`User ${i + 1}`}
              />
            ))}
          </div>
          <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md text-gray-700 hover:bg-gray-200">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </button>
          <button 
            className="flex items-center px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus className="w-4 h-4 mr-2" />
            Create task
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-6">
        <TaskColumn title="Todo list" tasks={getTasksByStatus('Todo list')} />
        <TaskColumn title="In Progress" tasks={getTasksByStatus('In Progress')} />
        <TaskColumn title="In Review" tasks={getTasksByStatus('In Review')} />
        <TaskColumn title="Done" tasks={getTasksByStatus('Done')} />
      </div>
      <CreateTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreateTask={handleCreateTask} />
    </div>
  );
};

export default Board;