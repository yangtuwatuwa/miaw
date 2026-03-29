import React from 'react'

function largecard({image, context, title, w}) {
  return (
    <div>
    <main className='bg-white flex items-center w-150 h-100 rounded-2xl'>
        <div className='w-200 h-full rounded-xl  bg-blue-700'>
            <h1 className='text-3xl text-white grid items-center text-center'>
                {title}
            </h1>
            <p className='grid font-bold justify-center'>
              {context}
            </p>
        </div>
        <div className='grid ' >
            <img src={image} alt="" width={w} />
        </div>
    </main>
    </div>
  )
}

export default largecard