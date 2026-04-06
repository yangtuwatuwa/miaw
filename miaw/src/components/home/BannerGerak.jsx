import { Splide, SplideSlide } from '@splidejs/react-splide'
import banner from '../../assets/banner.png'

export default function ImageCarouselSection() {
  return (
    <section className="flex justify-center pt-5 w-full" aria-label="Galeri singkat">
      <div className="w-[95%]">
        <Splide
          aria-label="Galeri gambar sekolah"
          options={{
            type: 'loop',
            width: '100%',
            gap: '3rem',
          }}
        >
          <SplideSlide>
            <img src={banner} alt="Galeri 1" />
          </SplideSlide>
          <SplideSlide>
            <img src={banner} alt="Galeri 2" />
          </SplideSlide>
          <SplideSlide>
            <img src={banner} alt="Galeri 3" />
          </SplideSlide>
        </Splide>
      </div>
    </section>
  )
}
