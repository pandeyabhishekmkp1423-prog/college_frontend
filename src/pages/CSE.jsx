import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =====================================================
   COMPUTER SCIENCE & ENGINEERING (CSE)
   Academic Page – NOT a landing page
===================================================== */

export default function CSE() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-100 py-14">
        <div className="max-w-5xl mx-auto px-4">

          {/* PAGE TITLE */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#b11217]">
              Computer Science & Engineering (CSE)
            </h1>
            <p className="text-slate-600 mt-2">
              Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi
            </p>
          </div>

          {/* MAIN CARD */}
          <div className="bg-white rounded-xl shadow-xl border-2 border-[#b11217]/50 overflow-hidden">

            {/* ABOUT */}
            <Section title="About the Department">
              <p>
                The Department of Computer Science & Engineering (CSE) at
                Rajarshi Rananjay Sinh Institute of Management & Technology
                (RRSIMT), Amethi aims to emerge as a premier center of academic
                excellence in computing education, innovation, and research.
              </p>

              <p>
                The department is supported by experienced faculty members and
                state-of-the-art laboratories equipped with high-performance
                computing systems and modern software tools. Students are
                encouraged to participate in hackathons, coding competitions,
                technical seminars, and interdisciplinary projects.
              </p>

              <p>
                Emphasis is laid on producing industry-ready professionals who
                are ethically strong, socially responsible, and capable of
                solving complex technological challenges.
              </p>
            </Section>

            {/* VISION */}
            <Section title="Vision">
              <p>
                To emerge as a premier center of academic excellence in Computer
                Science & Engineering, fostering innovation and research, and
                producing globally competent professionals contributing to
                technological and socio-economic development.
              </p>
            </Section>

            {/* MISSION */}
            <Section title="Mission">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Impart high-quality technical education through innovative
                  teaching-learning methodologies.
                </li>
                <li>
                  Provide state-of-the-art infrastructure and laboratory
                  facilities aligned with industry needs.
                </li>
                <li>
                  Promote research and development to address societal
                  challenges.
                </li>
                <li>
                  Inculcate ethical values, leadership skills, and lifelong
                  learning.
                </li>
                <li>
                  Strengthen industry–institute interaction to enhance
                  employability and entrepreneurship.
                </li>
              </ul>
            </Section>

            {/* PEOs */}
            <Section title="Program Educational Objectives (PEOs)">
              <ul className="space-y-3">
                <li>
                  <strong>PEO 1:</strong> Exhibit professional competency in
                  analysis, design, and development of computing systems.
                </li>
                <li>
                  <strong>PEO 2:</strong> Adapt to evolving technologies through
                  continuous learning and higher education.
                </li>
                <li>
                  <strong>PEO 3:</strong> Demonstrate leadership, communication,
                  and ethical responsibility.
                </li>
                <li>
                  <strong>PEO 4:</strong> Contribute to industry and society as
                  professionals or entrepreneurs.
                </li>
              </ul>
            </Section>

            {/* PROGRAM OUTCOMES */}
            <Section title="Program Outcomes (POs)">
              <div className="space-y-4">
                <p><strong>PO1:</strong> Apply mathematics, science, and computing fundamentals to solve complex problems.</p>
                <p><strong>PO2:</strong> Analyze computing problems using first principles and research literature.</p>
                <p><strong>PO3:</strong> Design and develop systems considering safety, ethics, and societal norms.</p>
                <p><strong>PO4:</strong> Conduct investigations using experiments and data analysis.</p>
                <p><strong>PO5:</strong> Use modern engineering and IT tools effectively.</p>
                <p><strong>PO6:</strong> Apply ethical principles and professional responsibilities.</p>
                <p><strong>PO7:</strong> Work effectively as an individual and in multidisciplinary teams.</p>
                <p><strong>PO8:</strong> Communicate effectively with technical and non-technical stakeholders.</p>
                <p><strong>PO9:</strong> Engage in independent and lifelong learning.</p>
              </div>
            </Section>

            {/* PSOs */}
            <Section title="Program Specific Outcomes (PSOs)">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Apply standard practices in software development and system
                  design.
                </li>
                <li>
                  Design computing solutions in algorithms, networking, web,
                  cloud, and data analytics.
                </li>
                <li>
                  Apply emerging technologies like AI, ML, IoT to solve
                  interdisciplinary problems.
                </li>
                <li>
                  Use modern programming environments for innovation and
                  entrepreneurship.
                </li>
              </ul>
            </Section>

            {/* CAREER */}
            <Section title="Career Opportunities">
              <ul className="list-disc list-inside space-y-2">
                <li>Software Engineer / Developer</li>
                <li>Full Stack Developer</li>
                <li>System Analyst</li>
                <li>Database Administrator</li>
                <li>Network Architect</li>
                <li>AI / Machine Learning Engineer</li>
                <li>Cyber Security Analyst</li>
                <li>Cloud Solutions Architect</li>
                <li>Research Scientist</li>
              </ul>
            </Section>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ================= SECTION COMPONENT ================= */

function Section({ title, children }) {
  return (
    <div className="px-6 py-8 border-b-2 border-slate-200 last:border-b-0">
      <h2 className="text-lg font-bold text-[#b11217] mb-6 uppercase tracking-wide">
        {title}
      </h2>
      <div className="text-slate-700 space-y-4">{children}</div>
    </div>
  );
}
