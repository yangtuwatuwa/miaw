import React from "react";

function bannerG() {
    return (
        <div className="bannerG w-full">
            <div className="relative w-full max-w-4xl h-64 md:h-80 lg:h-96 mx-auto overflow-hidden top-5 rounded-b-2xl">
                <img src="./guru.png" alt="Guru Banner" className="absolute inset-0 w-full h-full object-cover brightness-50 blur-sm" />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        <span className="text-blue-500">Daftar</span> <span className="text-amber-300">Guru</span>
                    </h1>
                    <h2 className="text-lg md:text-xl lg:text-2xl text-amber-50 font-semibold max-w-2xl">
                        Guru dan tenaga didik terbaik adalah pilar utama dalam pembentukan generasi yang unggul dan berprestasi.
                    </h2>
                </div>
            </div>
        </div>
    );
}

export default bannerG;