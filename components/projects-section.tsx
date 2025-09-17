import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "VorteKia",
    description:
      "A desktop application designed to optimize amusement park operations, built with React, Rust (Tauri), and Firebase. Features role-based access, real-time notifications, and user interfaces for staff, customers, and management to handle ride queues, restaurant orders, and park logistics efficiently.",
    image: "/vortekia.png",
    technologies: ["React", "Rust", "Tauri", "Firebase"],
    liveUrl: "#",
    githubUrl: "https://github.com/Visella/Vortekia",
    year: "2025",
    role: "Full-Stack Developer (Individual Project)",
  },
  {
    title: "ListIt",
    description:
      "A smart grocery list mobile application developed for Software Engineering Course. Built with Android Studio (Kotlin), Firebase, and Python Flask, it offers dynamic shopping list creation and AI-powered recipe recommendations using NLP to enhance efficiency and reduce waste.",
    image: "/listit.png",
    technologies: [
      "Android Studio",
      "Kotlin",
      "Firebase",
      "Python Flask",
      "NLP",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Visella/ListIt",
    year: "2025",
    role: "Frontend Lead & AI Backend Developer",
  },
  {
    title: "AY.com",
    description:
      "A web-based social media platform for thread-based conversations, created for TPA at Binus University Software Laboratory Center. Utilizing Svelte with TypeScript, Go microservices backend with gRPC and PostgreSQL, enhanced by Redis caching and JWT-based security with Flask-powered sentiment analysis AI.",
    image: "/aycom.png",
    technologies: [
      "Svelte",
      "TypeScript",
      "Go",
      "gRPC",
      "PostgreSQL",
      "Redis",
      "Flask",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/Visella/AYcom",
    year: "2025",
    role: "Full-Stack Developer (Individual Project)",
  },
  {
    title: "RogueHH",
    description:
      "An engaging turn-based roguelike game developed for TPA at Binus University Software Laboratory Center. Built in Unity with C#, featuring procedurally generated dungeons, tile-based combat with A* pathfinding, upgradable skills, using Scriptable Objects and design patterns for optimized performance.",
    image: "/roguehh.png",
    technologies: ["Unity", "C#", "A* Pathfinding", "Scriptable Objects"],
    liveUrl: "#",
    githubUrl: "#",
    year: "2025",
    role: "Game Developer (Individual Project)",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Here are my key projects showcasing full-stack development, mobile
              apps, and game development skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-64 object-contain bg-muted group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    Project {index + 1} of 4
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.year}
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground font-medium">
                    {project.role}
                  </p>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-4 text-pretty">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.githubUrl !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          GitHub
                        </a>
                      </Button>
                    )}
                    {project.liveUrl !== "#" && (
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
