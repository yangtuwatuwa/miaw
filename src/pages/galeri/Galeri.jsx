import React from 'react'
import Header from '../../components/layout/Header'
import Palingatas from '../../components/galeri/Palingatas'
import TengahKonten from '../../components/galeri/TengahKonten'
function galeri() {
  return (

    <div className="min-h-screen">
          <header>
          <Header/>
          </header>
          <main className="w-full">
          <Palingatas/>
          <TengahKonten/>
          </main>
    </div>
  )
}

export default galeri