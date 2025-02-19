import type { Metadata } from "next"
import { getProjects } from "@/lib/projects"
import ProjectList from "@/components/ProjectList"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of web applications, Telegram bots, mobile apps, and more.",
}

export default function Projects() {
  const projects = getProjects()

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">My Projects</h1>
      <div className="decorative-line w-32 mb-6"></div>
      <div className="space-y-8">
        {Object.entries(projects).map(([category, categoryProjects]) => (
          <ProjectList key={category} category={category} projects={categoryProjects} />
        ))}
      </div>
    </div>
  )
}

