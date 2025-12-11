"use client"

import { useState } from "react"
import { Plus, Trash2, Edit2, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import NewsFormDialog from "@/components/news-form-dialog"
import DeleteConfirmDialog from "@/components/delete-confirm-dialog"

interface News {
  id: string
  title: string
  slug: string
  category: string
  date: string
  author: string
  excerpt: string
  status: "published" | "draft"
}

const initialNews: News[] = [
  {
    id: "1",
    title: "Program Rehabilitasi Narapidana Tahun 2025",
    slug: "program-rehabilitasi-narapidana",
    category: "Pembinaan",
    date: "2025-01-15",
    author: "Admin",
    excerpt: "Lapas Calang meluncurkan program rehabilitasi terbaru untuk meningkatkan kualitas pembinaan...",
    status: "published",
  },
  {
    id: "2",
    title: "Peningkatan Keamanan di Lapas Calang",
    slug: "peningkatan-keamanan-lapas",
    category: "Keamanan",
    date: "2025-01-10",
    author: "Admin",
    excerpt: "Implementasi sistem keamanan terbaru untuk menjaga ketertiban dan keamanan...",
    status: "published",
  },
]

export default function NewsDashboard() {
  const [news, setNews] = useState<News[]>(initialNews)
  const [searchTerm, setSearchTerm] = useState("")
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingNews, setEditingNews] = useState<News | null>(null)
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null)

  const filteredNews = news.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddNews = (formData: Omit<News, "id">) => {
    if (editingNews) {
      setNews(news.map((item) => (item.id === editingNews.id ? { ...formData, id: item.id } : item)))
      setEditingNews(null)
    } else {
      const newNews: News = {
        ...formData,
        id: Date.now().toString(),
      }
      setNews([newNews, ...news])
    }
    setIsFormOpen(false)
  }

  const handleDeleteNews = (id: string) => {
    setNews(news.filter((item) => item.id !== id))
    setDeleteTarget(null)
  }

  const handleEditNews = (item: News) => {
    setEditingNews(item)
    setIsFormOpen(true)
  }

  const handleCloseForm = () => {
    setIsFormOpen(false)
    setEditingNews(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard Berita</h1>
          <p className="text-gray-600">Kelola semua berita dan artikel Lapas Calang</p>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-2 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Cari berita..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-gray-200"
            />
          </div>
          <Button
            onClick={() => {
              setEditingNews(null)
              setIsFormOpen(true)
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white gap-2 whitespace-nowrap"
          >
            <Plus className="h-4 w-4" />
            Tambah Berita
          </Button>
        </div>

        {/* Table Card */}
        <Card className="border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-200 bg-gray-50">
            <CardTitle>Daftar Berita</CardTitle>
            <CardDescription>Total: {filteredNews.length} berita</CardDescription>
          </CardHeader>
          <CardContent className="px-5">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-gray-200 bg-gray-50">
                    <TableHead className="text-gray-700">Judul</TableHead>
                    <TableHead className="text-gray-700">Kategori</TableHead>
                    <TableHead className="text-gray-700">Penulis</TableHead>
                    <TableHead className="text-gray-700">Tanggal</TableHead>
                    <TableHead className="text-gray-700">Status</TableHead>
                    <TableHead className="text-gray-700 text-right">Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredNews.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8 text-gray-500">
                        Tidak ada berita ditemukan
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredNews.map((item) => (
                      <TableRow key={item.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <TableCell className="font-medium text-gray-900 max-w-xs truncate">{item.title}</TableCell>
                        <TableCell className="text-gray-600">{item.category}</TableCell>
                        <TableCell className="text-gray-600">{item.author}</TableCell>
                        <TableCell className="text-gray-600">
                          {new Date(item.date).toLocaleDateString("id-ID")}
                        </TableCell>
                        <TableCell>
                          <Badge
                            className={
                              item.status === "published"
                                ? "bg-green-100 text-green-800 hover:bg-green-100"
                                : "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            }
                          >
                            {item.status === "published" ? "Dipublikasi" : "Draft"}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEditNews(item)}
                              className="text-blue-600 hover:bg-blue-50"
                            >
                              <Edit2 className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setDeleteTarget(item.id)}
                              className="text-red-600 hover:bg-red-50"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        {/* Forms and Dialogs */}
        <NewsFormDialog
          open={isFormOpen}
          onOpenChange={handleCloseForm}
          onSubmit={handleAddNews}
          initialData={editingNews || undefined}
        />

        <DeleteConfirmDialog
          open={deleteTarget !== null}
          onOpenChange={(open) => {
            if (!open) setDeleteTarget(null)
          }}
          onConfirm={() => deleteTarget && handleDeleteNews(deleteTarget)}
          title="Hapus Berita"
          description="Apakah Anda yakin ingin menghapus berita ini? Tindakan ini tidak dapat dibatalkan."
        />
      </div>
    </div>
  )
}
