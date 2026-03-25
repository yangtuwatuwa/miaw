import React from 'react'

function largecard({image, context, title}) {
  return (
    <div>
    <main className='bg-white flex items-center ml-5 w-[90%] pl-1 h-40  rounded-2xl'>
        <div className='w-fit rounded-2xl bg-blue-700 mr-5'>
            <img src={image} alt="" width={100} />
        </div>
        <div >
            <h1 className='text-3xl text-center'>
                {title}
            </h1>
            <p>
              {context}
            </p>
        </div>
    </main>
    </div>
  )
}

export default largecard