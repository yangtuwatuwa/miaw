export default function Footer() {
  return (
    <footer className="w-full bg-blue-950 rounded-t-2xl">
      <div className=" text-white mx-auto flex gap-6 w-full max-w-7xl flex-col px-4 py-10 lg:flex-row lg:items-start lg:justify-end">
        <div>

      <img src="/letrislogonew.png" alt="logo" className="w-50 h-50" />
      <p>Jl. Siliwangi No.55, Pd. Benda, Kec. Pamulang, Kota Tangerang Selatan, Banten 15416</p>
        </div>
      <div className="">
        <h1 className="text-white text-2xl font-bold" >FOLLOW US</h1>
        <ul>
          <li>
            <a href="#">INSTAGRAM</a>

          </li>
          <li>
            <a href="#">WHATSAPP</a>
          </li>
          <li>
            <a href="#">EMAIL</a>
          </li>
          <li>
            <a href="#">TELEPON</a>
          </li>
        </ul>
      </div>
        <div className="grid justify-center items-center gap-4 ">
          
        </div>
        <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white/5 lg:w-[520px] lg:flex-none">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.3752213684616!2d106.7134853740977!3d-6.345431693644346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e582501b86cb%3A0xe17c81c2758ace13!2sSMK%20Letris%20Indonesia%202%26%20SMK%20Kesehatan%20Letris%20Indonesia%202!5e0!3m2!1sid!2sid!4v1775302728697!5m2!1sid!2sid"
            className="aspect-video w-full border-0"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta lokasi SMK Letris"
          />
        </div>
      </div>

    </footer>
  )
}
