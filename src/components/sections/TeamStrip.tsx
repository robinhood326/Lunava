import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/primitives";
import { cn } from "@/lib/utils";

const photos = [
  {
    src: "/images/video-call.jpg",
    alt: "A person on a video call with a distributed team",
    label: "Live with U.S. teams",
    position: "40% 50%",
    className: "sm:col-span-2 sm:row-span-2",
    ratio: "",
  },
  {
    src: "/images/home-office.jpg",
    alt: "A software engineer working at a bright home office desk",
    label: "Your desk, your hours",
    position: "50% 40%",
    className: "",
    ratio: "",
  },
  {
    src: "/images/desk.jpg",
    alt: "Hands typing on a laptop beside a window and a plant",
    label: "Focus time",
    position: "50% 55%",
    className: "",
    ratio: "",
  },
];

/** Bento of stock photos of people working remotely. Illustrative: they are not Lunava clients. */
export function TeamStrip() {
  return (
    <section aria-label="Photos of people working remotely" className="pb-16 sm:pb-24">
      <Container>
        <ul className="grid grid-cols-1 gap-4 sm:auto-rows-[15rem] sm:grid-cols-3">
          {photos.map((p, i) => (
            <li key={p.src} className={cn("min-h-0 aspect-[4/3] sm:aspect-auto", p.className)}>
              <Reveal delay={i * 80} className="group relative h-full overflow-hidden border border-fg/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  width={1000}
                  height={750}
                  loading="lazy"
                  decoding="async"
                  className={cn("h-full w-full object-cover grayscale transition-[filter,transform] duration-700 group-hover:scale-[1.03] group-hover:grayscale-0", p.ratio)}
                  style={{ objectPosition: p.position }}
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <p className="absolute bottom-4 left-5 font-mono text-xs uppercase tracking-[0.14em] text-white">{p.label}</p>
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
