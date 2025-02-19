import type { Metadata } from "next"
import { getBlogPosts } from "@/lib/blogs"
import BlogList from "@/components/BlogList"

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my latest thoughts and insights on technology, development, and more.",
}

export default function Blog() {
  const blogPosts = getBlogPosts()

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Blog Posts</h1>
      <div className="decorative-line w-32 mb-6"></div>
      <BlogList posts={blogPosts} />
    </div>
  )
}

