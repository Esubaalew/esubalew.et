export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  url: string;
  views?: number;
  source?: string;
}

export const blogPosts: BlogPost[] = [
  // From Esubalew.wordpress.com
  {
    id: "no-more-protest",
    title: "Ethiopia's No More Protest: Catalyst Of Change in Western Media",
    excerpt: "The 'No More' movement has rapidly gained momentum across Ethiopia and the diaspora, marking a significant shift in how Ethiopians engage with international media narratives...",
    date: "Nov 22, 2021",
    readTime: "5 min read",
    views: 423,
    url: "https://esubalew.wordpress.com/2021/11/22/ethiopias-no-more-protest-catalyst-of-change-in-western-media/",
    source: "WordPress"
  },
  {
    id: "computer-science-career",
    title: "Computer Science Career Paths You Should Know",
    excerpt: "Computer science is a vast field with numerous career paths. Whether you're just starting out or looking to pivot your career, here are some key paths worth exploring...",
    date: "Jun 15, 2021",
    readTime: "4 min read",
    views: 256,
    url: "https://esubalew.wordpress.com/2021/06/15/computer-science-career-paths-you-should-know/",
    source: "WordPress"
  },
  {
    id: "telegram-analysis",
    title: "Telegram Analysis: Understanding User Patterns",
    excerpt: "Telegram has become one of the most popular messaging platforms globally. Analyzing user patterns and behaviors on this platform can reveal fascinating insights about communication trends...",
    date: "Mar 8, 2021",
    readTime: "6 min read",
    views: 318,
    url: "https://esubalew.wordpress.com/2021/03/08/telegram-analysis-understanding-user-patterns/",
    source: "WordPress"
  },
  {
    id: "web-development-ethiopia",
    title: "The State of Web Development in Ethiopia",
    excerpt: "Ethiopia's tech scene is growing rapidly, with web development at its forefront. This post examines the current landscape, challenges, and opportunities for web developers in Ethiopia...",
    date: "Feb 12, 2021",
    readTime: "7 min read",
    views: 375,
    url: "https://esubalew.wordpress.com/2021/02/12/the-state-of-web-development-in-ethiopia/",
    source: "WordPress"
  },
  
  // Original blog posts
  {
    id: "telegram-insights",
    title: "Discover Telegram Insights: Advanced Chat Analysis with Privacy Protection",
    excerpt: "In today's interconnected world, messaging apps have become the backbone of digital communication. With millions of messages being exchanged daily...",
    date: "Feb 1, 2023",
    readTime: "7 min read",
    views: 207,
    url: "https://code.esubalew.et/discover-telegram-insights-advanced-chat-analysis-with-privacy-protection",
    source: "code.esubalew.et"
  },
  {
    id: "fastapi-guide",
    title: "When Should You Use FastAPI Instead of Django or Flask? An In-Depth Guide",
    excerpt: "Python is home to several powerful web frameworks designed to cater to different needs. Django and Flask have long been dominant players, offering...",
    date: "Jan 21, 2023",
    readTime: "5 min read",
    views: 167,
    url: "https://code.esubalew.et/when-should-you-use-fastapi-instead-of-django-or-flask-an-in-depth-guide",
    source: "code.esubalew.et"
  },
  {
    id: "hosting-telegram-bots",
    title: "Hosting Telegram Bots with Python for Free: Exploring Platforms and Their Quirks",
    excerpt: "Telegram bots are a fun and powerful way to build interactive tools. This guide explores the 6 best free platforms to host your Python Telegram bot.",
    date: "Jan 17, 2023",
    readTime: "4 min read",
    views: 153,
    url: "https://code.esubalew.et/hosting-telegram-bots-with-python-for-free-exploring-platforms-and-their-quirks",
    source: "code.esubalew.et"
  },
  {
    id: "telegram-bot-development",
    title: "Telegram Bot Development: Complete Guide for Beginners",
    excerpt: "Learn to build Telegram bots using Python with this step-by-step guide on the Telegram Bot API and python-telegram-bot library.",
    date: "Jan 13, 2023",
    readTime: "8 min read",
    views: 298,
    url: "https://code.esubalew.et/telegram-bot-development-complete-guide-for-beginners",
    source: "code.esubalew.et"
  },
  {
    id: "ethiopia-tech-careers",
    title: "Why I Recommend New Ethiopian University Students Pursue a Career in Tech",
    excerpt: "The world is changing fast, and technology is leading the way. For Ethiopian university students, diving into the tech field isn't just about picking...",
    date: "Jan 7, 2023",
    readTime: "5 min read",
    views: 216,
    url: "https://code.esubalew.et/why-i-recommend-new-ethiopian-university-students-pursue-a-career-in-tech",
    source: "code.esubalew.et"
  },
  {
    id: "django-differences",
    title: "What Makes Django Different? An In-Depth Look with Examples",
    excerpt: "Unveiling Django: The Ultimate Web Framework for Rapid and Secure Development. Django is a robust and high-level Python web framework that promotes...",
    date: "Jan 7, 2023",
    readTime: "3 min read",
    views: 129,
    url: "https://code.esubalew.et/what-makes-django-different-an-in-depth-look-with-examples",
    source: "code.esubalew.et"
  }
];
