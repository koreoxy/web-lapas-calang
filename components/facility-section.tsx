import FacilityCard from "./facility-card"

export default function FacilitySection() {
  const facilities = [
    {
      icon: "📚",
      title: "Ruang Pendidikan",
      description: "Pembelajaran formal dan keterampilan untuk WBP.",
    },
    {
      icon: "🕌",
      title: "Tempat Ibadah",
      description: "Sarana pembinaan spiritual dan keagamaan.",
    },
    {
      icon: "🏥",
      title: "Klinik Kesehatan",
      description: "Pelayanan kesehatan bagi warga binaan.",
    },
  ]

  return (
    <section id="fasilitas" className="bg-[#121c33] py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 sm:mb-12">Fasilitas</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {facilities.map((facility, index) => (
            <FacilityCard key={index} {...facility} />
          ))}
        </div>
      </div>
    </section>
  )
}
