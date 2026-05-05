import { useState } from "react";
import { sfxConfirm, sfxHover, sfxSlash } from "@/lib/sfx";
import { BackButton } from "./BackButton";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

interface Props { onBack: () => void }

export const ContactView = ({ onBack }: Props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    sfxSlash();
    sfxConfirm();
    const subject = encodeURIComponent(`Calling Card from ${name || "a Phantom"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-p5-black grain animate-fade-in">
      <div className="absolute inset-0 bg-rage opacity-85" />
      <div className="absolute inset-0 halftone opacity-20" />
      <div className="absolute top-0 left-0 w-full h-3 bg-p5-bone -skew-y-1 origin-top-left" />

      <BackButton onBack={onBack} />

      <div className="relative max-w-4xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-3 bg-p5-red text-p5-bone px-4 py-1 skew-card mb-4 animate-slide-up">
          <span className="unskew font-stencil text-xs tracking-widest">▶ SEND CALLING CARD</span>
        </div>
        <h1 className="font-display text-p5-bone text-stroke text-4xl md:text-7xl leading-none mb-2 animate-scale-in">
          LEAVE A <span className="text-p5-red">MARK</span>.
        </h1>
        <p className="font-stencil text-p5-bone/70 tracking-widest text-sm mb-10 animate-fade-in">
          THE PHANTOM THIEVES WILL READ THIS BEFORE DAWN.
        </p>

        <div className="grid md:grid-cols-[1.4fr,1fr] gap-8 items-start">
          {/* Calling card form */}
          <form
            onSubmit={handleSend}
            className="relative bg-p5-bone text-p5-black p-6 md:p-8 border-2 border-p5-black shadow-[12px_12px_0_hsl(var(--p5-red))] clip-jagged animate-slide-up"
          >
            <p className="font-stencil text-xs text-p5-red tracking-widest mb-2">CALLING CARD · CONFIDENTIAL</p>
            <h3 className="font-display text-2xl md:text-3xl mb-5 border-b-2 border-p5-black pb-3">
              TO: <span className="text-p5-red">PEMBA</span>
            </h3>

            <label className="block mb-3">
              <span className="font-stencil text-[10px] tracking-widest text-p5-black/70">YOUR ALIAS</span>
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => sfxHover()}
                className="w-full mt-1 bg-transparent border-b-2 border-p5-black font-display text-xl outline-none focus:border-p5-red"
              />
            </label>
            <label className="block mb-3">
              <span className="font-stencil text-[10px] tracking-widest text-p5-black/70">EMAIL</span>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => sfxHover()}
                className="w-full mt-1 bg-transparent border-b-2 border-p5-black font-display text-lg outline-none focus:border-p5-red"
              />
            </label>
            <label className="block mb-5">
              <span className="font-stencil text-[10px] tracking-widest text-p5-black/70">MESSAGE</span>
              <textarea
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => sfxHover()}
                className="w-full mt-1 bg-transparent border-2 border-p5-black p-2 font-stencil text-sm outline-none focus:border-p5-red resize-none"
              />
            </label>

            <button
              type="submit"
              className="bg-p5-red text-p5-bone px-6 py-3 skew-card border-2 border-p5-black shadow-[6px_6px_0_hsl(var(--p5-black))] hover:translate-x-1 hover:-translate-y-1 transition-transform"
            >
              <span className="unskew block font-display tracking-widest">⚔ SEND CALLING CARD</span>
            </button>

            {sent && (
              <p className="mt-4 font-stencil text-xs text-p5-red tracking-widest">
                ▶ CARD DISPATCHED. CHECK YOUR MAIL CLIENT.
              </p>
            )}
          </form>

          {/* Direct channels */}
          <div className="space-y-4 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            <div className="bg-p5-black/80 border-2 border-p5-bone p-5 skew-card">
              <div className="unskew space-y-3">
                <h3 className="font-display text-p5-bone text-xl mb-2">DIRECT CHANNELS</h3>
                <a href="mailto:hello@example.com" className="flex items-center gap-3 text-p5-bone hover:text-p5-red transition-colors">
                  <Mail size={18} />
                  <span className="font-stencil text-xs tracking-widest">hello@example.com</span>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-p5-bone hover:text-p5-red transition-colors">
                  <Github size={18} />
                  <span className="font-stencil text-xs tracking-widest">github.com/pemba</span>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-p5-bone hover:text-p5-red transition-colors">
                  <Linkedin size={18} />
                  <span className="font-stencil text-xs tracking-widest">linkedin.com/in/pemba</span>
                </a>
                <div className="flex items-center gap-3 text-p5-bone/80">
                  <MapPin size={18} />
                  <span className="font-stencil text-xs tracking-widest">Dharan, Nepal</span>
                </div>
              </div>
            </div>

            <div className="bg-p5-red text-p5-bone p-5 skew-card border-2 border-p5-black shadow-[6px_6px_0_hsl(var(--p5-black))]">
              <div className="unskew">
                <p className="font-display text-lg leading-tight">AVAILABLE FOR HEISTS</p>
                <p className="font-stencil text-xs tracking-widest mt-1 text-p5-bone/90">
                  Open to data, analytics, and full-stack opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
