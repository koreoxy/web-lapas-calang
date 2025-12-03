"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#121a2f] text-white">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">

        {/* ===================== LOGO + INFO ===================== */}
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
          
          {/* Logo Kiri */}
          <div className="hidden lg:block">
            <Image
              src="/logo-kementrian.webp"
              alt="Logo Kementrian"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </div>

          {/* Logo atas saat mobile */}
          <div className="lg:hidden flex items-center justify-center gap-6">
            <Image
              src="/logo-kementrian.webp"
              alt="Logo Kementrian"
              width={60}
              height={60}
              className="object-contain"
            />
            <Image
              src="/logo-pemasyarakatan.webp"
              alt="Logo Direktorat Pemasyarakatan"
              width={50}
              height={50}
              className="object-contain"
            />
          </div>

          {/* Teks */}
          <div className="flex flex-col items-center lg:items-center justify-center flex-1">
            <h1 className="text-lg sm:text-xl font-semibold">
              Lembaga Pemasyarakatan Kelas III Calang
            </h1>
            <p className="mt-1 text-gray-300 text-sm sm:text-base leading-relaxed max-w-lg text-center">
              Jln. Pendidikan Desa Gampong Blang, Kecamatan Krueng Sabee,<br/>
              Kabupaten Aceh Jaya, Calang 23654
            </p>
          </div>

          {/* Logo kanan Desktop */}
          <div className="hidden lg:block">
            <Image
              src="/logo-pemasyarakatan.webp"
              alt="Logo Direktorat Pemasyarakatan"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* ===================== SOCIAL MEDIA ===================== */}
        <div className="flex items-center justify-center gap-4 sm:gap-6 mt-6">
          <SocialIcon href="https://www.instagram.com/lapas_calang" label="Instagram">
            <Instagram className="w-6 h-6" />
          </SocialIcon>

          <SocialIcon href="https://www.facebook.com/p/Lapas-Kelas-III-Calang-100068926250567" label="Facebook">
            <Facebook className="w-6 h-6" />
          </SocialIcon>

          <SocialIcon href="https://x.com/IiiCalang" label="Twitter / X">
            <Twitter className="w-6 h-6" />
          </SocialIcon>

          <SocialIcon href="mailto:lapascalang@gmail.com" label="Email">
            <Mail className="w-6 h-6" />
          </SocialIcon>
        </div>

        {/* ===================== COPYRIGHT ===================== */}
        <div className="mt-8 sm:mt-10 pt-6 border-t border-white/15 text-center">
          <p className="text-gray-300 text-sm sm:text-base">
            © 2025 Lembaga Pemasyarakatan Kelas III Calang
          </p>
          <p className="text-gray-400 text-xs sm:text-sm mt-1">
            Kementerian Hukum dan Hak Asasi Manusia Republik Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}

/** Reusable Icon Component */
function SocialIcon({
  href,
  label,
  children,
}: {
  href: string
  label: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      rel="noopener noreferrer"
      className="hover:text-blue-400 transition-colors duration-200"
    >
      {children}
    </Link>
  )
}
