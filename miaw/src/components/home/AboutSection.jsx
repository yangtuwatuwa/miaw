import StatCard from '../ui/StatCard'

export default function AboutSection() {
  return (
    <section
      className="mx-auto grid max-w-7xl grid-cols-1 place-items-center gap-10 px-4 pt-10 lg:grid-cols-2 lg:items-start lg:gap-16"
      aria-label="Tentang sekolah"
    >
      <div className="w-full text-center sm:w-[60%] lg:w-full lg:text-left">
        <h2 className="pb-10 text-4xl font-bold">SMK letris pamulang</h2>
        <p className="mx-auto max-w-prose lg:mx-0">
         SMK Letris Pamulang adalah sekolah yang berada di daerah Pamulang, Tangerang Selatan. Sekolah ini didirikan pada tahun 2013 dan telah menjadi sekolah unggulan di Tangerang Selatan. Sekolah ini memiliki program keahlian yang beragam dan memiliki tenaga pengajar yang berkualitas.
        </p>

        <div className="grid grid-cols-2 gap-30 mx-auto w-fit sm:flex mt-2 sm:gap-5">
          <StatCard nama="8" isi="Program keahlian" />
          <StatCard nama="75+" isi="Tenaga pengajar" />
          <StatCard nama="12" isi="Tahun berdiri" />
          <StatCard nama="100+" isi="Siswa berprestasi" />
        </div>
      </div>
      <div className="flex w-full justify-center lg:justify-end">
        <img
          src="fotoletris.jpg"
          alt="Gedung SMK Letris Pamulang"
          width={500}
          className="rounded-3xl shadow-2xl"
        />
      </div>
    </section>
  )
}
