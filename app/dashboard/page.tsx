"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FileText, Users, Activity, TrendingUp, Eye, MessageSquare } from "lucide-react"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const chartData = [
  { name: "Sen", berita: 4, pengunjung: 240 },
  { name: "Sel", berita: 3, pengunjung: 221 },
  { name: "Rab", berita: 2, pengunjung: 229 },
  { name: "Kam", berita: 5, pengunjung: 200 },
  { name: "Jum", berita: 4, pengunjung: 278 },
  { name: "Sab", berita: 6, pengunjung: 189 },
  { name: "Min", berita: 5, pengunjung: 239 },
]

const recentUsers = [
  {
    id: 1,
    name: "Admin Utama",
    email: "admin@lapascalang.go.id",
    role: "Administrator",
    joinDate: "2024-01-15",
    status: "Active",
  },
  {
    id: 2,
    name: "Editor Berita",
    email: "editor@lapascalang.go.id",
    role: "Editor",
    joinDate: "2024-02-20",
    status: "Active",
  },
  {
    id: 3,
    name: "Operator",
    email: "operator@lapascalang.go.id",
    role: "Operator",
    joinDate: "2024-03-10",
    status: "Active",
  },
]

export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Berita",
      value: "42",
      description: "Berita yang dipublikasikan",
      icon: FileText,
      bgColor: "bg-blue-100",
      iconColor: "text-blue-600",
      trend: "+5 bulan ini",
    },
    {
      title: "Total Pengguna",
      value: "12",
      description: "Admin dan operator aktif",
      icon: Users,
      bgColor: "bg-purple-100",
      iconColor: "text-purple-600",
      trend: "+2 bulan ini",
    },
    {
      title: "Pengunjung Hari Ini",
      value: "1,234",
      description: "Total kunjungan hari ini",
      icon: Eye,
      bgColor: "bg-green-100",
      iconColor: "text-green-600",
      trend: "+12% dari kemarin",
    },
    {
      title: "Engagement",
      value: "89%",
      description: "Tingkat keterlibatan pengguna",
      icon: TrendingUp,
      bgColor: "bg-yellow-100",
      iconColor: "text-yellow-600",
      trend: "+3% dari minggu lalu",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Selamat datang di panel administrasi Lapas Kelas III Calang</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.title} className="border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">{stat.title}</CardTitle>
                  <div className={`${stat.bgColor} p-2.5 rounded-lg`}>
                    <Icon className={`h-5 w-5 ${stat.iconColor}`} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <p className="text-xs text-gray-500 mt-1">{stat.description}</p>
                  <p className="text-xs text-blue-600 mt-2 font-medium">{stat.trend}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Berita dan Pengunjung Chart */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle>Statistik Berita & Pengunjung</CardTitle>
              <CardDescription>Data selama 7 hari terakhir</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorBerita" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
                  />
                  <Area type="monotone" dataKey="berita" stroke="#0ea5e9" fill="url(#colorBerita)" name="Berita Baru" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Visitors Chart */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle>Tren Pengunjung</CardTitle>
              <CardDescription>Kunjungan harian selama seminggu</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="name" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#fff", border: "1px solid #e5e7eb", borderRadius: "8px" }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pengunjung"
                    stroke="#17295a"
                    strokeWidth={2}
                    dot={{ fill: "#0ea5e9", r: 4 }}
                    activeDot={{ r: 6 }}
                    name="Pengunjung"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Users */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle>Pengguna Terdaftar</CardTitle>
              <CardDescription>Daftar admin dan operator aktif</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center gap-4 pb-4 border-b border-gray-200 last:border-b-0">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-white font-semibold">
                      {user.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                      <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      <div className="flex gap-2 mt-1">
                        <span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                          {user.role}
                        </span>
                        <span className="inline-block px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                          {user.status}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="border-gray-200 shadow-sm">
            <CardHeader>
              <CardTitle>Aktivitas Terbaru</CardTitle>
              <CardDescription>Kegiatan sistem terkini</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <FileText className="h-5 w-5 text-blue-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Berita baru dipublikasikan</p>
                    <p className="text-xs text-gray-500 mt-0.5">Laporan Kegiatan Semester 1</p>
                    <p className="text-xs text-gray-400 mt-1">2 jam yang lalu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Users className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">User baru bergabung</p>
                    <p className="text-xs text-gray-500 mt-0.5">Admin dari bidang Kesehatan</p>
                    <p className="text-xs text-gray-400 mt-1">5 jam yang lalu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b border-gray-200">
                  <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Activity className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Backup sistem selesai</p>
                    <p className="text-xs text-gray-500 mt-0.5">Total 256 MB data tersimpan</p>
                    <p className="text-xs text-gray-400 mt-1">1 hari yang lalu</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MessageSquare className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">Maintenance terjadwal</p>
                    <p className="text-xs text-gray-500 mt-0.5">Server update berhasil dilakukan</p>
                    <p className="text-xs text-gray-400 mt-1">2 hari yang lalu</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
