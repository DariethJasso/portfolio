const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 text-sm text-muted-foreground md:flex-row">
        <p className="font-mono">© {new Date().getFullYear()} Darieth Jasso. Hecho con código y café.</p>
        <p className="font-mono text-xs">
          <span className="text-data-point">$</span> built with React + Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
