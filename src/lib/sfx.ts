// Lightweight WebAudio SFX synthesizer — no external assets needed.
// Generates Persona-style menu blips, slashes, confirms.

let ctx: AudioContext | null = null;
let master: GainNode | null = null;
let muted = false;
let ambientNode: { stop: () => void } | null = null;

const getCtx = () => {
  if (typeof window === "undefined") return null;
  if (!ctx) {
    const AC = (window.AudioContext || (window as any).webkitAudioContext);
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = muted ? 0 : 0.55;
    master.connect(ctx.destination);
  }
  if (ctx.state === "suspended") ctx.resume();
  return ctx;
};

export const setMuted = (m: boolean) => {
  muted = m;
  try { localStorage.setItem("p5-muted", m ? "1" : "0"); } catch {}
  if (master && ctx) master.gain.linearRampToValueAtTime(m ? 0 : 0.55, ctx.currentTime + 0.1);
};

export const isMuted = () => {
  if (typeof window === "undefined") return false;
  try {
    const v = localStorage.getItem("p5-muted");
    if (v !== null) muted = v === "1";
  } catch {}
  return muted;
};

const env = (gain: GainNode, t0: number, attack: number, decay: number, peak = 0.4) => {
  gain.gain.setValueAtTime(0, t0);
  gain.gain.linearRampToValueAtTime(peak, t0 + attack);
  gain.gain.exponentialRampToValueAtTime(0.0001, t0 + attack + decay);
};

export const sfxBlip = () => {
  const c = getCtx(); if (!c || !master) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = "square";
  o.frequency.setValueAtTime(880, c.currentTime);
  o.frequency.exponentialRampToValueAtTime(1320, c.currentTime + 0.06);
  env(g, c.currentTime, 0.005, 0.08, 0.18);
  o.connect(g).connect(master);
  o.start(); o.stop(c.currentTime + 0.1);
};

export const sfxHover = () => {
  const c = getCtx(); if (!c || !master) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = "triangle";
  o.frequency.setValueAtTime(620, c.currentTime);
  env(g, c.currentTime, 0.003, 0.05, 0.12);
  o.connect(g).connect(master);
  o.start(); o.stop(c.currentTime + 0.07);
};

export const sfxConfirm = () => {
  const c = getCtx(); if (!c || !master) return;
  [440, 660, 880].forEach((f, i) => {
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = "square";
    o.frequency.value = f;
    env(g, c.currentTime + i * 0.04, 0.005, 0.12, 0.18);
    o.connect(g).connect(master);
    o.start(c.currentTime + i * 0.04);
    o.stop(c.currentTime + i * 0.04 + 0.16);
  });
};

export const sfxBack = () => {
  const c = getCtx(); if (!c || !master) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = "square";
  o.frequency.setValueAtTime(520, c.currentTime);
  o.frequency.exponentialRampToValueAtTime(220, c.currentTime + 0.12);
  env(g, c.currentTime, 0.005, 0.14, 0.16);
  o.connect(g).connect(master);
  o.start(); o.stop(c.currentTime + 0.16);
};

export const sfxSlash = () => {
  const c = getCtx(); if (!c || !master) return;
  // Noise burst through bandpass = whoosh slash
  const buffer = c.createBuffer(1, c.sampleRate * 0.4, c.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
  const src = c.createBufferSource();
  src.buffer = buffer;
  const bp = c.createBiquadFilter();
  bp.type = "bandpass";
  bp.frequency.setValueAtTime(2400, c.currentTime);
  bp.frequency.exponentialRampToValueAtTime(600, c.currentTime + 0.35);
  bp.Q.value = 1.2;
  const g = c.createGain();
  env(g, c.currentTime, 0.005, 0.4, 0.5);
  src.connect(bp).connect(g).connect(master);
  src.start();
};

export const sfxBoot = () => {
  const c = getCtx(); if (!c || !master) return;
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = "sawtooth";
  o.frequency.setValueAtTime(120, c.currentTime);
  o.frequency.exponentialRampToValueAtTime(900, c.currentTime + 0.5);
  env(g, c.currentTime, 0.02, 0.6, 0.35);
  o.connect(g).connect(master);
  o.start(); o.stop(c.currentTime + 0.7);
  setTimeout(sfxSlash, 500);
};

// Funky ambient loop — bass + hi-hat-ish ticks (Persona vibes, restrained)
export const startAmbient = () => {
  const c = getCtx(); if (!c || !master) return;
  if (ambientNode) return;
  const bus = c.createGain();
  bus.gain.value = 0.22;
  bus.connect(master);

  const notes = [55, 55, 73.42, 65.41, 55, 55, 82.41, 73.42]; // A1 pattern
  const stepSec = 0.32;
  let step = 0;
  let stopped = false;

  const tick = () => {
    if (stopped || !c) return;
    const t = c.currentTime;
    // bass pluck
    const o = c.createOscillator();
    const og = c.createGain();
    o.type = "sawtooth";
    o.frequency.value = notes[step % notes.length];
    const lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 600;
    env(og, t, 0.005, stepSec * 0.9, 0.35);
    o.connect(lp).connect(og).connect(bus);
    o.start(t); o.stop(t + stepSec);

    // hat
    if (step % 2 === 1) {
      const buf = c.createBuffer(1, c.sampleRate * 0.05, c.sampleRate);
      const d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1);
      const src = c.createBufferSource();
      src.buffer = buf;
      const hp = c.createBiquadFilter();
      hp.type = "highpass"; hp.frequency.value = 6000;
      const hg = c.createGain();
      env(hg, t, 0.001, 0.05, 0.18);
      src.connect(hp).connect(hg).connect(bus);
      src.start(t);
    }

    step++;
    setTimeout(tick, stepSec * 1000);
  };
  tick();
  ambientNode = { stop: () => { stopped = true; } };
};

export const stopAmbient = () => {
  if (ambientNode) { ambientNode.stop(); ambientNode = null; }
};
