import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =====================================================
   INFORMATION TECHNOLOGY
   Academic Department Page (NOT a landing page)
===================================================== */

export default function InformationTechnology() {
  return (
    <>
      <Navbar />

      <section className="bg-slate-100 py-14">
        <div className="max-w-5xl mx-auto px-4">

          {/* PAGE HEADER */}
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#b11217]">
              Information Technology
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
                The Department of Information Technology (IT) is dedicated to
                equipping students with the skills required to manage and
                process information in today’s digital economy. Unlike
                traditional computer engineering, the IT program emphasizes
                applying technology to solve business and organizational
                problems.
              </p>

              <p>
                The department focuses on networking, web technologies,
                database management, information security, and IT
                infrastructure. Students gain a deep understanding not only
                of software development but also of the systems and networks
                that power global communication.
              </p>

              <p>
                A dynamic curriculum, advanced laboratories, and expert
                faculty ensure a balance between theory and practice,
                preparing students to design, implement, and manage robust
                IT solutions across industries.
              </p>
            </Section>

            {/* VISION */}
            <Section title="Vision">
              <p>
                To be a leading department in Information Technology education,
                producing globally competent professionals with strong
                technical acumen and ethical values, and contributing to
                society through secure, sustainable, and innovative IT
                solutions.
              </p>
            </Section>

            {/* MISSION */}
            <Section title="Mission">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Provide a robust academic environment encouraging technical
                  excellence and creative thinking.
                </li>
                <li>
                  Equip students with modern IT tools and technologies through
                  hands-on training and industry-aligned projects.
                </li>
                <li>
                  Promote ethical practices and social responsibility among
                  future IT professionals.
                </li>
                <li>
                  Facilitate research and development in emerging IT domains.
                </li>
                <li>
                  Enhance employability through communication, teamwork, and
                  leadership skill development.
                </li>
                <li>
                  Strengthen industry–institute partnerships for internships,
                  training, and placements.
                </li>
              </ul>
            </Section>

            {/* PEOs */}
            <Section title="Program Educational Objectives (PEOs)">
              <ul className="space-y-3">
                <li>
                  <strong>PEO 1:</strong> Build successful careers in the IT
                  industry by applying information technology principles to
                  solve business problems.
                </li>
                <li>
                  <strong>PEO 2:</strong> Analyze, design, and manage complex IT
                  systems and infrastructure.
                </li>
                <li>
                  <strong>PEO 3:</strong> Engage in lifelong learning to stay
                  current with emerging technologies.
                </li>
                <li>
                  <strong>PEO 4:</strong> Practice IT professions with ethical
                  standards, social responsibility, and effective
                  communication.
                </li>
              </ul>
            </Section>

            {/* PROGRAM OUTCOMES */}
            <Section title="Program Outcomes (POs)">
              <div className="space-y-4">
                <p><strong>PO1:</strong> Apply mathematics, science, and IT fundamentals to solve complex information management problems.</p>
                <p><strong>PO2:</strong> Design solutions for complex IT problems considering safety, legal, and societal needs.</p>
                <p><strong>PO3:</strong> Investigate complex IT issues using research-based methods and data analysis.</p>
                <p><strong>PO4:</strong> Use modern IT tools, IDEs, and testing frameworks effectively.</p>
                <p><strong>PO5:</strong> Assess societal, legal, and cultural issues relevant to professional IT practice.</p>
                <p><strong>PO6:</strong> Understand environmental impact and promote sustainable IT (Green IT).</p>
                <p><strong>PO7:</strong> Apply ethical principles, especially related to data privacy and cyber laws.</p>
                <p><strong>PO8:</strong> Work effectively in teams using agile methodologies.</p>
                <p><strong>PO9:</strong> Communicate effectively through documentation, reports, and presentations.</p>
                <p><strong>PO10:</strong> Apply project management and financial principles in multidisciplinary projects.</p>
              </div>
            </Section>

            {/* PSOs */}
            <Section title="Program Specific Outcomes (PSOs)">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Design and maintain reliable IT infrastructure using
                  networking, data management, and security principles.
                </li>
                <li>
                  Develop and deploy web and mobile applications using modern
                  frameworks and technologies.
                </li>
                <li>
                  Utilize cloud computing and virtualization for efficient
                  resource management.
                </li>
                <li>
                  Implement cybersecurity measures to protect organizational
                  data and assets.
                </li>
              </ul>
            </Section>

            {/* CAREER */}
            <Section title="Career Opportunities">
              <ul className="list-disc list-inside space-y-2">
                <li>IT Consultant</li>
                <li>Network Administrator</li>
                <li>Web Developer</li>
                <li>Information Systems Manager</li>
                <li>Cloud Architect</li>
                <li>Database Analyst</li>
                <li>Quality Assurance (QA) Engineer</li>
                <li>Technical Support Engineer</li>
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
