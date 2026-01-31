import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const alumni = [
  {
    name: "Dr. Ananya Sharma",
    role: "Senior Scientist, ISRO",
    degree: "B.Tech Biotechnology (2010)",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    quote:
      "CampusHub shaped my research mindset and gave me the confidence to pursue scientific excellence.",
  },
  {
    name: "Rahul Verma",
    role: "Software Engineer, Google",
    degree: "B.Tech Computer Science (2012)",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    quote:
      "The culture of innovation and mentorship prepared me for global tech challenges.",
  },
  {
    name: "Neha Singh",
    role: "IAS Officer",
    degree: "BA Public Administration (2011)",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    quote:
      "CampusHub instilled leadership, discipline, and service values that guide my career.",
  },
  {
    name: "Amit Patel",
    role: "Founder & CEO, EduTech Startup",
    degree: "MBA (2014)",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    quote:
      "The entrepreneurial ecosystem at CampusHub helped me turn ideas into impact.",
  },
];

export default function AlumniSection() {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);

  const next = () =>
    setIndex((i) => (i + 1) % alumni.length);
  const prev = () =>
    setIndex((i) => (i - 1 + alumni.length) % alumni.length);

  /* AUTO SCROLL */
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const startAuto = () => {
    intervalRef.current = setInterval(next, 3000);
  };

  const stopAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  /* MOBILE SWIPE */
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    stopAuto();
  };

  const onTouchEnd = (e) => {
    const delta =
      e.changedTouches[0].clientX - touchStartX.current;

    if (delta > 60) prev();
    if (delta < -60) next();

    startAuto();
  };

  const left =
    alumni[(index - 1 + alumni.length) % alumni.length];
  const right =
    alumni[(index + 1) % alumni.length];
  const current = alumni[index];

  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      {/* HEADER */}
      <div className="text-center mb-24 px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
          Our Alumni, Our Pride
        </h2>
        <p className="text-lg text-slate-600 mt-5 max-w-3xl mx-auto">
          Distinguished professionals carrying the RRSIMT legacy across
          industries and public service.
        </p>
      </div>

      {/* CAROUSEL */}
      <div
        className="relative flex justify-center items-center max-w-7xl mx-auto"
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* LEFT */}
        <SideCard data={left} position="-translate-x-[420px]" />

        {/* CENTER CARD */}
        <div className="relative z-20 scale-[1.18] transition-all duration-500">
          <div className="w-[520px] bg-white rounded-[36px]
                          shadow-[0_30px_80px_rgba(0,0,0,0.18)]
                          overflow-hidden">
            {/* IMAGE HEADER */}
            <div className="relative h-[220px]">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t
                              from-black/70 to-transparent" />
            </div>

            {/* CONTENT */}
            <div className="p-12 text-center">
              <h3 className="text-2xl font-bold text-slate-900">
                {current.name}
              </h3>

              <p className="text-[#b11217] font-semibold mt-2">
                {current.role}
              </p>

              <p className="text-xs text-slate-500 mt-1">
                {current.degree}
              </p>

              <p className="mt-6 text-slate-600 text-sm italic leading-relaxed">
                “{current.quote}”
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <SideCard data={right} position="translate-x-[420px]" />

        {/* ARROWS */}
        <button
          onClick={prev}
          className="absolute left-6 md:left-16 bg-white p-4 rounded-full
                     shadow-xl hover:bg-[#b11217] hover:text-white transition"
        >
          <FaChevronLeft />
        </button>

        <button
          onClick={next}
          className="absolute right-6 md:right-16 bg-white p-4 rounded-full
                     shadow-xl hover:bg-[#b11217] hover:text-white transition"
        >
          <FaChevronRight />
        </button>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-3 mt-16">
        {alumni.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index
                ? "bg-[#b11217] scale-125"
                : "bg-slate-300 hover:bg-slate-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* SIDE CARD */
function SideCard({ data, position }) {
  return (
    <div
      className={`hidden md:block absolute ${position}
                  opacity-70 scale-105 transition-all duration-500`}
    >
      <div className="w-[360px] bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="relative h-[180px]">
          <img
            src={data.image}
            alt={data.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="p-8 text-center">
          <h4 className="text-lg font-semibold text-slate-800">
            {data.name}
          </h4>
          <p className="text-sm text-slate-500 mt-1">
            {data.role}
          </p>
        </div>
      </div>
    </div>
  );
}
