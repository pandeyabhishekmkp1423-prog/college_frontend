import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =====================================================
   ELECTRONICS & COMMUNICATION ENGINEERING
   Academic Page – NOT a landing page
===================================================== */

export default function ElectronicsCommunication() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-100 py-14">
        <div className="max-w-5xl mx-auto px-4">

          {/* PAGE TITLE */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#b11217]">
              Electronics & Communication Engineering
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
                The Department of Electronics & Communication Engineering (ECE)
                at RRSIMT, Amethi is committed to imparting quality technical
                education and fostering innovation in the rapidly evolving
                field of electronics and communication.
              </p>

              <p>
                The curriculum prescribed by AKTU balances strong theoretical
                foundations with hands-on laboratory work in analog and digital
                electronics, communication systems, signal processing,
                microprocessors, VLSI, embedded systems, and modern
                communication technologies.
              </p>

              <p>
                Well-equipped laboratories, experienced faculty, and a
                learner-centric teaching approach enable students to
                participate actively in projects, seminars, internships,
                technical competitions, and industrial training.
              </p>
            </Section>

            {/* VISION */}
            <Section title="Vision">
              <p>
                To become a center of excellence in Electronics and Communication
                Engineering by producing technically competent, ethically
                responsible, and socially conscious engineers capable of
                contributing to industry, research, and sustainable development
                in a rapidly changing global environment.
              </p>
            </Section>

            {/* MISSION */}
            <Section title="Mission">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Provide strong fundamentals in electronics and communication
                  engineering through quality teaching-learning practices.
                </li>
                <li>
                  Promote hands-on learning, innovation, and problem-solving
                  skills through laboratories and projects.
                </li>
                <li>
                  Encourage the use of modern tools and emerging technologies
                  in education and research.
                </li>
                <li>
                  Instill ethical values, professionalism, and social
                  responsibility among students.
                </li>
                <li>
                  Prepare graduates for employment, entrepreneurship, higher
                  studies, and lifelong learning.
                </li>
                <li>
                  Foster collaboration with industry and academia.
                </li>
              </ul>
            </Section>

            {/* PEOs */}
            <Section title="Program Educational Objectives (PEOs)">
              <ul className="space-y-3">
                <li>
                  <strong>PEO 1:</strong> Apply core engineering knowledge to
                  solve real-world problems.
                </li>
                <li>
                  <strong>PEO 2:</strong> Pursue successful careers or higher
                  education.
                </li>
                <li>
                  <strong>PEO 3:</strong> Demonstrate ethics, teamwork, and
                  effective communication skills.
                </li>
                <li>
                  <strong>PEO 4:</strong> Engage in lifelong learning and
                  professional development.
                </li>
              </ul>
            </Section>

            {/* PROGRAM OUTCOMES */}
            <Section title="Program Outcomes (POs)">
              <ul className="list-disc list-inside space-y-2">
                <li>PO1 – Engineering Knowledge</li>
                <li>PO2 – Problem Analysis</li>
                <li>PO3 – Design / Development of Solutions</li>
                <li>PO4 – Conduct Investigations</li>
                <li>PO5 – Modern Tool Usage</li>
                <li>PO6 – Engineer and Society</li>
                <li>PO7 – Environment and Sustainability</li>
                <li>PO8 – Ethics</li>
                <li>PO9 – Individual and Team Work</li>
                <li>PO10 – Communication</li>
                <li>PO11 – Project Management and Finance</li>
                <li>PO12 – Life-long Learning</li>
              </ul>
            </Section>

            {/* PSOs */}
            <Section title="Program Specific Outcomes (PSOs)">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Apply knowledge of analog and digital electronic systems.
                </li>
                <li>
                  Design embedded systems and microprocessor-based applications.
                </li>
                <li>
                  Develop and analyze communication systems.
                </li>
                <li>
                  Use modern engineering and simulation tools effectively.
                </li>
                <li>
                  Integrate interdisciplinary knowledge for problem solving.
                </li>
              </ul>
            </Section>

            {/* CAREERS */}
            <Section title="Career Opportunities">
              <ul className="list-disc list-inside space-y-2">
                <li>Electronics Engineer</li>
                <li>Telecommunication Engineer</li>
                <li>Embedded Systems Engineer</li>
                <li>VLSI Design Engineer</li>
                <li>Network Engineer</li>
                <li>IoT Engineer</li>
                <li>Research & Higher Studies</li>
                <li>Government & PSU Jobs</li>
                <li>Entrepreneurship</li>
              </ul>
            </Section>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ================= REUSABLE SECTION ================= */

function Section({ title, children }) {
  return (
    <div className="px-6 py-8 border-b-2 border-slate-200 last:border-b-0">
      <h2 className="text-lg font-bold text-[#b11217] mb-6 uppercase tracking-wide">
        {title}
      </h2>
      <div className="text-slate-700 space-y-4">
        {children}
      </div>
    </div>
  );
}
