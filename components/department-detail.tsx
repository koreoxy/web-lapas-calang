interface DepartmentDetailProps {
  id: number;
  slug?: string; // optional jika tidak digunakan lagi
  title: string;
  icon: string;
  description: string;
  fullDescription: string;
  functions: string[];
  objectives: string[];
}

export default function DepartmentDetail({
  title,
  icon,
  description,
  fullDescription,
  functions,
  objectives,
}: DepartmentDetailProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="text-6xl">{icon}</div>
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">
            {title}
          </h1>
          <p className="text-[#0ea5e9] text-lg">{description}</p>
        </div>
      </div>

      {/* Full Description */}
      <div className="bg-gradient-to-r from-[#152348] to-[#17295a] border border-[#0ea5e9]/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Deskripsi</h2>
        <p className="text-gray-200 leading-relaxed text-lg">
          {fullDescription}
        </p>
      </div>

      {/* Functions */}
      <div className="bg-gradient-to-r from-[#152348] to-[#17295a] border border-[#0ea5e9]/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Fungsi Utama</h2>
        <div className="space-y-4">
          {functions?.map((func, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0ea5e9]/20 flex items-center justify-center border border-[#0ea5e9]/50">
                <span className="text-[#0ea5e9] font-bold text-sm">
                  {index + 1}
                </span>
              </div>
              <p className="text-gray-200 text-lg leading-relaxed pt-1">
                {func}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Objectives */}
      <div className="bg-gradient-to-r from-[#152348] to-[#17295a] border border-[#0ea5e9]/20 rounded-xl p-8">
        <h2 className="text-2xl font-bold text-white mb-6">Tujuan</h2>
        <div className="space-y-4">
          {objectives?.map((obj, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0 w-2 h-2 rounded-full bg-[#0ea5e9] mt-3"></div>
              <p className="text-gray-200 text-lg leading-relaxed">{obj}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
