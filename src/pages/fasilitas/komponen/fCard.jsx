import React from 'react'

function Fcard({ image, context, title }) {
  return (
    <article className='rounded-3xl bg-white shadow-lg transition hover:border-2 hover:border-blue-500'>
      <div className='flex flex-col gap-4 p-5 sm:flex-row sm:items-center'>
        <div className='flex h-40 w-full items-center justify-center rounded-3xl bg-blue-700 p-4 sm:h-32 sm:w-32'>
          <img className='h-full w-auto object-contain bg-white rounded-2xl ' src={image} alt={title} />
        </div>
        <div className='flex flex-1 flex-col justify-between'>
          <h3 className='text-lg font-bold text-slate-900 sm:text-xl'>{title}</h3>
          <p className='mt-3 text-sm leading-6 text-slate-600 sm:text-base'>{context}</p>
        </div>
      </div>
    </article>
  )
}

export default Fcard