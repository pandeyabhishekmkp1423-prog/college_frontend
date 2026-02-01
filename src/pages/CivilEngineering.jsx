import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =====================================================
   CIVIL ENGINEERING – ACADEMIC PAGE
   (Styled like Applied Sciences & Humanities)
===================================================== */

export default function CivilEngineering() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <Navbar />

      {/* ================= PAGE BODY ================= */}
      <section className="bg-slate-100 py-14">
        <div className="max-w-5xl mx-auto px-4">

          {/* PAGE TITLE */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#b11217]">
              Department of Civil Engineering
            </h1>
            <p className="text-slate-600 mt-2">
              Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi
            </p>
          </div>

          {/* CONTENT CARD */}
          <div
            className="
              bg-white rounded-xl shadow-xl
              border-2 border-[#b11217]/50
              overflow-hidden
            "
          >

            {/* ABOUT */}
            <Section title="About the Department">
              <p>
                The Civil Engineering Department of Rajarshi Rananjay Sinh Institute
                of Management & Technology (RRSIMT), Amethi offers the Bachelor of
                Technology (B.Tech.) program in Civil Engineering, affiliated to
                Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow and
                approved by AICTE, New Delhi.
              </p>

              <p>
                The curriculum is designed as per AKTU guidelines with strong
                emphasis on Structural Engineering, Geotechnical Engineering,
                Transportation Engineering, Environmental Engineering, and
                Surveying. Well-equipped laboratories ensure hands-on learning.
              </p>

              <p>
                The department is supported by experienced faculty members and
                focuses on industrial visits, workshops, seminars, and project-
                based learning to bridge the gap between theory and practice.
              </p>
            </Section>

            {/* VISION */}
            <Section title="Vision">
              <p>
                To become a centre of excellence in civil engineering education by
                imparting quality technical knowledge, fostering innovation and
                research, and developing competent professionals capable of
                contributing to sustainable infrastructure development.
              </p>
            </Section>

            {/* MISSION */}
            <Section title="Mission">
              <ul className="list-disc list-inside space-y-2">
                <li>Provide strong fundamentals in civil engineering education.</li>
                <li>
                  Encourage practical learning through projects, laboratory work,
                  and site visits.
                </li>
                <li>
                  Enhance technical skills aligned with current industry practices.
                </li>
                <li>
                  Promote professional ethics, teamwork, and responsible
                  engineering practices.
                </li>
                <li>
                  Support students for higher studies and career development.
                </li>
              </ul>
            </Section>

            {/* PROGRAM EDUCATIONAL OBJECTIVES */}
            <Section title="Program Educational Objectives (PEOs)">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Apply fundamental knowledge of civil engineering to solve
                  real-world engineering problems.
                </li>
                <li>
                  Develop professional competence for construction, consultancy,
                  and infrastructure sectors.
                </li>
                <li>
                  Demonstrate ethical responsibility and teamwork in professional
                  practice.
                </li>
                <li>
                  Engage in continuous learning and career advancement.
                </li>
              </ul>
            </Section>

            {/* PROGRAM OUTCOMES */}
            <Section title="Program Outcomes (POs)">
              <ul className="space-y-4">
                <li>
                  <strong>Engineering Knowledge:</strong> Apply mathematics,
                  science, and engineering fundamentals to civil engineering
                  problems.
                </li>
                <li>
                  <strong>Problem Analysis:</strong> Identify and analyze civil
                  engineering problems using appropriate methods.
                </li>
                <li>
                  <strong>Design & Development:</strong> Design systems considering
                  safety, economy, and societal needs.
                </li>
                <li>
                  <strong>Modern Tool Usage:</strong> Use modern tools and software
                  effectively.
                </li>
                <li>
                  <strong>Ethics & Society:</strong> Apply professional ethics and
                  understand societal responsibilities.
                </li>
                <li>
                  <strong>Life-long Learning:</strong> Engage in continuous
                  professional development.
                </li>
              </ul>
            </Section>

            {/* CAREER OPPORTUNITIES */}
            <Section title="Career Opportunities">
              <ul className="list-disc list-inside space-y-2">
                <li>Site Engineer / Project Engineer</li>
                <li>Design & Structural Engineer</li>
                <li>Planning and Billing Engineer</li>
                <li>Quality Control Engineer</li>
                <li>Government Services (PWD, CPWD, Railways)</li>
                <li>Higher Studies (M.Tech / Ph.D.)</li>
                <li>Entrepreneurship and Consultancy</li>
              </ul>
            </Section>

          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

/* ================= SECTION HELPER ================= */

function Section({ title, children }) {
  return (
    <div className="px-6 py-8 border-b-2 border-slate-200 last:border-b-0">
      <h2 className="text-lg font-bold text-[#b11217] mb-6 uppercase tracking-wide">
        {title}
      </h2>
      <div className="space-y-4 text-slate-700">{children}</div>
    </div>
  );
}
