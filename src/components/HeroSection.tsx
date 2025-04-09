import { Link } from "wouter";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[calc(100vh-6rem)] flex flex-col justify-center py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Esubalew Chekol
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium text-primary mb-6">
            Fullstack Developer
          </h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-lg">
            I'm a passionate Fullstack Developer with a knack for crafting
            innovative technology solutions. My expertise spans from C to modern
            languages like JavaScript and Python, allowing me to develop robust
            web applications, Telegram bots, and mobile applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/projects">
              <Button size="lg" className="rounded-lg">
                View Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="rounded-lg">
                Contact Me
              </Button>
            </Link>
          </div>
          <div className="flex mt-8 space-x-4">
            <a
              href="https://github.com/esubaalew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-6 w-6" />
            </a>
            <a
              href="https://linkedin.com/in/esubaalew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-6 w-6" />
            </a>
            <a
              href="https://twitter.com/esubaalew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 overflow-hidden rounded-full border-4 border-primary">
            <Avatar className="w-full h-full">
              <AvatarImage 
                src="https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Esubalew Chekol"
                className="object-cover"
              />
              <AvatarFallback>EC</AvatarFallback>
            </Avatar>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-background rounded-full p-2 border border-primary">
            <div className="bg-green-500 rounded-full w-4 h-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
