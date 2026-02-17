// "use client"
// import React, { useState } from 'react'
// import Headers from '@/components/ui/headers'
// import {
//   Settings as SettingsIcon,
//   Bell,
//   Globe,
//   Moon,
//   Sun,
//   Shield,
//   CreditCard,
//   Eye,
//   EyeOff,
//   Save,
//   RefreshCw,
//   AlertTriangle,
//   Download,
//   Upload,
//   Key,
//   Palette,
//   Languages,
//   DollarSign,
//   Clock
// } from 'lucide-react'

// const Settings = () => {
//   const [darkMode, setDarkMode] = useState(false)
//   const [notifications, setNotifications] = useState({
//     email: true,
//     newsletter: false
//   })
//   const [currency, setCurrency] = useState('USD')
//   const [language, setLanguage] = useState('en')
//   const [theme, setTheme] = useState('system')

//   const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'BTC', 'ETH']
//   const languages = [
//     { code: 'en', name: 'English' },
//     { code: 'es', name: 'Español' },
//     { code: 'fr', name: 'Français' },
//     { code: 'de', name: 'Deutsch' },
//     { code: 'zh', name: '中文' }
//   ]
//   const themes = ['system', 'light', 'dark']

//   const handleSave = () => {
//     // Save settings to localStorage or API
//     console.log('Settings saved')
//   }


//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
//       <Headers />
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
//         {/* Header Section */}
//         <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10  ml-4 mr-4">
//           <div >
//             <div className="flex items-center gap-3 mb-4 mt-10">
//               <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
//                 <SettingsIcon className="text-white" size={28} />
//               </div>
//               <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
//                 Platform Settings
//               </h1>
//             </div>
//             <div>
//               <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
//                 Customize your trading experience and preferences
//               </p>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <button
//               onClick={handleSave}
//               className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all flex items-center gap-2"
//             >
//               <Save size={18} /> Save Changes
//             </button>
//           </div>
//         </div>

//         {/* Settings Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           <div className="lg:col-span-2 space-y-8">
//             {/* Appearance */}
//             <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
//               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
//                 <Palette className="text-purple-500" size={24} />
//                 Appearance
//               </h3>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
//                     Theme
//                   </label>
//                   <div className="flex flex-col gap-3">
//                     {themes.map((themeOption) => (
//                       <button
//                         key={themeOption}
//                         onClick={() => setTheme(themeOption)}
//                         className={`px-4 py-3 rounded-lg border transition-all ${theme === themeOption
//                             ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
//                             : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
//                           }`}
//                       >
//                         <div className="flex items-center gap-3">
//                           {themeOption === 'dark' ? (
//                             <Moon size={18} className={theme === themeOption ? 'text-purple-500' : 'text-gray-400'} />
//                           ) : themeOption === 'light' ? (
//                             <Sun size={18} className={theme === themeOption ? 'text-purple-500' : 'text-gray-400'} />
//                           ) : (
//                             <SettingsIcon size={18} className={theme === themeOption ? 'text-purple-500' : 'text-gray-400'} />
//                           )}
//                           <span className={theme === themeOption ? 'text-purple-600 dark:text-purple-400 font-medium' : 'text-gray-700 dark:text-gray-300'}>
//                             {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
//                           </span>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
//                     Currency
//                   </label>
//                   <div className="grid grid-cols-3 gap-3">
//                     {currencies.map((curr) => (
//                       <button
//                         key={curr}
//                         onClick={() => setCurrency(curr)}
//                         className={`px-4 py-3 rounded-lg border transition-all ${currency === curr
//                             ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
//                             : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
//                           }`}
//                       >
//                         <div className="flex flex-col items-center">
//                           <DollarSign size={18} className={currency === curr ? 'text-purple-500' : 'text-gray-400'} />
//                           <span className={`mt-1 text-sm ${currency === curr ? 'text-purple-600 dark:text-purple-400 font-medium' : 'text-gray-700 dark:text-gray-300'}`}>
//                             {curr}
//                           </span>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Notifications */}
//             <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
//               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
//                 <Bell className="text-blue-500" size={24} />
//                 Notifications
//               </h3>

//               <div className="space-y-6">
//                 {Object.entries(notifications).map(([key, value]) => (
//                   <div key={key} className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
//                         <Bell className="text-blue-600 dark:text-blue-400" size={18} />
//                       </div>
//                       <div>
//                         <p className="text-gray-900 dark:text-white font-medium">
//                           {key.split(/(?=[A-Z])/).join(' ')}
//                         </p>
//                         <p className="text-gray-500 dark:text-gray-400 text-sm">
//                           {key === 'email' ? 'Email notifications' :
//                             key === 'push' ? 'Push notifications' :
//                               key === 'priceAlerts' ? 'Price alert notifications' :
//                                 'Marketing newsletter'}
//                         </p>
//                       </div>
//                     </div>
//                     <label className="relative inline-flex items-center cursor-pointer">
//                       <input
//                         type="checkbox"
//                         checked={value}
//                         onChange={() => setNotifications({ ...notifications, [key]: !value })}
//                         className="sr-only peer"
//                       />
//                       <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
//                     </label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
//               <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
//                 <Globe className="text-emerald-500" size={24} />
//                 Language & Region
//               </h3>
//               <div className="space-y-8">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     Language
//                   </label>
//                   <select
//                     value={language}
//                     onChange={(e) => setLanguage(e.target.value)}
//                     className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent"
//                   >
//                     {languages.map((lang) => (
//                       <option key={lang.code} value={lang.code}>
//                         {lang.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
//                     Time Zone
//                   </label>
//                   <select className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-transparent">
//                     <option>UTC-5 (New York)</option>
//                     <option>UTC+0 (London)</option>
//                     <option>UTC+1 (Berlin)</option>
//                     <option>UTC+8 (Singapore)</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default Settings

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
  Save,
  Palette,
  Languages,
  DollarSign,
  User,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react'
import CoinBackground from '@/components/coinBackground'

const Settings = () => {
  const [notifications, setNotifications] = useState({
    email: true,
    newsletter: false,
    priceAlerts: true
  })
  const [currency, setCurrency] = useState('USD')
  const [language, setLanguage] = useState('en')
  const [theme, setTheme] = useState('system')

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
    // Save settings to localStorage
    localStorage.setItem('settings', JSON.stringify({
      notifications,
      currency,
      language,
      theme
    }))
    console.log('Settings saved')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      <Headers />
      <CoinBackground />
      <div className="relative">
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
          {/* Header Section - Centered */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <SettingsIcon className="text-white" size={32} />
              </div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Settings
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Customize your CryptoVault experience with personal preferences and notification settings
            </p>
          </div>

          {/* Settings Container - Centered */}
          <div className="max-w-3xl mx-auto space-y-8">
            
            {/* Account Settings */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
                    <User className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">Account Settings</h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">Manage your account preferences</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Language */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe size={16} className="text-gray-400" />
                      Language
                    </div>
                  </label>
                  <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  >
                    {languages.map((lang) => (
                      <option key={lang.code} value={lang.code}>
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Currency */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <DollarSign size={16} className="text-gray-400" />
                      Currency
                    </div>
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {currencies.slice(0, 6).map((curr) => (
                      <button
                        key={curr}
                        onClick={() => setCurrency(curr)}
                        className={`px-3 py-2.5 rounded-lg border transition-all ${currency === curr
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400'
                            : 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600'
                          }`}
                      >
                        <span className="text-sm font-medium">{curr}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Appearance Settings */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Palette className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Appearance</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Customize look and feel</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    Theme
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {themes.map((themeOption) => (
                      <button
                        key={themeOption}
                        onClick={() => setTheme(themeOption)}
                        className={`px-4 py-4 rounded-xl border transition-all flex flex-col items-center gap-2 ${theme === themeOption
                            ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                          }`}
                      >
                        {themeOption === 'dark' ? (
                          <Moon size={20} className={theme === themeOption ? 'text-purple-500' : 'text-gray-400'} />
                        ) : themeOption === 'light' ? (
                          <Sun size={20} className={theme === themeOption ? 'text-purple-500' : 'text-gray-400'} />
                        ) : (
                          <SettingsIcon size={20} className={theme === themeOption ? 'text-purple-500' : 'text-gray-400'} />
                        )}
                        <span className={`text-sm font-medium ${theme === themeOption ? 'text-purple-600 dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'}`}>
                          {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Notifications Settings */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                  <Bell className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Notifications</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Choose what notifications to receive</p>
                </div>
              </div>

              <div className="space-y-6">
                {Object.entries(notifications).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl">
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${value ? 'bg-green-100 dark:bg-green-900/30' : 'bg-gray-100 dark:bg-gray-800'}`}>
                        <Bell size={18} className={value ? 'text-green-600 dark:text-green-400' : 'text-gray-400'} />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {key === 'email' ? 'Email Notifications' :
                          key === 'newsletter' ? 'Weekly Newsletter' :
                          'Price Alerts'}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {key === 'email' ? 'Receive important updates via email' :
                          key === 'newsletter' ? 'Weekly crypto market insights' :
                          'Get alerts when prices hit your targets'}
                        </p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={value}
                        onChange={() => setNotifications({ ...notifications, [key]: !value })}
                        className="sr-only peer"
                      />
                      <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Security Settings */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
                  <Lock className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Security</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">Manage your account security</p>
                </div>
              </div>

              <div className="space-y-4">
                <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Lock size={18} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900 dark:text-white">Change Password</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Update your account password</p>
                    </div>
                  </div>
                  <div className="text-blue-600 dark:text-blue-400">→</div>
                </button>

                <button className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900/50 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                      <Shield size={18} className="text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="text-left">
                      <p className="font-medium text-gray-900 dark:text-white">Two-Factor Authentication</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Add an extra layer of security</p>
                    </div>
                  </div>
                  <div className="text-purple-600 dark:text-purple-400">→</div>
                </button>
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center pt-8">
              <button
                onClick={handleSave}
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-3"
              >
                <Save size={20} />
                Save All Changes
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Settings
