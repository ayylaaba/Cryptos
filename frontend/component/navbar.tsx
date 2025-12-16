import React from 'react'
import { Bitcoin } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full border-b border-border/30 z-50 backdrop-blur-md bg-background/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href='/' className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <span className="text-white font-bold text-lg">₿</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            CryptoVault
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">
            Features
          </a>
          <Link
            href="/dashboard"
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-white font-semibold hover:shadow-lg transition-all duration-300"
          >
            Launch App
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
