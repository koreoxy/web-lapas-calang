import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative bg-cover bg-center py-16 sm:py-24 md:py-32 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(18, 28, 51, 0.6), rgba(18, 28, 51, 0.6)), url('/government-building.webp')`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex justify-center order-2 md:order-1">
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <Image
                src="/maskot.png"
                alt="Mascot Lapas Calang"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <div className="text-center md:text-left order-1 md:order-2">
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
        </div>
      </div>
    </section>
  )
}
