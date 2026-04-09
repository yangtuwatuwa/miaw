import React from "react";


function LandingP() {
      
return (

    <div className="payB " >

 <img src="letrislogonew.png" className=" mx-auto lg:w-25 h-25" alt="" />       

<audio controls autoPlay loop className="hidden" >
    <source src="../../public/hikaru.mp3" type="audio/mpeg"/>

</audio>


{/* <div className="border"></div> */}

<div className="kucing relative  rounded-xl md:w-100 lg:w-120 h-95   " >

<h1 className="text-4xl mx-47 font-bold text-amber-50 mt-5" >Login</h1>

<div className="kukur grid  mt-7 gap-5 " >
    <input type="text" placeholder="NISN" className="font-bold pl-5  w-100 h-18 mx-auto  rounded-xl text-amber-100 " />
    <input type="password" placeholder="Password" className="font-semibold pl-5 mx-auto w-100 h-18 rounded-xl text-amber-100 " />
    
    <button className="rounded-xl w-105 h-16 mx-auto mb-10 mt-8 font-bold text-2xl text-gray-200 " >Masuk</button>
</div>
 
</div>
    
    


    </div>
)

}

export default LandingP