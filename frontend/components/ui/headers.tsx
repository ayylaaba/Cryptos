
import React, { useState, useEffect } from 'react'
import { useTheme } from "next-themes"
import Link from 'next/link'
import { User, Moon, Sun } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Headers = () => {
    const { theme, setTheme } = useTheme()
    
    const toggleDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <header className='fixed top-0 w-full h-20 border-b border-gray-200 dark:border-gray-800 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    {/* <Link href={'/'} className='flex items-center gap-2'> */}
                        <Link href={'/dashboard'} className='text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent'>
                            CryptoVault
                        </Link>
                    {/* </Link> */}
                </div>

                {/* Navigation Links */}
                <div className='flex items-center gap-8'>
                    <Link 
                        href={'/dashboard'} 
                        className='underlineCss text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium'
                    >
                        Dashboard
                    </Link>
                    <Link 
                        href={'/markets'} 
                        className='underlineCss text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium'
                    >
                        Markets
                    </Link>
                    <Link 
                        href={'/news'} 
                        className='underlineCss text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium'
                    >
                        News
                    </Link>
                </div>

                {/* Right side buttons */}
                <div className='flex items-center gap-4'>
                    {/* SIMPLE DARK MODE TOGGLE */}
                    <button
                        onClick={toggleDarkMode}
                        className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {theme !== 'dark' ? (
                            <Sun size={20} className='text-yellow-500' />
                        ) : (
                            <Moon size={20} className='text-gray-600' />
                        )}
                    </button>
                    
                    {/* User Menu */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <button className="w-8 h-8 cursor-pointer rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center hover:opacity-90 transition-opacity">
                                <User size={16} className="text-white" />
                            </button>                    
                        </DropdownMenuTrigger>
                        <DropdownMenuContent 
                            className="w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
                            align="end"
                        >
                            <DropdownMenuLabel className="font-semibold text-gray-900 dark:text-gray-100">
                                User Menu
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
                            <DropdownMenuGroup>
                                <DropdownMenuItem asChild className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                                    <Link href={'profile'}>
                                        Profile
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
                                   <Link href={'settings'}>
                                        Settings
                                   </Link>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
                                <DropdownMenuItem asChild  className="text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer">
                                    <Link href={'/auth/logout'}>
                                        Logout
                                    </Link> 
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

export default Headers