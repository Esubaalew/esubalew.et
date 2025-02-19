"use client"

import { useEffect } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Button } from "@/components/ui/button"

export function ServiceWorkerRegistration() {
  const { toast } = useToast()

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const registerServiceWorker = async () => {
        try {
          const registration = await navigator.serviceWorker.register("/sw.js", { scope: "/" })

          // Check for updates
          registration.addEventListener("updatefound", () => {
            const newWorker = registration.installing
            if (newWorker) {
              newWorker.addEventListener("statechange", () => {
                if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                  toast({
                    title: "New content available!",
                    description: "Reload the page to see the latest version.",
                    action: (
                      <Button variant="outline" size="sm" onClick={() => window.location.reload()}>
                        Reload
                      </Button>
                    ),
                    duration: null,
                  })
                }
              })
            }
          })

          console.log("Service Worker registered successfully with scope:", registration.scope)
        } catch (error) {
          console.error("Service Worker registration failed:", error)
          // Log more details about the error
          if (error instanceof Error) {
            console.error("Error name:", error.name)
            console.error("Error message:", error.message)
            console.error("Error stack:", error.stack)
          }
          toast({
            title: "Service Worker Registration Failed",
            description: "There was an issue setting up offline functionality. Some features may be limited.",
            variant: "destructive",
          })
        }
      }

      registerServiceWorker()
    } else {
      console.warn("Service workers are not supported in this browser.")
      toast({
        title: "Offline Functionality Limited",
        description: "Your browser doesn't support some features. The site may not work offline.",
        variant: "warning",
      })
    }
  }, [toast])

  return null
}

