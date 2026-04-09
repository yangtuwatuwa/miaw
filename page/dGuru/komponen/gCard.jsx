import React from "react";

function gCard({ image, nama, isi }) {
    return (
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <img src={image} alt={nama} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h1 className="text-xl font-semibold text-center text-blue-600 mb-2">{nama}</h1>
                <p className="text-center text-gray-700">{isi}</p>
            </div>
        </div>
    );
}

export default gCard;