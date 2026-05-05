import { Volume2, VolumeX } from "lucide-react";
import { useEffect, useState } from "react";
import { isMuted, setMuted, sfxBlip } from "@/lib/sfx";

export const MuteToggle = () => {
  const [m, setM] = useState(false);
  useEffect(() => setM(isMuted()), []);
  const toggle = () => {
    const next = !m;
    setMuted(next);
    setM(next);
    if (!next) sfxBlip();
  };
  return (
    <button
      onClick={toggle}
      aria-label={m ? "Unmute" : "Mute"}
      className="fixed top-4 right-4 z-[100] h-12 w-12 grid place-items-center bg-p5-red text-white border-2 border-p5-black skew-card hover:bg-p5-red-deep transition-colors shadow-[4px_4px_0_hsl(var(--p5-black))]"
    >
      <span className="unskew">{m ? <VolumeX size={22} /> : <Volume2 size={22} />}</span>
    </button>
  );
};
