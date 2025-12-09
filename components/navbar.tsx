"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { logoutAction } from "@/app/actions/logout";

export default function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // hindari flicker

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Cek session dari server melalui API
  useEffect(() => {
    async function checkSession() {
      const res = await fetch("/api/session");
      const data = await res.json();
      setLoggedIn(data.loggedIn);
      setLoading(false);
    }
    checkSession();
  }, []);

  async function handleLogout() {
    await logoutAction();
    setLoggedIn(false);
    router.replace("/login");
  }

  const navLinks = [
    { id: "beranda", label: "Beranda" },
    { id: "profil", label: "Profil Instansi" },
    { id: "berita", label: "Berita Terbaru" },
    { id: "fasilitas", label: "Fasilitas" },
    { id: "kontak", label: "Kontak" },
  ];

  const goHome = pathname !== "/";

  return (
    <nav className="sticky top-0 z-50 bg-[#121a2f]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-3">

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 list-none">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={goHome ? `/#${link.id}` : `#${link.id}`}
                  className="text-white font-bold hover:text-[#0ea5e9] transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Login / Logout */}
          {!loading && (
            loggedIn ? (
              <button
                onClick={handleLogout}
                className="text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition"
              >
                Logout
              </button>
            ) : (
              <Link
                href="/login"
                className="text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Login
              </Link>
            )
          )}

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white ml-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? 
                  "M6 18L18 6M6 6l12 12" : 
                  "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="md:hidden pb-4 space-y-2 list-none">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={goHome ? `/#${link.id}` : `#${link.id}`}
                  className="block text-white font-bold py-2 hover:text-[#0ea5e9] transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li>
              {!loading && (
                loggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="w-full text-white bg-red-600 px-4 py-2 rounded-md hover:bg-red-700 transition"
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="block text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    onClick={() => setIsOpen(false)}
                  >
                    Login
                  </Link>
                )
              )}
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}
