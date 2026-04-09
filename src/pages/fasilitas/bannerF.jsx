import React from "react";

function bannerF() {
    
return(

<div className='relative w-full h-screen overflow-hidden flex justify-center '>
        <img src="./gamabarsekolahgde.jpg" alt="" className='absolute inset-0 w-full h-175 object-cover brightness-20' />
        <div className="absolute inset-0 bg-black/40"></div>

  <div className="relative h-full flex flex-col justify-center px-10 md:px-20 text-white m  ">
    <p className="text-xl mx-auto md:text-6xl font-bold">Fasilitas <span className="text-amber-300" >Sekolah</span> </p>
    <hr className='w-[40%] mx-auto border my-5 ' />
    <h1 className="text-4xl  md:text-2xl font-bold mt-2">Menyediakan fasilitas yang lengkap dan nyaman untuk mendukung kegiatan belajar mengajar</h1>
    <p className="text-lg mx-auto md:text-2xl mt-4 italic font-bold">Mendunia dan Berbudaya</p>

  </div>    
    </div>


)
}


export default bannerF