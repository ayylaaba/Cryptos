"use client"
import React, { useState } from 'react'
import Headers from '@/components/ui/headers'
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Shield, 
  CreditCard, 
  TrendingUp,
  CheckCircle,
  Edit2,
  Save,
  X,
  Camera,
  Bell,
  Globe,
  Lock,
  Eye,
  EyeOff
} from 'lucide-react'

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [showSecurityInfo, setShowSecurityInfo] = useState(false)

  const [profileData, setProfileData] = useState({
    name: 'John CryptoTrader',
    email: 'john@cryptovault.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    joinDate: 'January 15, 2023',
    tier: 'Premium',
    portfolioValue: '$125,430.25',
    totalTrades: 347,
    winRate: '68.5%',
    avgReturn: '+24.3%'
  })

  const [editableData, setEditableData] = useState(profileData)

  const handleSave = () => {
    setProfileData(editableData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setEditableData(profileData)
    setIsEditing(false)
  }

  const securityStats = [
    { label: 'Last Login', value: '2 hours ago', icon: Shield },
    { label: 'Devices', value: '3 Active', icon: Phone },
    { label: 'Sessions', value: '2 Active', icon: Globe },
    { label: 'Password Age', value: '30 days', icon: Lock }
  ]

  const tradingStats = [
    { label: 'Total Trades', value: profileData.totalTrades, change: '+12%', trend: 'up' },
    { label: 'Win Rate', value: profileData.winRate, change: '+2.4%', trend: 'up' },
    { label: 'Avg Return', value: profileData.avgReturn, change: '+1.8%', trend: 'up' },
    { label: 'Portfolio', value: profileData.portfolioValue, change: '+5.2%', trend: 'up' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      <Headers />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                <User className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                  Profile Settings
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-lg mt-2">
                  Manage your account information and preferences
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                <CheckCircle size={14} />
                <span>Account Verified</span>
              </div>
              <p className="text-gray-900 dark:text-white font-semibold mt-1">
                {profileData.tier} Tier
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Profile Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-6">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                      <User className="text-white" size={40} />
                    </div>
                    <button className="absolute -bottom-2 -right-2 p-2 bg-blue-500 hover:bg-blue-600 rounded-full text-white">
                      <Camera size={16} />
                    </button>
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {isEditing ? (
                        <input
                          type="text"
                          value={editableData.name}
                          onChange={(e) => setEditableData({...editableData, name: e.target.value})}
                          className="bg-transparent border-b border-blue-500 text-gray-900 dark:text-white"
                        />
                      ) : (
                        profileData.name
                      )}
                    </h2>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Mail size={16} />
                        {isEditing ? (
                          <input
                            type="email"
                            value={editableData.email}
                            onChange={(e) => setEditableData({...editableData, email: e.target.value})}
                            className="bg-transparent border-b border-blue-500 text-gray-900 dark:text-white text-sm"
                          />
                        ) : (
                          <span>{profileData.email}</span>
                        )}
                      </div>
                      <span className="px-3 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-semibold rounded-full">
                        {profileData.tier}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  {isEditing ? (
                    <>
                      <button
                        onClick={handleSave}
                        className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg hover:shadow-lg transition-all flex items-center gap-2"
                      >
                        <Save size={16} /> Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all flex items-center gap-2"
                      >
                        <X size={16} /> Cancel
                      </button>
                    </>
                  ) : (
                    <button
                      onClick={() => setIsEditing(true)}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-all flex items-center gap-2"
                    >
                      <Edit2 size={16} /> Edit Profile
                    </button>
                  )}
                </div>
              </div>

              {/* Profile Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="text-gray-400" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={editableData.phone}
                          onChange={(e) => setEditableData({...editableData, phone: e.target.value})}
                          className="bg-transparent border-b border-blue-500 text-gray-900 dark:text-white"
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white">{profileData.phone}</p>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="text-gray-400" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                      {isEditing ? (
                        <input
                          type="text"
                          value={editableData.location}
                          onChange={(e) => setEditableData({...editableData, location: e.target.value})}
                          className="bg-transparent border-b border-blue-500 text-gray-900 dark:text-white"
                        />
                      ) : (
                        <p className="text-gray-900 dark:text-white">{profileData.location}</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="text-gray-400" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Member Since</p>
                      <p className="text-gray-900 dark:text-white">{profileData.joinDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="text-gray-400" size={20} />
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">Portfolio Value</p>
                      <p className="text-gray-900 dark:text-white font-bold">{profileData.portfolioValue}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trading Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <TrendingUp className="text-blue-500" size={24} />
                Trading Performance
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {tradingStats.map((stat, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-900/50 rounded-2xl p-6">
                    <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</p>
                    <div className={`flex items-center gap-1 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                      <TrendingUp size={16} />
                      <span className="text-sm font-medium">{stat.change}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Security & Settings */}
          <div className="space-y-8">
            {/* Security Card */}
            <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                <Shield className="text-green-500" size={24} />
                Security Settings
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                      <Shield className="text-green-600 dark:text-green-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">2FA Authentication</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Two-factor protection</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={twoFactorEnabled}
                      onChange={() => setTwoFactorEnabled(!twoFactorEnabled)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                      <Bell className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-white font-medium">Notifications</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">Email & push alerts</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={notificationsEnabled}
                      onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-500"></div>
                  </label>
                </div>

                <button
                  onClick={() => setShowSecurityInfo(!showSecurityInfo)}
                  className="w-full py-3 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg font-medium transition-colors"
                >
                  {showSecurityInfo ? 'Hide' : 'Show'} Security Info
                </button>

                {showSecurityInfo && (
                  <div className="space-y-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    {securityStats.map((stat, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <stat.icon className="text-gray-400" size={16} />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</span>
                        </div>
                        <span className="text-gray-900 dark:text-white font-medium">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                  Change Password
                </button>
              </div>
            </div>

            {/* Verification Status */}
            <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-3xl border border-blue-200 dark:border-blue-800 p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Verification Status</h3>
              <div className="space-y-4">
                {[
                  { label: 'Email', status: 'verified', icon: Mail },
                  { label: 'Phone', status: 'verified', icon: Phone },
                  { label: 'Identity', status: 'pending', icon: User },
                  { label: 'Address', status: 'pending', icon: MapPin }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        item.status === 'verified' ? 'bg-green-100 dark:bg-green-900/30' : 'bg-yellow-100 dark:bg-yellow-900/30'
                      }`}>
                        <item.icon className={item.status === 'verified' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'} size={18} />
                      </div>
                      <div>
                        <p className="text-gray-900 dark:text-white">{item.label}</p>
                        <p className={`text-sm ${
                          item.status === 'verified' ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                        }`}>
                          {item.status === 'verified' ? 'Verified' : 'Pending'}
                        </p>
                      </div>
                    </div>
                    {item.status !== 'verified' && (
                      <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                        Verify
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Profile