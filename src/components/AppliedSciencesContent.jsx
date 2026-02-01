export default function AppliedSciencesContent() {
  return (
    <section className="bg-slate-100 py-14">
      <div className="max-w-5xl mx-auto px-4">

        {/* PAGE TITLE */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#b11217]">
            Department of Applied Sciences & Humanities
          </h1>
          <p className="text-slate-600 mt-2">
            Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi
          </p>
        </div>

        {/* CONTENT CARD */}
        <div className="bg-white rounded-xl shadow-xl border-2 border-[#b11217]/40 p-8 space-y-8">

          <CenterHeading>About the Department</CenterHeading>
          <p className="text-slate-700 leading-relaxed">
            The Department of Applied Sciences and Humanities integrates Basic
            Sciences (Engineering Physics, Engineering Chemistry, Engineering
            Mathematics, Environment & Ecology), Soft Skills, Mechanical
            Engineering, Fundamentals of Electrical Engineering, Fundamentals
            of Electronics Engineering, and Programming for Problem Solving.
          </p>

          <p className="text-slate-700 leading-relaxed">
            Our faculty, with extensive academic and industry experience,
            mentors students to bridge the gap between theory and real-world
            applications, preparing them for complex global challenges.
          </p>

          <Section title="Vision">
            <p>
              To create a learning environment where students become socially
              conscious, disciplined, responsible, and skilled professionals
              ready to face current and future challenges of the nation.
            </p>
          </Section>

          <Section title="Mission">
            <List
              items={[
                "To impart academic excellence in technical education.",
                "To inculcate high moral, ethical, and professional standards.",
                "To provide advanced knowledge with employability.",
                "To create an intellectually stimulating environment.",
                "To achieve institutional goals through continuous improvement.",
              ]}
            />
          </Section>

          <Section title="Program Educational Objectives (PEOs)">
            <List
              items={[
                "PEO1: Strong skills in Applied Sciences for industry readiness.",
                "PEO2: Emphasis on research, innovation, and societal advancement.",
                "PEO3: Solve real-time problems using academic exposure.",
                "PEO4: Ethical responsibility, teamwork, communication.",
                "PEO5: Innovation and entrepreneurship for societal betterment.",
              ]}
            />
          </Section>

          <Section title="Program Outcomes (POs)">
            <List
              items={[
                "PO1: Apply mathematics, science, and engineering knowledge.",
                "PO2: Analyze complex engineering problems.",
                "PO3: Design solutions considering societal and environmental aspects.",
                "PO4: Conduct investigations using research methods.",
                "PO5: Use modern engineering tools effectively.",
                "PO6: Assess societal, health, and safety issues.",
                "PO7: Promote environmental sustainability.",
                "PO8: Apply ethical principles.",
                "PO9: Communicate effectively.",
                "PO10: Engage in life-long learning.",
              ]}
            />
          </Section>

          <Section title="Program Specific Outcomes (PSOs)">
            <List
              items={[
                "PSO1: Professional ethics and societal problem-solving skills.",
                "PSO2: Multidisciplinary approach to real-life challenges.",
              ]}
            />
          </Section>

        </div>
      </div>
    </section>
  );
}

/* ===== HELPERS ===== */

function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-xl font-bold text-[#b11217] mb-3">
        {title}
      </h2>
      <div className="text-slate-700 leading-relaxed">{children}</div>
    </div>
  );
}

function CenterHeading({ children }) {
  return (
    <h2 className="text-xl font-bold text-center text-[#b11217]">
      {children}
    </h2>
  );
}

function List({ items }) {
  return (
    <ul className="list-disc pl-6 space-y-2">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}
