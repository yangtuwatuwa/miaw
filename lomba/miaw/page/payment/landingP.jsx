import React from "react";


function LandingP() {
      
return (

    <div className="w-full  " >


    
    <div className="flex rounded-2xl  sm:w-fit bg-transparent mx-auto mt-20 font-sans font-bold " >

        <audio className="w-0" controls autoPlay >
    
    <source src="hikaru.mp3" type="audio/mp3"/>
    </audio>

       <div className="flex w-fit shadow-2xl  ">
        
        <div className="bg-[url(kaori.png)] bg-cover brightness-20 rounded-bl-2xl rounded-tl-2xl   sm:w-55 h-90" src="kaori.png" alt="" >
            <h1 className="font-bold text-amber-50  " >Welcome !</h1>
             </div>

            <div className="bg-white sm:rounded-br-2xl sm:rounded-tr-2xl  sm:w-70 h-90 items-center grid justify-center " >
            
            <h1>Masuk ke akun anda</h1>
            
            <div className="grid items-center " >

        <h2>NISN</h2>
        <input className="bg-amber-500 shadow-2xl rounded-md sm:h-7" type="text" />
        <h2>Password</h2>
        <input className="bg-amber-500 shadow-2xl rounded-md sm:h-7 " type="text" />

        <button className="bg-blue-500 sm:h-10 rounded-2xl hover: cursor-pointer " >Enter</button>   

            </div>
            
            </div>
        
        </div> 
            


        
    </div>
    </div>
)

}

export default LandingP