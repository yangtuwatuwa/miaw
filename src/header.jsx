import React from 'react'
// import '../public/letrislogonew.png'
// import benner from './assets/banner.png'
// import Contain1 from './contain1'
function header() {
  return (
    <div>
      <header className='bg-blue-950 h-20'>
        <nav>
            <ul className='flex justify-between'>
                <li>
                    <img src="letrislogonew.png" alt="" width={70} className='ml-4'/>
                </li>
                <li className='text-gray-300 flex items-center mr-4 gap-5 font-bold'>
                    <p>galeri</p>
                    <p>bayaran</p>
                    <p>daftar</p>
             
                </li>
            </ul>
        </nav>
      </header>
    </div>
  )
}

export default header
