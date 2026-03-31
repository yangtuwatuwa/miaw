import React from 'react'
import Largecard from './komponen/largecard'
import Button from './komponen/Initombol'
function kopeten() {
  return (   
    <div>
        <main className='mt-20'>
            <h1 className='text-center text-3xl font-bold mb-5'>Program keahlian</h1>
            <h2 className='text-center mb-5 '>kami memiliki beberapa program keahlian yang sangat relevalan dengan kebutuhan industri sekarang</h2>
            <hr className='w-[40%] mx-auto border' />

            <article className='w-full mt-10'>
                <Largecard image="monitor.svg" title="pengembangan perangkat lunak dan gim" context={<Button isinya="coba dah"/>} / >

            </article>
        </main>
    </div>
  )
}

export default kopeten