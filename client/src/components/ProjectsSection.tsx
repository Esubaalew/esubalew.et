import { useState } from "react";
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { projects } from "@/data/projects";

interface ProjectsSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

const ProjectsSection = ({ limit, showViewAll = true }: ProjectsSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  // Get unique categories - avoid using Set to prevent TypeScript errors
  const categoriesMap: Record<string, boolean> = {'All': true};
  projects.forEach(project => {
    const category = project.category || 'Others';
    categoriesMap[category] = true;
  });
  const categories = Object.keys(categoriesMap);
  
  // Filter projects by category if selected
  const filteredProjects = activeCategory && activeCategory !== 'All'
    ? projects.filter(project => project.category === activeCategory)
    : projects;
    
  // Apply limit if needed
  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

  return (
    <section id="projects" className="py-16 border-t border-border">
      <h2 className="text-3xl font-bold mb-2 gradient-text">Projects</h2>
      <p className="text-muted-foreground mb-8">My portfolio of work across various technologies</p>
      
      {/* Category filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(category => (
          <Button
            key={category}
            variant={activeCategory === category || (!activeCategory && category === 'All') ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveCategory(category === 'All' ? null : category)}
            className="gradient-hover"
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProjects.map((project) => (
          <Card 
            key={project.id} 
            className="gradient-card border-border transition-all overflow-hidden group h-full flex flex-col"
          >
            <div className="aspect-video w-full overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              {project.category && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-primary/80 text-white backdrop-blur-sm border-none">
                    {project.category}
                  </Badge>
                </div>
              )}
            </div>
            <CardContent className="p-6 bg-secondary/80 backdrop-blur-sm flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-xs bg-background/50 backdrop-blur-sm">
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="outline" className="text-xs bg-background/50 backdrop-blur-sm">
                    +{project.tags.length - 3} more
                  </Badge>
                )}
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0 bg-secondary/80 backdrop-blur-sm mt-auto">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center transition-all duration-300 hover:translate-x-1"
              >
                View Project
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      {showViewAll && displayedProjects.length > 6 && (
        <div className="mt-8 text-center">
          <Link href="/projects">
            <Button variant="outline" size="lg" className="rounded-lg gradient-border">
              View All Projects
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
