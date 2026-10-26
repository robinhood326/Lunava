import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/primitives";

const photos = [
  { src: "/images/engineer-coding.jpg", alt: "A software engineer working at a monitor full of code", label: "Remote engineering", position: "50% 30%" },
  { src: "/images/engineer-desk.jpg", alt: "A software engineer concentrating at his desk", label: "Focused delivery", position: "50% 25%" },
  { src: "/images/engineer-portrait.jpg", alt: "Portrait of a smiling bearded man against a blue background", label: "Working with U.S. teams", position: "50% 30%" },
];

/** Row of stock photos of people working in tech. Illustrative: they are not Lunava clients. */
export function TeamStrip() {
  return (
    <section aria-label="Photos of software engineers at work" className="pb-16 sm:pb-24">
      <Container>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {photos.map((p, i) => (
            <li key={p.src}>
              <Reveal delay={i * 80} className="glass overflow-hidden rounded-[1.5rem] p-2">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/5] w-full rounded-[1.1rem] object-cover"
                  style={{ objectPosition: p.position }}
                />
                <p className="px-2 pb-2 pt-3 font-mono text-xs uppercase tracking-[0.14em] text-dim">{p.label}</p>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-dim">
          Stock photos via{" "}
          <a href="https://unsplash.com" className="underline hover:text-fg">
            Unsplash
          </a>
          . The people shown are not Lunava clients.
        </p>
      </Container>
    </section>
  );
}
