import { ExternalLink, Github } from "lucide-react";
import p1 from "@/assets/project-1.png";
import p2 from "@/assets/project-2.png";
import p3 from "@/assets/project-3.png";

const projects = [
  {
    title: "Nexus Vault",
    desc: "Plataforma de Esport para gestion de torneos y competiciones P2P en tiempo real.",
    image: p1,
    tags: ["Next.js", "TypeScript", "Supabase", "AWS", "Node.js"],
    demo: "https://example.com",
    repo: "https://github.com",
    isDevelopment: true,
  },
  {
    title: "Nuvly",
    desc: "App web POS para cafeterias y negocios pequeños, multisucursal.",
    image: p2,
    tags: ["Next.js", "TypeScript", "Supabase"],
    demo: "https://nuvly.mx",
    repo: "https://github.com/DariethJasso/vento-front-end",
    isDevelopment: false,
  },
  {
    title: "Imperio Royale",
    desc: "Plataforma de noticias, codigos y guias para jugadores de Clash Royale.",
    image: p3,
    tags: ["Next.js", "TypeScript", "Supabase", "Google ADS"],
    demo: "https://imperio-royale-six.vercel.app",
    repo: "#",
    isDevelopment: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 font-mono text-sm text-data-point">// 03. proyectos</p>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Trabajo <span className="text-gradient">seleccionado</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Una muestra de los proyectos en los que he trabajado recientemente.
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="glow-border group flex flex-col overflow-hidden rounded-2xl bg-gradient-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-border bg-secondary/60 px-2 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {
                  p.isDevelopment ? (
                    <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                      <span className="inline-flex items-center gap-1.5 text-sm font-medium text-data-point">
                        <span className="h-2 w-2 rounded-full bg-data-point" /> En desarrollo
                      </span>
                    </div>
                  ) : (
                    <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-data-point transition-opacity hover:opacity-80"
                      >
                        <ExternalLink className="h-4 w-4" /> Demo
                      </a>
                      <a
                        href={p.repo}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-data-point"
                      >
                        <Github className="h-4 w-4" /> Código
                      </a>
                    </div>
                  )
                }
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
