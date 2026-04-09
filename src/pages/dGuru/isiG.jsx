import React from "react";
import GCard from "./komponen/gCard";

function isiG() {
    return (
        <div className="grid grid-cols-1 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            <GCard image="" nama="Bapak Bagus" isi="Guru PKN" />
            <GCard image="" nama="Ibu Intan" isi="Guru IPAS" />
            <GCard image="" nama="Bapak Taufan" isi="Guru Sejarah" />
            <GCard image="" nama="Ibu Sarah" isi="Guru MTK" />
            <GCard image="" nama="Ibu Desna" isi="Guru MTK" />
            <GCard image="" nama="Bapak Ryantama" isi="Guru BTQ" />
            <GCard image="" nama="Ibu Indah" isi="Guru B.Indo" />
            <GCard image="" nama="Bapak Rahman" isi="Guru PAI" />
        </div>
    );
}

export default isiG;