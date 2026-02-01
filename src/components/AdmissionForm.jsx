import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useCaptcha from "../hooks/useCaptcha";

/* =====================================================
   ADMISSION FORM – BORDER HIGHLIGHTED ONLY
===================================================== */

export default function AdmissionForm() {
  const [formData, setFormData] = useState({});
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const {
    captchaQuestion,
    validateCaptcha,
    regenerateCaptcha,
  } = useCaptcha();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateCaptcha(captchaInput)) {
      setCaptchaError("Invalid CAPTCHA. Please try again.");
      regenerateCaptcha();
      setCaptchaInput("");
      return;
    }

    setCaptchaError("");
    alert("Form submitted successfully (frontend only)");

    regenerateCaptcha();
    setCaptchaInput("");
  };

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
              Online Admission Enquiry Form
            </h1>
            <p className="text-slate-600 mt-2">
              Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi
            </p>
          </div>

          {/* FORM CARD */}
          <form
            onSubmit={handleSubmit}
            className="
              bg-white rounded-xl shadow-xl
              border-2 border-[#b11217]/50
              overflow-hidden
            "
          >

            {/* COURSE SELECTION */}
            <FormSection title="Course Selection">
              <TwoCol>
                <Field label="Select Course *">
                  <select className="input" name="course" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="MBA">M.B.A.</option>
                    <option value="BTECH">B.Tech.</option>
                  </select>
                </Field>

                <Field label="Select Branch *">
                  <select className="input" name="branch" onChange={handleChange}>
                    <option value="">Select</option>
                    <option>Civil Engineering</option>
                    <option>Computer Science & Engineering</option>
                    <option>Information Technology</option>
                    <option>Electronics & Communication</option>
                    <option>Electrical Engineering</option>
                    <option>Mechanical Engineering</option>
                  </select>
                </Field>
              </TwoCol>
            </FormSection>

            {/* BASIC INFORMATION */}
            <FormSection title="Basic Information">
              <TwoCol>
                <Field label="Applicant Name *">
                  <input className="input" name="name" />
                </Field>
                <Field label="Date of Birth *">
                  <input className="input" type="date" name="dob" />
                </Field>
              </TwoCol>

              <TwoCol>
                <Field label="Father's Name *">
                  <input className="input" name="father_name" />
                </Field>
                <Field label="Father's Occupation">
                  <input className="input" name="father_occupation" />
                </Field>
              </TwoCol>

              <TwoCol>
                <Field label="Gender *">
                  <select className="input" name="gender">
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </Field>

                <Field label="Category *">
                  <select className="input" name="category">
                    <option value="">Select</option>
                    <option>GEN</option>
                    <option>OBC</option>
                    <option>SC</option>
                    <option>ST</option>
                    <option>OTHERS</option>
                  </select>
                </Field>
              </TwoCol>
            </FormSection>

            {/* CONTACT INFORMATION */}
            <FormSection title="Contact Information">
              <Field label="Postal Address *">
                <input className="input" name="address" />
              </Field>

              <ThreeCol>
                <Field label="Contact Number *">
                  <input className="input" />
                </Field>
                <Field label="Email Address *">
                  <input className="input" type="email" />
                </Field>
                <Field label="WhatsApp Number *">
                  <input className="input" />
                </Field>
              </ThreeCol>
            </FormSection>

            {/* ENTRANCE INFORMATION */}
            <FormSection title="Entrance Examination Details">
              <TwoCol>
                <Field label="JEE / CUET Roll Number">
                  <input className="input" />
                </Field>
                <Field label="JEE / CUET Rank">
                  <input className="input" />
                </Field>
              </TwoCol>

              <Field label="Score / Percentile (Optional)">
                <input className="input" />
              </Field>
            </FormSection>

            {/* ACADEMIC QUALIFICATION */}
            <FormSection title="Academic Qualifications">
              <AcademicTable />
            </FormSection>

            {/* QUERY */}
            <FormSection title="Applicant Query">
              <textarea
                rows="4"
                className="input w-full"
                placeholder="Write your query here..."
              />
            </FormSection>

            {/* CAPTCHA (UI UNCHANGED) */}
            <FormSection title="Verification">
              <div
                className="
                  border-2 border-dashed border-[#b11217]/60
                  rounded-md p-4 text-center text-slate-600 bg-slate-50
                "
              >
                <div className="font-semibold mb-2 text-[#b11217]">
                  {captchaQuestion}
                </div>

                <input
                  type="text"
                  value={captchaInput}
                  onChange={(e) => setCaptchaInput(e.target.value)}
                  placeholder="Enter answer"
                  className="input text-center max-w-xs mx-auto"
                />

                {captchaError && (
                  <p className="text-red-600 text-sm mt-2">
                    {captchaError}
                  </p>
                )}
              </div>
            </FormSection>

            {/* SUBMIT */}
            <div className="bg-slate-50 px-6 py-6 border-t-2 border-[#b11217]/30">
              <button
                type="submit"
                className="w-full bg-[#b11217] text-white py-3 rounded-md font-semibold"
              >
                Submit Admission Enquiry
              </button>
            </div>

          </form>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <Footer />
    </>
  );
}

/* ================= HELPERS ================= */

function FormSection({ title, children }) {
  return (
    <div className="px-6 py-8 border-b-2 border-slate-200 last:border-b-0">
      <h2 className="text-lg font-bold text-[#b11217] mb-6 uppercase tracking-wide">
        {title}
      </h2>
      <div className="space-y-6">{children}</div>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold text-slate-700">
        {label}
      </label>
      {children}
    </div>
  );
}

function TwoCol({ children }) {
  return <div className="grid md:grid-cols-2 gap-6">{children}</div>;
}

function ThreeCol({ children }) {
  return <div className="grid md:grid-cols-3 gap-6">{children}</div>;
}

function AcademicTable() {
  const rows = ["High School", "Intermediate", "Graduation", "Post Graduation", "Other"];

  return (
    <div className="overflow-x-auto border-2 border-slate-400 rounded-md">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-200 border-b-2 border-slate-400">
          <tr>
            <th className="border p-2">Course</th>
            <th className="border p-2">Board / University</th>
            <th className="border p-2">Year</th>
            <th className="border p-2">Stream</th>
            <th className="border p-2">% / Division</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r}>
              <td className="border p-2 font-medium">{r}</td>
              {[1, 2, 3, 4].map((i) => (
                <td key={i} className="border p-2">
                  <input className="w-full border border-slate-400 rounded px-2 py-1" />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
