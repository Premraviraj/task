import React from 'react';
import { MessageCircle, Phone,Mail, Users, FileText, CreditCard, BarChart2, HelpCircle } from 'lucide-react';

const Support = () => {
  const helpCategories = [
    { title: 'Community', items: ['Share', 'Discussion', 'Network'], icon: <Users className="w-6 h-6" /> },
    { title: 'Orders', items: ['Tracking', 'Delivery', 'Management'], icon: <FileText className="w-6 h-6" /> },
    { title: 'Return and Refund', items: ['Methods', 'Process'], icon: <CreditCard className="w-6 h-6" /> },
    { title: 'Account Issues', items: ['Profile', 'Settings', 'Password'], icon: <Users className="w-6 h-6" /> },
    { title: 'Business Help', items: ['Dashboard', 'Reports', 'Logistics'], icon: <BarChart2 className="w-6 h-6" /> },
    { title: 'Payment', items: ['Methods', 'VAT', 'Security'], icon: <CreditCard className="w-6 h-6" /> },
    { title: 'Guides', items: ['Tutorials', 'Blogs', 'Newsletters'], icon: <FileText className="w-6 h-6" /> },
    { title: 'FAQ', items: ['Help', 'Articles'], icon: <HelpCircle className="w-6 h-6" /> },
  ];

  const commonQuestions = [
    'How do I reset my password?',
    'What payment methods are accepted?',
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gray-900 text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">Help Center</h1>
        <p className="mb-6">
          Find guides and find quick solutions to common questions across eight categories. From community
          engagement to resolving account issues, tracking orders, and understanding payment methods. If you
          have any questions, our support team is just a click away. Let's make your experience exceptional!
        </p>
        <div className="flex space-x-4">
          <button className="bg-white text-gray-900 px-4 py-2 rounded-md flex items-center">
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat with Support
          </button>
          <div className="flex items-center space-x-4">
            <Phone className="w-5 h-5" />
            <span>+123 45 67 89 10</span>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="w-5 h-5" />
            <span>support@novasync.com</span>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-6">How can we help?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {helpCategories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold">{category.title}</h3>
            </div>
            <ul className="space-y-2">
              {category.items.map((item, itemIndex) => (
                <li key={itemIndex} className="text-sm text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Common Questions</h2>
      <ul className="space-y-2">
        {commonQuestions.map((question, index) => (
          <li key={index}>
            <a href="#" className="text-indigo-600 hover:text-indigo-800">
              {question}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Support;