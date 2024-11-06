import React, { useState } from 'react';

import { motion, AnimatePresence } from 'framer-motion';

interface CreateTaskModalProps {



  isOpen: boolean;



  onClose: () => void;



  onCreateTask: (newTask: Task) => void;



  isDarkMode: boolean;



}

interface Task {

  id: string;

  title: string;

  description: string;



  tags: string[];



  progress: number;



  assignees: number;



  comments: number;



  color: string;



  status: string;



  dueDate?: Date;



  attachments?: { name: string; data: string }[];



}







const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ isOpen, onClose, onCreateTask, isDarkMode }) => {



  const [title, setTitle] = useState('');



  const [description, setDescription] = useState('');



  const [status, setStatus] = useState('Todo list');



  const [progress, setProgress] = useState(0);



  const [dueDate, setDueDate] = useState('');



  const [attachments, setAttachments] = useState<{ name: string; data: string }[]>([]);







  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {



    if (event.target.files) {



      const files = Array.from(event.target.files);



      Promise.all(files.map(file => toBase64(file).then(data => ({ name: file.name, data }))))



        .then(setAttachments);



    }



  };







  const toBase64 = (file: File): Promise<string> => {



    return new Promise((resolve, reject) => {



      const reader = new FileReader();



      reader.readAsDataURL(file);



      reader.onload = () => resolve(reader.result as string);



      reader.onerror = error => reject(error);



    });



  };







  const handleSubmit = () => {



    if (title.trim()) {



      const newTask: Task = {



        id: Date.now().toString(),



        title,



        description,



        tags: [],



        assignees: 0,



        comments: 0,



        color: 'blue',



        status,



        progress,



        dueDate: dueDate ? new Date(dueDate) : undefined,



        attachments,



      };



      onCreateTask(newTask);



      setTitle('');



      setDescription('');



      setStatus('Todo list');



      setProgress(0);



      setDueDate('');



      setAttachments([]);



      onClose();



    }



  };







  if (!isOpen) return null;



  return (

    <AnimatePresence>

      {isOpen && (

        <motion.div

          initial={{ opacity: 0 }}

          animate={{ opacity: 1 }}

          exit={{ opacity: 0 }}

          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"

        >

          <motion.div

            initial={{ scale: 0.9, opacity: 0 }}

            animate={{ scale: 1, opacity: 1 }}

            exit={{ scale: 0.9, opacity: 0 }}

            transition={{ type: 'spring', damping: 20, stiffness: 300 }}

            className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'} p-6 rounded-md shadow-md w-96`}

          >

            <h2 className="text-xl font-bold mb-4">Create Task</h2>



            <input



              type="text"



              placeholder="Task Title"



              value={title}



              onChange={(e) => setTitle(e.target.value)}



              className={`w-full mb-4 p-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded`}



            />



            <textarea



              placeholder="Task Description"



              value={description}



              onChange={(e) => setDescription(e.target.value)}



              className={`w-full mb-4 p-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded`}



              rows={4}



            />



            <select



              value={status}



              onChange={(e) => setStatus(e.target.value)}



              className={`w-full mb-4 p-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded`}



            >



              <option value="Todo list">Todo list</option>



              <option value="In Progress">In Progress</option>



              <option value="In Review">In Review</option>



              <option value="Done">Done</option>



            </select>



            <input



              type="number"



              placeholder="Initial Progress (%)"



              value={progress}



              onChange={(e) => setProgress(Number(e.target.value))}



              className={`w-full mb-4 p-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded`}



              min="0"



              max="100"



            />



            <input



              type="date"



              value={dueDate}



              onChange={(e) => setDueDate(e.target.value)}



              className={`w-full mb-4 p-2 border ${isDarkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white text-gray-900'} rounded`}



            />



            <input



              type="file"



              multiple



              onChange={handleFileChange}



              className="w-full mb-4"



            />



            <div className="flex justify-end space-x-2">



              <button onClick={onClose} className={`px-4 py-2 ${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-300 text-gray-900'} rounded`}>Cancel</button>



              <button onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded">Create</button>



            </div>



          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );



};



export default CreateTaskModal;


