import { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "All fields are required",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // In a real implementation, this would send the form data to the server
    try {
      // Simulate an API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      // Clear form
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 border-t border-border">
      <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <p className="text-muted-foreground mb-6">
            Have a project in mind or want to collaborate? Feel free to reach
            out through any of these channels:
          </p>

          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-secondary p-3 rounded-lg mr-4">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <a
                  href="mailto:contact@esubalew.et"
                  className="text-primary hover:underline"
                >
                  contact@esubalew.et
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-secondary p-3 rounded-lg mr-4">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">GitHub</h3>
                <a
                  href="https://github.com/esubaalew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  github.com/esubaalew
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-secondary p-3 rounded-lg mr-4">
                <Linkedin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold">LinkedIn</h3>
                <a
                  href="https://linkedin.com/in/esubaalew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  linkedin.com/in/esubaalew
                </a>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-secondary p-6 border-border">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-foreground mb-1">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-background border-border"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-foreground mb-1">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background border-border"
                disabled={isSubmitting}
              />
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-foreground mb-1">
                Message
              </Label>
              <Textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-background border-border"
                disabled={isSubmitting}
              />
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  Sending...
                  <Send className="ml-2 h-4 w-4 animate-pulse" />
                </>
              ) : (
                <>
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
