import ContactBox from "./contact-box"

export default function ContactSection() {
  const contacts = [
    {
      title: "Alamat",
      content: "Dayah Baro, Krueng Sabee, Aceh Jaya Regency, Aceh 23655",
    },
    {
      title: "Email",
      content: "lapascalang@gmail.com",
    },
    {
      title: "Telpon",
      content: "(0645) 2210273",
    },
  ]

  return (
    <section id="kontak" className="bg-[#152348] py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 sm:mb-12">Kontak</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {contacts.map((contact, index) => (
            <ContactBox key={index} {...contact} />
          ))}
        </div>
      </div>
    </section>
  )
}
