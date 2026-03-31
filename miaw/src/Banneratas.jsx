import React from 'react'

function banneratas() {
  return (
    <div className='relative w-full h-screen overflow-hidden '>
        <img src="./gamabarsekolahgde.jpg" alt="" className='absolute inset-0 w-full h-full object-cover brightness-35' />
        <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative h-full flex flex-col justify-center px-10 md:px-20 text-white  ">
    <p className="text-xl md:text-2xl font-medium">Selamat datang</p>
    <h1 className="text-4xl md:text-6xl font-bold mt-2">SMK letris pamulang</h1>
    <p className="text-lg md:text-2xl mt-4 italic font-bold">Mendunia dan Berbudaya</p>

  </div>    
    </div>
  )
}

export default banneratas
