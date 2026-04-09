import FeatureCard from '../ui/CardKecil'
import { useNavigate } from 'react-router-dom'
export default function QuickLinksSection() {
  const navigate = useNavigate()
  return (
    <section
      className="grid grid-cols-1 w-fit mx-auto gap-20 xs:grid xs:grid-cols-2 xs:mx-auto sm:grid sm:grid-cols-2 sm:mx-auto sm:gap-15 sm:w-fit md:grid md:grid-cols-2 md:w-fit md:gap-25 lg:flex lg:w-fit xl:flex xl:gap-40"
      aria-label="Akses cepat"
    >
      <button onClick={()=>navigate("/payment")}>
      <FeatureCard judulnya="Pembayaran" gambarnya="./project.png" />
      </button>
      <button onClick={()=>navigate("/fasilitas")}>
      <FeatureCard judulnya="Fasilitas sekolah" gambarnya="school.svg" />
      </button>
      <button onClick={()=>navigate("/guru")}>
      <FeatureCard judulnya="Daftar Guru" gambarnya="icon.svg" />
      </button>
      <a href="#eskull">
      <FeatureCard judulnya="Ekstrakulikuler" gambarnya="burger.svg" />
      </a>
     
    </section>
  )
}
