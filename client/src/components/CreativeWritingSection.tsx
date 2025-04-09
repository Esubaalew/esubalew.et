import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { creativeWritings } from "@/data/creative-writing";

interface CreativeWritingSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

const CreativeWritingSection = ({ 
  limit, 
  showViewAll = true 
}: CreativeWritingSectionProps) => {
  const displayedWritings = limit 
    ? creativeWritings.slice(0, limit) 
    : creativeWritings;

  return (
    <section className="py-16 border-t border-border">
      <h2 className="text-3xl font-bold mb-2">Creative Writing</h2>
      <p className="text-muted-foreground mb-8">Poems and thoughts in Amharic</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedWritings.map((writing) => (
          <Card
            key={writing.id}
            className="bg-secondary border-border hover:border-primary transition-all"
          >
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-3">{writing.title}</h3>
              <p className="text-muted-foreground mb-4 italic">{writing.excerpt}</p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <a
                href={writing.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center"
              >
                Read Complete Poem
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      {showViewAll && (
        <div className="mt-8 text-center">
          <a
            href="https://esubaalew.wordpress.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="rounded-lg">
              View All Poems
            </Button>
          </a>
        </div>
      )}
    </section>
  );
};

export default CreativeWritingSection;
