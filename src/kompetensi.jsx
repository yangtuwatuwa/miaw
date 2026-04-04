import React from 'react'
import Largecard from './komponen/largecard'
import Button from './komponen/Initombol'

function kopeten() {
  return (   
    <div>
        <main className='mt-20  w-full '>
            <h1 className='text-center text-3xl font-bold mb-5'>Program keahlian</h1>
            <h2 className='text-center mb-5 '>kami memiliki beberapa program keahlian yang sangat relevalan dengan kebutuhan industri sekarang</h2>
            <hr className='w-[40%] mx-auto border' />

          <div className='w-full '>

            <article className='mt-20 mx:[20%] xs:grid xs:w-[60%] xs:mx-auto xs:gap-[40%] sm:mx-auto lg:mx-[20%] lg:gap-[70%] sm:w-[70%] sm:grid sm:gap-20 lg:grid lg:w-[70%] md:grid md:gap-[40%] md:w-[70%] md:mx-20  '>
                <Largecard  image="hacker (2).png" title="pengembangan perangkat lunak dan gim" context="PPLG (Pengembangan Perangkat Lunak dan Gim) adalah jurusan SMK yang fokus pada coding, desain, dan algoritma untuk membuat perangkat lunak, aplikasi, game, serta website" / >
                <Largecard  image='monitor.svg' title="Multimedia" context='kombinasi berbagai media seperti teks, gambar, grafik, audio, video, dan animasi yang terintegrasi secara digital menggunakan komputer untuk menyampaikan informasi atau hiburan'                                                                            />
            </article>
          
          </div>
        </main>
    </div>
  )
}

export default kopeten