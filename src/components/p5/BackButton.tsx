import { sfxBack } from "@/lib/sfx";
import { ArrowLeft } from "lucide-react";

export const BackButton = ({ onBack }: { onBack: () => void }) => {
  return (
    <button
      onClick={() => { sfxBack(); onBack(); }}
      className="fixed top-4 left-4 z-[90] inline-flex items-center gap-2 bg-p5-bone text-p5-black px-4 py-2 skew-card border-2 border-p5-black shadow-[4px_4px_0_hsl(var(--p5-red))] hover:bg-p5-red hover:text-p5-bone transition-colors"
    >
      <span className="unskew flex items-center gap-2 font-display tracking-wider">
        <ArrowLeft size={18} /> BACK
      </span>
    </button>
  );
};
