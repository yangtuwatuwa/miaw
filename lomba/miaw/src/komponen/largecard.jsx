import React from 'react'

function largecard({image, context, title}) {
  return (
    <div>
    <main className='bg-white flex items-center shadow  pl-[2%] sm:h-[150%] xs:w-full xs:h-[140%]  sm:w-full md:w-full md:h-[140%]  lg:w-[87%] lg:h-[180%]     rounded-2xl hover:cursor-pointer hover:border-2 hover:border-blue-500'>
        <div className='sm:w-[30%] md:w-md lg:w-[30%] rounded-2xl bg-blue-700'>
            <img src={image} alt="" />
        </div>
        <div className='ml-20 grid gap-[10%] justify-start  '>
            <h1 className='font-bold  md:text-1xl lg:text-3xl '>
                {title}
            </h1>
            <p className='xs:text-xs sm:text-sm'>
              {context}
            </p>
        </div>
    </main>
    </div>
  )
}

export default largecard