import { Github, Linkedin, Mail, Send } from "lucide-react"

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-6 flex justify-center items-center space-x-4">
        <a href="mailto:esubalew.chekol@aau.edu.et" aria-label="Email">
          <Mail className="w-5 h-5" />
        </a>
        <a href="https://github.com/esubaalew" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/esubaalew" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="https://t.me/esubbalew" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
          <Send className="w-5 h-5" />
        </a>
      </div>
    </footer>
  )
}

export default Footer

