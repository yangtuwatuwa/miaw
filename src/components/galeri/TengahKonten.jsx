import Footer from "../layout/Footer.jsx"
import BigCard from '../ui/BigCard.jsx'
import Album from '../ui/ImageOverlayCard.jsx'
import React from 'react'
import IniGarisBtw from '../ui/IniGarisBtw.jsx'
import HalfCard from '../ui/HalfCard.jsx'
function middlecontain() {
  return (
    <div >
          <main  className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
            
              <h1 id='kegiatanSekolah' className='text-center text-2xl sm:text-3xl font-bold'>Kegiatan Sekolah Kami</h1>
              <IniGarisBtw />

              <article className='mt-8 grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                <Album className="w-full" image={"potoletris1.jpg"} title={"Lomba basket"} shortText={"pemenang basket tahun 2025 "} hoverText={"juara basket bsi di jakarta pada tanggal 16 desember 2025 di lorem ipsum dolor sit amet mantap sehat selalu"} />
                <Album className="w-full" image={"potoletris1.jpg"} title={"Lomba basket"} shortText={"pemenang basket tahun 2025 "} hoverText={"juara basket bsi di jakarta pada tanggal 16 desember 2025 di lorem ipsum dolor sit amet mantap sehat selalu"} />
                <Album className="w-full" image={"potoletris1.jpg"} title={"Lomba basket"} shortText={"pemenang basket tahun 2025 "} hoverText={"juara basket bsi di jakarta pada tanggal 16 desember 2025 di lorem ipsum dolor sit amet mantap sehat selalu"} />
                <Album className="w-full" image={"potoletris1.jpg"} title={"Lomba basket"} shortText={"pemenang basket tahun 2025 "} hoverText={"juara basket bsi di jakarta pada tanggal 16 desember 2025 di lorem ipsum dolor sit amet mantap sehat selalu"} />
                <Album className="w-full" image={"potoletris1.jpg"} title={"Lomba basket"} shortText={"pemenang basket tahun 2025 "} hoverText={"juara basket bsi di jakarta pada tanggal 16 desember 2025 di lorem ipsum dolor sit amet mantap sehat selalu"} />
                <Album className="w-full" image={"potoletris1.jpg"} title={"Lomba basket"} shortText={"pemenang basket tahun 2025 "} hoverText={"juara basket bsi di jakarta pada tanggal 16 desember 2025 di lorem ipsum dolor sit amet mantap sehat selalu"} />
              </article>

                <h1 id='kegiatanDiluarSekolah' className=' sm:mt-20 text-center text-2xl sm:text-3xl font-bold'>Kegiatan Diluar Sekolah</h1>
                <IniGarisBtw />
              <section  className='mt-10 flex flex-wrap'>
                <HalfCard image={"cocoknih.jpg"} title={"latihan dasar kepemimpinan siswa"} context={"dilakukan tahun 2025"} />
                <HalfCard image={"cocoknih.jpg"} title={"latihan dasar kepemimpinan siswa"} context={"dilakukan tahun 2025"} />
                <HalfCard image={"cocoknih.jpg"} title={"latihan dasar kepemimpinan siswa"} context={"dilakukan tahun 2025"} />
                <HalfCard image={"cocoknih.jpg"} title={"latihan dasar kepemimpinan siswa"} context={"dilakukan tahun 2025"} />
                <HalfCard image={"cocoknih.jpg"} title={"latihan dasar kepemimpinan siswa"} context={"dilakukan tahun 2025"} />
                <HalfCard image={"cocoknih.jpg"} title={"latihan dasar kepemimpinan siswa"} context={"dilakukan tahun 2025"} />
              </section>
                <h1 id='eventDiluar' className=' sm:mt-20 text-center text-2xl sm:text-3xl font-bold'>Event Diluar</h1>
                <IniGarisBtw />
              <section  className='mt-2'>
              <BigCard
              image={"fotoletris.jpg"}
              title={"event lomba makan tahu"}
              text={"coba lorem ipsum dolor sit amet take me back to the night we met slebew"}
              /> 
               <BigCard
              image={"fotoletris.jpg"}
              title={"event lomba makan tahu"}
              text={"coba lorem ipsum dolor sit amet take me back to the night we met slebew"}
              /> 
               <BigCard
              image={"fotoletris.jpg"}
              title={"event lomba makan tahu"}
              text={"coba lorem ipsum dolor sit amet take me back to the night we met slebew"}
              /> 
               <BigCard
              image={"fotoletris.jpg"}
              title={"event lomba makan tahu"}
              text={"coba lorem ipsum dolor sit amet take me back to the night we met slebew"}
              /> 
               <BigCard
              image={"fotoletris.jpg"}
              title={"event lomba makan tahu"}
              text={"coba lorem ipsum dolor sit amet take me back to the night we met slebew"}
              /> 
              </section>
          </main>
          <Footer/>
              </div>
  )
}

export default middlecontain