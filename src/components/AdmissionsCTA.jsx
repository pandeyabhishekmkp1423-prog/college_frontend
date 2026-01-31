import { Link } from "react-router-dom";

export default function AdmissionsCTA() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* OUTER CARD */}
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl border border-slate-200">

          {/* BACKGROUND STRIPE */}
          <div className="absolute inset-y-0 left-0 w-3 bg-[#b11217]" />

          <div className="relative grid lg:grid-cols-2 gap-12 p-10 lg:p-14">

            {/* LEFT CONTENT */}
            <div>
              <span className="inline-block mb-4 px-4 py-1 text-xs font-semibold
                               tracking-widest uppercase
                               bg-[#b11217]/10 text-[#b11217]
                               rounded-full">
                Admissions 2026
              </span>

              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                Begin Your Academic Journey at <br />
                <span className="text-[#b11217]">
                  RRSIMT, Amethi
                </span>
              </h2>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Rajarshi Rananjay Sinh Institute of Management & Technology
                offers industry-relevant programs, experienced faculty,
                and a disciplined academic environment that prepares
                students for real-world success.
              </p>

              {/* CTA BUTTONS */}
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/enquiry"
                  className="bg-[#b11217] text-white px-8 py-3
                             rounded-md font-semibold
                             shadow-lg hover:bg-[#8e0d12]
                             transition"
                >
                  Apply for Admission
                </Link>

                <Link
                  to="/courses"
                  className="border-2 border-[#b11217]
                             text-[#b11217]
                             px-8 py-3 rounded-md
                             font-semibold
                             hover:bg-[#b11217]
                             hover:text-white
                             transition"
                >
                  Explore Courses
                </Link>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="grid sm:grid-cols-2 gap-6">

              <StatCard
                title="AICTE Approved"
                value="100%"
                desc="All programs approved by AICTE & affiliated to AKTU"
              />

              <StatCard
                title="Placement Support"
                value="Strong"
                desc="Dedicated training & placement cell"
              />

              <StatCard
                title="Modern Campus"
                value="20+ Acres"
                desc="Well-equipped labs & academic infrastructure"
              />

              <StatCard
                title="Student Focus"
                value="Holistic"
                desc="Academic, professional & personal development"
              />

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= HELPERS ================= */

function StatCard({ title, value, desc }) {
  return (
    <div className="
      border border-slate-200 rounded-xl p-6
      bg-slate-50 hover:bg-white
      hover:shadow-lg transition
    ">
      <h4 className="text-sm font-semibold text-[#b11217] uppercase mb-2">
        {title}
      </h4>
      <div className="text-3xl font-extrabold text-slate-900 mb-2">
        {value}
      </div>
      <p className="text-sm text-slate-600 leading-relaxed">
        {desc}
      </p>
    </div>
  );
}
