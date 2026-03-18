import React from 'react'

function card({judulnya , gambarnya ,  optional}) {
  return (
    <div>
       <div className='bg-white text-slate-800 shadow rounded-2xl w-50 h-50 mt-25 grid justify-center'>
            <div className='grid justify-center items-center  w-full'>

            <img src={gambarnya} alt="" width={50} className='bg-blue-700 rounded-xl p-1 text-white'/>
            </div>
            
                <h1 className='text-center' >{judulnya}</h1>
                {/* <button>pelajari selengkapnya</button> */}
                {/* <p>ingin mengetahui lebih banyak tentang ke ahlian? di smk letris ini banyak keahlian yang sangat berguna untuk persaingan global saat ini</p> */}
                {optional}  
            
        </div> 
    </div>
  )
}

export default card
