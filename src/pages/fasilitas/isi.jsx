import React from 'react'
import Fcard from './komponen/fCard'

function Isi() {
  return (
    <div className='w-full bg-slate-900 px-4 py-10 sm:px-6 lg:px-10'>
      <div className='mx-auto max-w-7xl'>
        <header className='text-center'>
          <h1 className='text-white text-3xl sm:text-4xl md:text-5xl font-bold'>Fasilitas</h1>
        </header>

        <section className='mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
         <Fcard image='hacker (2).png 'title='Ruang Guru' context='Ruangan tempat pahlawan tanpa tanda jasa beristirahat (keren bet kata kata gwej 😎) ' />
            <Fcard image='education.png' title='Kelas' context='ruangan tempat berlangsungnya kegiatan belajar mengajar'/>
            <Fcard image='toilet.png' title='Toilet' context='ruangan tempat dimana para siswa dan guru dapat membuang hajatnya '/>
            <Fcard image='hall.png' title='Aula' context='tempat beribadahnya siswa atau guru yang beragama Kristen dan tempat penyampain informasi'/>
            <Fcard image='mosque.png' title='Musholla' context='ruangan tempat dimana para siswa dan guru yang beragama Islam dapat beribadah'/>
        </section>

        <section className='mt-16'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-amber-300 text-center lg:text-left'>Laboratorium</h2>
          <div className='mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            <Fcard image='hacker (2).png 'title='Lab RPL' context='Laboratorium tempat kegiatan belajar mengajar ilmu tentang perangkat lunak' />
            <Fcard image='accounting.png' title='Lab AKL' context='Laboratorium tempat kegiatan belajar mengajar ilmu tentang akuntansi'/>
            <Fcard image='animate.png' title='Lab Multimedia'  context='Laboratorium tempat kegiatan belajar mengajar ilmu tentang editing dan animasi'/>
            <Fcard image='employee.png' title='Lab OTKP' context='Laboratorium tempat kegiatan belajar mengajar ilmu tentang otomatisasi dan tata kelola perkantoran'/>
            <Fcard image='wire.png' title='Lab TJKT' context='Laboratorium tempat kegiatan belajar mengajar ilmu tentang teknik jaringan komputer dan teknologi informasi'/>
            <Fcard image='videography.png' title='Lab Shooting' context='Laboratorium tempat murid multimedia praktek shooting'/>
          </div>
        </section>

        <section className='mt-16'>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-green-500 text-center lg:text-left'>Lapangan</h2>
          <div className='mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>

            <Fcard image='volley.png' title='Lapangan Basket' context='Lapangan tempat berlatih para Abas (anak basket) '/>
            <Fcard image='football.png' title='Lapangan Sepak bola' context='Lapangan tempat para siswa aduan saat jam olahraga'/>
            <Fcard image='basketball.png' title='Lapangan Voli' context='Lapangan untuk tempat berlatih dan praktek bermain voli'/>

          </div>
        </section>
      </div>
    </div>
  )
}

export default Isi
