export default function Footer() {
  return (
    <footer className="bg-[#121a2f] text-center py-6 sm:py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <div className="flex items-center justify-between gap-5">
            <img src="/logo-kementrian.png" alt="Logo Instansi" className="w-20 sm:w-24" />
            <img src="/logo-pemasyarakatan.png" alt="Logo Instansi" className="w-7 sm:w-24" />
          </div>
        </div>
        <p className="text-gray-200 text-sm sm:text-base mb-1">&copy; 2025 Lembaga Pemasyarakatan Kelas III Calang</p>
        <p className="text-gray-300 text-xs sm:text-sm">Kementerian Imigrasi dan Pemasyarakatan</p>
      </div>
    </footer>
  )
}
