import Header from "./header";
import Contain2 from "./contain2";
import Banneratas from "./Banneratas";
import React from 'react'
import Kompeten from "./kompetensi";
import Contain1 from "./contain1";
import TentangLetris from "./TentangLetris";

export default function Home() {
  return (
    <div>
      <Header/>
      <Banneratas/>
      <Contain2>
        <Contain1/>
      </Contain2>
      <TentangLetris/>
      <Kompeten/>
    </div>


  )
}
