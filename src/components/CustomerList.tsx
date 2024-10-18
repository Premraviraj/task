import React, { useState } from 'react';
import { MoreHorizontal, Edit2 } from 'lucide-react';

const customers = [
  { id: 1, name: 'Rory Seekamp', country: 'UNITED STATE', status: 'Shipped', phone: '078 5054 8877', email: 'rory@dayrep', consignment: 'Phone SE', consignmentId: 'AI89075666GH', truck: 'AC 3454 BD', route: 'BARCELONA - MADRID' },
  { id: 2, name: 'Anna Ciantar', country: 'SPAIN', status: 'Placed' },
  { id: 3, name: 'Dean Smithies', country: 'UNITED KINGDOM', status: 'Packed' },
  { id: 4, name: 'Jaskash Chhabra', country: 'INDIA', status: 'Shipped' },
];

const CustomerList = () => {
  const [activeCustomer, setActiveCustomer] = useState(customers[0]);
  const [selectedTab, setSelectedTab] = useState('All');

  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <h3 className="text-lg font-semibold mb-4">Customer list</h3>
      <div className="flex space-x-4 mb-4">
        {['All', 'Order placed', 'Order packed', 'Order shipped', 'Order delivered'].map((tab) => (
          <button
            key={tab}
            className={`text-sm ${selectedTab === tab ? 'text-indigo-600 border-b-2 border-indigo-600' : 'text-gray-500'}`}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="space-y-4">
        {customers.map((customer) => (
          <div
            key={customer.id}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer ${
              activeCustomer.id === customer.id ? 'bg-gray-100' : ''
            }`}
            onClick={() => setActiveCustomer(customer)}
          >
            <div className="flex items-center">
              <img
                src={`https://i.pravatar.cc/40?img=${customer.id}`}
                alt={customer.name}
                className="w-10 h-10 rounded-full mr-3"
              />
              <div>
                <p className="font-medium">{customer.name}</p>
                <p className="text-sm text-gray-500">{customer.country}</p>
              </div>
            </div>
            <div className="flex items-center">
              <span className={`px-2 py-1 rounded-full text-xs ${
                customer.status === 'Shipped' ? 'bg-purple-100 text-purple-800' :
                customer.status === 'Placed' ? 'bg-blue-100 text-blue-800' :
                'bg-green-100 text-green-800'
              }`}>
                {customer.status}
              </span>
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                <Edit2 className="w-4 h-4" />
              </button>
              <button className="ml-2 text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {activeCustomer && (
        <div className="mt-6">
          <h4 className="font-semibold mb-2">PERSONAL INFORMATION</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center border rounded-lg p-2">
              <span className="text-gray-500 mr-2">📞</span>
              <span>{activeCustomer.phone}</span>
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <span className="text-gray-500 mr-2">✉️</span>
              <span>{activeCustomer.email}</span>
            </div>
          </div>
          <h4 className="font-semibold mt-4 mb-2">CONSIGMENT</h4>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center border rounded-lg p-2">
              <img src="https://via.placeholder.com/30" alt="Product" className="w-8 h-8 mr-2" />
              <div>
                <p className="font-medium">{activeCustomer.consignment}</p>
                <p className="text-xs text-gray-500">{activeCustomer.consignmentId}</p>
              </div>
            </div>
            <div className="flex items-center border rounded-lg p-2">
              <span className="text-gray-500 mr-2">🚚</span>
              <div>
                <p className="font-medium">{activeCustomer.truck}</p>
                <p className="text-xs text-gray-500">{activeCustomer.route}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerList;