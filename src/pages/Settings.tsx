import React, { useState, useEffect } from 'react';
import { Save, Bell, Lock, User, Globe, Moon, Sun } from 'lucide-react';

interface SettingsProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

interface UserSettings {
  notifications: boolean;
  twoFactorAuth: boolean;
  language: string;
  emailFrequency: string;
}

const Settings: React.FC<SettingsProps> = ({ isDarkMode, toggleTheme }) => {
  const [settings, setSettings] = useState<UserSettings>({
    notifications: true,
    twoFactorAuth: false,
    language: 'en',
    emailFrequency: 'daily',
  });

  useEffect(() => {
    // Load settings from localStorage
    const savedSettings = localStorage.getItem('userSettings');
    if (savedSettings) {
      setSettings(JSON.parse(savedSettings));
    }
  }, []);

  const handleSettingChange = (setting: keyof UserSettings, value: any) => {
    setSettings(prev => ({ ...prev, [setting]: value }));
  };

  const saveSettings = () => {
    localStorage.setItem('userSettings', JSON.stringify(settings));
    alert('Settings saved successfully!');
  };

  return (
    <div className={`min-h-screen p-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="space-y-6">
        {/* Notifications */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Bell className="w-5 h-5" />
            <span>Enable Notifications</span>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.notifications}
              onChange={(e) => handleSettingChange('notifications', e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Two-Factor Authentication */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Lock className="w-5 h-5" />
            <span>Two-Factor Authentication</span>
          </div>
          <label className="switch">
            <input
              type="checkbox"
              checked={settings.twoFactorAuth}
              onChange={(e) => handleSettingChange('twoFactorAuth', e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        {/* Language */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="w-5 h-5" />
            <span>Language</span>
          </div>
          <select
            value={settings.language}
            onChange={(e) => handleSettingChange('language', e.target.value)}
            className={`p-2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>

        {/* Email Frequency */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5" />
            <span>Email Frequency</span>
          </div>
          <select
            value={settings.emailFrequency}
            onChange={(e) => handleSettingChange('emailFrequency', e.target.value)}
            className={`p-2 rounded ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        {/* Theme Toggle */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {isDarkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
            <span>Theme</span>
          </div>
          <button
            onClick={toggleTheme}
            className={`px-4 py-2 rounded ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'}`}
          >
            {isDarkMode ? 'Dark' : 'Light'}
          </button>
        </div>

        {/* Save Button */}
        <button
          onClick={saveSettings}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          <Save className="w-5 h-5" />
          <span>Save Settings</span>
        </button>
      </div>
    </div>
  );
};

export default Settings;
