export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#17295a] to-[#121c33] py-16 px-4 sm:py-20 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center mb-4">
          <img src="/logo-kementrian.png" alt="Logo Instansi" className="w-20 sm:w-24" />
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 text-yellow-500 ">
          Lembaga Pemasyarakatan Kelas III Calang
        </h1>
        <p className="text-base sm:text-lg text-gray-200">Kementerian Imigrasi dan Pemasyarakatan</p>
      </div>
    </header>
  )
}
