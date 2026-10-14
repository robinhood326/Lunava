/**
 * Fixed "midnight aurora" canvas behind the whole site: two slow-drifting
 * violet/cyan glows, a faint engineering grid and film grain.
 * Pure CSS — no JavaScript, no images.
 */
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute -left-[12%] -top-[22%] h-[60vmax] w-[60vmax] animate-aurora rounded-full bg-lunar-600/30 blur-[140px]" />
      <div className="absolute -right-[16%] top-[2%] h-[46vmax] w-[46vmax] animate-aurora rounded-full bg-glow-400/15 blur-[150px] [animation-delay:-9s]" />
      <div className="absolute -bottom-[26%] left-[22%] h-[48vmax] w-[48vmax] animate-aurora rounded-full bg-lunar-500/15 blur-[160px] [animation-delay:-15s]" />
      <div className="bg-grid mask-radial absolute inset-0" />
    </div>
  );
}
