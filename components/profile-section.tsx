import ProfileCard from "./profile-card";
import DepartmentCard from "./department-card";
import departmentsJSON from "@/data/departments.json";  // import JSON

// definisikan tipe
interface Department {
  id: number;
  title: string;
  icon: string;
  description: string;
  fullDescription: string;
  functions: string[];
  objectives: string[];
}

export default function ProfileSection() {
  const profiles = [
    { icon: "🏛️", title: "Visi", description: "Mewujudkan pemasyarakatan yang berkeadilan dan humanis." },
    { icon: "📜", title: "Misi", description: "Pembinaan edukatif, spiritual, keterampilan, serta reintegrasi sosial." },
    { icon: "👮‍♂️", title: "Tujuan", description: "Membentuk Warga Binaan yang bertanggung jawab dan kembali ke masyarakat." },
  ];

  // Ambil array departments dari JSON
  const departments: Department[] = departmentsJSON.departments;

  return (
    <section id="profil" className="bg-[#121c35] py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-4 sm:mb-6">
          Profil Instansi
        </h2>
        <p className="text-center text-gray-200 mb-10 sm:mb-12 max-w-2xl mx-auto">
          Lapas Kelas III Calang merupakan unit pelaksana teknis di bawah Kementerian Hukum dan HAM RI
          yang berfokus pada pembinaan Warga Binaan Pemasyarakatan.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {profiles.map((profile, i) => (
            <ProfileCard key={i} {...profile} />
          ))}
        </div>

        <div className="mt-16 pt-12 border-t border-[#17295a]">
          <h3 className="text-2xl sm:text-3xl font-bold text-center text-white mb-2">
            Bidang-Bidang Lapas
          </h3>
          <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
            Lapas Kelas III Calang memiliki beberapa bidang yang bekerja secara sinergis untuk mencapai visi dan misi lembaga.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <DepartmentCard
                key={dept.id}
                id={dept.id}
                title={dept.title}
                icon={dept.icon}
                description={dept.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
