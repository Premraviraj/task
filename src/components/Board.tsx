import React, { useState, useEffect } from 'react';
import { Plus, Trash2 } from 'lucide-react';
import CreateTaskModal from './CreateTaskModal';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface BoardProps {
  isDarkMode: boolean;
}

interface Task {
  id: string;
  title: string;
  description: string;
  progress: number;
  status: string;
  color: string;
  attachments?: { name: string; data: string }[];
  dueDate?: Date;
}

const pastelColors = ['#d6f4ff', '#ffdfca', '#FAC898', '#C3B1E1'];

const Board: React.FC<BoardProps> = ({ isDarkMode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleCreateTask = (newTask: Task) => {
    newTask.color = pastelColors[Math.floor(Math.random() * pastelColors.length)];
    setTasks([...tasks, newTask]);
    setIsModalOpen(false);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const getTasksByStatus = (status: string) => tasks.filter(task => task.status === status);

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId || source.index !== destination.index) {
      const updatedTasks = Array.from(tasks);
      const [movedTask] = updatedTasks.splice(source.index, 1);
      movedTask.status = destination.droppableId;
      updatedTasks.splice(destination.index, 0, movedTask);
      setTasks(updatedTasks);
    }
  };

  return (
    <div className={`max-w-full mx-auto px-2 sm:px-4 lg:px-6 py-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
      <div className="flex justify-between items-center mb-4">
        <h2 className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Board</h2>
        <button 
          className={`flex items-center px-3 py-1 ${isDarkMode ? 'bg-indigo-600' : 'bg-black'} text-white rounded-md hover:bg-opacity-80 text-sm`}
          onClick={() => setIsModalOpen(true)}
        >
          <Plus className="w-3 h-3 mr-1" />
          Create task
        </button>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-4 gap-3">
          {['Todo list', 'In Progress', 'In Review', 'Done'].map(status => (
            <Droppable droppableId={status} key={status}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className={`${isDarkMode ? 'bg-gray-800' : 'bg-fff5ff'} p-4 rounded-md`}
                >
                  <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{status}</h3>
                  {getTasksByStatus(status).map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="p-2 mb-2 rounded-md shadow cursor-pointer"
                          style={{ backgroundColor: task.color }}
                        >
                          <div className="flex justify-between items-center">
                            <span className="text-base font-bold text-gray-800">{task.title}</span>
                            <button onClick={() => handleDeleteTask(task.id)} className="text-red-500 hover:text-red-700">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                          <p className="text-sm font-semibold text-gray-600">{task.description}</p>
                          {task.dueDate && (
                            <p className="text-xs font-medium text-gray-500 mt-1">
                              Due: {new Date(task.dueDate).toLocaleDateString()}
                            </p>
                          )}
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${task.progress}%` }}
                            ></div>
                          </div>
                          <p className="text-xs font-medium text-gray-500 mt-1 text-right">
                            Progress: {task.progress}%
                          </p>
                          {task.attachments && task.attachments.length > 0 && (
                            <div className="mt-2">
                              <h4 className="text-xs font-bold text-gray-700">Attachments:</h4>
                              <ul className="list-disc list-inside">
                                {task.attachments.map((file, index) => (
                                  <li key={index}>
                                    <a
                                      href={file.data}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-blue-500 hover:underline text-sm font-medium"
                                    >
                                      {file.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      <CreateTaskModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onCreateTask={handleCreateTask} isDarkMode={isDarkMode} />
    </div>
  );
};

export default Board;
