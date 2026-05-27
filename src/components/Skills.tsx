const skillGroups = [
  {
    title: "Creación Digital",
    items: [
      "Adobe Illustrator, Photoshop.",
      "CorelDraw.",
      "Diseño Vectorial y Preprensa.",
      "Creacion de logotipos - imagenes y banners.",
    ],
  },
  {
    title: "Producción",
    items: [
      "Conocimientos en archivos preparados para corte laser.",
      "Manejo de Plotter Impresion - Plotter de corte.",
      "Ajuste y creacion de artes para DTF y sublimacion .",
      "Armado y acabados en MDF / Acrílico.",
    ],
  },
  {
    title: "Tecnología y Soporte",
    items: [
      "Desarrollo web frontend (Next.js, Tailwind, SQL).",
      "Mantenimiento de hardware y redes.",
      "Capacidad de trabajo en equipo y bajo presion.",
      "Escucha Activa: Interpretación exacta de requerimientos del cliente."
    ],
  },
];

export function Skills() {
  return (
    <section id="habilidades" className="py-16 md:py-24 px-6 md:px-16 lg:px-24 bg-[#0a0a0b] border-t border-zinc-800/80">
      <div className="max-w-5xl mx-auto">
        <p className="text-brand text-xs font-semibold tracking-[0.2em] uppercase mb-3">
          Skills
        </p>
        <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-white mb-10">
          Fortalezas
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="border border-zinc-800 bg-[#0f0f10] p-6 md:p-7"
            >
              <h3 className="font-display text-sm uppercase tracking-wide text-brand mb-5 pb-3 border-b border-zinc-800">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-zinc-300 font-sans leading-snug"
                  >
                    <span className="text-brand mt-0.5 shrink-0" aria-hidden>
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
