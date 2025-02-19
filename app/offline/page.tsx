import Link from "next/link"
import { WifiOff } from "lucide-react"

export default function Offline() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <WifiOff className="h-16 w-16 mb-6 text-gray-400" />
      <h1 className="text-3xl font-bold mb-4">You're Offline</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
        This page hasn't been cached yet. You're viewing the offline version of the site. Connect to the internet to
        view the latest content.
      </p>
      <Link href="/" className="btn">
        Go to Homepage
      </Link>
    </div>
  )
}

