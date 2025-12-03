export default function ContactBox({
  title,
  content,
}: {
  title: string
  content: string
}) {
  return (
    <div className="bg-[#17295a] p-6 sm:p-8 rounded-lg text-center hover:shadow-lg transition-shadow">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">{title}</h3>
      <p className="text-gray-200 text-sm sm:text-base">{content}</p>
    </div>
  )
}
