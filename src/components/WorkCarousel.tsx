import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { works } from "../data/works";

export function WorkCarousel() {
  const [index, setIndex] = useState(0);
  const total = works.length;
  const work = works[index];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  if (!work) return null;

  return (
    <section id="trabajos" className="py-20 md:py-28 px-6 md:px-16 lg:px-24 border-t border-zinc-800/80">
      <div className="max-w-4xl mx-auto">
        <p className="text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Portafolio
        </p>
        <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-white mb-10">
          Trabajos seleccionados
        </h2>

        <div className="border border-zinc-800 bg-[#0f0f10] overflow-hidden">
          <div className="aspect-[16/10] bg-zinc-900 overflow-hidden">
            <img
              src={work.image}
              alt={work.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 md:p-8 flex flex-col min-h-[260px]">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-4">
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
                  {work.category}
                </p>
                <h3 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-white">
                  {work.title}
                </h3>
              </div>
              <span className="text-sm text-zinc-600 font-sans tabular-nums">
                {index + 1} / {total}
              </span>
            </div>

            <p className="text-zinc-400 text-sm md:text-base leading-relaxed font-sans max-w-2xl flex-1">
              {work.description}
            </p>

            <div className="mt-8 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={prev}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm uppercase tracking-wider border border-zinc-700 text-zinc-300 hover:border-brand hover:text-brand transition-colors"
                aria-label="Trabajo anterior"
              >
                <ChevronLeft className="w-4 h-4" />
                Anterior
              </button>
              <button
                type="button"
                onClick={next}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm uppercase tracking-wider border border-zinc-700 text-zinc-300 hover:border-brand hover:text-brand transition-colors"
                aria-label="Siguiente trabajo"
              >
                Siguiente
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
