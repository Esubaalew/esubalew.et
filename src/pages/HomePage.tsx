import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import CreativeWritingSection from "@/components/CreativeWritingSection";
import ContactSection from "@/components/ContactSection";

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection limit={3} />
      <BlogSection limit={4} />
      <CreativeWritingSection limit={2} />
      <ContactSection />
    </>
  );
};

export default HomePage;
