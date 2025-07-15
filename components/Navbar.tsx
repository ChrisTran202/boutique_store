import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import NavItems from './NavItems'




function Navbar() {

    
    

  return (
    
    <nav className='bg-[#ffffff] p-1 flex items-center justify-between '>
      <Link href="/">
        <div className=''>
          <Image src="/icons/LemonIcon2.png" alt="icon" width={125} height={125}  />
        </div>
      </Link>
      
      <div>
        <NavItems />
      </div>
    </nav>
  )
}

export default Navbar