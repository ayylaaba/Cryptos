import React from 'react'
import { Bitcoin } from 'lucide-react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      {/* logo  */}
      <nav className='fixed  w-full bg-black/90 backdrop-blur-md'>
          <div className='flex justify-between relative m-2'>
              <Link href='/' className='flex justify-between items-center pr-2 h-8 w-35'>
                <div className='bottom-7 left-1 flex justify-center items-center text-white rounded
                  bg-gradient-to-br from-primary to-accent w-10 h-10'>
                  <Bitcoin />
                </div>
                <span className='font-bold text-1xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent'>
                  CryptoVault
                </span>
              </Link>
              
              {/* authentacition */}
              <div>
                  <Link href="#features">
                      Features
                  </Link>
                <Button className='bg-gradient-to-r from-primary to-accent mr-2 mt-1 ml-2'>
                  <Link href="#register">
                    Lanch App
                  </Link>
                </Button>
              </div>
          </div>
        </nav>





    </div>
  )
}

export default Navbar
