"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Headers from '@/components/ui/headers'
import { 
  LogOut, 
  Shield, 
  AlertTriangle, 
  CheckCircle,
  X,
  Home,
  ArrowRight
} from 'lucide-react'
import Link from 'next/link'

const Logout = () => {
  const router = useRouter()
  const [isLoggingOut, setIsLoggingOut] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [logoutSuccess, setLogoutSuccess] = useState(false)

  const handleLogout = () => {
    setIsLoggingOut(true)
    setShowConfirm(false)
    
    // Simulate API call
    setTimeout(() => {
      // Clear auth tokens from localStorage
      localStorage.removeItem('authToken')
      localStorage.removeItem('userData')
      
      setIsLoggingOut(false)
      setLogoutSuccess(true)
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        router.push('/auth/login')
      }, 2000)
    }, 1500)
  }

  if (showConfirm) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl max-w-md w-full p-8 animate-slide-in">
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
              <LogOut className="text-white" size={32} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              Logout Confirmation
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Are you sure you want to logout? You'll need to sign in again to access your account.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-200 dark:border-red-800">
              <AlertTriangle className="text-red-500" size={20} />
              <p className="text-red-700 dark:text-red-400 text-sm">
                Any unsaved changes will be lost
              </p>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="flex-1 py-3 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all flex items-center justify-center gap-2"
              >
                <X size={18} /> Cancel
              </button>
              <button
                onClick={handleLogout}
                disabled={isLoggingOut}
                className={`flex-1 py-3 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  isLoggingOut
                    ? 'bg-red-600/50 cursor-not-allowed'
                    : 'bg-gradient-to-r from-red-600 to-orange-600 hover:shadow-lg hover:shadow-red-500/25'
                }`}
              >
                {isLoggingOut ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    Logging out...
                  </>
                ) : (
                  <>
                    <LogOut size={18} /> Yes, Logout
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (logoutSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center p-4">
        <div className="max-w-md w-full text-center">
          <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
            <CheckCircle className="text-white" size={48} />
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Successfully Logged Out
          </h1>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10">
            You have been securely logged out of your account. Redirecting to login page...
          </p>

          <div className="space-y-4">
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-2 text-sm text-green-600 dark:text-green-400">
                <Shield size={16} />
                <span>Session Cleared</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400">
                <Shield size={16} />
                <span>Tokens Revoked</span>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                <Home size={18} />
                Return to Homepage
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-900 dark:to-gray-950">
      <Headers />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl flex items-center justify-center">
              <LogOut className="text-white" size={48} />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Secure Logout
            </h1>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Sign out from your CryptoVault account across all devices
            </p>
          </div>

          {/* Logout Information */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700 p-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <Shield className="text-blue-500 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    What happens when you logout?
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Your session will be terminated on this device
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      You'll need to sign in again to access your account
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      Your data remains secure and private
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl border border-yellow-200 dark:border-yellow-800">
                <AlertTriangle className="text-yellow-500 mt-1" size={20} />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Before you logout
                  </h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                      Ensure you have access to your login credentials
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/dashboard"
              className="flex-1 py-4 px-6 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all text-center"
            >
              Return to Dashboard
            </Link>
            
            <button
              onClick={() => setShowConfirm(true)}
              className="flex-1 py-4 px-6 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/25 transition-all flex items-center justify-center gap-2"
            >
              <LogOut size={20} />
              Secure Logout
            </button>
          </div>

          {/* Security Stats */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">Active Sessions</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">2</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">Last Login</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">2h ago</p>
              </div>
              <div className="text-center">
                <p className="text-gray-500 dark:text-gray-400 text-sm">Account Age</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-2">184d</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Logout