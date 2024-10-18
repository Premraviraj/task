import React, { useState } from 'react';
import { MoreVertical } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Appearance');
  const [brandColor, setBrandColor] = useState('#444CE7');
  const [chartStyle, setChartStyle] = useState('Default');
  const [language, setLanguage] = useState('English (UK)');
  const [cookieBanner, setCookieBanner] = useState('Default');

  const tabs = ['Account', 'Profile', 'Security', 'Appearance', 'Notifications', 'Billing', 'Integrations'];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <MoreVertical className="w-6 h-6 text-gray-500" />
      </div>
      <div className="flex space-x-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium rounded-md ${
              activeTab === tab
                ? 'bg-indigo-100 text-indigo-700'
                : 'text-gray-500 hover:text-gray-700'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Appearance</h2>
          <a href="#" className="text-sm text-indigo-600 hover:text-indigo-800">
            dashboard.untitledui.com
          </a>
        </div>
        <p className="text-gray-500 mb-8">
          Change how your public dashboard looks and feels.
        </p>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Brand color
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="color"
                value={brandColor}
                onChange={(e) => setBrandColor(e.target.value)}
                className="w-10 h-10 rounded-md border border-gray-300"
              />
              <input
                type="text"
                value={brandColor}
                onChange={(e) => setBrandColor(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-2 w-32"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Dashboard charts
            </label>
            <p className="text-sm text-gray-500 mb-2">How charts are displayed.</p>
            <div className="grid grid-cols-3 gap-4">
              {['Default', 'Simplified', 'Custom CSS'].map((style) => (
                <div
                  key={style}
                  className={`border rounded-lg p-4 cursor-pointer ${
                    chartStyle === style ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
                  }`}
                  onClick={() => setChartStyle(style)}
                >
                  <div className="w-full h-24 bg-gray-200 rounded mb-2"></div>
                  <p className="text-sm font-medium">{style}</p>
                  <p className="text-xs text-gray-500">
                    {style === 'Default'
                      ? 'Default company branding.'
                      : style === 'Simplified'
                      ? 'Minimal and modern.'
                      : 'Manage styling with CSS.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Language
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Default language for public dashboard.
            </p>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
            >
              <option>English (UK)</option>
              <option>English (US)</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cookie banner
            </label>
            <p className="text-sm text-gray-500 mb-2">
              Display cookie banners to visitors.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {['Default', 'Simplified', 'None'].map((style) => (
                <div
                  key={style}
                  className={`border rounded-lg p-4 cursor-pointer ${
                    cookieBanner === style ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
                  }`}
                  onClick={() => setCookieBanner(style)}
                >
                  <div className="w-full h-24 bg-gray-200 rounded mb-2"></div>
                  <p className="text-sm font-medium">{style}</p>
                  <p className="text-xs text-gray-500">
                    {style === 'Default'
                      ? 'Cookie controls for visitors.'
                      : style === 'Simplified'
                      ? 'Show a simplified banner.'
                      : "Don't show any banners."}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 flex justify-end space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
            Cancel
          </button>
          <button className="px-4 py-2 bg-indigo-600 border border-transparent rounded-md text-sm font-medium text-white hover:bg-indigo-700">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;