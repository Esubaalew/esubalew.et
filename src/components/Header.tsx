import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Logo from "@/components/Logo";

const Header = () => {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/blog", label: "Blog" },
    { path: "/writing", label: "Writing" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <Logo className="h-8 w-8" />
            <span className="text-xl font-bold tracking-tight gradient-text">Esubalew</span>
          </div>
        </Link>
        
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <div
                className={`${
                  location === item.path
                    ? "text-primary font-medium"
                    : "text-foreground hover:text-primary"
                } transition-colors cursor-pointer gradient-hover px-3 py-1 rounded-md`}
              >
                {item.label}
              </div>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-effect border-b border-border">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <div
                  className={`${
                    location === item.path
                      ? "text-primary font-medium"
                      : "text-foreground hover:text-primary"
                  } transition-colors py-2 cursor-pointer gradient-hover px-3 py-2 rounded-md`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
