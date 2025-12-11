"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X, LogOut, Home, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { logoutAction } from "../actions/logout"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pathname = usePathname()
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const menuItems = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      name: "Berita",
      href: "/dashboard/berita",
      icon: FileText,
    },
  ]

  const isActive = (href: string) => {
    if (href === "/admin") {
      return pathname === "/admin"
    }
    return pathname.startsWith(href)
  }

  async function handleLogout() {
      await logoutAction();
      setLoggedIn(false);
      router.replace("/login");
    }
  

  return (
    <div className="flex h-screen bg-gray-100">
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      <aside
        className={`${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } fixed md:relative md:translate-x-0 left-0 top-0 h-screen w-64 bg-gradient-to-b from-blue-900 to-blue-800 text-white shadow-lg transition-transform duration-300 z-50 flex flex-col`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-blue-700">
          <Link href="/">
            <h2 className="text-2xl font-bold">Lapas Calang</h2>
            <p className="text-blue-200 text-sm">Admin Dashboard</p>
          </Link>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon
            const active = isActive(item.href)
            return (
              <Link key={item.href} href={item.href}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start gap-3 mb-2 ${
                    active
                      ? "bg-blue-700 text-white hover:bg-blue-600"
                      : "text-blue-100 hover:bg-blue-700 hover:text-white"
                  }`}
                  onClick={() => setSidebarOpen(false)}
                >
                  <Icon className="h-5 w-5" />
                  {item.name}
                </Button>
              </Link>
            )
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-blue-700">
          <Button
            onClick={handleLogout}
            variant="ghost"
            className="w-full justify-start gap-3 text-blue-100 hover:bg-red-600 hover:text-white"
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>

        {/* Close button on mobile */}
        <button
          onClick={() => setSidebarOpen(false)}
          className="absolute top-4 right-4 md:hidden text-white hover:bg-blue-700 p-2 rounded-lg"
        >
          <X className="h-6 w-6" />
        </button>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-gray-200 px-4 md:px-8 py-4 flex items-center justify-between shadow-sm">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="md:hidden text-gray-700 hover:bg-gray-100 p-2 rounded-lg"
          >
            <Menu className="h-6 w-6" />
          </button>
          <div className="flex-1" />
          <div className="text-right">
            <p className="text-sm text-gray-600">Administrator</p>
            <p className="text-xs text-gray-500">Lapas Kelas III Calang</p>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  )
}
