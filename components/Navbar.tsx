import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'
import { Molle } from 'next/font/google'


const molle = Molle({ 
    weight: '400', 
    subsets: ['latin'] 
  })

function Navbar() {

    
    

  return (
    
    <nav className='bg-[#ffffff] p-1 flex items-center justify-between '>
      <Link href="/">
        <div className=''>
          <Image src="/icons/LemonIcon2.png" alt="icon" width={125} height={125}  />
        </div>
      </Link>
      <div>
        <h1 className={`text-3xl text-[#ffffff] ${molle.className} `} >Stuffed UP</h1>
      </div>
      <div>
        <NavItems />
      </div>
    </nav>
  )
}

export default Navbar