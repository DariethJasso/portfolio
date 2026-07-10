import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/portrait.jpeg";

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-accent-glow/20 blur-3xl animate-float-slow" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-data-point/15 blur-3xl animate-float-slow" style={{ animationDelay: "2s" }} />

      <div className="container relative mx-auto grid items-center gap-16 px-6 py-24 md:py-32 lg:grid-cols-[1.2fr_1fr]">
        <div className="animate-fade-up">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 font-mono text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-data-point animate-pulse-glow" />
            <span className="text-muted-foreground">Disponible para nuevos proyectos</span>
          </div>

          <h1 className="text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
            Construyo experiencias digitales con{" "}
            <span className="text-gradient">código limpio</span> y diseño preciso.
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Soy Darieth Jasso, ingeniero de software full-stack con foco en aplicaciones web y app moviles
            modernas, performantes y accesibles. Especializado en React, Node.js y la nube. Manejo de equipos y liderazgo.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="bg-gradient-brand text-primary-foreground shadow-glow hover:opacity-90">
              <a href="#projects">
                Ver proyectos <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border bg-secondary/40 hover:bg-secondary">
              <a href="#contact">Contactar</a>
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-5 text-muted-foreground">
            <a href="https://github.com/DariethJasso" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition-colors hover:text-data-point">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/dariethjasso" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-data-point">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:jasso.darieth08@gmail.com" aria-label="Email" className="transition-colors hover:text-data-point">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-30 blur-2xl" />
          <div className="glow-border relative overflow-hidden rounded-2xl bg-gradient-card shadow-card">
            <img
              src={portrait}
              alt="Retrato de Darieth Jasso, ingeniero de software"
              width={800}
              height={800}
              className="aspect-square w-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-border bg-background/70 p-3 backdrop-blur-md">
              <div className="font-mono text-xs">
                <div className="text-data-point">$ status</div>
                <div className="text-muted-foreground">building &amp; shipping</div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-data-point animate-pulse-glow" />
                <span className="font-mono text-xs text-foreground">online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
