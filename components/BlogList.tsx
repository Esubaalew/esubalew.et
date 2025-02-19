"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BlogPost {
  id: number
  title: string
  link: string
  date: string
}

interface BlogListProps {
  posts: BlogPost[]
}

export default function BlogList({ posts }: BlogListProps) {
  const [page, setPage] = useState(0)
  const postsPerPage = 5
  const totalPages = Math.ceil(posts.length / postsPerPage)

  const visiblePosts = posts.slice(page * postsPerPage, (page + 1) * postsPerPage)

  return (
    <div>
      <ul className="space-y-6">
        {visiblePosts.map((post) => (
          <li key={post.id} className="border-b border-gray-200 dark:border-gray-700 pb-4">
            <Link href={post.link} className="text-xl sm:text-2xl font-semibold hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{post.date}</p>
          </li>
        ))}
      </ul>
      {totalPages > 1 && (
        <div className="flex justify-center mt-8 space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="flex items-center">
            {page + 1} / {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

