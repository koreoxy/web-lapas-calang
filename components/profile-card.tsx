export default function ProfileCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="bg-[#152348] p-6 sm:p-8 rounded-xl text-center hover:shadow-lg transition-shadow">
      <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{icon}</div>
      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{title}</h3>
      <p className="text-gray-300 text-sm sm:text-base leading-relaxed">{description}</p>
    </div>
  )
}
