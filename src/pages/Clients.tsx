import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, BarChart2, Pencil, Search, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const invoices = [
  { id: '923', date: 'Sun Nov 26 2023 11:46', status: 'Pending' },
  { id: '043', date: 'Wed Aug 09 2023 15:14', status: 'Pending' },
  { id: '042', date: 'Thu Nov 23 2023 18:00', status: 'Done' },
  { id: '023', date: 'Tue Sep 12 2023 02:17', status: 'Done' },
  { id: '098', date: 'Sun Nov 26 2023 07:03', status: 'Draft' },
  { id: '064', date: 'Sun Apr 21 2024 21:29', status: 'Pending' },
  { id: '334', date: 'Thu Feb 15 2024 01:55', status: 'Failed' },
  { id: '754', date: 'Wed Nov 22 2023 06:48', status: 'Pending' },
  { id: '23', date: 'Sun Nov 26 2023 10:25:56', status: 'Pending' },
];

const Clients = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center mb-6">
        <Link to="/clients" className="mr-4">
          <ArrowLeft className="w-6 h-6 text-gray-500" />
        </Link>
        <h1 className="text-2xl font-semibold text-gray-900">Client details</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-lg p-6 text-white mb-6">
            <img
              src="https://i.pravatar.cc/150?img=3"
              alt="Alisher Jackson"
              className="w-24 h-24 rounded-full border-4 border-white mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">Alisher Jackson</h2>
            <p className="text-lg mb-2">@alex_2024</p>
            <p className="mb-1">Email: masdasd@gmail.com</p>
            <p>Phone: +998944232018</p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow mb-6">
            <div className="flex space-x-4 mb-6">
              <button className="flex-1 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 transition duration-300 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 mr-2" />
                Send message
              </button>
              <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300 flex items-center justify-center">
                <BarChart2 className="w-5 h-5 mr-2" />
                Analytics
              </button>
              <button className="bg-gray-100 text-gray-700 p-2 rounded-md hover:bg-gray-200 transition duration-300">
                <Pencil className="w-5 h-5" />
              </button>
            </div>

            <h3 className="font-semibold text-lg mb-2">Notes</h3>
            <p className="text-gray-600 mb-4">
              We discussed about startups last time, she is more focused on XYZ asks more questions, Lorem ipsum text here
            </p>

            <h3 className="font-semibold text-lg mb-2">Address</h3>
            <p className="text-gray-600 mb-2">1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
            <div className="bg-gray-100 rounded-lg p-4 relative">
              <img src="https://via.placeholder.com/400x200?text=Map" alt="Map" className="w-full h-32 object-cover rounded" />
              <button className="absolute bottom-2 right-2 bg-white text-gray-700 py-1 px-3 rounded-md text-sm hover:bg-gray-100 transition duration-300">
                View map
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg p-6 shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold text-lg">Attachments</h3>
              <button className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-200 transition duration-300 flex items-center">
                <span className="mr-2">+</span> Add file
              </button>
            </div>
            {/* Add file list here if needed */}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg p-6 shadow mb-6">
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search number or amount"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-100 rounded-lg p-4">
                <h4 className="text-2xl font-bold mb-1">154</h4>
                <p className="text-gray-600">Invoices total</p>
              </div>
              <div className="bg-green-100 rounded-lg p-4">
                <h4 className="text-2xl font-bold text-green-600 mb-1">$980,721</h4>
                <p className="text-gray-600">Paid invoices</p>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2">Invoice</th>
                    <th className="text-right py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-b last:border-b-0">
                      <td className="py-3">
                        <div className="flex items-center">
                          <div className="bg-gray-200 p-2 rounded-md mr-3">
                            <MapPin className="w-5 h-5 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium">Invoice #{invoice.id}</p>
                            <p className="text-sm text-gray-500">{invoice.date}</p>
                          </div>
                        </div>
                      </td>
                      <td className="text-right py-3">
                        <span className={`px-3 py-1 rounded-full text-sm ${
                          invoice.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          invoice.status === 'Done' ? 'bg-green-100 text-green-800' :
                          invoice.status === 'Failed' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {invoice.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;