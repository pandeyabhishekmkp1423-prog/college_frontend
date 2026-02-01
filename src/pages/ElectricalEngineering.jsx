import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =====================================================
   ELECTRICAL ENGINEERING
   Academic Page – NOT a landing page
===================================================== */

export default function ElectricalEngineering() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-100 py-14">
        <div className="max-w-5xl mx-auto px-4">

          {/* PAGE TITLE */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#b11217]">
              Electrical Engineering
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
                The Department of Electrical Engineering is committed to excellence
                in teaching, research, and innovation to meet the evolving needs
                of industry and society.
              </p>

              <p>
                The department offers a strong foundation in Basic Electrical
                Engineering, Electrical Machines, Power Systems, Power Electronics
                and Drives, Control Systems, Renewable Energy, and Smart Grid
                technologies, aligned with NBA and Outcome-Based Education (OBE).
              </p>

              <p>
                With well-equipped laboratories, experienced faculty, and modern
                simulation tools, students gain hands-on exposure through
                projects, internships, research activities, and professional
                society engagements such as IEEE, IEI, and ISTE.
              </p>
            </Section>

            {/* VISION */}
            <Section title="Vision">
              <p>
                To create a centre of excellence in Electrical Engineering
                education and research by producing competent, ethical, and
                industry-ready engineers capable of addressing challenges in
                power systems, renewable energy, automation, and smart grid
                technologies for sustainable development.
              </p>
            </Section>

            {/* MISSION */}
            <Section title="Mission">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>M1:</strong> Impart strong fundamentals in electrical
                  engineering through effective teaching–learning practices.
                </li>
                <li>
                  <strong>M2:</strong> Promote analytical thinking and use of
                  modern engineering tools.
                </li>
                <li>
                  <strong>M3:</strong> Encourage research and innovation in
                  renewable and sustainable energy sectors.
                </li>
                <li>
                  <strong>M4:</strong> Inculcate professional ethics, teamwork,
                  leadership, and lifelong learning.
                </li>
              </ul>
            </Section>

            {/* PEOs */}
            <Section title="Program Educational Objectives (PEOs)">
              <ul className="space-y-3">
                <li>
                  <strong>PEO 1:</strong> Apply fundamentals of electrical
                  engineering to analyze and solve real-world problems.
                </li>
                <li>
                  <strong>PEO 2:</strong> Design, operate, and maintain electrical
                  systems using modern tools.
                </li>
                <li>
                  <strong>PEO 3:</strong> Adapt to emerging technologies such as
                  renewable energy and smart grids.
                </li>
                <li>
                  <strong>PEO 4:</strong> Exhibit professional ethics, teamwork,
                  communication, and leadership skills.
                </li>
              </ul>
            </Section>

            {/* PROGRAM OUTCOMES */}
            <Section title="Program Outcomes (POs)">
              <div className="space-y-4">
                <p><strong>PO1:</strong> Apply mathematics, science, and electrical engineering fundamentals.</p>
                <p><strong>PO2:</strong> Analyze complex electrical engineering problems.</p>
                <p><strong>PO3:</strong> Design solutions considering safety, societal, and environmental factors.</p>
                <p><strong>PO4:</strong> Conduct investigations using experiments and data analysis.</p>
                <p><strong>PO5:</strong> Use modern tools such as MATLAB, ETAP, PSCAD, and AutoCAD.</p>
                <p><strong>PO6:</strong> Assess societal, legal, and cultural responsibilities.</p>
                <p><strong>PO7:</strong> Understand sustainability and renewable energy systems.</p>
                <p><strong>PO8:</strong> Apply professional ethics.</p>
                <p><strong>PO9:</strong> Work effectively in multidisciplinary teams.</p>
                <p><strong>PO10:</strong> Communicate effectively through reports and presentations.</p>
                <p><strong>PO11:</strong> Apply project management and finance principles.</p>
                <p><strong>PO12:</strong> Engage in lifelong learning.</p>
              </div>
            </Section>

            {/* PSOs */}
            <Section title="Program Specific Outcomes (PSOs)">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Analyze and design electrical machines, power systems, and
                  power electronic converters.
                </li>
                <li>
                  Apply control systems, renewable energy, automation, and smart
                  grid concepts for sustainable solutions.
                </li>
              </ul>
            </Section>

            {/* CAREERS */}
            <Section title="Career Opportunities">
              <ul className="list-disc list-inside space-y-2">
                <li>Power Generation, Transmission & Distribution Companies</li>
                <li>Renewable Energy Industries (Solar & Wind)</li>
                <li>Electrical Machines & Manufacturing Industries</li>
                <li>Power Electronics, Automation & Control Industries</li>
                <li>Smart Grid & Electric Vehicle Industries</li>
                <li>Government Organizations (PSUs, Railways, Defense, ISRO)</li>
                <li>IT & Embedded Systems</li>
                <li>Research & Development</li>
                <li>Higher Education & Academia</li>
                <li>Entrepreneurship & Startups</li>
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
      <div className="text-slate-700 space-y-4">{children}</div>
    </div>
  );
}
