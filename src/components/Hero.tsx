const PROFILE_IMAGE = "/profile.png";
const PROFILE_FALLBACK =
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800";

export function Hero() {
  return (
    <section
      id="inicio"
      className="min-h-[85vh] px-6 md:px-16 lg:px-24 pt-28 pb-16 bg-dark bg-gradients-premium"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_minmax(240px,320px)] gap-12 md:gap-16 items-center">
        <div>
          <p className="text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-4">
            PORTAFOLIO DISEÑO - PRODUCCION GRAFICA
          </p>
          <h1 className="font-display text-[3.2rem] md:text-[5rem] lg:text-[6.2rem] leading-[0.9] uppercase tracking-tighter mb-6 text-white">
            SERGIO <br />
            <span className="text-transparent text-stroke-2">CAMACHO.</span>
          </h1>
          <p className="text-zinc-300 font-sans text-sm md:text-base leading-relaxed mb-8 max-w-2xl">
            Diseñador gráfico con más de 10 años de experiencia, especializado en el ciclo
            completo de la producción publicitaria: desde la conceptualización digital hasta la
            manufactura física. Dominio avanzado de software vectorial (Illustrator, CorelDraw) y
            preparación técnica de archivos para maquinaria industrial (Corte Láser CO2, Plotter,
            Sublimación y DTF). Destaco por mi habilidad en el armado de productos en MDF y
            acrílico, combinando precisión artesanal con eficiencia técnica. Complemento mi perfil
            con sólidos conocimientos en desarrollo frontend y mantenimiento de hardware,
            aportando soluciones integrales a los retos técnicos del taller.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#trabajos"
              className="inline-block bg-brand text-[#050505] px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:bg-white transition-colors"
            >
              Ver trabajos
            </a>
            <a
              href="#habilidades"
              className="inline-block border border-zinc-700 text-zinc-300 px-6 py-3 text-sm font-semibold uppercase tracking-wider hover:border-brand hover:text-brand transition-colors"
            >
              Habilidades
            </a>
          </div>
        </div>

        {/* Marco / frame para foto */}
        <div className="relative mx-auto w-full max-w-[320px] md:max-w-none">
          <div
            className="absolute -inset-10 bg-[radial-gradient(circle_at_30%_25%,rgba(204,255,0,0.10),transparent_55%)] pointer-events-none"
            aria-hidden
          />
          <div
            className="absolute -inset-3 border border-brand/25 bg-gradient-to-br from-zinc-800/40 via-zinc-900/20 to-transparent pointer-events-none"
            aria-hidden
          />
          <div className="relative border border-zinc-700 bg-gradient-to-b from-zinc-800/50 to-zinc-950 p-3 shadow-[0_24px_48px_rgba(0,0,0,0.45)]">
            <div className="aspect-[4/5] overflow-hidden border border-zinc-800 bg-zinc-900">
              <img
                src={PROFILE_IMAGE}
                alt="Sergio Camacho"
                className="w-full h-full object-cover contrast-110 saturate-105 transition-all duration-500"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (img.src !== PROFILE_FALLBACK) img.src = PROFILE_FALLBACK;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
