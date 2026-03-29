import React from 'react'
import banner from './assets/banner.png'
import { Splide, SplideSlide } from '@splidejs/react-splide';
function contain1() {
  return (
    <div>
      <main>
        <div className='flex justify-center pt-5 w-full ' >
            <div className='w-300'>

            <Splide arial-label="eaa"
            options={ {
    type: "loop",
    width : screen,
    gap   : '3rem',
  } }
            >
                <SplideSlide>
                    <img src={banner} alt="GAMBAR 1" />
                </SplideSlide>
                <SplideSlide>
                    <img src={banner} alt="GAMBAR 2" />
                </SplideSlide>
                <SplideSlide>
                    <img src={banner} alt="GAMBAR 3" />
                </SplideSlide>
            </Splide>
            </div>
        </div>
      </main>
      
    </div>
  )
}

export default contain1
