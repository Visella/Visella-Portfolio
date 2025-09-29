import { Card, CardContent } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Computer Science Student at Binus University, passionate about
              creating innovative solutions through technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Full-Stack Development
                </h4>
                <p className="text-muted-foreground text-pretty">
                  Experienced in React, Svelte, Go microservices, and database
                  design with modern development practices.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Palette className="w-8 h-8 text-secondary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Mobile & Desktop Apps
                </h4>
                <p className="text-muted-foreground text-pretty">
                  Building native Android applications and cross-platform
                  desktop apps using modern frameworks.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Game Development
                </h4>
                <p className="text-muted-foreground text-pretty">
                  Creating engaging games with Unity and C#, implementing
                  complex systems like AI pathfinding and procedural generation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
