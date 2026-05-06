import { sfxConfirm, sfxHover, sfxSlash } from "@/lib/sfx";
import { BackButton } from "./BackButton";

interface Props { onBack: () => void }

const portals = [
  {
    key: "professional",
    label: "BE PROFESSIONAL",
    sub: "Enter the main portfolio",
    tag: "ARTTFOLIO",
    icon: "💼",
    url: "https://artt-folio.vercel.app/",
    color: "bg-p5-bone text-p5-black",
    shadow: "shadow-[6px_6px_0_hsl(var(--p5-red))]",
    tagBg: "bg-p5-black text-p5-bone",
    accent: "text-p5-red",
  },
  {
    key: "mustdie",
    label: "YOU MUST DIE",
    sub: "Memento Mori — remember your end",
    tag: "MEMENTO",
    icon: "💀",
    url: "https://memento-mori-jet.vercel.app/",
    color: "bg-p5-red text-p5-bone",
    shadow: "shadow-[6px_6px_0_hsl(var(--p5-black))]",
    tagBg: "bg-p5-bone text-p5-black",
    accent: "text-p5-bone",
  },
];

export const BlogsView = ({ onBack }: Props) => {
  const handlePortal = (url: string) => {
    sfxSlash();
    sfxConfirm();
    setTimeout(() => window.open(url, "_blank", "noopener,noreferrer"), 400);
  };

  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-p5-black grain animate-fade-in">
      <div className="absolute inset-0 bg-rage opacity-85" />
      <div className="absolute inset-0 halftone-red opacity-20" />
      <div className="absolute top-0 left-0 w-full h-3 bg-p5-bone -skew-y-1 origin-top-left" />

      <BackButton onBack={onBack} />

      <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16 min-h-screen flex flex-col justify-center">
        <div className="inline-flex items-center gap-3 bg-p5-red text-p5-bone px-4 py-1 skew-card mb-4 animate-slide-up">
          <span className="unskew font-stencil text-xs tracking-widest">▶ PORTALS · CHOOSE YOUR FATE</span>
        </div>

        <h1 className="font-display text-p5-bone text-stroke text-4xl md:text-7xl leading-none mb-2 animate-scale-in">
          WHERE WILL <span className="text-p5-red">YOU</span>
        </h1>
        <h1 className="font-display text-p5-bone text-stroke text-4xl md:text-7xl leading-none mb-10 animate-scale-in">
          GO NOW?
        </h1>

        <div className="grid sm:grid-cols-2 gap-6">
          {portals.map((p, i) => (
            <button
              key={p.key}
              onClick={() => handlePortal(p.url)}
              onMouseEnter={() => sfxHover()}
              className="text-left animate-slide-up group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`relative h-full ${p.color} p-8 skew-card border-2 border-p5-black ${p.shadow} transition-all duration-150 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0_hsl(var(--p5-black))]`}>
                <div className={`absolute top-0 right-0 ${p.tagBg} font-stencil text-[10px] tracking-widest px-3 py-1`}>
                  {p.tag}
                </div>
                <div className="unskew">
                  <div className="text-5xl mb-4">{p.icon}</div>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight mb-3">{p.label}</h3>
                  <p className={`font-stencil text-xs tracking-widest leading-relaxed opacity-80`}>{p.sub}</p>
                  <p className={`mt-6 font-display ${p.accent} text-sm tracking-wider`}>ENTER ▸</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        <p className="mt-10 font-stencil text-p5-bone/40 text-xs tracking-widest text-center animate-fade-in">
          BOTH WORLDS AWAIT · CHOOSE WISELY
        </p>
      </div>
    </div>
  );
};
