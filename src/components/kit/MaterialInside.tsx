import { useEffect, useRef } from "react";
import { Cta } from "./ui";

/**
 * Seção "O material por dentro": esteira infinita (marquee) com páginas reais
 * do material. Imagens servidas de /public para funcionar em qualquer host.
 */
const pages = [
  { src: "/images/material/redacao-modelo.webp", alt: "Página do material: Redação modelo comentada" },
  { src: "/images/material/estrutura-redacao.webp", alt: "Página do material: Como construir a estrutura da redação" },
  { src: "/images/material/ideias-argumentos.webp", alt: "Página do material: Banco de ideias e argumentos" },
  { src: "/images/material/mapa-mental.webp", alt: "Página do material: Mapa mental da redação nota 1000" },
  { src: "/images/material/frases-conectivos.webp", alt: "Página do material: Frases prontas e conectivos" },
];

export function MaterialInside() {
  const trackRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    let last = performance.now();
    const speed = 34; // px por segundo

    const loop = (now: number) => {
      const dt = (now - last) / 1000;
      last = now;
      if (!pausedRef.current && !dragRef.current.active) {
        track.scrollLeft += speed * dt;
      }
      const half = track.scrollWidth / 2;
      if (half > 0 && track.scrollLeft >= half) track.scrollLeft -= half;
      if (track.scrollLeft <= 0) track.scrollLeft += half;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track) return;
    dragRef.current = { active: true, startX: e.clientX, startScroll: track.scrollLeft, moved: false };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    const track = trackRef.current;
    if (!track || !dragRef.current.active) return;
    const dx = e.clientX - dragRef.current.startX;
    if (Math.abs(dx) > 4) dragRef.current.moved = true;
    track.scrollLeft = dragRef.current.startScroll - dx;
  };

  const endDrag = () => {
    dragRef.current.active = false;
  };

  return (
    <section className="overflow-hidden bg-navy px-5 py-16 text-primary-foreground sm:py-20 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-highlight px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-navy">
            O material por dentro
          </span>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight sm:text-4xl">
            Veja como é estudar com o Kit Redação Nota 1000
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
            Conheça algumas páginas do material que você terá em mãos para estudar, consultar e revisar.
          </p>
        </div>
      </div>

      <div
        className="relative mt-10 -mx-5 md:-mx-8"
        onMouseEnter={() => (pausedRef.current = true)}
        onMouseLeave={() => {
          pausedRef.current = false;
          endDrag();
        }}
      >
        <div
          ref={trackRef}
          role="region"
          aria-label="Prévia de páginas do material"
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          className="no-scrollbar flex touch-pan-y gap-[18px] overflow-x-auto px-5 sm:gap-6 md:px-8"
          style={{ scrollBehavior: "auto", cursor: "grab" }}
        >
          {[...pages, ...pages].map((p, i) => (
            <figure
              key={`${p.src}-${i}`}
              className="m-0 w-[87vw] shrink-0 sm:w-[62vw] md:w-[520px] lg:w-[560px]"
            >
              <img
                src={p.src}
                alt={p.alt}
                width={1536}
                height={1024}
                loading={i < 2 ? "eager" : "lazy"}
                draggable={false}
                className="w-full rounded-2xl border border-white/12 bg-paper object-contain shadow-[0_18px_40px_-18px_rgba(0,0,0,0.65)]"
                style={{ aspectRatio: "1536 / 1024" }}
              />
            </figure>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-2xl text-center">
        <p className="font-display text-base font-extrabold sm:text-lg">Isso é apenas uma prévia.</p>
        <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75 sm:text-base">
          O Kit completo reúne +150 redações, +100 estruturas, +50 ideias e argumentos, frases de apoio e
          mapas mentais para seus estudos.
        </p>
        <div className="mt-7">
          <Cta size="xl">QUERO TER ACESSO AO MATERIAL</Cta>
        </div>
      </div>
    </section>
  );
}
