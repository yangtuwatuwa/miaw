import React from "react";

function atas({text,gambar}){
    return(
        <div className=' lg:w-fit hover:cursor-pointer ' >
        <div className="flex sm:gap-[2%] lg:gap-[2%] lg:w-fit  " >
            <h1 className='font-bold  md:text-1xl lg:text-2xl '>
                {text}
            </h1>
            <img src={gambar} alt="" className="sm:w-6 lg:w-8" />
        </div>

        </div>
    )
}

export default atas