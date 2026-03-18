import React from 'react'

function litlecard({nama , isi, }) {
  return (
    <div>
      <main className={`bg-white shadow w-25 h-25 rounded-2xl hyphens-auto whitespace-normal `}>
        <h1 className='text-2xl text-center text-blue-400'>{nama}</h1>
        <p className='text-center'>{isi}</p>
      </main>
    </div>
  )
}

export default litlecard
