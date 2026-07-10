import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const links = [
  { label: "Sobre mí", href: "#about" },
  { label: "Proyectos", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/70 backdrop-blur-xl">
      <nav className="container mx-auto flex h-16 items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2 font-mono text-sm font-semibold">
          <span className="h-2 w-2 rounded-full bg-data-point shadow-data animate-pulse-glow" />
          <span className="text-data-point">jasso.dev</span>
          <span className="text-muted-foreground">/portfolio</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-data-point"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <Button asChild size="sm" variant="outline" className="border-border bg-secondary/50 hover:bg-secondary hover:text-data-point">
          <a href="/cv.pdf" download>
            <Download className="mr-2 h-4 w-4" /> CV
          </a>
        </Button>
      </nav>
    </header>
  );
};

export default Navbar;
