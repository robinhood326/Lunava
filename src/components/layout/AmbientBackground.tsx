/**
 * Fixed canvas behind the whole site: three slowly drifting colour blobs
 * (violet, cyan, pink) over a faint grid with soft grain. Pure CSS.
 */
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="absolute -left-[10%] -top-[18%] h-[55vmax] w-[55vmax] rounded-full bg-lunar-400/25 blur-[120px] [animation:drift_24s_ease-in-out_infinite]" />
      <div className="absolute -right-[14%] top-[4%] h-[44vmax] w-[44vmax] rounded-full bg-glow-400/25 blur-[130px] [animation:drift_30s_ease-in-out_infinite_-9s]" />
      <div className="absolute -bottom-[22%] left-[26%] h-[46vmax] w-[46vmax] rounded-full bg-pink-400/20 blur-[140px] [animation:drift_34s_ease-in-out_infinite_-16s]" />
      <div className="bg-grid mask-radial absolute inset-0 opacity-50" />
    </div>
  );
}
