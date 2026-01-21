"use client"
import React, { useState } from 'react'
import Headers from '@/components/ui/headers'
import { 
  Settings as SettingsIcon,
  Bell,
  Globe,
  Moon,
  Sun,
  Shield,
  CreditCard,
  Eye,
  EyeOff,
  Save,
  RefreshCw,
  AlertTriangle,
  Download,
  Upload,
  Key,
  Palette,
  Languages,
  DollarSign,
  Clock
} from 'lucide-react'

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    priceAlerts: true,
    newsletter: false
  })
  const [currency, setCurrency] = useState('USD')
  const [language, setLanguage] = useState('en')
  const [theme, setTheme] = useState('system')
  const [autoRefresh, setAutoRefresh] = useState(true)
  const [refreshInterval, setRefreshInterval] = useState(30)
  const [showApiKey, setShowApiKey] = useState(false)
  const [apiKey, setApiKey] = useState('sk_live_••••••••••••••••••••••••')

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'BTC', 'ETH']
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
    { code: 'de', name: 'Deutsch' },
    { code: 'zh', name: '中文' }
  ]
  const themes = ['system', 'light', 'dark']

  const handleSave = () => {
    // Save settings to localStorage or API
    console.log('Settings saved')
  }

  const handleExportData = () => {
    console.log('Exporting data...')
  }

  const handleImportData = () => {
    console.log('Importing data...')
  }

  const generateApiKey = () => {
    const newKey = 'sk_live_' + Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
    setApiKey(newKey)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      <Headers />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <SettingsIcon className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Platform Settings
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
                  Customize your trading experience and preferences
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
            >
              <Save size={18} /> Save Changes
            </button>
          </div>
        </div>

        {/* Settings Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - App Settings */}
          <div className="lg:col-span-2 space-y-8">
            {/* Appearance */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Palette className="text-purple-500" size={24} />
                Appearance
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Theme
                  </label>
                  <div className="flex flex-col gap-3">
                    {themes.map((themeOption) => (
                      <button
                        key={themeOption}
                        onClick={() => setTheme(themeOption)}
                        className={`px-4 py-3 rounded-lg border transition-all ${
                          theme === themeOption
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {themeOption === 'dark' ? (
                            <Moon size={18} className={theme === themeOption ? 'text-purple-500' : 'text-gray-400'} />
                          ) : themeOption === 'light' ? (
                            <Sun size={18} className={theme === themeOption ? 'text-purple-500' : 'text-gray-400'} />
                          ) : (
                            <SettingsIcon size={18} className={theme === themeOption ? 'text-purple-500' : 'text-gray-400'} />
                          )}
                          <span className={theme === themeOption ? 'text-purple-600 dark:text-purple-400 font-medium' : 'text-gray-700 dark:text-gray-300'}>
                            {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Currency
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {currencies.map((curr) => (
                      <button
                        key={curr}
                        onClick={() => setCurrency(curr)}
                        className={`px-4 py-3 rounded-lg border transition-all ${
                          currency === curr
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                        }`}
                      >
                        <div className="flex flex-col items-center">
                          <DollarSign size={18} className={currency === curr ? 'text-purple-500' : 'text-gray-400'} />
                          <span className={`mt-1 text-sm ${currency === curr ? 'text-purple-600 dark:text-purple-400 font-medium' : 'text-gray-700 dark:text-gray-300'}`}>
                            {curr}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Bell className="text-blue-500" size={24} />
                Notifications
              </h3>
              
              <div className="space-y-6">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                        <Bell className="text-blue-600 dark:text-blue-400" size={18} />
                      </div>
                      <div>
                        <p className="text-gray-900 dark:text-white font-medium">
                          {key.split(/(?=[A-Z])/).join(' ')}
                        </p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">
                          {key === 'email' ? 'Email notifications' : 
                           key === 'push' ? 'Push notifications' :
                           key === 'priceAlerts' ? 'Price alert notifications' :
                           'Marketing newsletter'}
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => setNotifications({...notifications, [key]: !value})}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Data Management */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Download className="text-green-500" size={24} />
                Data Management
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Download className="text-green-500" size={20} />
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Export Data</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Download your trading history</p>
                    </div>
                  </div>
                  <button
                    onClick={handleExportData}
                    className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Export
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                  <div className="flex items-center gap-3">
                    <Upload className="text-blue-500" size={20} />
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Import Data</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Upload trading history files</p>
                    </div>
                  </div>
                  <button
                    onClick={handleImportData}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    Import
                  </button>
                </div>

                <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="text-yellow-500" size={20} />
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Data Reset</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">This will delete all your local data</p>
                    </div>
                    <button className="ml-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                      Reset Data
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Advanced Settings */}
          <div className="space-y-8">
            {/* API Settings */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Key className="text-orange-500" size={24} />
                API Settings
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    API Key
                  </label>
                  <div className="relative">
                    <input
                      type={showApiKey ? 'text' : 'password'}
                      value={apiKey}
                      readOnly
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white pr-12"
                    />
                    <button
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                    >
                      {showApiKey ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={generateApiKey}
                    className="flex-1 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <RefreshCw size={16} /> Regenerate
                  </button>
                  <button className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all">
                    Copy Key
                  </button>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Your API key provides access to your account. Keep it secure and never share it publicly.
                  </p>
                </div>
              </div>
            </div>

            {/* Performance */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Clock className="text-cyan-500" size={24} />
                Performance
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-900 dark:text-white font-medium">Auto Refresh</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Automatically update data</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={autoRefresh}
                      onChange={() => setAutoRefresh(!autoRefresh)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-cyan-500"></div>
                  </label>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Refresh Interval ({refreshInterval}s)
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    step="5"
                    value={refreshInterval}
                    onChange={(e) => setRefreshInterval(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>5s</span>
                    <span>30s</span>
                    <span>60s</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Language & Region */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Globe className="text-emerald-500" size={24} />
                Language & Region
              </h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Language
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Time Zone
                  </label>
                  <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent">
                    <option>UTC-5 (New York)</option>
                    <option>UTC+0 (London)</option>
                    <option>UTC+1 (Berlin)</option>
                    <option>UTC+8 (Singapore)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Settings