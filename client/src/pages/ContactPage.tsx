import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ContactSection from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <div className="py-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <Card className="bg-secondary border-border">
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              I'm always open to new opportunities, collaborations, or just a 
              friendly chat about technology. Whether you have a project in mind, 
              need consulting, or want to discuss potential collaborations, 
              feel free to reach out through any of the channels below or use 
              the contact form.
            </p>
          </CardContent>
        </Card>
      </div>
      
      <Separator className="my-8" />
      
      <ContactSection />
    </div>
  );
};

export default ContactPage;
