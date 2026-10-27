/**
 * Fixed paper canvas behind the whole site: warm off-white with a very faint
 * grid and print grain. Pure CSS: no JavaScript, no images.
 */
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="grain pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      <div className="bg-grid mask-radial absolute inset-0 opacity-60" />
    </div>
  );
}
