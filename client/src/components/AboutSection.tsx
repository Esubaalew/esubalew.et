import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const technologies = [
    "JavaScript",
    "Python",
    "C",
    "React",
    "Django",
    "Node.js",
    "FastAPI",
    "Telegram Bots",
    "AI/ML",
  ];

  return (
    <section className="py-16 border-t border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              I graduated with a BSc in Information Systems from Addis Ababa
              University in July 2024. Currently, I'm pursuing my MSc in
              Artificial Intelligence at the Addis Ababa Institute of
              Technology, Addis Ababa University.
            </p>
            <p>
              My expertise spans from low-level C programming to modern
              frameworks like React, Node.js, and Django. I've developed
              applications across web, mobile, and AI domains, with a
              particular interest in Telegram bot development.
            </p>
            <p>
              I'm committed to creating elegant, efficient solutions that
              address real-world challenges. When I'm not coding, I enjoy
              sharing my knowledge through my technical blog and contributing
              to open-source projects.
            </p>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <div>
          <Card className="bg-secondary border border-border">
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="h-0.5 w-full bg-border"></div>
              </div>
              <code className="font-mono text-sm text-foreground block">
                <span className="text-green-400">esubalew@dev</span>
                <span className="text-neutral-400">:</span>
                <span className="text-blue-400">~</span>$ whoami
                <br />
                fullstack-developer
                <br />
                <br />
                <span className="text-green-400">esubalew@dev</span>
                <span className="text-neutral-400">:</span>
                <span className="text-blue-400">~</span>$ cat skills.txt
                <br />
                - Frontend: React, Next.js, HTML5, CSS3, JavaScript
                <br />
                - Backend: Python, Django, Node.js, Express, FastAPI
                <br />
                - Database: PostgreSQL, MongoDB, Redis
                <br />
                - Other: Docker, Git, CI/CD, Telegram Bot API
                <br />
                <br />
                <span className="text-green-400">esubalew@dev</span>
                <span className="text-neutral-400">:</span>
                <span className="text-blue-400">~</span>$ cat education.txt
                <br />
                - MSc, Artificial Intelligence - Addis Ababa Institute of
                Technology (Current)
                <br />
                - BSc, Information Systems - Addis Ababa University (2024)
                <br />
                <br />
                <span className="text-green-400">esubalew@dev</span>
                <span className="text-neutral-400">:</span>
                <span className="text-blue-400">~</span>$
                <span className="animate-ping">_</span>
              </code>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
