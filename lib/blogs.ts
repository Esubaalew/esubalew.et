interface BlogPost {
  id: number
  title: string
  link: string
  date: string
  excerpt: string
}

export function getBlogPosts(): BlogPost[] {
  return [
    {
      id: 1,
      title: "The Rise of AI in Ethiopian Tech Scene",
      link: "https://blog.esubalew.et/ai-in-ethiopia",
      date: "May 15, 2025",
      excerpt:
        "Exploring the growing impact of artificial intelligence on Ethiopia's technology landscape and its potential for solving local challenges.",
    },
    {
      id: 2,
      title: "Building Scalable Web Applications with Next.js",
      link: "https://blog.esubalew.et/nextjs-scalable-apps",
      date: "April 3, 2025",
      excerpt:
        "A comprehensive guide to creating large-scale web applications using Next.js, focusing on performance and maintainability.",
    },
    {
      id: 3,
      title: "The Future of Mobile Development in Africa",
      link: "https://blog.esubalew.et/mobile-dev-africa",
      date: "March 18, 2025",
      excerpt:
        "Analyzing trends and opportunities in mobile app development across African markets, with a focus on emerging technologies.",
    },
  ]
}

