import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

const contacts = [
  { icon: Mail, label: "jasso.darieth08@gmail.com", href: "mailto:jasso.darieth08@gmail.com" },
  { icon: Github, label: "github.com/DariethJasso", href: "https://github.com/DariethJasso" },
  { icon: Linkedin, label: "linkedin.com/in/dariethjasso", href: "https://linkedin.com/in/dariethjasso" }
];

const Contact = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-6">
        <div className="glow-border relative overflow-hidden rounded-3xl bg-gradient-card p-10 shadow-card md:p-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent-glow/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-data-point/15 blur-3xl" />

          <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="mb-3 font-mono text-sm text-data-point">// 04. contacto</p>
              <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
                ¿Tienes una idea?{" "}
                <span className="text-gradient">Hablemos.</span>
              </h2>
              <p className="mt-5 max-w-md text-lg text-muted-foreground">
                Estoy abierto a colaboraciones, proyectos freelance y oportunidades full-time.
                Respondo en menos de 24 horas.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 bg-gradient-brand text-primary-foreground shadow-glow hover:opacity-90"
              >
                <a href="mailto:hello@jasso.darieth08@gmail.com">
                  Enviar un mensaje <ArrowUpRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            <ul className="space-y-3">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-border bg-background/60 px-5 py-4 backdrop-blur-md transition-all hover:border-data-point/50 hover:bg-background"
                  >
                    <span className="flex items-center gap-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary text-data-point">
                        <c.icon className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-sm">{c.label}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-data-point" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
