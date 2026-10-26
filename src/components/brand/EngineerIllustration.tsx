import { cn } from "@/lib/utils";

export interface Engineer {
  skin: string;
  hair: string;
  shirt: string;
  /** "short" | "long" | "curly" */
  style: "short" | "long" | "curly";
  glasses?: boolean;
  label: string;
}

export const engineers: Engineer[] = [
  { skin: "#c68a5e", hair: "#1c1410", shirt: "#6c63f0", style: "short", glasses: true, label: "Backend engineer" },
  { skin: "#8d5a3b", hair: "#120c09", shirt: "#4bb6ea", style: "curly", label: "Full-stack engineer" },
  { skin: "#e0ac84", hair: "#4a2c1a", shirt: "#8f87f8", style: "long", glasses: true, label: "Data engineer" },
];

/** Original flat illustration of an engineer at a laptop. Decorative; not a real person. */
export function EngineerIllustration({ engineer, className, idPrefix }: { engineer: Engineer; className?: string; idPrefix: string }) {
  const { skin, hair, shirt, style, glasses } = engineer;
  const bg = `${idPrefix}-bg`;
  return (
    <svg viewBox="0 0 240 280" fill="none" aria-hidden="true" className={cn("h-auto w-full", className)}>
      <defs>
        <linearGradient id={bg} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#6c63f0" stopOpacity="0.28" />
          <stop offset="1" stopColor="#4bb6ea" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <rect width="240" height="280" rx="28" fill={`url(#${bg})`} />
      <circle cx="120" cy="108" r="78" fill="#ffffff" opacity="0.05" />

      {/* back hair */}
      {style === "long" && <path d="M78 104c0-38 20-56 42-56s42 18 42 56v52H78z" fill={hair} />}

      {/* shoulders */}
      <path d="M52 232c0-38 28-62 68-62s68 24 68 62v6H52z" fill={shirt} />
      {/* neck */}
      <rect x="107" y="144" width="26" height="30" rx="10" fill={skin} />
      <path d="M107 160c8 8 18 8 26 0v-6h-26z" fill="#000" opacity="0.1" />
      {/* head */}
      <ellipse cx="120" cy="108" rx="34" ry="38" fill={skin} />
      {/* ears */}
      <circle cx="86" cy="112" r="6" fill={skin} />
      <circle cx="154" cy="112" r="6" fill={skin} />

      {/* hair */}
      {style === "short" && <path d="M84 100c-2-30 16-46 38-46 24 0 40 16 36 46-10-14-22-20-38-20s-28 6-36 20z" fill={hair} />}
      {style === "curly" && (
        <g fill={hair}>
          <circle cx="92" cy="78" r="16" />
          <circle cx="110" cy="68" r="17" />
          <circle cx="132" cy="68" r="17" />
          <circle cx="150" cy="80" r="15" />
          <circle cx="86" cy="96" r="10" />
          <circle cx="156" cy="96" r="10" />
        </g>
      )}
      {style === "long" && <path d="M84 104c-2-30 14-46 38-46s40 14 36 46c-8-16-20-24-36-24s-28 8-38 24z" fill={hair} />}

      {/* face */}
      <circle cx="107" cy="112" r="3" fill="#1b1220" />
      <circle cx="133" cy="112" r="3" fill="#1b1220" />
      <path d="M109 128c6 6 16 6 22 0" stroke="#1b1220" strokeWidth="2.6" strokeLinecap="round" />
      {glasses && (
        <g stroke="#1b1220" strokeWidth="2.4">
          <rect x="94" y="102" width="26" height="20" rx="8" />
          <rect x="120" y="102" width="26" height="20" rx="8" />
          <path d="M120 111h0" />
        </g>
      )}

      {/* laptop */}
      <path d="M58 236h124l10 20H48z" fill="#2a2f45" />
      <rect x="66" y="194" width="108" height="46" rx="6" fill="#1b2033" stroke="#8f87f8" strokeOpacity="0.5" />
      <circle cx="120" cy="217" r="6" fill="#8f87f8" opacity="0.7" />
      <path d="M76 204h22M76 212h14" stroke="#4bb6ea" strokeOpacity="0.6" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
