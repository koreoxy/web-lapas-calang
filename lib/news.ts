import data from "@/data/news.json"
import { NewsItem } from "@/types/news"

export const getAllNews = (): NewsItem[] => data as NewsItem[]

export const getNewsById = (id: string): NewsItem | undefined =>
  getAllNews().find((news) => news.id === id)
