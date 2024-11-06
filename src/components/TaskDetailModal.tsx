import React from 'react';

interface TaskDetailModalProps {
  task: Task | null;
  onClose: () => void;
}

interface Task {
  id: number;
  title: string;
  description: string;
  tags: string[];
  progress?: number;
  assignees: number;
  comments: number;
  color: string;
  status: string;
  attachments?: { name: string; data: string }[];
}

const TaskDetailModal: React.FC<TaskDetailModalProps> = ({ task, onClose }) => {
  if (!task) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-md shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">{task.title}</h2>
        <p className="mb-4">{task.description}</p>
        {task.attachments && task.attachments.length > 0 && (
          <div className="mb-4">
            <h3 className="font-semibold">Attachments:</h3>
            <ul>
              {task.attachments.map((file, index) => (
                <li key={index}>
                  <a
                    href={file.data}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {file.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="flex justify-end">
          <button onClick={onClose} className="px-4 py-2 bg-blue-500 text-white rounded">Close</button>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailModal;
