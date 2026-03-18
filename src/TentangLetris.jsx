import React from 'react'
import Litlecard from './komponen/litlecard'
function TentangLetris() {
  return (
    <div>
      <main className='flex gap-10 pt-10 justify-center'>
        <div className='w-[40%] '>
          <h1 className='text-4xl font-bold pb-10'>SMK letris pamulang</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adi Lorem, ipsum. lorem2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem, ipsum dolor sit amet consectetur adi Lorem, ipsum. lorem2 </p>
        <div className='flex gap-5 mt-2'>

        <Litlecard nama="8" isi="Program keahlian" />
        <Litlecard nama="75+" isi="Tenaga pengajar" />
        <Litlecard nama="12" isi="Tahun berdiri" />
        <Litlecard nama="100+" isi="Siswa berprestasi"/>
          
        </div>

        </div>
        <div className=' w-fit'>
            <img src="fotoletris.jpg" alt="" width={500}  className=' rounded-3xl shadow-2xl mr-21'/>
        </div>
      </main>

    </div>
  )
}

export default TentangLetris
