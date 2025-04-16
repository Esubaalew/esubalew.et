export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  category?: string;
}

export const projects: Project[] = [
  // Telegram Bots
  {
    id: "aau-robot",
    title: "AAU Robot",
    description: "AAU Robot is a Telegram bot designed to provide students of Addis Ababa University with quick access to their academic information, including grade reports and profile details.",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Telegram API", "SQLite", "Mechanize", "PTB"],
    url: "https://t.me/AAU_Robot",
    category: "Telegram Bots"
  },
   {
    id: "save-link-bot",
    title: "Save Link Bot",
    description: "Save Link Bot is a Telegram bot designed to download vidoes from Facebook, youtube, tiktok and instagram with ease",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Telegram API", "SQLite", "Mechanize", "PTB"],
    url: "https://t.me/SaveLink_robot",
    category: "Telegram Bots"
  },
  {
    id: "liyu-robot",
    title: "Liyu Robot",
    description: "LiyuBot is a telegram bot for making telegram chat analysis",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Telegram API", "Matplotlib", "seaborn", "Python-Telegram-Bot", "Pandas", "Numpy"],
    url: "https://t.me/LiyuRobot",
    category: "Telegram Bots"
  },
  {
    id: "real-estate-bot",
    title: "Real Estate Bot",
    description: "Real Estate Bot is a Telegram bot and mini app that allows users to search for real estate properties, list or rent properties, and more.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Telegram API", "Bootstrap", "PTB", "Django", "Django Rest Framework"],
    url: "https://t.me/mana_etbot",
    category: "Telegram Bots"
  },
  {
    id: "esube-bot",
    title: "EsubeBot",
    description: "This is an assistant to myself a bot I use to message users who I don't know and to send them my portfolio",
    image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Telegram API", "PTB"],
    url: "https://t.me/EsubeRobot",
    category: "Telegram Bots"
  },
  
  // Websites
  {
    id: "wereb-player",
    title: "ወረብ ‌Wereb player",
    description: "A responsive mini app that combines a curated collection of audio sermons from the Ethiopian Orthodox Tewahedo Church (EOTC).",
    image: "https://images.unsplash.com/photo-1580795479225-c50ab8c3316d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "React", "Node.js", "Next.js"],
    url: "https://wereb.esubalew.et",
    category: "Websites"
  },
  {
    id: "azeb-dictionary",
    title: "Azeb's Dictionary",
    description: "Azeb's Futuristic Dictionary! Explore the world of words with our cutting-edge interface.",
    image: "https://images.unsplash.com/photo-1505682634904-d7c8d95cdc50?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "JavaScript", "React", "Node.js", "Next.js"],
    url: "https://azeb.esubalew.et",
    category: "Websites"
  },
  {
    id: "tadelle-dessie",
    title: "Dr. Tadelle Dessie",
    description: "A website for Dr. Tadelle Dessie, a renowned Ethiopian scientist and researcher.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "JavaScript", "React", "Node.js", "Next.js"],
    url: "https://tadelled.com",
    category: "Websites"
  },
  {
    id: "teleinsight",
    title: "TeleInsight",
    description: "TeleInsight is a powerful web application designed to analyze Telegram chat data. Our tool provides valuable insights into your conversations.",
    image: "https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["TypeScript", "JavaScript", "React", "Node.js", "Next.js", "chart.js"],
    url: "https://teleinsight.esubalew.et",
    category: "Websites"
  },
  {
    id: "sawewomen",
    title: "SAWEWomen",
    description: "AWE works with communities to create sustainable solutions for poverty, climate change, and gender equality.",
    image: "https://media.sawewomen.org/NGO/SAWE/web/uploads/2025/04/01/sawe-logo.jpg",
    tags: ["TypeScript", "JavaScript", "React", "Node.js", "Next.js", "Django"],
    url: "https://sawewomen.org",
    category: "Websites"
  },
  // Mobile Apps
  {
    id: "sis-app",
    title: "SIS APP",
    description: "Application for the School of Information Science which can be used as a guide to know the program.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Expo"],
    url: "https://github.com/Esubaalew/SIS-App",
    category: "Mobile Apps"
  },
  {
    id: "github-repo-downloader",
    title: "Github Repo Downloader",
    description: "A mobile app that allows users to download GitHub repositories as ZIP files.",
    image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["React Native", "Expo"],
    url: "https://github.com/Esubaalew/RepoDownloader",
    category: "Mobile Apps"
  },
  
  // Web Crawlers
  {
    id: "wereb-scraper",
    title: "Wereb Scraper",
    description: "A Python script to download liturgical music files from the Ethiopian Orthodox Church website while preserving directory structure.",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "BeautifulSoup", "Scrapy"],
    url: "https://github.com/Esubaalew/Wereb",
    category: "Web Crawlers"
  },
  {
    id: "best-buy-scraper",
    title: "Best Buy Scraper",
    description: "A Python script to scrape product information from Best Buy's website, including product name, price, and availability.",
    image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "BeautifulSoup", "Selenium"],
    url: "https://github.com/Esubaalew/chapiScrapes",
    category: "Web Crawlers"
  },
  
  // Others
  {
    id: "azeb-api",
    title: "Azeb API",
    description: "This project provides a collection of APIs built using FastAPI that interact with the Britannica Dictionary.",
    image: "https://images.unsplash.com/photo-1506729623306-b5a934d88b53?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "FastAPI", "BeautifulSoup", "Pydantic"],
    url: "https://aziye.esubalew.et/docs",
    category: "Others"
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis",
    description: "A sentiment analysis project that uses a dataset of telegram group chats trained on nearly 400K conversations.",
    image: "https://images.unsplash.com/photo-1581092583537-20d51b4b4f1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "NLTK", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
    url: "https://github.com/Esubaalew/chat-sentiment",
    category: "Others"
  },
  {
    id: "air-quality-analysis",
    title: "Air Quality Analysis",
    description: "This repository contains code for analyzing air quality data in New York City as part of the Data Science Lab course.",
    image: "https://images.unsplash.com/photo-1562155847-c05f7386b204?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    url: "https://github.com/Esubaalew/AirQualityAnalysisN",
    category: "Others"
  }
];
