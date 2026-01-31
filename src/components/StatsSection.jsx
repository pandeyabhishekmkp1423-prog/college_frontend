export default function StatsSection() {
  const stats = [
    {
      value: "25+",
      label: "Years of Excellence",
      sub: "In higher education",
    },
    {
      value: "120+",
      label: "Academic Programs",
      sub: "UG & PG Courses",
    },
    {
      value: "18,000+",
      label: "Students Enrolled",
      sub: "Across multiple disciplines",
    },
    {
      value: "96%",
      label: "Placement Rate",
      sub: "With reputed recruiters",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT : IMAGE */}
          <div className="relative">
            <div className="absolute -top-8 -left-8 w-40 h-40 bg-[#b11217]/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-[#f2b705]/20 rounded-full blur-2xl" />

            <img
              src="https://images.unsplash.com/photo-1586760517845-88f3ea745618?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="RRSIMT Campus"
              className="relative z-10 rounded-2xl shadow-2xl w-full object-cover"
            />
          </div>

          {/* RIGHT : CONTENT */}
          <div>

            {/* TITLE */}
            <span className="inline-block mb-4 px-4 py-1
                             text-xs font-semibold tracking-widest uppercase
                             rounded-full bg-[#b11217]/10 text-[#b11217]">
              Our Legacy
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
              Building Careers at <span className="text-[#b11217]">RRSIMT</span>
            </h2>

            {/* RUNNING / FLOW TEXT */}
            <div className="relative overflow-hidden border-l-4 border-[#b11217] pl-4 mb-8">
              <p className="text-slate-600 leading-relaxed text-lg animate-pulse">
                Rajarshi Rananjay Sinh Institute of Management & Technology is
                committed to delivering value-driven education through
                experienced faculty, modern infrastructure, industry-oriented
                curriculum, and disciplined academic culture — preparing
                students not just for jobs, but for lifelong careers.
              </p>
            </div>

            {/* STATS CARDS */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              {stats.map((item, index) => (
                <div
                  key={index}
                  className="
                    bg-white border border-slate-200
                    rounded-xl p-6
                    shadow-sm hover:shadow-xl
                    transition-all duration-300
                  "
                >
                  <div className="text-3xl font-extrabold text-[#b11217] mb-1">
                    {item.value}
                  </div>

                  <div className="font-semibold text-slate-900">
                    {item.label}
                  </div>

                  <div className="text-sm text-slate-500 mt-1">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
