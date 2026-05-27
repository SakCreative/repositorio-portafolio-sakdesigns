export function Footer() {
  return (
    <footer id="contacto" className="py-16 px-6 md:px-16 lg:px-24 border-t border-zinc-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-2xl uppercase tracking-tight text-white mb-6">
          Contacto
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm font-sans">
          <a
            href="mailto:camachoser182@gmail.com"
            className="text-brand hover:text-white transition-colors"
          >
            camachoser182@gmail.com
          </a>
          <a
            href="https://wa.me/573177493600?text=Hola%20Sergio%20He%20visto%20tu%20portafolio%20y%20me%20gustaria%20contactarte"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-brand transition-colors"
          >
            WhatsApp
          </a>
        </div>
        <p className="mt-10 text-xs text-zinc-600 uppercase tracking-widest">
          © {new Date().getFullYear()} Sergio Camacho · Boyacá, COL
        </p>
      </div>
    </footer>
  );
}
