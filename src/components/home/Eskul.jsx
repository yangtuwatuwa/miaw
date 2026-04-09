import React from 'react'
import CardnyaBuatEskul from '../ui/CardnyaBuatEskul'
function Eskul() {
  return (
    <div id='eskull' className='mt-10'>
        <h1 className='text-center text-3xl font-bold '>Ekstrakulikuler</h1>
         <hr className="mx-auto w-[40%] border" />
        <p className='font-medium text-center'>Ekstrakulikuler kami memiliki banyak variasi, dan guru yang berkompeten</p>
        <div className='flex justify-evenly flex-wrap'>
          <CardnyaBuatEskul image="rpl.png" judul={"pempem"} penjelasannya={""}/>
          <CardnyaBuatEskul image="rpl.png" judul={"pempem"} penjelasannya={""}/>
          <CardnyaBuatEskul image="rpl.png" judul={"pempem"} penjelasannya={""}/>
          <CardnyaBuatEskul image="rpl.png" judul={"pempem"} penjelasannya={""}/>
          <CardnyaBuatEskul image="rpl.png" judul={"pempem"} penjelasannya={""}/>
          <CardnyaBuatEskul image="rpl.png" judul={"pempem"} penjelasannya={""}/>
          <CardnyaBuatEskul image="rpl.png" judul={"pempem"} penjelasannya={""}/>
          <CardnyaBuatEskul image="rpl.png" judul={"pempem"} penjelasannya={""}/>
        </div>
    </div>
  )
}

export default Eskul