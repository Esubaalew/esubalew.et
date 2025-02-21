interface Project {
  name: string
  description: string
  link: string
  languages: string[]
}

interface ProjectsByCategory {
  [key: string]: Project[]
}

export function getProjects(): ProjectsByCategory {
  return {
    "Telegram Bots": [

      {
        name: "AAU Robot",
        description: "AAU Robot is a Telegram bot designed to provide students of Addis Ababa University with quick access to their academic information, including grade reports and profile details. The bot ensures the privacy and security of user data while offering a convenient way for students to retrieve important information.",
        link: "https://t.me/AAU_Robot",
        languages: ["Python", "Telegram API", "SQLite", "Mechanize", "PTB"],
      },
      {
        name: "Liyu Robot",
        description: "LiyuBot is a telegram bot for making telegram chat analysis",
        link: "https://t.me/LiyuRobot",
        languages: ["Python", "Telegram API", "Matplotlib", "seaborn", "Python-Telegram-Bot", "Pandas", "Numpy"],
      },
      {
        name: "Real Estate Bot",
        description: "Real Estate Bot is a Telegram bot and mini app that allows users to search for real estate properties, list or rent properties, and more. The bot is designed to provide a seamless user experience and help users find the perfect property for their needs.",
        link: "https://t.me/mana_etbot",
        languages: ["Python", "Telegram API", "Bootstarp", "PTB", "Django", "Django Rest Framework"],
      },
      {
        name: "EsubeBot",
        description: "This is an assistant to myself a bot i use to message users who i dont know and to send them my portfolio",
        link: "https://t.me/EsubeRobot",
        languages: ["Python", "Telegram API", "PTB"],
      },
      {
        name: "Telegram mini store",
        description: "A telegram bot and mini app which  allows users to buy and sell items on telegram",
        link: "https://github.com/Esubaalew/telegram-mini-store",
        languages: ["Python", "Telegram API", "PTB"],
      },
      {
        name: "Meaning Bot",
        description: "Meaning Bot is a Telegram bot that provides users with the meaning of words. Users can search for words and receive definitions, synonyms, and more.",
        link: "https://t.me/meaningRobot",
        languages: ["Python", "Telegram API", "PTB"],
      },
      {
        name: "Grade 12 Certficate Bot",
        description: "This is called Results bot a bot that  help many student by giving them their grade 12 certificate at the time the MoE server is down and unresponsive",
        link: "https://t.me/ResultsRobot",
        languages: ["Python", "Telegram API", "PTB"],
      },
      {
        name: "Naatic Bot",
        description: "This bot is a no longer maintained bot that was used to showcase products receive orders and send them to the admin",
        link: "https://t.me/NAATICBot",
        languages: ["Python", "Telegram API", "PTB"],
      },
      {
        name: "Sorter Bot",
        description: "This bot is a no longer maintained bot that was used to sort the messages of a any input",
        link: "https://github.com/Esubaalew/sorter",
        languages: ["Python", "Telegram API", "PTB"],
      },
      {
        name: "YESS Bot",
        description: "YessRobot is a Telegram bot designed to manage volunteers and assist with registration for YessEthiopia.",
        link: "https://github.com/Esubaalew/YESS",
        languages: ["Python", "Telegram API", "PTB"],
      },
      {
        name: "Informing telegram bot",
        description: "This bot is a no longer maintained bot that was used to inform users the full detial of tthe user they forward message from",
        link: "https://github.com/Esubaalew/Informing-Telegram-bot",
        languages: ["Python", "Telegram API", "PTB"],
      },
      {
        name: "Crossroads Bot",
        description: "telegram bot mainly for handling simple user registrations",
        link: "https://github.com/Esubaalew/crossroadbot",
        languages: ["Node.js", "Telegram API", "telegraf"],
      },
      {
        name: "PenRobot",
        description: "I am PenRobot 🤖, an assistant for reminders. I also manage @pic_sum(tg channel), posting images with quotes hourly.",
        link: "https://t.me/PenRobot",
        languages: ["Python", "Telegram API", "PTB"],
      }
    ],
    Websites: [
      {
        name: "ወረብ ‌Wereb player",
        description:
          "A responsive mini app that combines a curated collection of audio sermons from the Ethiopian Orthodox Tewahedo Church (EOTC).",
        link: "https://wereb.esubalew.et",
        languages: ["TypeScript", "React", "Node.js", "Next.js"],
      },
      {
        name: "Azeb's Dictionary",
        description:
          "Azeb's Futuristic Dictionary! Explore the world of words with our cutting-edge interface. ",
        link: "https://azeb.esubalew.et",
        languages: ["TypeScript", "JavaScript", "React", "Node.js", "Next.js"],
      },
      {
        name: "Dr. Tadelle Desssie",
        description:
          "A website for Dr. Tadelle Dessie, a renowned Ethiopian scientist and researcher.",
        link: "https://tadelled.com",
        languages: ["TypeScript", "JavaScript", "React", "Node.js", "Next.js"],
      },
      {
        name: "TeleInsight",
        description:
          "TeleInsight is a powerful web application designed to analyze Telegram chat data. Our tool provides valuable insights into your conversations, helping you understand user engagement, message patterns, and more.",
        link: "https://teleinsight.esubalew.et",
        languages: ["TypeScript", "JavaScript", "React", "Node.js", "Next.js", "chart.js"],
      },
      {
        name: "Yeka Research",
        description:
          "Yeka Research is a website for Yeka Industrial College, a leading technical and vocational training institution in Ethiopia.",
        link: "https://yeka.koyeb.app",
        languages: ["Django", "Python", "Bootstrap"],
      },
      {
        name: "Orthopia",
        description:
          "Orthopia is a community-focused ongoing project combining the cultural and spiritual essence of Orthodox Tewahedo and Ethiopian traditions. The platform aims to facilitate engagement and sharing among users through a Telegram-based application backed by Django. ",
        link: "https://orthopia.esube.tech",
        languages: ["TypeScript", "JavaScript", "React", "Node.js", "Next.js"],
      },
      {
        name: "Selam Action for Women Empowerment",
        description: "Portfolio website for Selam Action for Women",
        link: "https://sawe-virid.vercel.app/",
        languages: [ "JavaScript", "React", "Node.js",]
      },
      {
        name: "BILIH Solutions",
        description: "Portfolio website for BILIH Solutions",
        link: "https://bilih.esube.tech/",
        languages: [ "JavaScript", "React", "Node.js",]
      },
      {
        name: "AAU ZENA",
        description: "This was a news and anouncements website for Addis Ababa University which is now outdated and no longer maintained",
        link: "https://github.com/Esubaalew/aauzena",
        languages: ["Bootstrap", "HTML", "CSS"],
      },
      {
        name: "Enimar",
        description: "Enimar code learning platform",
        link: "https://enimar.vercel.app/",
        languages: ["React", "Node.js", "Express", "Django", "Python", "Django Rest Framework", "JWT"],
      },
      {
        name: "Enimar Knowledge Portal",
        description: "Enimar Knowledge Portal",
        link: "https://github.com/Esubaalew/KPortalBackend",
        languages: ["Django", "Python", "Django Rest Framework", "JWT", "React"],
      },
      {
        name: "AAEB Evaluation",
        description: "A very simple employee evalution system for Addis Ababa Education Bureau",
        link: "https://github.com/Esubaalew/evaluator",
        languages: ["Django", "Python", "Django Rest Framework", "JWT"],
      },
    ],
    "Mobile Apps": [
      {
        name: "SIS APP",
        description:
          "Application for the School of Information Science which is can be used as a guide to know the program.",
        link: "https://github.com/Esubaalew/SIS-App",
        languages: ["React Native", "Expo"],
      },
      {
        name: "Github Repo Downloader",
        description:
          "A mobile app that allows users to download GitHub repositories as ZIP files.",
        link: "https://github.com/Esubaalew/RepoDownloader",
        languages: ["React Native", "Expo"],
      },
      {
        name: "Todo App",
        description:
          "A simple mobile app for creating and managing to-do lists.",
        link: "https://github.com/Esubaalew/TodoList",
        languages: ["React Native", "Expo"],
      
      },
      {
        name: "Addis Store",
        description:
          "A mobile app for buying and selling items",
        link: "https://github.com/Esubaalew/AddisStore",
        languages: ["React Native", "Expo"],
      }
    ],
    "Web Crawlers": [
      {
        name: "Wereb Scraper",
        description: "A Python script to download liturgical music files from the Ethiopian Orthodox Church website while preserving directory structure and using meaningful filenames. ",
        link: "https://github.com/Esubaalew/Wereb",
        languages: ["Python", "BeautifulSoup", "Scrapy"],
      },
      {
        name: "Best Buy Scraper",
        description: "A Python script to scrape product information from Best Buy's website, including product name, price, and availability.",
        link: "https://github.com/Esubaalew/chapiScrapes",
        languages: ["Python", "BeautifulSoup","Selenium"],
      },
      {
        name: "Merriam-Webster Scraper",
        description: "A Python script to scrape word definitions and examples from the Merriam-Webster dictionary website.",
        link: "https://t.me/meaningRobot",
        languages: ["Python", "BeautifulSoup"],

      },
      {
        name: "AAU Scraper",
        description: "A Python script to scrape student grade reports and profile information from the Addis Ababa University website. If u feel this is illegal chekcout the code",
        link: "htps://t.me/AAURobot",
        languages: ["Python", "BeautifulSoup"],
      },
      {
        name: "2merkato Scraper",
        description: "The web scraping project to extract bussiness directory from https://www.2merkato.com/directory",
        link: "https://github.com/Esubaalew/2merkato",
        languages: ["Python", "BeautifulSoup"],
      },
      {
        name: "Scrape",
        description: "WebScraping in 10 Languages",
        link: "https://github.com/Esubaalew/scrape",
        languages: ["Python", "JavaScript", "PHP",  "Java", "C#", "C++", "C", "Perl", "Cobol", "Prolog", "Kotlin"],
      },
      {
        name: "BELAH Search Engine",
        description: "This simple and a little backward code is C# search engine that uses web scrapping tool to search different websites for retreving specific results.",
        link: "https://github.com/esubaalew/belah-search-engine",
        languages: ["C#", "HTMLAgilityPack"],
      },
    ],
    Others: [
      {
        name: "Azeb API",
        description: "This project provides a collection of APIs built using FastAPI that interact with the Britannica Dictionary. It allows users to retrieve various information such as entries, total entries, word of the day, parts of speech, and definitions for words.",
        link: "https://aziye.esubalew.et/docs",
        languages: ["Python", "FastAPI", "BeautifulSoup", "Pydantic"],
      },
      {
        name: "Seniment Analysis",
        description: "A sentiment analysis project that uses a dataset of telegram group chats trained on nearly 400K conversations .",
        link: "https://github.com/Esubaalew/chat-sentiment",
        languages: ["Python", "NLTK", "Pandas", "Matplotlib", "Seaborn", "Scikit-learn"],
      },
      {
        name: "britannica-dictionary",
        description: "A Python package that provides an interface to the Britannica Dictionary API. It allows users to retrieve word definitions, synonyms, antonyms, and more.",
        link: "https://pypi.org/project/britannica-dictionary/",
        languages: ["Python", "PyPI", "Requests"],
      },
      {
        name: "Dictionary Kotlin",
        description: "A simple kotlin package for crawling the Britannica Dictionary",
        link: "https://github.com/Esubaalew/Dictionary-Kotlin",
        languages: ["Kotlin", "Android"],
      },
      {
        name: "Air Quality Analysis",
        description: "This repository contains code for analyzing air quality data in New York City as part of the Data Science Lab course.",
        link: "https://github.com/Esubaalew/AirQualityAnalysisN",
        languages: ["Python", "Pandas", "Matplotlib", "Seaborn"],
      },
      {
        name: "Inverted Index",
        description: "This project is an implementation of an inverted index for text documents using Python. An inverted index is a data structure that allows for fast full-text searches, enabling users to search for keywords in a large collection of text documents.",
        link: "https://github.com/Esubaalew/inverted-index-project",
        languages: ["Python"],
      }
    ],
  }
}

