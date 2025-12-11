import Link from "next/link";

interface DepartmentCardProps {
  id: number;
  title: string;
  icon: string;
  description: string;
}

export default function DepartmentCard({ id, title, icon, description }: DepartmentCardProps) {
  return (
    <Link href={`/bidang/${id}`}>
      <div className="group h-full bg-gradient-to-br from-[#152348] to-[#17295a] p-6 sm:p-8 rounded-xl border border-[#0ea5e9]/20 hover:border-[#0ea5e9]/50 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-[#0ea5e9]/20">
        <div className="text-4xl sm:text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">{icon}</div>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-[#0ea5e9] transition-colors">
          {title}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">{description}</p>
        <div className="flex items-center text-[#0ea5e9] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Lihat Detail <span className="ml-2">→</span>
        </div>
      </div>
    </Link>
  )
}

