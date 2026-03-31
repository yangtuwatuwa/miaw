import React from 'react'
import Litlecard from './komponen/Litlecard'
function TentangLetris() {
  return (
    <div>
      <main className=' grid grid-cols-1  lg:grid lg:grid-cols-3 gap-[10%]  pt-10  mx-15'>
        <div className='w-[60%] '>
          <h1 className='text-4xl font-bold pb-10'>SMK letris pamulang</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adi Lorem, ipsum. lorem2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adi Lorem, ipsum. lorem2 </p>
        
        
        <div className='grid grid-cols-2 gap-30 mx-auto w-fit sm:flex  mt-2 sm:gap-5'>

        <Litlecard nama="8" isi="Program keahlian" />
        <Litlecard nama="75+" isi="Tenaga pengajar" />
        <Litlecard nama="12" isi="Tahun berdiri" />
        <Litlecard nama="100+" isi="Siswa berprestasi"/>
          
        </div>

        </div>
        <div >
            <img src="fotoletris.jpg" alt="" width={500}  className=' rounded-3xl shadow-2xl '/>
        </div>
      </main>

    </div>
  )
}

export default TentangLetris
