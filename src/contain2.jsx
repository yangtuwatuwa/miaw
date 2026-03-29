import React from 'react'
import Litlecard from './komponen/Litlecard'
import Card from './komponen/card'
function contain2({children}) {
  return (
    <div>
        <article>
            {children}
        </article>
      <main className='flex gap-20 justify-center'>
        <Card judulnya="Program keahlian" gambarnya="book.svg" />
        <Card judulnya="Fasilitas sekolah" gambarnya="school.svg" />
        <Card judulnya="Prestasi sekolah" gambarnya="icon.svg" />
        <Card judulnya="Ekstrakulikuler" gambarnya="burger.svg" />

      </main>
    </div>
  )
}

export default contain2
