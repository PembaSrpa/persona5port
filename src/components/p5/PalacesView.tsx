import { useState } from "react";
import { sfxConfirm, sfxHover, sfxSlash } from "@/lib/sfx";
import { BackButton } from "./BackButton";

interface Props { onBack: () => void }

interface Palace {
  id: string;
  name: string;
  ruler: string;
  distortion: string;
  treasure: string;
  difficulty: number;
  tags: string[];
  arcana: string;
  group: "core" | "other";
  link?: string;
}

const palaces: Palace[] = [
  {
    id: "annapurna",
    name: "ANNAPURNA MOBILE CARE",
    ruler: "Inventory & Admin Dashboard",
    distortion: "Full-stack inventory and admin dashboard with secure authentication. Real-time stock, sales, and access control built for a mobile retail business.",
    treasure: "MERN · JWT Auth · Tailwind",
    difficulty: 5,
    tags: ["FULL-STACK", "DASHBOARD"],
    arcana: "EMPEROR",
    group: "core",
  },
  {
    id: "expense",
    name: "SMART EXPENSE TRACKER",
    ruler: "Cloud-Native Financial Analytics API",
    distortion: "A cloud-native API that ingests transactions and surfaces financial analytics — categorization, trends, and budgets at scale.",
    treasure: "Python · FastAPI · PostgreSQL · Cloud",
    difficulty: 4,
    tags: ["API", "ANALYTICS"],
    arcana: "FORTUNE",
    group: "core",
  },
  {
    id: "portfolio",
    name: "PERSONAL PORTFOLIO",
    ruler: "Next.js, React & Tailwind CSS",
    distortion: "A personal portfolio site built with Next.js, React, and Tailwind. Clean, fast, and content-driven.",
    treasure: "Next.js · React · Tailwind",
    difficulty: 3,
    tags: ["WEB", "PORTFOLIO"],
    arcana: "STAR",
    group: "core",
    link: "https://artt-folio.vercel.app/",
  },
  {
    id: "movie",
    name: "MOVIE MARKET INSIGHTS",
    ruler: "Excel Interactive Dashboard",
    distortion: "An interactive Excel dashboard analyzing movie market trends — genres, revenue, and ratings explored through dynamic pivots and charts.",
    treasure: "Excel · Pivot Tables · Power Query",
    difficulty: 3,
    tags: ["EXCEL", "DASHBOARD"],
    arcana: "EMPRESS",
    group: "core",
  },
  {
    id: "memento",
    name: "MEMENTOMORI",
    ruler: "Remember you must die",
    distortion: "A meditative web experience reminding the visitor of life's fragility. Minimal, atmospheric, contemplative.",
    treasure: "React · Motion · Vercel",
    difficulty: 3,
    tags: ["WEB", "EXPERIMENT"],
    arcana: "DEATH",
    group: "other",
    link: "https://memento-mori-jet.vercel.app/",
  },
  {
    id: "phish",
    name: "PHISHING DETECTION",
    ruler: "ML-Powered Cybersecurity Solution",
    distortion: "A machine learning model that classifies URLs as phishing or legitimate, packaged as a usable tool for end users.",
    treasure: "Python · Scikit-learn · Pandas",
    difficulty: 4,
    tags: ["ML", "SECURITY"],
    arcana: "JUDGEMENT",
    group: "other",
  },
  {
    id: "drivetime",
    name: "DRIVETIME",
    ruler: "ML-Powered Travel Estimator API",
    distortion: "An API estimating vehicle travel times using ML on historical traffic and route features.",
    treasure: "Python · ML · REST API",
    difficulty: 4,
    tags: ["ML", "API"],
    arcana: "CHARIOT",
    group: "other",
  },
];

const stack = [
  "Python", "Excel", "SQL", "Tableau", "Pandas", "NumPy", "Matplotlib",
  "Scikit-learn", "Git", "MySQL", "PostgreSQL", "Next.js",
];

export const PalacesView = ({ onBack }: Props) => {
  const [selected, setSelected] = useState<Palace | null>(null);

  const open = (p: Palace) => { sfxSlash(); sfxConfirm(); setSelected(p); };
  const close = () => { sfxHover(); setSelected(null); };

  const core = palaces.filter(p => p.group === "core");
  const other = palaces.filter(p => p.group === "other");

  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-p5-black grain animate-fade-in">
      <div className="absolute inset-0 bg-rage opacity-85" />
      <div className="absolute inset-0 halftone opacity-20" />

      <div className="absolute top-0 left-0 w-full h-10 bg-p5-bone -skew-y-1 origin-top-left flex items-center pl-24 overflow-hidden">
        <span className="font-stencil text-p5-black text-xs tracking-[0.4em] whitespace-nowrap">
          INFILTRATION TARGETS · METAVERSE NAVIGATOR · INFILTRATION TARGETS · METAVERSE NAVIGATOR ·
        </span>
      </div>

      <BackButton onBack={onBack} />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-3 bg-p5-red text-p5-bone px-4 py-1 skew-card mb-4 animate-slide-up">
          <span className="unskew font-stencil text-xs tracking-widest">▶ TARGET LIST · {palaces.length} PALACES</span>
        </div>
        <h1 className="font-display text-p5-bone text-stroke text-4xl md:text-7xl leading-none mb-2 animate-scale-in">
          PICK YOUR <span className="text-p5-red">HEIST</span>.
        </h1>
        <p className="font-stencil text-p5-bone/70 tracking-widest text-sm mb-10 animate-fade-in">
          DATA · ML · FULL-STACK — INFILTRATE TO INSPECT.
        </p>

        <h2 className="font-display text-p5-bone text-2xl md:text-3xl mb-4">CORE <span className="text-p5-red">PROJECTS</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {core.map((p, i) => (
            <PalaceCard key={p.id} p={p} i={i} onOpen={open} />
          ))}
        </div>

        <h2 className="font-display text-p5-bone text-2xl md:text-3xl mb-4">OTHER <span className="text-p5-red">NOTABLE</span></h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {other.map((p, i) => (
            <PalaceCard key={p.id} p={p} i={i} onOpen={open} />
          ))}
        </div>

        <h2 className="font-display text-p5-bone text-2xl md:text-3xl mb-4">STACK & <span className="text-p5-red">TOOLS</span></h2>
        <div className="flex flex-wrap gap-2 mb-6">
          {stack.map(s => (
            <span key={s} className="bg-p5-bone text-p5-black font-stencil text-xs tracking-widest px-3 py-1 border-2 border-p5-black">
              {s}
            </span>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 grid place-items-center p-6 animate-fade-in" onClick={close}>
          <div className="absolute inset-0 bg-p5-black/80" />
          <div onClick={(e) => e.stopPropagation()} className="relative max-w-2xl w-full animate-scale-in">
            <div className="absolute -top-6 -left-6 bg-p5-red text-p5-bone px-4 py-1 skew-card border-2 border-p5-black shadow-[4px_4px_0_hsl(var(--p5-black))] z-10">
              <span className="unskew font-display tracking-wider">▶ INFILTRATING...</span>
            </div>
            <div className="bg-p5-bone text-p5-black p-8 border-2 border-p5-black shadow-[12px_12px_0_hsl(var(--p5-red))] clip-jagged">
              <p className="font-stencil text-xs text-p5-red tracking-widest">PALACE FILE</p>
              <h3 className="font-display text-3xl md:text-4xl mb-1">{selected.name}</h3>
              <p className="font-heist text-p5-red text-lg tracking-wider mb-4">{selected.ruler}</p>
              <div className="h-1 bg-p5-black mb-4 skew-card" />
              <p className="font-stencil text-sm leading-relaxed mb-5">{selected.distortion}</p>

              <div className="grid grid-cols-2 gap-4 mb-5">
                <div>
                  <p className="font-stencil text-[10px] tracking-widest text-p5-black/60">TREASURE</p>
                  <p className="font-display text-sm">{selected.treasure}</p>
                </div>
                <div>
                  <p className="font-stencil text-[10px] tracking-widest text-p5-black/60">ARCANA</p>
                  <p className="font-display text-sm">{selected.arcana}</p>
                </div>
              </div>

              <div className="flex gap-3 flex-wrap">
                <button onClick={close} className="bg-p5-black text-p5-bone px-5 py-2 skew-card border-2 border-p5-black hover:bg-p5-red transition-colors">
                  <span className="unskew block font-display tracking-wider">▶ ESCAPE</span>
                </button>
                {selected.link && (
                  <a href={selected.link} target="_blank" rel="noreferrer" className="bg-p5-red text-p5-bone px-5 py-2 skew-card border-2 border-p5-black hover:bg-p5-red-deep transition-colors">
                    <span className="unskew block font-display tracking-wider">⚔ VISIT SITE</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const PalaceCard = ({ p, i, onOpen }: { p: Palace; i: number; onOpen: (p: Palace) => void }) => (
  <button
    onMouseEnter={() => sfxHover()}
    onClick={() => onOpen(p)}
    className="text-left animate-slide-up group"
    style={{ animationDelay: `${i * 0.06}s` }}
  >
    <div className="relative h-full bg-p5-bone text-p5-black p-5 skew-card border-2 border-p5-black shadow-[6px_6px_0_hsl(var(--p5-red))] transition-all duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0_hsl(var(--p5-red))]">
      <div className="absolute top-0 right-0 bg-p5-black text-p5-bone font-stencil text-[10px] tracking-widest px-2 py-1">
        ARCANA · {p.arcana}
      </div>
      <div className="unskew">
        <p className="font-stencil text-xs text-p5-red tracking-widest mb-1">TARGET No. {String(i + 1).padStart(2, "0")}</p>
        <h3 className="font-display text-xl md:text-2xl leading-tight mb-1">{p.name}</h3>
        <p className="font-heist text-p5-black/70 text-sm tracking-wider mb-4">{p.ruler}</p>
        <div className="flex items-center gap-1 mb-3">
          <span className="font-stencil text-[10px] mr-1">THREAT</span>
          {Array.from({ length: 5 }).map((_, k) => (
            <span key={k} className={`text-lg leading-none ${k < p.difficulty ? "text-p5-red" : "text-p5-black/20"}`}>★</span>
          ))}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {p.tags.map(t => (
            <span key={t} className="bg-p5-black text-p5-bone font-stencil text-[10px] tracking-widest px-2 py-0.5">{t}</span>
          ))}
        </div>
      </div>
    </div>
  </button>
);
