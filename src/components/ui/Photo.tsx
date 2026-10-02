import { photos, type PhotoName } from "@/lib/photos";
import { cn } from "@/lib/utils";

const widths = [480, 768, 1080, 1600];

/** Build an Unsplash CDN URL; Unsplash resizes and serves modern formats itself. */
export function photoUrl(name: PhotoName, width: number, extra = "") {
  return `${photos[name].src}?auto=format&fit=crop&q=75&w=${width}${extra}`;
}

interface PhotoProps {
  name: PhotoName;
  className?: string;
  /** Rendered size hint for the browser, e.g. "(min-width: 1024px) 50vw, 100vw". */
  sizes?: string;
  priority?: boolean;
  /** Override the alt text, or pass "" when the photo is purely decorative. */
  alt?: string;
}

/**
 * A photo that fills its (relatively positioned) parent.
 *
 * A plain <img> with class-based positioning and no inline `style`.
 * `suppressHydrationWarning` is set because browser extensions (image
 * blur/filter, ad blockers, translators) often add attributes such as
 * `style="filter: blur(0px)"` to images before React hydrates. The site never
 * sets those attributes itself, so the mismatch is harmless to ignore here.
 */
export function Photo({ name, className, sizes = "(min-width: 1024px) 50vw, 100vw", priority, alt }: PhotoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photoUrl(name, 1080)}
      srcSet={widths.map((w) => `${photoUrl(name, w)} ${w}w`).join(", ")}
      sizes={sizes}
      alt={alt ?? photos[name].alt}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      suppressHydrationWarning
      className={cn("absolute inset-0 h-full w-full object-cover", className)}
    />
  );
}
