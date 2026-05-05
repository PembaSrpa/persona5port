import { useState } from "react";
import { sfxConfirm, sfxHover, sfxSlash } from "@/lib/sfx";
import jokerSilhouette from "@/assets/joker-silhouette.png";

export type MenuKey = "profile" | "palaces" | "blogs" | "contact";

interface Props {
  onSelect: (k: MenuKey) => void;
}

const items: { key: MenuKey; label: string; sub: string; icon: string }[] = [
  { key: "profile", label: "CONFIDANT", sub: "About Pemba", icon: "✦" },
  { key: "palaces", label: "PALACES", sub: "Infiltrate the projects", icon: "♛" },
  { key: "blogs", label: "MEMENTOS", sub: "Thoughts & tutorials", icon: "✎" },
  { key: "contact", label: "CALLING CARD", sub: "Send a message", icon: "✉" },
];

export const MainMenu = ({ onSelect }: Props) => {
  const [active, setActive] = useState<number>(0);

  const handlePick = (k: MenuKey, i: number) => {
    setActive(i);
    sfxSlash();
    sfxConfirm();
    setTimeout(() => onSelect(k), 600);
  };

  return (
    <div className="fixed inset-0 z-40 overflow-hidden bg-p5-black grain animate-fade-in">
      <div className="absolute inset-0 bg-rage opacity-90" />
      <div className="absolute inset-0 halftone opacity-25" />

      <div className="absolute -left-20 top-0 w-[140%] h-full">
        <div className="absolute top-[20%] left-0 w-full h-24 bg-p5-black -rotate-12 opacity-90" />
        <div className="absolute top-[55%] left-0 w-full h-3 bg-p5-bone -rotate-12 opacity-80" />
        <div className="absolute top-[70%] left-0 w-full h-32 bg-p5-red -rotate-12 opacity-60 mix-blend-multiply" />
      </div>

      <img
        src={jokerSilhouette}
        alt=""
        aria-hidden
        width={1024}
        height={1024}
        className="absolute right-[-6%] bottom-[-4%] h-[110vh] w-auto object-contain pointer-events-none drop-shadow-[12px_12px_0_hsl(var(--p5-black))] animate-drift hidden md:block"
      />

      <div className="absolute top-6 left-6 flex items-center gap-3">
        <span className="h-3 w-3 bg-p5-red pulse-red" />
        <span className="font-stencil text-p5-bone/80 tracking-[0.3em] text-xs">PEMBA // MAIN MENU</span>
      </div>

      <div className="relative h-full flex flex-col justify-center pl-6 md:pl-20 max-w-3xl">
        <h2 className="font-display text-p5-bone text-stroke text-4xl md:text-7xl mb-2 leading-none">
          WHAT WILL <span className="text-p5-red">YOU</span>
        </h2>
        <h2 className="font-display text-p5-bone text-stroke text-4xl md:text-7xl mb-8 md:mb-12 leading-none">
          DO TODAY?
        </h2>

        <ul className="space-y-3 max-w-md">
          {items.map((it, i) => {
            const isActive = active === i;
            return (
              <li
                key={it.key}
                onMouseEnter={() => { setActive(i); sfxHover(); }}
                onClick={() => handlePick(it.key, i)}
                className="cursor-pointer animate-menu-in"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className={`relative flex items-center gap-4 px-6 py-3 skew-card border-2 border-p5-black transition-all duration-150 ${
                    isActive
                      ? "bg-p5-red text-p5-bone translate-x-4 shadow-[10px_10px_0_hsl(var(--p5-black))]"
                      : "bg-p5-bone text-p5-black shadow-[6px_6px_0_hsl(var(--p5-red))]"
                  }`}
                >
                  <span className="unskew flex items-center gap-4 w-full">
                    <span className={`text-2xl ${isActive ? "text-p5-bone" : "text-p5-red"}`}>{it.icon}</span>
                    <span>
                      <span className="block font-display text-xl md:text-2xl tracking-wide">{it.label}</span>
                      <span className={`block font-stencil text-[10px] md:text-xs tracking-widest ${isActive ? "text-p5-bone/80" : "text-p5-black/60"}`}>
                        {it.sub}
                      </span>
                    </span>
                    {isActive && <span className="ml-auto font-display text-3xl">▸</span>}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex gap-6 font-stencil text-p5-bone/60 text-xs tracking-widest">
          <span>[↑↓] NAVIGATE</span>
          <span>[ENTER] SELECT</span>
        </div>
      </div>
    </div>
  );
};
