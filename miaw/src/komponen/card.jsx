import React from 'react'

function card({judulnya , gambarnya ,  optional}) {
  return (
    <div>
       <div className='bg-white hover:cursor-pointer hover:border-2 hover:border-blue-500 text-slate-800 shadow rounded-2xl  w-50 h-50 mt-25 grid justify-center md:w-60 md:h-65  sm:w-60 sm:h-60 lg:w-42 lg:h-50 xl:w-65 xl:h-70'>
            <div className='grid justify-center items-center  w-full'>

            <img src={gambarnya} alt="" width={50} className='bg-blue-700 rounded-xl p-1 text-white sm:w-15 mt-8 xl:w-20'/>
            </div>
          
                  <h1 className='text-center sm:text-xl mt-5' >{judulnya}</h1>
                {/* <button>pelajari selengkapnya</button> */}
                {/* <p>ingin mengetahui lebih banyak tentang ke ahlian? di smk letris ini banyak keahlian yang sangat berguna untuk persaingan global saat ini</p> */}
                {optional}  
            
        </div> 
    </div>
  )
}

export default card
