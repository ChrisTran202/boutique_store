import React from 'react'
import Image from 'next/image'


const Banner = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center bg-[#ffffff4b] sm:h-[30rem] '>
        
        <Image src="/icons/LemonIcon2.png" alt="icon" width={600} height={130}  />
          
      </div>
      <div className='bg-[#000000] h-2 w-[full]'>
      </div>
    </>
  )
}

export default Banner
