import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const stats = [
  { label: "Años de experiencia", value: "4+" },
  { label: "Proyectos entregados", value: "2+" },
  { label: "Clientes satisfechos", value: "2+" },
  { label: "Stacks dominados", value: "10+" },
];

const timeline = [
  {
    icon: Briefcase,
    title: "Founder & Lead Developer",
    place: "Nexus Vault · Abril 2026 — Presente",
    desc: "Lidero el desarrollo de plataformas SaaS escalables con React, Node.js y AWS.",
  },
  {
    icon: Briefcase,
    title: "Full-Stack Developer",
    place: "Wallavi · Enero 2024 — Abril 2026",
    desc: "Construí dashboards de analítica en tiempo real y APIs REST/GraphQL.",
  },
  {
    icon: Briefcase,
    title: "Desarrollo Mobile",
    place: "Don Lauro · Mayo 2022 — Agosto 2024",
    desc: "Desarrollé aplicaciones móviles con Xamarin y Firebase para restaurante",
  },
  {
    icon: GraduationCap,
    title: "Ingeniería en Desarrollo y Gestión de Software",
    place: "Universidad Tecnológica de Nayarit · 2019 — 2024",
    desc: "Especialización en desarrollo de software y gestión de proyectos.",
  },
];

const About = () => {
  return (
    <section id="about" className="relative py-12">
      <div className="container mx-auto px-6">
        <div className="mb-16 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-data-point">// 01. sobre-mí</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Un ingeniero <span className="text-gradient">obsesionado</span> con los detalles.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Combino experiencia en frontend y backend para crear productos completos:
            desde la arquitectura hasta el último píxel.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-data-point" /> Ciudad de México</span>
            <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-data-point" /> 4+ años de experiencia</span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <div className="grid grid-cols-2 gap-4 self-start">
            {stats.map((s) => (
              <div key={s.label} className="rounded-xl border border-border bg-gradient-card p-6 shadow-card">
                <div className="text-3xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>

          <ol className="relative space-y-8 border-l border-border pl-8">
            {timeline.map((t, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background shadow-data">
                  <t.icon className="h-4 w-4 text-data-point" />
                </span>
                <h3 className="text-lg font-semibold">{t.title}</h3>
                <p className="font-mono text-xs text-data-point">{t.place}</p>
                <p className="mt-2 text-muted-foreground">{t.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default About;
