import ProgramCard from '../ui/ProgramCard'

export default function ProgramsSection() {
  return (
    <section className="mt-20 w-full" aria-label="Program keahlian">
      <div className="mx-auto w-full max-w-7xl px-4">
        <h2 className="mb-5 text-center text-3xl font-bold">Program keahlian</h2>
        <p className="mb-5 px-4 text-center">
          Kami memiliki beberapa program keahlian yang sangat relevan dengan kebutuhan industri sekarang
        </p>
        <hr className="mx-auto w-[40%] border" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ProgramCard
            image="hacker (2).png"
            title="Pengembangan perangkat lunak dan gim"
            context="PPLG (Pengembangan Perangkat Lunak dan Gim) adalah jurusan SMK yang fokus pada coding, desain, dan algoritma untuk membuat perangkat lunak, aplikasi, game, serta website"
          />
          <ProgramCard
            image="monitor.svg"
            title="Multimedia"
            context="Kombinasi berbagai media seperti teks, gambar, grafik, audio, video, dan animasi yang terintegrasi secara digital menggunakan komputer untuk menyampaikan informasi atau hiburan"
          />
          <ProgramCard
            image="monitor.svg"
            title="Teknik Komputer dan Jaringan"
            context="Teknik Komputer dan Jaringan adalah jurusan SMK yang fokus pada pengembangan perangkat lunak, pengembangan game, dan pengembangan website"
          />
          <ProgramCard
            image="monitor.svg"
            title="Akuntansi dan Keuangan Lembaga"
            context="Akuntansi dan Keuangan Lembaga adalah jurusan SMK yang fokus pada pengembangan perangkat lunak, pengembangan game, dan pengembangan website"
          />
          <ProgramCard
            image="monitor.svg"
            title="Bisnis Daring dan Pemasaran"
            context="Bisnis Daring dan Pemasaran adalah jurusan SMK yang fokus pada pengembangan perangkat lunak, pengembangan game, dan pengembangan website"
          />
          <ProgramCard
            image="monitor.svg"
            title="Otomatisasi dan Tata Kelola Perkantoran"
            context="Otomatisasi dan Tata Kelola Perkantoran adalah jurusan SMK yang fokus pada pengembangan perangkat lunak, pengembangan game, dan pengembangan website"
          />
          <ProgramCard
            image="monitor.svg"
            title="Farmasi"
            context="Kombinasi berbagai media seperti teks, gambar, grafik, audio, video, dan animasi yang terintegrasi secara digital menggunakan komputer untuk menyampaikan informasi atau hiburan"
          />
          <ProgramCard
            image="monitor.svg"
            title="Keperawatan"
            context="Kombinasi berbagai media seperti teks, gambar, grafik, audio, video, dan animasi yang terintegrasi secara digital menggunakan komputer untuk menyampaikan informasi atau hiburan"
          />
        </div>
      </div>
    </section>
  )
}
