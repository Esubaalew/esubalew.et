import { Link } from "wouter";
import { ArrowLeft, Home, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] w-full flex flex-col items-center justify-center py-16 px-4">
      <SEO title="404 - Page Not Found | Esubalew Chekol" description="The page you're looking for doesn't exist." />
      
      <div className="text-center mb-8">
        <span className="text-8xl font-bold gradient-text">404</span>
      </div>
      
      <Card className="w-full max-w-md gradient-card overflow-hidden">
        <CardContent className="pt-8 pb-4 px-6 text-center">
          <AlertCircle className="h-16 w-16 text-primary mx-auto mb-4 opacity-80" />
          <h1 className="text-2xl font-bold mb-2">Page Not Found</h1>
          
          <p className="text-muted-foreground mb-6">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col gap-4 w-full max-w-xs mx-auto">
            <Button asChild variant="default" className="w-full gradient-button">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </CardContent>
        
        <Separator />
        
        <CardFooter className="px-6 py-4 text-center text-sm text-muted-foreground">
          <p className="w-full">
            Lost? Check out the <Link href="/blog" className="text-primary hover:underline">blog</Link> or <Link href="/projects" className="text-primary hover:underline">projects</Link> sections.
          </p>
        </CardFooter>
      </Card>
      
      <div className="mt-8">
        <Button variant="ghost" size="sm" asChild className="text-muted-foreground hover:text-foreground">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return to homepage
          </Link>
        </Button>
      </div>
    </div>
  );
}
