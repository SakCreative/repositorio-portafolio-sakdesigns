export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-dark/95 backdrop-blur-sm">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex items-center">
          <img
            src="/logo.png"
            alt="SAK Designs"
            className="h-6 md:h-7 w-auto"
            loading="eager"
            decoding="async"
          />
        </a>
        <div className="flex items-center gap-6 text-xs font-medium uppercase tracking-wider text-zinc-400">
          <a href="#trabajos" className="hover:text-brand transition-colors">
            Trabajos
          </a>
          <a href="#habilidades" className="hover:text-brand transition-colors">
            Habilidades
          </a>
          <a href="#contacto" className="hover:text-brand transition-colors">
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
