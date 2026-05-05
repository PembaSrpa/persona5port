import { sfxHover } from "@/lib/sfx";
import { BackButton } from "./BackButton";

interface Props { onBack: () => void }

const ROOT = "https://artt-folio.vercel.app/blog";

const blogs = [
  { title: "SQL Analysis", date: "Sat, Feb 14, 2026", sub: "Telling Your Data's Story with SQL", url: `${ROOT}/sqlAnalysis`, tag: "SQL" },
  { title: "SQL CheatSheet", date: "Sat, Feb 14, 2026", sub: "PostgreSQL SQL Edition", url: `${ROOT}/sqlCheatSheet`, tag: "SQL" },
  { title: "Practical SQL", date: "Fri, Feb 13, 2026", sub: "By Anthony DeBarros", url: `${ROOT}/book3`, tag: "BOOK" },
  { title: "Regular Expression Basics", date: "Sat, Feb 7, 2026", sub: "Essential regex patterns with PostgreSQL examples", url: `${ROOT}/Regex`, tag: "REGEX" },
  { title: "Clean Code in Python", date: "Thu, Feb 5, 2026", sub: "By Mariano Anaya", url: `${ROOT}/book2`, tag: "BOOK" },
  { title: "Excel vs SQL vs Pandas", date: "Mon, Jan 26, 2026", sub: "Compare Excel, SQL, and Pandas for data manipulation", url: `${ROOT}/excel-sql-pandas`, tag: "DATA" },
  { title: "Excel Guide", date: "Sat, Jan 24, 2026", sub: "Excel guide for data management and analysis", url: `${ROOT}/excel`, tag: "EXCEL" },
  { title: "Basic Excel", date: "Thu, Jan 22, 2026", sub: "Introduction to Excel", url: `${ROOT}/basic-excel`, tag: "EXCEL" },
  { title: "Think Python", date: "Fri, Jan 2, 2026", sub: "By Allen B. Downey", url: `${ROOT}/book1`, tag: "BOOK" },
  { title: "Data Analytics Interview Guide", date: "Fri, Dec 12, 2025", sub: "Essential interview Q&A for data analyst roles", url: `${ROOT}/analytics`, tag: "INTERVIEW" },
  { title: "EDA with Pandas CheatSheet", date: "Sat, Nov 22, 2025", sub: "40 essential Pandas techniques for EDA", url: `${ROOT}/pandasEDA`, tag: "PANDAS" },
  { title: "Data Science Q&A", date: "Sat, Oct 25, 2025", sub: "Frequently asked Data Science questions", url: `${ROOT}/data_science_interview_questions`, tag: "INTERVIEW" },
  { title: "Tech Q&A", date: "Wed, Sep 24, 2025", sub: "Frequently asked Tech questions", url: `${ROOT}/techquestions`, tag: "INTERVIEW" },
  { title: "Interview Tips", date: "Sat, Aug 23, 2025", sub: "Crack the Job Interview with These Tips", url: `${ROOT}/interview-tips`, tag: "CAREER" },
  { title: "Python Fundamentals Q&A", date: "Wed, Jul 16, 2025", sub: "Essential Python questions answered", url: `${ROOT}/pyQuest`, tag: "PYTHON" },
];

export const BlogsView = ({ onBack }: Props) => {
  return (
    <div className="fixed inset-0 z-40 overflow-y-auto bg-p5-black grain animate-fade-in">
      <div className="absolute inset-0 bg-rage opacity-85" />
      <div className="absolute inset-0 halftone-red opacity-20" />
      <div className="absolute top-0 left-0 w-full h-3 bg-p5-bone -skew-y-1 origin-top-left" />

      <BackButton onBack={onBack} />

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="inline-flex items-center gap-3 bg-p5-red text-p5-bone px-4 py-1 skew-card mb-4 animate-slide-up">
          <span className="unskew font-stencil text-xs tracking-widest">▶ MEMENTOS · {blogs.length} ENTRIES</span>
        </div>
        <h1 className="font-display text-p5-bone text-stroke text-4xl md:text-7xl leading-none mb-2 animate-scale-in">
          THOUGHTS & <span className="text-p5-red">TUTORIALS</span>
        </h1>
        <p className="font-stencil text-p5-bone/70 tracking-widest text-sm mb-10 animate-fade-in">
          SHARING WHAT I LEARN ALONG THE WAY.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {blogs.map((b, i) => (
            <a
              key={b.url}
              href={b.url}
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => sfxHover()}
              className="block animate-slide-up group"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <article className="relative h-full bg-p5-bone text-p5-black p-5 skew-card border-2 border-p5-black shadow-[6px_6px_0_hsl(var(--p5-red))] transition-all duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:shadow-[10px_10px_0_hsl(var(--p5-red))]">
                <div className="absolute top-0 right-0 bg-p5-black text-p5-bone font-stencil text-[10px] tracking-widest px-2 py-1">
                  {b.tag}
                </div>
                <div className="unskew">
                  <p className="font-stencil text-[10px] text-p5-red tracking-widest mb-1">{b.date}</p>
                  <h3 className="font-display text-lg md:text-xl leading-tight mb-2">{b.title}</h3>
                  <p className="font-stencil text-xs text-p5-black/70 leading-relaxed">{b.sub}</p>
                  <p className="mt-3 font-display text-p5-red text-sm tracking-wider">READ ▸</p>
                </div>
              </article>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
