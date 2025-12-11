"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { loginAction } from "../actions/login"

export default function LoginPage() {
  const [msg, setMsg] = useState("")
  const router = useRouter()

  async function handleSubmit(formData: FormData) {
    const res = await loginAction(formData)

    setMsg(res.message)

    if (res.success === true) {
      // Delay kecil biar pesan tampil sebentar (optional)
      setTimeout(() => {
        router.push("/dashboard")
      }, 300)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-1 via-blue-2 to-blue-4 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo/Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-accent-cyan rounded-full mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Lapas Calang</h1>
          <p className="text-blue-1 text-sm">Lembaga Pemasyarakatan Kelas III</p>
        </div>

        {/* Form Card */}
        <form action={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-8 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-blue-1 mb-1 text-pretty">Masuk ke Sistem</h2>
            <p className="text-gray-500 text-sm">Masukkan kredensial Anda untuk melanjutkan</p>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-semibold text-blue-2">
              Email
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-3 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="nama@email.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-200"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-semibold text-blue-2">
              Password
            </label>
            <div className="relative">
              <svg
                className="absolute left-3 top-3 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="Masukkan password Anda"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-cyan focus:border-transparent transition-all duration-200"
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-1 to-blue-2 hover:from-blue-2 hover:to-blue-4 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            Masuk
          </button>

          {/* Error Message */}
          {msg && (
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
              <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              <p className="text-red-700 text-sm font-medium">{msg}</p>
            </div>
          )}

          <div className="pt-4 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm">
              Belum punya akun?{" "}
              <Link
                href="/register"
                className="text-accent-cyan hover:text-blue-2 font-semibold transition-colors duration-200"
              >
                Daftar di sini
              </Link>
            </p>
          </div>

          {/* Footer Text */}
          <p className="text-center text-gray-500 text-xs pt-4 border-t border-gray-200">
            Sistem Informasi Lapas Calang © 2025
          </p>
        </form>
      </div>
    </div>
  )
}
