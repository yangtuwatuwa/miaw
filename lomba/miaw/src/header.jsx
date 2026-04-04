import React from 'react'
import {useNavigate} from 'react-router-dom'
import Atas from './komponen/atas'
// import '../public/letrislogonew.png'
// import benner from './assets/banner.png'
// import Contain1 from './contain1'
function header() {
  return (
    <div>
      <header className='bg-blue-950 h-20  '>
        <nav  >
            <ul className='flex sm:w-fit md:w-fit lg:justify-between    '>
                <li>
                    <img src="letrislogonew.png" alt="" className='w-[11%] ml-4 my-3'/>
                </li>
                <img src="menu (2).png" alt="" width={30}  className='mr-4 h-7 my-6  sm:hidden hover:cursor-pointer'  />
                <li className=' hidden sm:flex lg:flex text-gray-300 items-center mr-4 sm:gap-[17%] lg:gap-[15%] font-bold'>
                    
                     <Atas text='Galeri' gambar='photo.png' />
                    <Atas text='Pembayaran' gambar='pay.png' />
                    <Atas text='PPDB' gambar='project.png'  /> 
                    
             
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default header
