'use client'
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';


const navItems = [
  {
    label:"Home", href:"/"
  },
  {
    label:"Contact", href:"/contact"
  }
]
const NavItems = () => {

 

  return (
    <nav className='flex items-center gap-4 text-black '>
      {navItems.map(({label, href}) => (
        
      <Link 
        href={href} 
        key={label}
        className={` hover:text-[#a7c019] ${usePathname() === href ? 'text-[#a7c019]' : ''} `} 
      >
        {label}
      </Link>
      ))}
      
    </nav>
  )
}

export default NavItems