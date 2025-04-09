import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ProjectsSection from "@/components/ProjectsSection";

const ProjectsPage = () => {
  return (
    <div className="py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">My Projects</h1>
        <Card className="bg-secondary border-border">
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              As a fullstack developer, I focus on building scalable, efficient 
              applications across multiple domains. My projects range from web 
              development to specialized Telegram bot applications and data 
              analysis tools. Below are some of my recent projects, highlighting 
              my expertise in Python, JavaScript, and various frameworks.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Separator className="my-8" />
      
      <ProjectsSection showViewAll={false} />
    </div>
  );
};

export default ProjectsPage;
