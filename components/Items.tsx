'use client'
import React from 'react'
import { itemsData } from './ItemsData'
import Image from 'next/image'
const Items = () => {
  return (
    <>
      <div className=' grid grid-cols-3 bg-[#edfdb560] '>
        
        {itemsData.map((item) => (
          <div key={item.id} className='m-2 mt-5 flex justify-center items-center w-[30vw] border-[.2px] border-[#a7c019] rounded-[5px] bg-white'>
            <li className='flex flex-col justify-center items-center '>
              
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
    </> )
}

export default Items
