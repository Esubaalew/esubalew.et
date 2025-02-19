import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"

const Header = () => {
  return (
    <header className="border-b border-gray-200 dark:border-gray-700 ethiopic-pattern">
      <nav className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-bold mb-4 sm:mb-0">
          EC
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/projects" className="hover:underline">
            Projects
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/events" className="hover:underline">
            Events
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}

export default Header

