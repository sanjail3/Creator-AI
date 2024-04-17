


import { Menu } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import { UserButton } from '@clerk/nextjs'
import { MobileSidebar } from './Mobilesidebar'



export default function Navbar() {
  return (
    <div className='flex items-center p-4'>
         <MobileSidebar apiLimitCount={0} isPro={false} />
           

           <div className='flex justify-end w-full'>
            <UserButton afterSignOutUrl='/' />
           </div>
     
    </div>
  )
}
