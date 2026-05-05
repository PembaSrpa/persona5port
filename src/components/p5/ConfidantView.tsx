import portrait from "@/assets/confidant-portrait.jpg";
import { BackButton } from "./BackButton";

interface Props { onBack: () => void }

const stats = [
  { label: "PYTHON", value: 5 },
  { label: "SQL", value: 5 },
  { label: "EXCEL", value: 5 },
  { label: "VIZ / TABLEAU", value: 4 },
  { label: "ML / PANDAS", value: 4 },
];

const traits = ["Data Analyst", "Python", "SQL", "Tableau", "Pandas", "PostgreSQL", "Next.js"];

const journey = [
  { year: "2020", title: "Started BSc CSIT", body: "Began computer science journey at Birendra Memorial College." },
  { year: "2022", title: "Game Development Intern", body: "Built interactive games with Unity & C# at Protocol Computer and Solutions." },
  { year: "2024", title: "MERN Stack Intern", body: "Developed full-stack web applications at Lunar IT and Solutions." },
  { year: "2025", title: "Graduated BSc CSIT", body: "Completed degree with focus on software development. Advanced Python & problem solving via Kaggle." },
  { year: "2026", title: "Data Science & Analytics", body: "Mastered SQL, Excel, and visualization. Earned HackerRank certifications in SQL, Python, and Problem Solving." },
];

const certs = [
  ["Intro to Programming", "Kaggle"],
  ["Python", "Kaggle"],
  ["Intro to Data Science", "Simplilearn"],
  ["Intro to Excel", "Simplilearn"],
  ["Intro to SQL", "Kaggle"],
  ["Advanced SQL", "Kaggle"],
  ["SQL (Basic)", "HackerRank"],
  ["SQL (Intermediate)", "HackerRank"],
  ["SQL (Advanced)", "HackerRank"],
  ["Python (Basic)", "HackerRank"],
  ["Problem Solving (Basic)", "HackerRank"],
  ["Problem Solving (Intermediate)", "HackerRank"],
  ["Rest API (Intermediate)", "HackerRank"],
  ["Introduction to Tableau", "Simplilearn"],
  ["Power BI for Beginners", "Simplilearn"],
];

export const ConfidantView = ({ onBack }: Props) => {
  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-p5-black grain animate-fade-in">
      <div className="absolute inset-0 bg-rage opacity-80" />
      <div className="absolute inset-0 halftone-red opacity-20" />
      <div className="absolute top-0 left-0 w-full h-3 bg-p5-bone -skew-y-1 origin-top-left" />

      <BackButton onBack={onBack} />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-3 bg-p5-bone text-p5-black px-4 py-1 skew-card mb-6 animate-slide-up">
          <span className="unskew font-stencil text-xs tracking-widest">RANK 10 · MAX CONFIDANT</span>
        </div>

        <h1 className="font-display text-p5-bone text-stroke text-5xl md:text-8xl leading-none mb-2 animate-scale-in">
          I'M <span className="text-p5-red">PEMBA</span>
        </h1>
        <p className="font-stencil text-p5-bone/70 tracking-[0.3em] mb-10 animate-fade-in">ARCANA · THE FOOL · DHARAN, NEPAL</p>

        <div className="grid md:grid-cols-[auto,1fr] gap-8 md:gap-12 items-start">
          <div className="relative animate-slide-up">
            <div className="absolute -inset-3 bg-p5-bone skew-card" />
            <div className="absolute -inset-1 bg-p5-black skew-card" />
            <img
              src={portrait}
              alt="Pemba portrait"
              width={768}
              height={1024}
              className="relative skew-card w-64 md:w-80 aspect-[3/4] object-cover border-2 border-p5-black"
            />
            <div className="absolute -bottom-4 -right-4 bg-p5-red text-p5-bone px-3 py-1 skew-card border-2 border-p5-black shadow-[4px_4px_0_hsl(var(--p5-black))]">
              <span className="unskew block font-display tracking-wider">CODE: ANALYST</span>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-p5-bone text-p5-black p-6 skew-card border-2 border-p5-black shadow-[8px_8px_0_hsl(var(--p5-red))] animate-slide-up">
              <div className="unskew">
                <h3 className="font-display text-2xl mb-3 border-b-2 border-p5-black pb-2">PROFILE</h3>
                <p className="font-stencil text-sm leading-relaxed">
                  A Data Analyst from Dharan, Nepal — specializing in Python, SQL, and data visualization.
                  I transform raw data into actionable business insights, built through structured learning
                  and hands-on projects across analytics, ML, and full-stack development.
                </p>
                <a
                  href="/resume.pdf"
                  className="inline-block mt-4 bg-p5-red text-p5-bone px-4 py-2 font-display tracking-wider border-2 border-p5-black shadow-[4px_4px_0_hsl(var(--p5-black))] hover:translate-x-1 hover:-translate-y-1 transition-transform"
                >
                  ▶ DOWNLOAD CV
                </a>
              </div>
            </div>

            <div className="bg-p5-black/80 border-2 border-p5-bone p-6 skew-card animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="unskew">
                <h3 className="font-display text-p5-bone text-2xl mb-4">SOCIAL STATS</h3>
                <ul className="space-y-3">
                  {stats.map((s) => (
                    <li key={s.label} className="flex items-center gap-3">
                      <span className="font-stencil text-p5-bone/80 text-xs w-32 tracking-widest">{s.label}</span>
                      <span className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span
                            key={i}
                            className={`block w-5 h-5 border-2 border-p5-bone ${i < s.value ? "bg-p5-red" : "bg-transparent"}`}
                          />
                        ))}
                      </span>
                      <span className="ml-auto font-display text-p5-red text-xl">LV.{s.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              {traits.map((t) => (
                <span key={t} className="bg-p5-red text-p5-bone px-4 py-2 skew-card border-2 border-p5-black shadow-[4px_4px_0_hsl(var(--p5-black))]">
                  <span className="unskew block font-display tracking-wide text-sm">{t}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Journey */}
        <div className="mt-16 animate-slide-up">
          <h3 className="font-display text-p5-bone text-stroke text-3xl md:text-5xl mb-6">
            MY <span className="text-p5-red">JOURNEY</span> SO FAR
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {journey.map((j) => (
              <div key={j.year} className="bg-p5-bone text-p5-black p-5 skew-card border-2 border-p5-black shadow-[6px_6px_0_hsl(var(--p5-red))]">
                <div className="unskew">
                  <p className="font-display text-p5-red text-3xl leading-none">{j.year}</p>
                  <h4 className="font-display text-lg mt-2">{j.title}</h4>
                  <p className="font-stencil text-xs mt-2 leading-relaxed">{j.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certs */}
        <div className="mt-16 animate-slide-up">
          <h3 className="font-display text-p5-bone text-stroke text-3xl md:text-5xl mb-6">
            MILESTONES & <span className="text-p5-red">CREDENTIALS</span>
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {certs.map(([title, issuer]) => (
              <div key={title} className="bg-p5-black/70 border-2 border-p5-bone p-3 flex items-center justify-between">
                <span className="font-stencil text-p5-bone text-xs tracking-wider">{title}</span>
                <span className="font-display text-p5-red text-xs ml-2 whitespace-nowrap">{issuer}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
