import React from 'react'
import { itemsData } from './ItemsData'
import Image from 'next/image'
const Items = () => {
  return (
    <>
    <div className='flex items-center justify-center'>
      <div className=' grid grid-cols-3 justify-center items-center bg-[#edfdb560] md:w-[70%] '>
        
        {itemsData.map((item) => (
          <div key={item.id} className='m-2 mt-10 flex justify-center items-center border-[.2px] border-[#a7c019] rounded-[5px] bg-white'>
            <li className='flex flex-col justify-center items-center m-5 '>
              
              <Image 
                src={item.img} 
                alt={item.title} 
                width={250} 
                height={100}
                className='rounded-[5px] overflow-hidden '
              />
            
            <h1 className='text-[#000000]  text-[15px] m-3'>{item.title}</h1>
            
            </li>
          </div>
        ))}
      </div>
    </div>
    </> )
}

export default Items
