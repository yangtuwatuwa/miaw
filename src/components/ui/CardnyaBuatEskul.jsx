import React from 'react'

function CardnyaBuatEskul({image, judul, penjelasannya}) {
  return (
    <div className='bg-white pt-5 grid border-3 flex-wrap border-blue-600 justify-center w-110 h-80 rounded-2xl m-3 '>
          <img
           src={image}         
           alt=""
           className='w-100  flex justify-center aspect-video'
          />
<div className=''>
          <h1 className='text-5xl text-center'>
            {judul}
          </h1>
          <p className='overflow'>
            {penjelasannya}
            </p>
</div>
    </div>
  )
}

export default CardnyaBuatEskul