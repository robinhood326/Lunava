import { ArrowDownRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/primitives";

const facts = [
  { k: "Who", v: "Software engineers based in Latin America" },
  { k: "What", v: "Remote roles with companies in the United States" },
  { k: "How", v: "Matching, résumé, interview and offer coaching" },
];

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="relative isolate">
      <Container className="relative pb-16 pt-32 sm:pt-40 lg:pb-24">
        <div className="flex items-center justify-between border-b border-fg/20 pb-3 font-mono text-xs uppercase tracking-[0.16em] text-muted">
          <span>Lunava / Remote engineering consultancy</span>
          <span className="hidden sm:inline">Latin America → United States</span>
        </div>

        <h1 id="hero-heading" className="display mt-10 text-balance text-[clamp(3.4rem,12.5vw,12rem)] sm:mt-14">
          Aim higher,
          <br />
          <span className="text-gradient">from where</span> you live.
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="max-w-md text-pretty text-xl leading-snug text-fg sm:text-2xl">
              Lunava is a remote software engineer consultancy. We help LATAM-based developers find, prepare for and land remote roles
              with U.S. companies.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg" arrow>
                Get matched
              </Button>
              <Button href="/opportunities" size="lg" variant="secondary">
                Explore roles
              </Button>
            </div>
          </div>

          <dl className="grid grid-cols-1 border-t border-fg lg:col-span-4 lg:col-start-7">
            {facts.map((f) => (
              <div key={f.k} className="grid grid-cols-[5rem_1fr] gap-4 border-b border-fg/20 py-4">
                <dt className="font-mono text-xs uppercase tracking-[0.16em] text-dim">{f.k}</dt>
                <dd className="text-[0.98rem] leading-snug text-fg">{f.v}</dd>
              </div>
            ))}
          </dl>

          <a href="#roles" aria-label="Scroll to roles" className="hidden items-end justify-end lg:col-span-1 lg:flex">
            <ArrowDownRight className="h-10 w-10 text-fg transition-transform hover:translate-x-1 hover:translate-y-1" strokeWidth={1.25} />
          </a>
        </div>

        <figure className="mt-16 sm:mt-24">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/video-call.jpg"
            alt="A person on a video call with a distributed team"
            width={1000}
            height={667}
            className="aspect-[16/8] w-full object-cover grayscale transition-[filter] duration-700 hover:grayscale-0"
            style={{ objectPosition: "40% 45%" }}
          />
          <figcaption className="mt-3 flex justify-between font-mono text-xs uppercase tracking-[0.14em] text-dim">
            <span>Fig. 01. Live with U.S. teams</span>
            <span>Stock photo, Unsplash</span>
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
