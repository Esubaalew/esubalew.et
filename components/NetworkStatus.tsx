"use client"

import { useEffect, useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Wifi, WifiOff, Database, Globe } from "lucide-react"

interface ContentSource {
  type: "network" | "cache"
  timestamp: string
}

export default function NetworkStatus() {
  const [isOnline, setIsOnline] = useState(true)
  const [contentSource, setContentSource] = useState<ContentSource>({
    type: "network",
    timestamp: new Date().toLocaleString(),
  })
  const { toast } = useToast()

  useEffect(() => {
    // Check if content is from cache
    const checkContentSource = async () => {
      try {
        const cache = await caches.open("esubalew-portfolio-v1")
        const cachedResponse = await cache.match(window.location.href)

        if (cachedResponse) {
          const cachedDate = cachedResponse.headers.get("date")
          setContentSource({
            type: "cache",
            timestamp: new Date(cachedDate || Date.now()).toLocaleString(),
          })
        }
      } catch (error) {
        console.error("Error checking cache:", error)
      }
    }

    function onOnline() {
      setIsOnline(true)
      setContentSource({
        type: "network",
        timestamp: new Date().toLocaleString(),
      })
      toast({
        title: "Back online",
        description: "Your internet connection has been restored. Content is now live.",
        duration: 3000,
      })
    }

    function onOffline() {
      setIsOnline(false)
      checkContentSource()
      toast({
        title: "No internet connection",
        description: "You're viewing cached content from your last visit.",
        duration: null,
      })
    }

    // Check initial connection state and content source
    if (!navigator.onLine) {
      onOffline()
    }
    checkContentSource()

    window.addEventListener("online", onOnline)
    window.addEventListener("offline", onOffline)

    return () => {
      window.removeEventListener("online", onOnline)
      window.removeEventListener("offline", onOffline)
    }
  }, [toast])

  return (
    <div className="fixed bottom-4 right-4 space-y-2">
      <div
        className={`rounded-full px-4 py-2 flex items-center space-x-2 text-sm ${
          isOnline ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}
      >
        {isOnline ? (
          <>
            <Wifi className="h-4 w-4" />
            <span>Online</span>
          </>
        ) : (
          <>
            <WifiOff className="h-4 w-4" />
            <span>Offline Mode</span>
          </>
        )}
      </div>
      <div className="bg-gray-800 text-white px-4 py-2 rounded-full flex items-center space-x-2 text-sm">
        {contentSource.type === "network" ? (
          <>
            <Globe className="h-4 w-4" />
            <span>Live Content</span>
          </>
        ) : (
          <>
            <Database className="h-4 w-4" />
            <span>Cached: {contentSource.timestamp}</span>
          </>
        )}
      </div>
    </div>
  )
}

