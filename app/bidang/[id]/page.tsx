import Footer from "@/components/footer";
import Header from "@/components/header";
import Navbar from "@/components/navbar";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

import departmentsData from "@/data/departments.json";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return departmentsData.departments.map((dept) => ({
    id: dept.id.toString(),
  }));
}

export default async function DepartmentDetailPage({ params }: PageProps) {
  const { id } = await params;

  const department = departmentsData.departments.find(
    (d) => d.id.toString() === id
  );

  if (!department) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Bidang tidak ditemukan</h1>
      </div>
    );
  }

  return (
    <main>
      <Header />
      <Navbar />

      <section className="bg-[#f3f4f6] py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto">

          {/* BACK BUTTON */}
          <div className="mb-6 sm:mb-8">
            <Link
              href="/#profil"
              className="inline-flex items-center gap-2 text-[#0ea5e9] hover:text-[#0284c7] transition-colors font-medium"
            >
              <ChevronLeft className="w-4 h-4" />
              Kembali ke Profil
            </Link>
          </div>

          {/* MAIN CARD */}
          <article className="bg-white rounded-xl overflow-hidden shadow-md p-6 sm:p-8 md:p-10">

            {/* ICON */}
            <div className="text-6xl mb-4">{department.icon}</div>

            {/* TITLE */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#121c33] mb-4 leading-tight">
              {department.title}
            </h1>

            {/* DESCRIPTION */}
            <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-8">
              {department.fullDescription}
            </p>

            {/* FUNCTIONS */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">Fungsi</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                {department.functions.map((func, idx) => (
                  <li key={idx}>{func}</li>
                ))}
              </ul>
            </div>

            {/* OBJECTIVES */}
            <div className="mb-10">
              <h2 className="text-xl sm:text-2xl font-bold mb-3">Tujuan</h2>
              <ul className="list-disc ml-6 text-gray-700 space-y-2">
                {department.objectives.map((obj, idx) => (
                  <li key={idx}>{obj}</li>
                ))}
              </ul>
            </div>

          </article>

        </div>
      </section>

      <Footer />
    </main>
  );
}
