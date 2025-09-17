"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: ["React", "Svelte", "TypeScript", "Android Studio/Kotlin"],
  },
  {
    title: "Backend Development",
    skills: ["Go Microservices", "Python Flask", "PostgreSQL", "Firebase"],
  },
  {
    title: "Game & Desktop Development",
    skills: [
      "Unity & C#",
      "Rust/Tauri",
      "A* Pathfinding",
      "Procedural Generation",
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Skills & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Technical skills developed through academic projects and hands-on
              experience at Binus University.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-foreground text-center">
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <li
                        key={skillIndex}
                        className="text-sm font-medium text-foreground text-center md:text-left"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8">
              Additional Technologies
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "gRPC",
                "Redis",
                "JWT Authentication",
                "NLP",
                "Sentiment Analysis",
                "Scriptable Objects",
                "Design Patterns",
                "OOP",
                "Git/GitHub",
                "REST APIs",
                "Real-time Systems",
                "Database Design",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-card text-card-foreground rounded-lg border hover:border-primary transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
