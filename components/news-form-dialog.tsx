"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

interface NewsFormDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onSubmit: (data: any) => void
  initialData?: {
    title: string
    slug: string
    category: string
    date: string
    author: string
    excerpt: string
    content?: string
    status: "published" | "draft"
  }
}

export default function NewsFormDialog({ open, onOpenChange, onSubmit, initialData }: NewsFormDialogProps) {
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "Pembinaan",
    date: new Date().toISOString().split("T")[0],
    author: "Admin",
    excerpt: "",
    content: "",
    status: "published" as const,
  })

  useEffect(() => {
    if (initialData) {
      setFormData({ ...initialData, content: initialData.content || "" })
    } else {
      setFormData({
        title: "",
        slug: "",
        category: "Pembinaan",
        date: new Date().toISOString().split("T")[0],
        author: "Admin",
        excerpt: "",
        content: "",
        status: "published",
      })
    }
  }, [initialData, open])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "title" && {
        slug: value.toLowerCase().replace(/\s+/g, "-"),
      }),
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
    setFormData({
      title: "",
      slug: "",
      category: "Pembinaan",
      date: new Date().toISOString().split("T")[0],
      author: "Admin",
      excerpt: "",
      content: "",
      status: "published",
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{initialData ? "Edit Berita" : "Tambah Berita Baru"}</DialogTitle>
          <DialogDescription>
            {initialData ? "Perbarui informasi berita" : "Buat berita baru untuk website Lapas"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title" className="text-gray-700 font-medium">
              Judul Berita
            </Label>
            <Input
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Masukkan judul berita"
              required
              className="bg-white border-gray-200"
            />
          </div>

          {/* Slug */}
          <div className="space-y-2">
            <Label htmlFor="slug" className="text-gray-700 font-medium">
              Slug
            </Label>
            <Input
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="slug-otomatis"
              className="bg-white border-gray-200 text-gray-600"
              readOnly
            />
          </div>

          {/* Category and Date */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category" className="text-gray-700 font-medium">
                Kategori
              </Label>
              <Select
                value={formData.category}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, category: value }))}
              >
                <SelectTrigger className="bg-white border-gray-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Pembinaan">Pembinaan</SelectItem>
                  <SelectItem value="Keamanan">Keamanan</SelectItem>
                  <SelectItem value="Kesehatan">Kesehatan</SelectItem>
                  <SelectItem value="Pendidikan">Pendidikan</SelectItem>
                  <SelectItem value="Umum">Umum</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date" className="text-gray-700 font-medium">
                Tanggal
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                className="bg-white border-gray-200"
              />
            </div>
          </div>

          {/* Author */}
          <div className="space-y-2">
            <Label htmlFor="author" className="text-gray-700 font-medium">
              Penulis
            </Label>
            <Input
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              placeholder="Nama penulis"
              className="bg-white border-gray-200"
            />
          </div>

          {/* Excerpt */}
          <div className="space-y-2">
            <Label htmlFor="excerpt" className="text-gray-700 font-medium">
              Ringkasan
            </Label>
            <Textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleChange}
              placeholder="Ringkasan singkat berita"
              rows={2}
              className="bg-white border-gray-200"
            />
          </div>

          {/* Content */}
          <div className="space-y-2">
            <Label htmlFor="content" className="text-gray-700 font-medium">
              Konten
            </Label>
            <Textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              placeholder="Tulis konten berita lengkap"
              rows={6}
              className="bg-white border-gray-200"
            />
          </div>

          {/* Status */}
          <div className="space-y-2">
            <Label htmlFor="status" className="text-gray-700 font-medium">
              Status
            </Label>
            <Select
              value={formData.status}
              onValueChange={(value: any) => setFormData((prev) => ({ ...prev, status: value }))}
            >
              <SelectTrigger className="bg-white border-gray-200">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="published">Dipublikasi</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="border-gray-200">
              Batal
            </Button>
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
              {initialData ? "Simpan Perubahan" : "Tambah Berita"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
