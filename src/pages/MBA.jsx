import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* =====================================================
   MBA – ACADEMIC PAGE
   (Same style as Applied Sciences & Civil Engineering)
===================================================== */

export default function MBA() {
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
              Business Administration (MBA)
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
            <Section title="About the Programme">
              <p>
                The MBA programme of Rajarshi Rananjay Sinh Institute of
                Management & Technology (RRSIMT) is a full-time two-year
                postgraduate course designed to develop skilled and competent
                management professionals capable of handling dynamic business
                environments.
              </p>

              <p>
                The programme focuses on developing managerial decision-making,
                leadership qualities, emotional intelligence, teamwork,
                communication skills, and ethical values required for long-term
                organizational success.
              </p>

              <p>
                Industry-oriented training, management fests, group discussions,
                mock interviews, business quizzes, and internships are integral
                parts of the MBA curriculum at RRSIMT.
              </p>
            </Section>

            {/* VISION */}
            <Section title="Vision">
              <p>
                To nurture competent, ethical, and socially responsible
                management professionals who can face global business challenges
                with confidence and integrity.
              </p>
            </Section>

            {/* MISSION */}
            <Section title="Mission">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Prepare skilled management professionals through quality and
                  research-oriented education.
                </li>
                <li>
                  Inculcate professional excellence with strong ethical and
                  moral values.
                </li>
                <li>
                  Encourage innovation, entrepreneurship, and continuous
                  learning.
                </li>
                <li>
                  Strengthen industry–academia interaction through internships,
                  training, and collaborations.
                </li>
                <li>
                  Develop leadership, analytical, communication, and
                  decision-making skills.
                </li>
              </ul>
            </Section>

            {/* PROGRAM EDUCATIONAL OBJECTIVES */}
            <Section title="Program Educational Objectives (PEOs)">
              <ul className="list-disc list-inside space-y-2">
                <li>
                  Apply management principles to solve real-world business
                  problems.
                </li>
                <li>
                  Demonstrate leadership, teamwork, and effective communication
                  in professional environments.
                </li>
                <li>
                  Practice ethical behavior and social responsibility in
                  managerial roles.
                </li>
                <li>
                  Adapt to technological advancements and evolving business
                  environments.
                </li>
              </ul>
            </Section>

            {/* PROGRAM OUTCOMES */}
            <Section title="Program Outcomes (POs)">
              <ul className="space-y-4">
                <li>
                  <strong>PO1:</strong> Apply management theories and concepts to
                  analyze and solve business problems.
                </li>
                <li>
                  <strong>PO2:</strong> Identify and evaluate strategic
                  alternatives using analytical tools.
                </li>
                <li>
                  <strong>PO3:</strong> Demonstrate leadership, teamwork, and
                  decision-making abilities.
                </li>
                <li>
                  <strong>PO4:</strong> Communicate effectively with
                  stakeholders through reports and presentations.
                </li>
                <li>
                  <strong>PO5:</strong> Exhibit ethical behavior, integrity, and
                  professional responsibility.
                </li>
                <li>
                  <strong>PO6:</strong> Engage in continuous learning to adapt to
                  changing business environments.
                </li>
              </ul>
            </Section>

            {/* SPECIALIZATIONS */}
            <Section title="Specializations Offered">
              <ul className="list-disc list-inside space-y-2">
                <li>Marketing Management</li>
                <li>Human Resource Management</li>
                <li>Finance Management</li>
                <li>Operations Management</li>
                <li>International Business</li>
                <li>Information Technology</li>
              </ul>
            </Section>

            {/* CAREER OPPORTUNITIES */}
            <Section title="Career Opportunities">
              <ul className="list-disc list-inside space-y-2">
                <li>Marketing Manager</li>
                <li>HR Manager</li>
                <li>Finance Manager / Financial Analyst</li>
                <li>Operations Manager</li>
                <li>Business Analyst</li>
                <li>Management Consultant</li>
                <li>Entrepreneur / Startup Founder</li>
                <li>Senior Leadership Roles (CEO, CFO, COO)</li>
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
