import FeatureCard from '../ui/CardKecil'

export default function QuickLinksSection() {
  return (
    <section
      className="grid grid-cols-1 w-fit mx-auto gap-20 xs:grid xs:grid-cols-2 xs:mx-auto sm:grid sm:grid-cols-2 sm:mx-auto sm:gap-15 sm:w-fit md:grid md:grid-cols-2 md:w-fit md:gap-25 lg:flex lg:w-fit xl:flex xl:gap-40"
      aria-label="Akses cepat"
    >
      <FeatureCard judulnya="PPDB" gambarnya="./project.png" />
      <FeatureCard judulnya="Fasilitas sekolah" gambarnya="school.svg" />
      <FeatureCard judulnya="Prestasi sekolah" gambarnya="icon.svg" />
      <FeatureCard judulnya="Ekstrakulikuler" gambarnya="burger.svg" />
    </section>
  )
}
