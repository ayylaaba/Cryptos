"use client"
import React from 'react'
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import Link from 'next/link'
import { useState } from 'react'

const Login = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const toggleVisibility = () =>{
    setIsVisible(!isVisible);
  }

  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted");
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(
      {
        ...data,
        [e.target.name]: e.target.value
      }
    )
  };

  return (
    <div className="flex items-center justify-center min-h-screen py-2 overflow-hidden mt-12 mb-12">
        <div className="flex flex-col h-150 w-140 text-center p-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
            Sign In
          </h1>
          <p className="text-lg sm:text-ml text-foreground/80 mb-8 leading-relaxed text-gray-400">
            Sign in to your CryptoVault account
          </p>
          <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <span className="relative right-31 text-gray-200 font-medium">
              Email address
            </span>
            <div className="relative mb-4">
              <Mail className="absolute left-18 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                id='email'
                type="email"
                name='email'
                placeholder="you@example.com"
                value={data.email}
                onChange={handleChange}
                className="pl-10 pr-4 py-2 w-90 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <span className="relative right-35 text-gray-200 font-medium">
              Password
            </span>
            <div className="relative">
              <Lock className="absolute left-18 top-1/2 transform -translate-y-1/2 text-gray-400"  />
              <input
                id='password'
                name='password'
                value={data.password}
                onChange={handleChange}
                type={ isVisible ? "text" : "password"}
                placeholder="Password"
                className="pl-10 pr-4 py-2 w-90 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="button" onClick={toggleVisibility}>
                {isVisible ? <EyeOff className='absolute right-20 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"' size={20} /> : <Eye className='absolute right-20 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"'  size={20} />}
              </button>
            </div>
            <button
              type="submit"
              className="mt-8 ml-16  w-90 px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg transition-all duration-300"
            >
              Sign In
            </button>
            {/* remember me  */}
            <div className="flex items-center mt-2 ml-20">
              <input
                type="checkbox"
                id="rememberMe"
                className="mr-2"
              />
              <label htmlFor="rememberMe" className="text-gray-200">
                Remember me
              </label>
              <Link href="#" className="relative right-5 ml-20 text-primary hover:underline">
                Forgot Password?
              </Link>
            </div>
          </form>
          <span className="mt-4 text-gray-400">
            or continue with
          </span>
          <div className="flex justify-center gap-4 mt-4">
            <button className="w-40 h-10 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer transition-colors">
              Google
            </button>
            <button className="w-40 h-10 px-4 py-2 border border-gray-300 rounded-lg cursor-pointer transition-colors">
              GitHub
            </button>
          </div>
          <p className="mt-4 text-gray-400">
            Don't have an account?{' '}
            <Link href="/auth/register" className="text-primary hover:underline">
              Sign Up
            </Link>
          </p>
        </div>
    </div>
  )
}

export default Login
