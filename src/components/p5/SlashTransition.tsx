import { useState } from "react";

interface Props { active: boolean; onDone: () => void; color?: "red" | "black" }

/** Persona-style slash transition overlay. */
export const SlashTransition = ({ active, onDone, color = "red" }: Props) => {
  if (!active) return null;
  return (
    <div className="fixed inset-0 z-[80] pointer-events-none overflow-hidden">
      <div
        className={`absolute inset-0 origin-left animate-slash-wipe ${color === "red" ? "bg-p5-red" : "bg-p5-black"}`}
        onAnimationEnd={onDone}
      />
      <div
        className="absolute inset-0 origin-left animate-slash-wipe bg-p5-black"
        style={{ animationDelay: "0.15s" }}
      />
    </div>
  );
};

export const useSlash = () => {
  const [active, setActive] = useState(false);
  const trigger = (cb?: () => void) => {
    setActive(true);
    setTimeout(() => { cb?.(); }, 250);
    setTimeout(() => setActive(false), 1000);
  };
  return { active, trigger };
};
