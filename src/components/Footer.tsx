import { Link } from "wouter";
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from "lucide-react";
import { SiTiktok } from "react-icons/si";
import Logo from "@/components/Logo";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Logo className="h-8 w-8" />
                <div className="text-2xl font-bold tracking-tight gradient-text">Esubalew</div>
              </div>
            </Link>
            <p className="text-muted-foreground mt-2">
              Fullstack Developer & AI Enthusiast
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 md:gap-8">
            <Link href="/">
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Home
              </div>
            </Link>
            <Link href="/projects">
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Projects
              </div>
            </Link>
            <Link href="/blog">
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Blog
              </div>
            </Link>
            <Link href="/writing">
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Writing
              </div>
            </Link>
            <Link href="/contact">
              <div className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                Contact
              </div>
            </Link>
          </nav>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground mb-4 md:mb-0">
            © {new Date().getFullYear()} Esubalew Chekol. All rights reserved.
          </p>

          <div className="flex space-x-4">
            <a
              href="https://github.com/esubaalew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/esubaalew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="h-5 w-5" />
            </a>
            <a
              href="https://twitter.com/esubaalew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="h-5 w-5" />
            </a>
            <a
              href="https://tiktok.com/@esubaleweye"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="TikTok"
            >
              <SiTiktok className="h-4 w-4" />
            </a>
            <a
              href="https://youtube.com/@esubalew"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="YouTube"
            >
              <YoutubeIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
