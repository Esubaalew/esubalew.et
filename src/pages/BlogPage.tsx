import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import BlogSection from "@/components/BlogSection";

const BlogPage = () => {
  return (
    <div className="py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Technical Blog</h1>
        <Card className="bg-secondary border-border">
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              Welcome to my blog where I share insights, tutorials, and thoughts 
              about software development, with a particular focus on Python, 
              web frameworks, and Telegram bot development. I regularly publish 
              articles on code.esubalew.et covering a wide range of technical 
              topics to help fellow developers.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Separator className="my-8" />
      
      <BlogSection showViewAll={false} />
    </div>
  );
};

export default BlogPage;
