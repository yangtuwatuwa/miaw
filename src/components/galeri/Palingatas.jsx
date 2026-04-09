import React from 'react'
import ProgramCard from "../ui/ProgramCard"
function palingatas() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen py-6 sm:py-10">
          <h1 className='text-2xl sm:text-3xl font-bold text-center'>GALERI PERJALANAN LETRIS</h1>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <a className="w-full" href="#kegiatanSekolah">
              <ProgramCard image={"school.svg"} title={"kegiatan sekolah"} context={"100++"} />
            </a>
            <a className="w-full" href="#kegiatanDiluarSekolah">
              <ProgramCard image={"mountain.svg"} title={"kegiatan diluar sekolah"} context={"120++"} />
            </a>
            <a className="w-full" href="#eventDiluar">
              <ProgramCard image={"firework.svg"} title={"envent diluar"} context={"150++"} />
            </a>
          </div>

          <div className='flex justify-center mt-10'>
            <div className="relative w-full max-w-4xl h-64 sm:h-72 md:h-96 overflow-hidden rounded-xl" aria-label="Galeri hero">
              <img
                src="letrisnihbos.jpg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover brightness-35"
              />
              <div className="absolute inset-0 bg-black/40" />

              <div className="relative h-full flex flex-col justify-center items-center px-6 text-white text-center">
                <p className="text-lg md:text-2xl font-medium">Galeri Kami</p>
                <h2 className="text-3xl md:text-5xl font-bold mt-2">Letris Pamulang</h2>
                <p className="text-base md:text-xl mt-4 italic font-bold">Momen terbaik kami</p>
              </div>
            </div>
          </div>
    </div>
  )
}

export default palingatas