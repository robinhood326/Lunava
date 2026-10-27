import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/primitives";

const cities = [
  { src: "/images/sao-paulo.jpg", alt: "Aerial view of the São Paulo skyline and river", label: "São Paulo", note: "UTC−3", className: "lg:col-span-3", position: "50% 40%" },
  { src: "/images/bogota-sunset.jpg", alt: "Sunset over the rooftops of Bogotá", label: "Bogotá", note: "UTC−5", className: "lg:col-span-2", position: "50% 40%" },
];

/** Two city photos: where the talent is. Stock photography. */
export function CitiesBand() {
  return (
    <section aria-label="Cities across Latin America" className="pb-16 sm:pb-24">
      <Container>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-5">
          {cities.map((c, i) => (
            <Reveal key={c.label} delay={i * 100} className={`group relative overflow-hidden rounded-[2rem] border border-fg/10 shadow-[var(--shadow-lift)] ${c.className}`}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={c.src}
                alt={c.alt}
                width={1400}
                height={900}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.05] lg:aspect-auto lg:h-[26rem]"
                style={{ objectPosition: c.position }}
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-6 flex items-baseline gap-3 text-white">
                <span className="text-2xl font-semibold tracking-[-0.03em] sm:text-3xl">{c.label}</span>
                <span className="font-mono text-xs text-white/75">{c.note}</span>
              </p>
            </Reveal>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-dim">
          Stock photos via{" "}
          <a href="https://unsplash.com" className="underline hover:text-fg">
            Unsplash
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
