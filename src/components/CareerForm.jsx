import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useCaptcha from "../hooks/useCaptcha";

/* =====================================================
   CAREER FORM – SAME DESIGN AS ADMISSION FORM
===================================================== */

export default function CareerForm() {
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
    alert("Career application submitted (frontend only)");

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
              Career @ RRSIMT – Online Application Form
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

            {/* POST DETAILS */}
            <FormSection title="Post Details">
              <TwoCol>
                <Field label="Post Applied For *">
                  <select className="input" name="applied_for" onChange={handleChange}>
                    <option value="">Select</option>
                    <option>Sr. Lecturer</option>
                    <option>Lecturer</option>
                    <option>Professor</option>
                    <option>Assistant Professor</option>
                    <option>Associate Professor</option>
                    <option>System Admin</option>
                    <option>Lab Instructor</option>
                    <option>Office Assistant</option>
                    <option>Others</option>
                  </select>
                </Field>

                <Field label="Department *">
                  <select className="input" name="department" onChange={handleChange}>
                    <option value="">Select</option>
                    <option>Civil Engineering</option>
                    <option>Computer Science</option>
                    <option>Information Technology</option>
                    <option>Electronics & Communication</option>
                    <option>Electrical Engineering</option>
                    <option>Mechanical Engineering</option>
                    <option>Applied Science</option>
                    <option>MBA</option>
                  </select>
                </Field>
              </TwoCol>

              <Field label="Upload Photo *">
                <input type="file" className="input" />
              </Field>
            </FormSection>

            {/* PERSONAL DETAILS */}
            <FormSection title="Personal Information">
              <TwoCol>
                <Field label="Name *">
                  <input className="input" name="name" onChange={handleChange} />
                </Field>
                <Field label="Father's Name *">
                  <input className="input" name="fathers_name" onChange={handleChange} />
                </Field>
              </TwoCol>

              <ThreeCol>
                <Field label="Date of Birth *">
                  <input className="input" name="dob" onChange={handleChange} />
                </Field>
                <Field label="Age *">
                  <input className="input" name="age" onChange={handleChange} />
                </Field>
                <Field label="Gender *">
                  <select className="input" name="gender" onChange={handleChange}>
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </Field>
              </ThreeCol>

              <TwoCol>
                <Field label="Category *">
                  <select className="input" name="category" onChange={handleChange}>
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

            {/* CONTACT DETAILS */}
            <FormSection title="Contact Details">
              <Field label="Postal Address *">
                <textarea rows="3" className="input" name="postal_address" />
              </Field>

              <ThreeCol>
                <Field label="Mobile *">
                  <input className="input" name="mobile" />
                </Field>
                <Field label="Landline">
                  <input className="input" name="land_line" />
                </Field>
                <Field label="Email *">
                  <input type="email" className="input" name="email" />
                </Field>
              </ThreeCol>
            </FormSection>

            {/* ACADEMIC QUALIFICATION */}
            <FormSection title="Academic Qualifications">
              <AcademicTable />
            </FormSection>

            {/* EXPERIENCE */}
            <FormSection title="Present Job Status">
              <TwoCol>
                <Field label="Organization">
                  <input className="input" name="org" />
                </Field>
                <Field label="Date of Joining">
                  <input className="input" name="doj" />
                </Field>
              </TwoCol>

              <TwoCol>
                <Field label="Designation">
                  <input className="input" name="designation" />
                </Field>
                <Field label="Salary">
                  <input className="input" name="ctc" />
                </Field>
              </TwoCol>

              <Field label="Total Experience">
                <input className="input" name="exp" />
              </Field>

              <Field label="Experience Details">
                <textarea rows="3" className="input" name="exp_details" />
              </Field>
            </FormSection>

            {/* RESUME */}
            <FormSection title="Resume Details">
              <Field label="Upload Resume *">
                <input type="file" className="input" />
              </Field>

              <Field label="Paste Resume">
                <textarea rows="4" className="input" />
              </Field>
            </FormSection>

            {/* CAPTCHA (UI PRESERVED) */}
            <FormSection title="Verification">
              <div
                className="
                  border-2 border-dashed border-[#b11217]/60
                  rounded-md p-4 text-center
                  text-slate-600 bg-slate-50
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
                className="
                  w-full bg-[#b11217] text-white
                  py-3 rounded-md font-semibold
                "
              >
                Submit Career Application
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

/* ================= HELPERS (REUSED) ================= */

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
            <th className="border p-2">Degree</th>
            <th className="border p-2">Board / University</th>
            <th className="border p-2">Year</th>
            <th className="border p-2">% / Division</th>
            <th className="border p-2">Specialization</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r}>
              <td className="border p-2 font-medium">{r}</td>
              {[1,2,3,4].map(i => (
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
