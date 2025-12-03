export default function Sidebar() {
  return (
    <aside className="bg-[#152348] p-6 sm:p-8 rounded-xl">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Jam Operasional</h3>
      <p className="text-gray-200 font-semibold mb-4 text-sm sm:text-base">Senin - Sabtu</p>

      <div className="space-y-4">
        <div>
          <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Pagi</h4>
          <ul className="space-y-1 text-gray-300 text-xs sm:text-sm">
            <li>Senin - Kamis : 09.00 - 12.30</li>
            <li>Jumat : 09.00 - 11.00</li>
            <li>Sabtu : 09.00 - 12.30</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-white mb-2 text-sm sm:text-base">Sore</h4>
          <ul className="space-y-1 text-gray-300 text-xs sm:text-sm">
            <li>Senin - Sabtu : 14.15 - 16.00</li>
          </ul>
        </div>
      </div>
    </aside>
  )
}
