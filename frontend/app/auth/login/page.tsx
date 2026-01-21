// "use client"
// import React from 'react'
// import { Mail, Lock, Eye, EyeOff } from "lucide-react"
// import Link from 'next/link'
// import { useState } from 'react'

// const Login = () => {

//   const [isVisible, setIsVisible] = useState(false);
//   const [data, setData] = useState({
//     email: '',
//     password: ''
//   });

//   const toggleVisibility = () =>{
//     setIsVisible(!isVisible);
//   }

//   const handleSubmit = (e:React.FormEvent) => {
//     e.preventDefault();
//     console.log("Form Submitted");
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setData(
//       {
//         ...data,
//         [e.target.name]: e.target.value
//       }
//     )
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen py-2 overflow-hidden mt-12 mb-12">
//         <div className="flex flex-col h-150 w-140 text-center p-10">
//           <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
//             Sign In
//           </h1>
//           <p className="text-lg sm:text-ml text-foreground/80 mb-8 leading-relaxed text-gray-400">
//             Sign in to your CryptoVault account
//           </p>
//           <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
//             <span className="relative right-31 text-gray-200 font-medium">
//               Email address
//             </span>
//             <div className="relative mb-4">
//               <Mail className="absolute left-18 top-1/2 transform -translate-y-1/2 text-gray-400" />
//               <input
//                 id='email'
//                 type="email"
//                 name='email'
//                 placeholder="you@example.com"
//                 value={data.email}
//                 onChange={handleChange}
//                 className="pl-10 pr-4 py-2 w-90 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//             </div>

//             <span className="relative right-35 text-gray-200 font-medium">
//               Password
//             </span>
//             <div className="relative">
//               <Lock className="absolute left-18 top-1/2 transform -translate-y-1/2 text-gray-400"  />
//               <input
//                 id='password'
//                 name='password'
//                 value={data.password}
//                 onChange={handleChange}
//                 type={ isVisible ? "text" : "password"}
//                 placeholder="Password"
//                 className="pl-10 pr-4 py-2 w-90 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
//               />
//               <button type="button" onClick={toggleVisibility}>
//                 {isVisible ? <EyeOff className='absolute right-20 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"' size={20} /> : <Eye className='absolute right-20 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"'  size={20} />}
//               </button>
//             </div>
//             <button
//               type="submit"
//               className="mt-8 ml-16  w-90 px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg transition-all duration-300"
//             >
//               Sign In
//             </button>
//             {/* remember me  */}
//             <div className="flex items-center mt-2 ml-20">
//               <input
//                 type="checkbox"
//                 id="rememberMe"
//                 className="mr-2"
//               />
//               <label htmlFor="rememberMe" className="text-gray-200">
//                 Remember me
//               </label>
//               <Link href="#" className="relative right-5 ml-20 text-primary hover:underline">
//                 Forgot Password?
//               </Link>
//             </div>
//           </form>
//           <span className="mt-4 text-gray-400">
//             or continue with
//           </span>
//           <div className="flex justify-center gap-4 mt-4">
//             <button className="w-40 h-10 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer transition-colors">
//               Google
//             </button>
//             <button className="w-40 h-10 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer transition-colors">
//               GitHub
//             </button>
//           </div>
//           <p className="mt-4 text-gray-400">
//             Don't have an account?{' '}
//             <Link href="/auth/register" className="text-primary hover:underline">
//               Sign Up
//             </Link>
//           </p>
//         </div>
//     </div>
//   )
// }

// export default Login

"use client"
import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, Key, Shield, Sparkles, Github, Chrome } from "lucide-react"
import Link from 'next/link'
import Image from 'next/image'

const Login = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted", data);
      setIsLoading(false);
    }, 1500);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
    setIsLoading(true);
    // Simulate social login
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Left Column - Branding & Info */}
          <div className="hidden lg:block">
            <div className="p-8">
              <Link href="/" className="inline-flex items-center gap-2 mb-12">
                <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
                  <Shield className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold text-white">CryptoVault</span>
              </Link>

              <div className="mt-2">
                <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                  Secure Access to Your <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Digital Assets</span>
                </h1>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                  Access real-time market data, manage your portfolio, and stay ahead with our advanced trading tools.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Sparkles className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Real-time Market Data</h3>
                      <p className="text-gray-400 text-sm">Live prices and analytics</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <Shield className="text-green-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Bank-level Security</h3>
                      <p className="text-gray-400 text-sm">Military grade encryption</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-purple-500/10 rounded-lg">
                      <Key className="text-purple-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Portfolio Management</h3>
                      <p className="text-gray-400 text-sm">Advanced tracking tools</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Login Form */}
          <div className="bg-gray-800/50 h-180 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl">
                  <Key className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Welcome Back</h2>
              </div>
              <p className="text-gray-400">Sign in to your CryptoVault account</p>
            </div>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    value={data.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3.5 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <Link 
                    href="/auth/forgot-password" 
                    className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    type={isVisible ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full pl-12 pr-12 py-3.5 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={toggleVisibility}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors"
                  >
                    {isVisible ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center my-5">
                <input
                  type="checkbox"
                  id="rememberMe"
                  className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
                />
                <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-300">
                  Remember me for 30 days
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                  isLoading 
                    ? 'bg-blue-600/50 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:shadow-lg hover:shadow-blue-500/25'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    Signing in...
                  </>
                ) : (
                  <>
                    Sign In
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-800/50 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-10">
              <button
                onClick={() => handleSocialLogin('google')}
                disabled={isLoading}
                className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 hover:bg-white/10 border border-gray-700 rounded-xl text-gray-300 transition-all duration-300 hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Chrome size={20} />
                <span className="font-medium">Google</span>
              </button>
              <button
                onClick={() => handleSocialLogin('github')}
                disabled={isLoading}
                className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 hover:bg-white/10 border border-gray-700 rounded-xl text-gray-300 transition-all duration-300 hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Github size={20} />
                <span className="font-medium">GitHub</span>
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link href="/auth/register" className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Create Account
                </Link>
              </p>
              <p className="text-gray-500 text-sm mb-10">
                By continuing, you agree to our{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300">Terms</a> and{' '}
                <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
