import { Route, Switch } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import BlogPage from "@/pages/BlogPage";
import CreativeWritingPage from "@/pages/CreativeWritingPage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "@/pages/not-found";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RandomImageWidget from "@/components/RandomImageWidget";

function App() {
  return (
    <>
      <Header />
      <main className="container mx-auto px-4 min-h-screen pt-24 pb-16">
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/projects" component={ProjectsPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/writing" component={CreativeWritingPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      <RandomImageWidget />
      <Toaster />
    </>
  );
}

export default App;
