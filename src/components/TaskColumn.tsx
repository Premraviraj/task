import React from 'react';
import { MoreHorizontal, MessageSquare } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  tags: string[];
  progress?: number;
  assignees: number;
  comments: number;
  color: string;
}

interface TaskColumnProps {
  title: string;
  tasks: Task[];
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700">{title}</h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
      <div className="space-y-4">
        {tasks.map((task) => (
          <div key={task.id} className={`${task.color} p-4 rounded-lg`}>
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-medium text-gray-800">{task.title}</h4>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {task.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-white bg-opacity-50 rounded-full text-xs text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>
            {task.progress !== undefined && (
              <div className="w-full bg-white bg-opacity-50 rounded-full h-3 mb-4">
                <div
                  className="h-3 rounded-full"
                  style={{
                    width: `${task.progress}%`,
                    background:
                      'linear-gradient(90deg, #3B82F6 0%, #60A5FA 100%)',
                  }}
                ></div>
              </div>
            )}
            <div className="flex justify-between items-center">
              <div className="flex -space-x-2">
                {[...Array(task.assignees)].map((_, i) => (
                  <img
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white"
                    src={`https://i.pravatar.cc/150?img=${i + 1}`}
                    alt={`Assignee ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <MessageSquare className="w-4 h-4 mr-1" />
                <span>{task.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskColumn;
