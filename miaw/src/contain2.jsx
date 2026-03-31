import React from 'react'
import Litlecard from './komponen/Litlecard'
import Card from './komponen/card'
import { Link } from 'react-router-dom'

function contain2({children}) {
  return (
    <div>
        <article>
            {children}
        </article>
      <main className='  grid grid-cols-1 w-fit mx-auto gap-20 xs:grid xs:grid-cols-2 xs:mx-auto sm:grid sm:grid-cols-2 sm:mx-auto sm:gap-15 sm:w-fit md:grid md:grid-cols-2 md:w-fit md:gap-25 lg:flex lg:w-fit xl:flex xl:gap-40 '>
        <Card judulnya="PPDB" gambarnya="./project.png" /> 
        <Card judulnya="Fasilitas sekolah" gambarnya="school.svg" />
        <Card judulnya="Prestasi sekolah" gambarnya="icon.svg" />
        <Card judulnya="Ekstrakulikuler" gambarnya="burger.svg" />

      </main>
    </div>
  )
}

export default contain2
