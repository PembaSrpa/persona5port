import { useEffect, useState } from "react";
import { sfxBoot, sfxConfirm, startAmbient } from "@/lib/sfx";

interface Props { onStart: () => void }

export const TitleScreen = ({ onStart }: Props) => {
  const [pressed, setPressed] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const i = setInterval(() => setBlink(b => !b), 700);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.code === "Enter" || e.code === "Space") handleStart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStart = () => {
    if (pressed) return;
    setPressed(true);
    sfxBoot();
    sfxConfirm();
    startAmbient();
    setTimeout(onStart, 1100);
  };

  return (
    <div
      onClick={handleStart}
      className="fixed inset-0 z-50 cursor-pointer overflow-hidden bg-p5-black grain"
      role="button"
      aria-label="Press start"
    >
      {/* Animated red radial */}
      <div className="absolute inset-0 bg-radial-red opacity-90" />
      <div className="absolute inset-0 halftone opacity-30" />
      <div className="absolute inset-0 scanlines opacity-40" />

      {/* Spinning tag */}
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] animate-spin-slow opacity-20">
        <div className="w-full h-full rounded-full border-[20px] border-p5-bone border-dashed" />
      </div>

      {/* Slash bars */}
      <div className="absolute top-1/4 left-0 w-full h-2 bg-p5-black skew-card opacity-80" />
      <div className="absolute bottom-1/4 left-0 w-full h-2 bg-p5-black skew-card opacity-80" />

      <div className="relative h-full flex flex-col items-center justify-center px-6 text-center">
        <div className="animate-slide-up">
          <p className="font-stencil text-p5-bone/80 text-sm md:text-base tracking-[0.4em] mb-4">— A PHANTOM PORTFOLIO —</p>
        </div>

        <h1 className="font-display text-p5-bone text-stroke text-[clamp(3.5rem,14vw,11rem)] leading-[0.85] animate-scale-in">
          TAKE
          <span className="block text-p5-red ml-12 md:ml-32 -mt-2">YOUR</span>
          <span className="block ml-2 md:ml-12 -mt-2">HEART</span>
        </h1>

        <p className="mt-8 font-heist text-p5-bone/70 text-lg md:text-xl tracking-widest animate-fade-in">
          PORTFOLIO Ver. 5 · ROYAL EDITION
        </p>

        <div className={`mt-16 transition-opacity duration-200 ${blink ? "opacity-100" : "opacity-30"} ${pressed ? "shake" : ""}`}>
          <div className="inline-flex items-center gap-3 bg-p5-bone text-p5-black px-8 py-3 skew-card border-2 border-p5-black shadow-[6px_6px_0_hsl(var(--p5-red))]">
            <span className="unskew font-display text-xl md:text-2xl">▶ PRESS START</span>
          </div>
        </div>

        <p className="absolute bottom-6 font-stencil text-p5-bone/50 text-xs tracking-widest">
          CLICK ANYWHERE OR PRESS [ENTER]
        </p>
      </div>

      {/* Slash transition out */}
      {pressed && (
        <>
          <div className="absolute inset-0 bg-p5-red animate-slash-wipe origin-left" />
          <div className="absolute inset-0 bg-p5-black animate-slash-wipe origin-left" style={{ animationDelay: "0.2s" }} />
        </>
      )}
    </div>
  );
};
