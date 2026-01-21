// "use client"

// import React from 'react'
// import { Mail, Lock, Eye, EyeOff } from "lucide-react"
// import { useEffect, useState } from 'react'


// const Register = () => {
//   const [isVisible, setIsVisible] = useState(false);

//   const toggleVisibility = () =>{
//     setIsVisible(!isVisible);
//   }
  
//   const handleSubmit = ( e:React.FormEvent) =>{
//     e.preventDefault();
//     console.log("Form Submitted");
//     console.log(formData);
//   }

//   const [formData, setFormData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   return (
//     <div className='flex items-center justify-center min-h-screen py-2 overflow-hidden mt-12'>
//       <div className='flex flex-col h-220 w-140 text-center p-10'>
//         <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse'>
//           Sign Up
//         </h1>
//         <p className='text-lg sm:text-ml text-foreground/80 mb-8 leading-relaxed text-gray-400'>
//           Create your CryptoVault account
//         </p>
//         <form className='flex flex-col gap-2' onSubmit={ handleSubmit } >
//           {/* form fields go here */}
//           <div className='flex flex-col gap-3 mb-2'>
//             <label className="text-gray-200 font-medium text-left ml-12">
//               Username
//             </label>
//             <div className="relative">
//               <input
//                 type="text"
//                 name="username"
//                 id='username'
//                 placeholder="Username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="pl-4 pr-4 py-3 w-100 max-w-md mx-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent text-white"
//               />
//             </div>
//           </div>
//           <div className='flex flex-col gap-2 mb-2'>
//             <label htmlFor="" className='text-gray-200 font-medium text-left ml-12'>
//               Email address
//             </label>
//             <div className="relative">
//               <input 
//                 type="email"
//                 name="email"
//                 id='email' 
//                 placeholder='Email Address'
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="pl-4 pr-4 py-3 w-100 max-w-md mx-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent text-white"
//               />
//             </div>
//           </div>
//           <div className='flex flex-col gap-2 mb-4'>
//             <label htmlFor="" className='text-gray-200 font-medium text-left ml-12'>
//               Password
//             </label>
//             <div className="relative">
//               <input type="password" 
//                     name="password"
//                     id='password'
//                     placeholder='Password'
//                     value={formData.password}
//                     onChange={handleChange}
//                     className="pl-4 pr-4 py-3 w-100 max-w-md mx-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent text-white"
//               />
//             </div>
//           </div>
//           {/* confirme password */}
//           <div className='flex flex-col gap-2 mb-4'>
//             <label htmlFor="" className='text-gray-200 font-medium text-left ml-12'>
//               Confirm Password
//             </label>
//             <div className="relative mb-4">
//               <input type={isVisible ? "password" :"text"}
//                 placeholder='Confirm Password'
//                 name="confirmPassword"
//                 id='confirmPassword'
//                 onChange={handleChange}
//                 value={formData.confirmPassword}
//                 className="pl-4 pr-4 py-3 w-100 max-w-md mx-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent text-white"
//                 />
//                 <button 
//                   type="button" 
//                   onClick={toggleVisibility}
//                   className="absolute right-2 top-2"
//                 >
//                   {isVisible ? <EyeOff className='mr-12 mt-2' size={20} /> : <Eye className='mr-12 mt-2'  size={20} />}
//                 </button>
//             </div>
//           </div>
//           <button type="submit"
//             className=" w-100 max-w-md mx-auto px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg transition-all duration-300"
//             >
//             Sign Up
//           </button>
//           <div className='flex items-center justify-center mt-2'>
//             <p className='text-gray-200'>Already have an account?</p>
//             <a href="/auth/login" className='ml-2 text-primary hover:underline'>Sign In</a>
//           </div>
//           {/* or continue with */}
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
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Register


"use client"
import React, { useState } from 'react'
import { Mail, Lock, Eye, EyeOff, User, ArrowRight, Key, Shield, Sparkles, Github, Chrome, Check } from "lucide-react"
import Link from 'next/link'

const Register = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  const [passwordStrength, setPasswordStrength] = useState(0);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log("Form Submitted", formData);
      setIsLoading(false);
    }, 1500);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });

    // Calculate password strength
    if (name === 'password') {
      let strength = 0;
      if (value.length >= 8) strength += 25;
      if (/[A-Z]/.test(value)) strength += 25;
      if (/[0-9]/.test(value)) strength += 25;
      if (/[^A-Za-z0-9]/.test(value)) strength += 25;
      setPasswordStrength(strength);
    }
  };

  const handleSocialRegister = (provider: string) => {
    console.log(`Register with ${provider}`);
    setIsLoading(true);
    // Simulate social registration
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  const getStrengthColor = (strength: number) => {
    if (strength < 50) return 'bg-red-500';
    if (strength < 75) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getStrengthText = (strength: number) => {
    if (strength < 50) return 'Weak';
    if (strength < 75) return 'Fair';
    return 'Strong';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-gray-950 flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        {/* <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl"></div> */}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Branding & Info */}
          <div className="hidden lg:block">
            <div className="p-8 h-180">
              <Link href="/" className="inline-flex items-center gap-2 mb-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Shield className="text-white" size={24} />
                </div>
                <span className="text-2xl font-bold text-white">CryptoVault</span>
              </Link>

              <div className="mt-16">
                <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                  Start Your <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Crypto Journey</span> Today
                </h1>
                <p className="text-gray-400 text-lg mb-12 leading-relaxed">
                  Join thousands of investors managing their digital assets with our secure and intuitive platform.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <Check className="text-green-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Zero Trading Fees</h3>
                      <p className="text-gray-400 text-sm">For the first 30 days</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <Sparkles className="text-blue-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Advanced Analytics</h3>
                      <p className="text-gray-400 text-sm">Real-time market insights</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-orange-500/10 rounded-lg">
                      <Key className="text-orange-400" size={20} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold">Secure Wallet</h3>
                      <p className="text-gray-400 text-sm">Multi-signature protection</p>
                    </div>
                  </div>
                </div>

                {/* <div className="mt-12 p-6 bg-gray-800/30 rounded-2xl border border-gray-700/50">
                  <p className="text-gray-300 text-sm">
                    "CryptoVault has transformed how I manage my investments. The security features are unparalleled."
                  </p>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                    <div>
                      <p className="text-white font-semibold">Alex Johnson</p>
                      <p className="text-gray-400 text-sm">Investor since 2021</p>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          {/* Right Column - Registration Form */}
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-3xl border border-gray-700/50 p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-2">
              <div className="inline-flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                  <User className="text-white" size={24} />
                </div>
                <h2 className="text-3xl font-bold text-white">Create Account</h2>
              </div>
              <p className="text-gray-400">Join CryptoVault and unlock the future of finance</p>
            </div>

            <form className="space-y-2.5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                  Username
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Choose a username"
                    value={formData.username}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

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
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="password"
                    name="password"
                    type={isVisible ? "text" : "password"}
                    placeholder="Create a strong password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-12 pr-12 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
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
                
                {/* Password Strength Indicator */}
                {formData.password && (
                  <div className="mt-2">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-gray-400">Password strength</span>
                      <span className={`text-xs font-medium ${
                        passwordStrength < 50 ? 'text-red-400' :
                        passwordStrength < 75 ? 'text-yellow-400' :
                        'text-green-400'
                      }`}>
                        {getStrengthText(passwordStrength)}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-1.5">
                      <div 
                        className={`h-1.5 rounded-full ${getStrengthColor(passwordStrength)} transition-all duration-300`}
                        style={{ width: `${passwordStrength}%` }}
                      ></div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className={`flex items-center gap-1 text-xs ${formData.password.length >= 8 ? 'text-green-400' : 'text-gray-500'}`}>
                        <Check size={12} /> 8+ characters
                      </div>
                      <div className={`flex items-center gap-1 text-xs ${/[A-Z]/.test(formData.password) ? 'text-green-400' : 'text-gray-500'}`}>
                        <Check size={12} /> Uppercase
                      </div>
                      <div className={`flex items-center gap-1 text-xs ${/[0-9]/.test(formData.password) ? 'text-green-400' : 'text-gray-500'}`}>
                        <Check size={12} /> Number
                      </div>
                      <div className={`flex items-center gap-1 text-xs ${/[^A-Za-z0-9]/.test(formData.password) ? 'text-green-400' : 'text-gray-500'}`}>
                        <Check size={12} /> Special char
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                    required
                  />
                </div>
                {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
                  <p className="mt-1 text-xs text-red-400">Passwords do not match</p>
                )}
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="acceptTerms"
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                  className="mt-1 w-4 h-4 text-purple-600 bg-gray-700 border-gray-600 rounded focus:ring-purple-500 focus:ring-2"
                  required
                />
                <label htmlFor="acceptTerms" className="ml-2 text-sm text-gray-300">
                  I agree to the{' '}
                  <a href="#" className="text-purple-400 hover:text-purple-300">Terms of Service</a> and{' '}
                  <a href="#" className="text-purple-400 hover:text-purple-300">Privacy Policy</a>
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading || !formData.acceptTerms || formData.password !== formData.confirmPassword}
                className={`w-full py-3.5 px-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                  isLoading || !formData.acceptTerms || formData.password !== formData.confirmPassword
                    ? 'bg-purple-600/50 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:shadow-purple-500/25'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
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
                <span className="px-4 bg-gray-800/50 text-gray-400">Or sign up with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => handleSocialRegister('google')}
                disabled={isLoading}
                className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 hover:bg-white/10 border border-gray-700 rounded-xl text-gray-300 transition-all duration-300 hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Chrome size={20} />
                <span className="font-medium">Google</span>
              </button>
              <button
                onClick={() => handleSocialRegister('github')}
                disabled={isLoading}
                className="flex items-center justify-center gap-3 py-3 px-4 bg-white/5 hover:bg-white/10 border border-gray-700 rounded-xl text-gray-300 transition-all duration-300 hover:border-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Github size={20} />
                <span className="font-medium">GitHub</span>
              </button>
            </div>

            <div className="text-center">
              <p className="text-gray-400">
                Already have an account?{' '}
                <Link href="/auth/login" className="text-purple-400 hover:text-purple-300 font-semibold transition-colors">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
