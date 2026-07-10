const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Drizzle", "SQL", "Serverless"],
  },
  {
    title: "DevOps & Cloud",
    items: ["AWS", "GitHub Actions", "Vercel", "Supabase", "Google Cloud", "CI/CD"],
  },
  {
    title: "Herramientas",
    items: ["Git", "Figma", "Postman", "ClickUp", "Notion", "VS Code", "GitHub"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative py-12">
      <div className="container mx-auto px-6">
        <div className="mb-12 max-w-2xl">
          <p className="mb-3 font-mono text-sm text-data-point">// 02. skills</p>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            Stack <span className="text-gradient">técnico</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tecnologías con las que trabajo a diario para construir productos sólidos.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {groups.map((g) => (
            <div key={g.title} className="glow-border rounded-xl bg-gradient-card p-6 shadow-card transition-transform hover:-translate-y-1">
              <h3 className="mb-4 font-mono text-sm text-data-point">{g.title}</h3>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="h-1 w-1 rounded-full bg-data-point" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
