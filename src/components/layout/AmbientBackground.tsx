/**
 * Soft, blurred pastel color fields fixed behind the whole site. Translucent
 * sections and frosted-glass cards let these show through, giving the calm,
 * "smart and comfortable" atmosphere of the brand.
 */
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-paper">
      <div className="absolute -left-[10%] -top-[15%] h-[55vmax] w-[55vmax] animate-gradient rounded-full bg-mist-lavender blur-[110px]" />
      <div className="absolute -right-[12%] top-[5%] h-[45vmax] w-[45vmax] animate-gradient rounded-full bg-mist-sky blur-[110px] [animation-delay:-6s]" />
      <div className="absolute -bottom-[20%] left-[10%] h-[45vmax] w-[45vmax] animate-gradient rounded-full bg-mist-mint blur-[120px] [animation-delay:-12s]" />
      <div className="absolute -bottom-[15%] -right-[5%] h-[38vmax] w-[38vmax] animate-gradient rounded-full bg-mist-peach blur-[120px] [animation-delay:-3s]" />
    </div>
  );
}
