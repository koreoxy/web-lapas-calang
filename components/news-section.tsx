import Link from "next/link"
import Sidebar from "./sidebar"

import { getAllNews } from "@/lib/news"



export default function NewsSection() {
    const news = getAllNews()

  return (
    <section id="berita" className="bg-[#f3f4f6] py-12 sm:py-16 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">

          {/* Main news list */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#121c33] mb-8 sm:mb-10">
              Berita Terbaru
            </h2>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.map((item) => (
                <Link
                  key={item.id}
                  href={`/berita/${item.id}`}
                  className="border rounded-lg p-4 hover:bg-gray-50"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-md w-full h-48 object-cover"
                  />
                  <h2 className="text-xl font-semibold mt-3">{item.title}</h2>
                  <p className="text-sm text-gray-600">{item.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <Sidebar />
          </aside>

        </div>
      </div>
    </section>
  )
}
