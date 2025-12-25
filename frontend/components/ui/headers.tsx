import React from 'react'
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

const headers = () => {
    return (
        <header className='fixed top-0 w-full border-b border-border/30 z-50 backdrop-blur-md bg-background/70'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                    <div className='w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center'>
                        <span className='text-white font-bold text-lg'>₿</span>
                    </div>
                    <span className='text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
                        CryptoVault
                    </span>
                </div>

                {/* make a dashboard header */}
                <div className='flex items-center gap-15'>
                    <Link href={'/dashboard'} className='text-foreground/80 hover:text-foreground transition-colors'>
                        Dashboard
                    </Link>
                    <Link href={'/markets'} className='text-foreground/80 hover:text-foreground transition-colors'>
                        Markets
                    </Link>
                    <Link href={'/news'} className='text-foreground/80 hover:text-foreground transition-colors'>
                        News
                    </Link>
                </div>
                {/* make a meanu button show profile and settings and logout */}

                <div className='flex items-center'>
                    <button
                        className="mr-4 p-2 rounded-lg hover:bg-indigo-700 transition-colors">
                        <Sun size={20} />
                    </button>
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-10 h-10 flex items-center justify-center cursor-pointer">
                            <button className="w-8 h-8 cursor-pointer rounded-full bg-gradient-to-br from-primary border-0 to-accent flex items-center justify-center">
                                <User size={16} />
                            </button>                    
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-background border border-border/30 shadow-lg">
                            <DropdownMenuLabel className="font-semibold text-foreground/80">User Menu</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup >
                                <DropdownMenuItem className="text-white hover:!bg-indigo-800">
                                    Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-white hover:!bg-indigo-800">
                                    Settings
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-white hover:!bg-indigo-800">
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

export default headers
