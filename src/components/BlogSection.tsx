import { useState } from "react";
import { Link } from "wouter";
import { ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { blogPosts } from "@/data/blog-posts";

interface BlogSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

const BlogSection = ({ limit, showViewAll = true }: BlogSectionProps) => {
  const [activeSource, setActiveSource] = useState<string | null>(null);
  
  // Get unique sources
  const sourcesMap: Record<string, boolean> = {'All': true};
  blogPosts.forEach(post => {
    const source = post.source || 'Other';
    sourcesMap[source] = true;
  });
  const sources = Object.keys(sourcesMap);
  
  // Filter posts by source if selected
  const filteredPosts = activeSource && activeSource !== 'All'
    ? blogPosts.filter(post => post.source === activeSource)
    : blogPosts;
    
  // Apply limit if needed
  const displayedPosts = limit ? filteredPosts.slice(0, limit) : filteredPosts;

  return (
    <section id="blog" className="py-16 border-t border-border">
      <h2 className="text-3xl font-bold mb-2 gradient-text">Blog</h2>
      <p className="text-muted-foreground mb-8">
        Latest thoughts, tutorials, and insights
      </p>
      
      {/* Source filters */}
      <div className="flex flex-wrap gap-2 mb-8">
        {sources.map(source => (
          <Button
            key={source}
            variant={activeSource === source || (!activeSource && source === 'All') ? "default" : "outline"}
            size="sm"
            onClick={() => setActiveSource(source === 'All' ? null : source)}
            className="gradient-hover"
          >
            {source}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {displayedPosts.map((post) => (
          <Card 
            key={post.id}
            className="gradient-card border-border transition-all overflow-hidden group"
          >
            <CardContent className="p-6 bg-secondary/80 backdrop-blur-sm">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs text-muted-foreground">
                  {post.date} · {post.readTime}
                  {post.views && ` · ${post.views} views`}
                </span>
                {post.source && (
                  <Badge variant="outline" className="text-xs bg-background/50 backdrop-blur-sm">
                    {post.source}
                  </Badge>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-3">{post.title}</h3>
              <p className="text-muted-foreground mb-4">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0 bg-secondary/80 backdrop-blur-sm">
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline inline-flex items-center transition-all duration-300 hover:translate-x-1"
              >
                Read More
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>

      {showViewAll && displayedPosts.length > 4 && (
        <div className="mt-8 text-center">
          <Link href="/blog">
            <Button variant="outline" size="lg" className="rounded-lg gradient-border">
              View All Posts
            </Button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default BlogSection;
