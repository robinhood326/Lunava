import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/primitives";

/** Wide rounded photo with a caption. Stock photography: the people shown are not Lunava clients. */
export function PhotoBanner({
  src,
  alt,
  caption,
  position = "50% 50%",
}: {
  src: string;
  alt: string;
  caption: string;
  position?: string;
}) {
  return (
    <section aria-label={alt} className="pb-16 sm:pb-24">
      <Container>
        <Reveal className="group relative overflow-hidden rounded-[2rem] border border-fg/10 shadow-[var(--shadow-lift)] sm:rounded-[2.5rem]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src}
            alt={alt}
            width={1400}
            height={800}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.03] sm:aspect-[16/7]"
            style={{ objectPosition: position }}
          />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <p className="absolute bottom-4 left-5 max-w-md text-lg font-medium text-white sm:bottom-7 sm:left-8 sm:text-2xl">{caption}</p>
        </Reveal>
        <p className="mt-3 text-center text-xs text-dim">
          Stock photo via{" "}
          <a href="https://unsplash.com" className="underline hover:text-fg">
            Unsplash
          </a>
          . The people shown are not Lunava clients.
        </p>
      </Container>
    </section>
  );
}
