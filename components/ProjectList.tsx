"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Project {
  name: string
  description: string
  link: string
  languages: string[]
}

interface ProjectListProps {
  category: string
  projects: Project[]
}

export default function ProjectList({ category, projects }: ProjectListProps) {
  const [page, setPage] = useState(0)
  const projectsPerPage = 3
  const totalPages = Math.ceil(projects.length / projectsPerPage)

  const visibleProjects = projects.slice(page * projectsPerPage, (page + 1) * projectsPerPage)

  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-semibold mb-4">{category}</h2>
      <div className="relative">
        <div className="overflow-x-auto pb-4 scrollbar-hide">
          <div className="flex space-x-6">
            {visibleProjects.map((project) => (
              <div
                key={project.name}
                className="w-80 flex-shrink-0 border border-gray-200 dark:border-gray-700 rounded p-4"
              >
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 h-24 overflow-y-auto">{project.description}</p>
                <div className="mb-4">
                  <strong>Tech:</strong> {project.languages.join(", ")}
                </div>
                <Link href={project.link} target="_blank" rel="noopener noreferrer" className="btn">
                  View Project
                </Link>
              </div>
            ))}
          </div>
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center mt-4 space-x-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="flex items-center">
              {page + 1} / {totalPages}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

