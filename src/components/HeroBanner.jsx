import { useEffect, useState } from "react";

const images = [
  "/contact-banner.jpg", // you can add more later
];

export default function HeroBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[65vh] md:h-[78vh] bg-cover bg-center transition-all duration-1000"
      style={{ backgroundImage: `url(${images[index]})` }}
    >
      {/* DARK ACADEMIC OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40" />

      {/* CONTENT */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-white">

            {/* BADGE */}
            <span className="inline-block mb-5 px-4 py-1.5 rounded-full text-[11px] tracking-widest
                             bg-[#b11217]/90 uppercase font-semibold">
              Established 1998 · Amethi (U.P.)
            </span>

            {/* COLLEGE NAME */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Rajarshi Rananjay Sinh
              <span className="block text-[#f2b705]">
                Institute of Management & Technology
              </span>
            </h1>

            {/* SUBLINE */}
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mb-8">
              Approved by AICTE, New Delhi & Affiliated to Dr. A.P.J. Abdul Kalam
              Technical University (AKTU), Lucknow
            </p>

            {/* TAGLINE */}
            <p className="text-base md:text-lg text-slate-300 max-w-xl mb-10">
              Delivering quality technical and professional education with a
              focus on innovation, discipline, and holistic student development.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/academics"
                className="px-7 py-3 rounded-md bg-[#b11217] text-white
                           font-semibold shadow-lg hover:bg-[#8e0f13] transition"
              >
                Explore Academics
              </a>

              <a
                href="/admission"
                className="px-7 py-3 rounded-md border border-white/80
                           text-white hover:bg-white hover:text-black transition"
              >
                Admissions 2026
              </a>
            </div>
          </div>

          {/* RIGHT INFO PANEL (DESKTOP ONLY) */}
          <div className="hidden lg:flex justify-end">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-7 shadow-xl w-[360px]">
              <h3 className="text-white font-bold text-lg mb-5 uppercase tracking-wide">
                Why Choose RRSIMT?
              </h3>

              <ul className="text-slate-200 text-sm space-y-4">
                <li className="flex gap-2">
                  <span className="text-[#f2b705] font-bold">✔</span>
                  AICTE Approved Programs
                </li>
                <li className="flex gap-2">
                  <span className="text-[#f2b705] font-bold">✔</span>
                  Experienced & Qualified Faculty
                </li>
                <li className="flex gap-2">
                  <span className="text-[#f2b705] font-bold">✔</span>
                  Strong Industry & Placement Support
                </li>
                <li className="flex gap-2">
                  <span className="text-[#f2b705] font-bold">✔</span>
                  Modern Infrastructure & Laboratories
                </li>
                <li className="flex gap-2">
                  <span className="text-[#f2b705] font-bold">✔</span>
                  Focus on Discipline & Student Growth
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
