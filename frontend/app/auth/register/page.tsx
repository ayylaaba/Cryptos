"use client"

import React from 'react'
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useEffect, useState } from 'react'


const Register = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () =>{
    setIsVisible(!isVisible);
  }
  
  const handleSubmit = ( e:React.FormEvent) =>{
    e.preventDefault();
    console.log("Form Submitted");
    console.log(formData);
  }

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className='flex items-center justify-center min-h-screen py-2 overflow-hidden mt-12'>
      <div className='flex flex-col h-220 w-140 text-center p-10'>
        <h1 className='text-5xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse'>
          Sign Up
        </h1>
        <p className='text-lg sm:text-ml text-foreground/80 mb-8 leading-relaxed text-gray-400'>
          Create your CryptoVault account
        </p>
        <form className='flex flex-col gap-2' onSubmit={ handleSubmit } >
          {/* form fields go here */}
          <div className='flex flex-col gap-3 mb-2'>
            <label className="text-gray-200 font-medium text-left ml-12">
              Username
            </label>
            <div className="relative">
              <input
                type="text"
                name="username"
                id='username'
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="pl-4 pr-4 py-3 w-100 max-w-md mx-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent text-white"
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 mb-2'>
            <label htmlFor="" className='text-gray-200 font-medium text-left ml-12'>
              Email address
            </label>
            <div className="relative">
              <input 
                type="email"
                name="email"
                id='email' 
                placeholder='Email Address'
                value={formData.email}
                onChange={handleChange}
                className="pl-4 pr-4 py-3 w-100 max-w-md mx-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent text-white"
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 mb-4'>
            <label htmlFor="" className='text-gray-200 font-medium text-left ml-12'>
              Password
            </label>
            <div className="relative">
              <input type="password" 
                    name="password"
                    id='password'
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleChange}
                    className="pl-4 pr-4 py-3 w-100 max-w-md mx-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent text-white"
              />
            </div>
          </div>
          {/* confirme password */}
          <div className='flex flex-col gap-2 mb-4'>
            <label htmlFor="" className='text-gray-200 font-medium text-left ml-12'>
              Confirm Password
            </label>
            <div className="relative mb-4">
              <input type={isVisible ? "password" :"text"}
                placeholder='Confirm Password'
                name="confirmPassword"
                id='confirmPassword'
                onChange={handleChange}
                value={formData.confirmPassword}
                className="pl-4 pr-4 py-3 w-100 max-w-md mx-auto border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent text-white"
                />
                <button 
                  type="button" 
                  onClick={toggleVisibility}
                  className="absolute right-2 top-2"
                >
                  {isVisible ? <EyeOff className='mr-12 mt-2' size={20} /> : <Eye className='mr-12 mt-2'  size={20} />}
                </button>
            </div>
          </div>
          <button type="submit"
            className=" w-100 max-w-md mx-auto px-5 py-3 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg transition-all duration-300"
            >
            Sign Up
          </button>
          <div className='flex items-center justify-center mt-2'>
            <p className='text-gray-200'>Already have an account?</p>
            <a href="/auth/login" className='ml-2 text-primary hover:underline'>Sign In</a>
          </div>
          {/* or continue with */}
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
        </form>
      </div>
    </div>
  )
}

export default Register
