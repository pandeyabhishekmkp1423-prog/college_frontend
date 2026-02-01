import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =====================================================
   MECHANICAL ENGINEERING
   Academic Department Page (NOT a landing page)
===================================================== */

export default function MechanicalEngineering() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-100 py-14">
        <div className="max-w-5xl mx-auto px-4">

          {/* PAGE HEADER */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#b11217]">
              Mechanical Engineering
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
                Mechanical Engineering is often referred to as the mother of all
                engineering disciplines. It is one of the oldest and broadest
                branches of engineering, dealing with the design, analysis,
                manufacturing, and maintenance of mechanical systems.
              </p>

              <p>
                The Department of Mechanical Engineering at RRSIMT was established
                in 2008 with a focus on delivering strong theoretical foundations
                combined with hands-on practical training.
              </p>

              <p>
                The department is equipped with modern laboratories and workshops
                covering materials testing, fluid mechanics, heat transfer,
                machine theory, welding, carpentry, forging, and machining. These
                facilities ensure students gain industry-ready skills.
              </p>

              <p>
                Graduates from the department have consistently secured
                placements in leading automotive, manufacturing, energy, and
                design organizations.
              </p>
            </Section>

            {/* VISION */}
            <Section title="Vision">
              <p>
                To produce professionally competent, socially sensitive, and
                ethically responsible mechanical engineers capable of working in
                a multicultural global environment, and to emerge as a leading
                institution in professional education, research, and innovation.
              </p>
            </Section>

            {/* MISSION */}
            <Section title="Mission">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Assist students in acquiring strong theoretical and practical
                  knowledge in Mechanical Engineering.
                </li>
                <li>
                  Develop globally competent engineers to address societal and
                  industrial needs.
                </li>
                <li>
                  Nurture students with up-to-date technological skills aligned
                  with national and regional priorities.
                </li>
                <li>
                  Impart value-based quality education for industry and societal
                  service.
                </li>
                <li>
                  Encourage continuous professional development of faculty.
                </li>
                <li>
                  Promote innovation, entrepreneurship, and consultancy.
                </li>
                <li>
                  Implement outcome-based innovative teaching–learning practices.
                </li>
              </ul>
            </Section>

            {/* PEOs */}
            <Section title="Program Educational Objectives (PEOs)">
              <ul className="space-y-3">
                <li>
                  <strong>PEO 1:</strong> Excel in professional careers or higher
                  education through strong fundamentals in Mechanical
                  Engineering.
                </li>
                <li>
                  <strong>PEO 2:</strong> Analyze real-world engineering problems
                  and develop sustainable, economical, and socially acceptable
                  solutions.
                </li>
                <li>
                  <strong>PEO 3:</strong> Demonstrate professional ethics and
                  responsibility.
                </li>
                <li>
                  <strong>PEO 4:</strong> Exhibit effective communication,
                  teamwork, and multidisciplinary skills.
                </li>
                <li>
                  <strong>PEO 5:</strong> Relate engineering solutions to broader
                  societal contexts.
                </li>
              </ul>
            </Section>

            {/* PROGRAM OUTCOMES */}
            <Section title="Program Outcomes (POs)">
              <div className="space-y-4">
                <p><strong>PO1:</strong> Apply mathematics, science, and engineering fundamentals to solve complex problems.</p>
                <p><strong>PO2:</strong> Analyze complex engineering problems using scientific principles.</p>
                <p><strong>PO3:</strong> Design systems and processes meeting specified needs.</p>
                <p><strong>PO4:</strong> Conduct experiments and analyze data for valid conclusions.</p>
                <p><strong>PO5:</strong> Use modern engineering tools and software.</p>
                <p><strong>PO6:</strong> Assess societal, safety, legal, and cultural impacts.</p>
                <p><strong>PO7:</strong> Promote sustainable development.</p>
                <p><strong>PO8:</strong> Apply professional ethics and responsibilities.</p>
                <p><strong>PO9:</strong> Work effectively as an individual and team member.</p>
                <p><strong>PO10:</strong> Communicate effectively with engineering and societal audiences.</p>
                <p><strong>PO11:</strong> Apply project management and financial principles.</p>
                <p><strong>PO12:</strong> Engage in lifelong learning.</p>
              </div>
            </Section>

            {/* PSOs */}
            <Section title="Program Specific Outcomes (PSOs)">
              <ul className="list-disc list-inside space-y-2">
                <li>Analyze and design mechanical systems using core principles.</li>
                <li>Apply CAD/CAE tools and manufacturing techniques.</li>
                <li>Develop and evaluate thermal and energy systems.</li>
                <li>Select materials and assess structural behavior.</li>
                <li>Implement automation and control solutions.</li>
                <li>Solve industrial problems and pursue higher studies or research.</li>
              </ul>
            </Section>

            {/* CAREER */}
            <Section title="Career Opportunities">
              <ul className="list-disc list-inside space-y-2">
                <li>Design Engineer</li>
                <li>Manufacturing / Production Engineer</li>
                <li>Maintenance Engineer</li>
                <li>Quality Control / Quality Assurance Engineer</li>
                <li>Thermal / HVAC Engineer</li>
                <li>Automotive & EV Engineer</li>
                <li>Aerospace & Defense Engineer</li>
                <li>Robotics & Automation Engineer</li>
                <li>Simulation / CAE Engineer</li>
                <li>Research Scientist / Academician</li>
                <li>Entrepreneurship & Startups</li>
                <li>Government & PSU Services</li>
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
