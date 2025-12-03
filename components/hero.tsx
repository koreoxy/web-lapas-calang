import Link from "next/link"

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative bg-cover bg-center py-24 sm:py-32 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(18, 28, 51, 0.6), rgba(18, 28, 51, 0.6)), url('/government-building.jpeg')`,
      }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
          Selamat Datang di Website Resmi
        </h2>
        <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8">Lembaga Pemasyarakatan Kelas III Calang</p>
        <Link
          href="#profil"
          className="inline-block bg-[#0ea5e9] hover:bg-cyan-400 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          Lihat Profil
        </Link>
      </div>
    </section>
  )
}
