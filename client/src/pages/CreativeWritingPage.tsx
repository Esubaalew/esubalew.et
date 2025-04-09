import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import CreativeWritingSection from "@/components/CreativeWritingSection";

const CreativeWritingPage = () => {
  return (
    <div className="py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Creative Writing</h1>
        <Card className="bg-secondary border-border">
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              Beyond coding, I express myself through poetry and creative 
              writing in Amharic. This page showcases my poems and thoughts that 
              explore various themes including life, relationships, and social 
              commentary. These writings are originally published on my WordPress 
              blog at esubaalew.wordpress.com.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Separator className="my-8" />
      
      <CreativeWritingSection showViewAll={false} />
    </div>
  );
};

export default CreativeWritingPage;
