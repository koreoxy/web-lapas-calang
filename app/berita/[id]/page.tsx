import Footer from "@/components/footer"
import Header from "@/components/header"
import Navbar from "@/components/navbar"
import { getNewsById, getAllNews } from "@/lib/news"
import { Calendar, ChevronLeft, User } from "lucide-react"
import Link from "next/link"

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateStaticParams() {
  return getAllNews().map((item) => ({
    id: item.id,
  }))
}

export default async function BeritaDetail({ params }: PageProps) {
  const { id } = await params

  const item = getNewsById(id)

  if (!item) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Berita tidak ditemukan</h1>
      </div>
    )
  }

  return (
    <main>
      <Header />
      <Navbar />
       <section className="bg-[#f3f4f6] py-12 sm:py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb & Back Button */}
            <div className="mb-6 sm:mb-8">
              <Link
                href="/#berita"
                className="inline-flex items-center gap-2 text-[#0ea5e9] hover:text-[#0284c7] transition-colors font-medium"
              >
                <ChevronLeft className="w-4 h-4" />
                Kembali ke Berita
              </Link>
            </div>

            {/* Main Article Card */}
            <article className="bg-white rounded-xl overflow-hidden shadow-md">
              {/* Hero Image */}
              <div className="w-full h-64 sm:h-96 md:h-[450px] overflow-hidden">
                <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
              </div>

              {/* Article Content */}
              <div className="p-6 sm:p-8 md:p-10">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-block bg-[#0ea5e9] text-white px-4 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#121c33] mb-4 leading-tight">
                  {item.title}
                </h1>

                {/* Meta Information */}
                <div className="flex flex-wrap gap-6 sm:gap-8 text-gray-600 mb-8 pb-6 border-b border-gray-200">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-[#0ea5e9]" />
                    <span className="text-sm sm:text-base">{item.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-5 h-5 text-[#0ea5e9]" />
                    <span className="text-sm sm:text-base">{item.author}</span>
                  </div>
                </div>

                {/* Article Body */}
                <div className="prose prose-sm sm:prose-base max-w-none mb-10">
                  <p className="text-base sm:text-lg leading-relaxed text-gray-700 whitespace-pre-line">{item.content}</p>
                </div>

                {/* Share Section */}
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-gray-600 text-sm font-medium mb-3">Bagikan Berita Ini:</p>
                  <div className="flex gap-4">
                    <button className="bg-[#121c33] hover:bg-[#17295a] text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                      Facebook
                    </button>
                    <button className="bg-[#121c33] hover:bg-[#17295a] text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                      Twitter
                    </button>
                    <button className="bg-[#121c33] hover:bg-[#17295a] text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                      Salin Link
                    </button>
                  </div>
                </div>
              </div>
            </article>

          
          </div>
       </section>
      <Footer />
    </main>
    
  )
}
