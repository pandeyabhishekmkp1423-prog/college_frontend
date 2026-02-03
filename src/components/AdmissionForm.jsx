import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useCaptcha from "../hooks/useCaptcha";
import publicApi from "../services/publicApi";

/* =====================================================
   ADMISSION FORM – FULL DATA CAPTURE (PRODUCTION)
===================================================== */

export default function AdmissionForm() {
  const [formData, setFormData] = useState({});
  const [academic, setAcademic] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const [formKey, setFormKey] = useState(0); // ✅ NEW (forces form reset)

  const { captchaQuestion, validateCaptcha, regenerateCaptcha } = useCaptcha();

  /* ================= HANDLERS ================= */

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAcademicChange = (level, field, value) => {
    setAcademic((prev) => ({
      ...prev,
      [level]: {
        ...prev[level],
        [field]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!validateCaptcha(captchaInput)) {
      setCaptchaError("Invalid CAPTCHA. Please try again.");
      regenerateCaptcha();
      setCaptchaInput("");
      return;
    }

    setCaptchaError("");
    setLoading(true);

    try {
      await publicApi.post("/admissions", {
        course: formData.course,
        branch: formData.branch,

        applicant_name: formData.applicant_name,
        date_of_birth: formData.date_of_birth,
        father_name: formData.father_name,
        father_occupation: formData.father_occupation,
        gender: formData.gender,
        category: formData.category,

        address: formData.address,
        contact_number: formData.contact_number,
        email: formData.email,
        whatsapp_number: formData.whatsapp_number,

        entrance_roll_number: formData.entrance_roll_number,
        entrance_rank: formData.entrance_rank,
        entrance_score: formData.entrance_score,

        academic_qualifications: academic,
        applicant_query: formData.applicant_query,
      });

      // ✅ SUCCESS FLOW
      alert("Admission enquiry submitted successfully."); // ✅ POPUP

      setFormData({});
      setAcademic({});
      setCaptchaInput("");
      regenerateCaptcha();

      setFormKey((prev) => prev + 1); // ✅ RESET FORM VISUALLY
    } catch (err) {
      setError("Submission failed. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UI ================= */

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 py-14">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#b11217]">
              Online Admission Enquiry Form
            </h1>
            <p className="text-slate-600 mt-2">
              Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi
            </p>
          </div>

          <form
            key={formKey} // ✅ NEW (critical)
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-xl border-2 border-[#b11217]/50 overflow-hidden"
          >

            {error && <Alert color="red">{error}</Alert>}

            {/* 1️⃣ COURSE SELECTION */}
            <FormSection title="Course Selection">
              <TwoCol>
                <Field label="Select Course *">
                  <select className="input" name="course" onChange={handleChange} required>
                    <option value="">Select</option>
                    <option value="MBA">M.B.A.</option>
                    <option value="BTECH">B.Tech.</option>
                  </select>
                </Field>

                <Field label="Select Branch *">
                  <select className="input" name="branch" onChange={handleChange} required>
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

            {/* 2️⃣ BASIC INFORMATION */}
            <FormSection title="Basic Information">
              <TwoCol>
                <Field label="Applicant Name *">
                  <input className="input" name="applicant_name" onChange={handleChange} required />
                </Field>
                <Field label="Date of Birth *">
                  <input className="input" type="date" name="date_of_birth" onChange={handleChange} required />
                </Field>
              </TwoCol>

              <TwoCol>
                <Field label="Father's Name *">
                  <input className="input" name="father_name" onChange={handleChange} required />
                </Field>
                <Field label="Father's Occupation">
                  <input className="input" name="father_occupation" onChange={handleChange} />
                </Field>
              </TwoCol>

              <TwoCol>
                <Field label="Gender *">
                  <select className="input" name="gender" onChange={handleChange} required>
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </Field>

                <Field label="Category *">
                  <select className="input" name="category" onChange={handleChange} required>
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

            {/* 3️⃣ CONTACT INFORMATION */}
            <FormSection title="Contact Information">
              <Field label="Postal Address *">
                <input className="input" name="address" onChange={handleChange} required />
              </Field>

              <ThreeCol>
                <Field label="Contact Number *">
                  <input className="input" name="contact_number" onChange={handleChange} required />
                </Field>
                <Field label="Email Address *">
                  <input className="input" type="email" name="email" onChange={handleChange} required />
                </Field>
                <Field label="WhatsApp Number *">
                  <input className="input" name="whatsapp_number" onChange={handleChange} required />
                </Field>
              </ThreeCol>
            </FormSection>

            {/* 4️⃣ ENTRANCE DETAILS */}
            <FormSection title="Entrance Examination Details">
              <TwoCol>
                <Field label="JEE / CUET Roll Number">
                  <input className="input" name="entrance_roll_number" onChange={handleChange} />
                </Field>
                <Field label="JEE / CUET Rank">
                  <input className="input" name="entrance_rank" onChange={handleChange} />
                </Field>
              </TwoCol>

              <Field label="Score / Percentile">
                <input className="input" name="entrance_score" onChange={handleChange} />
              </Field>
            </FormSection>

            {/* 5️⃣ ACADEMIC QUALIFICATIONS */}
            <FormSection title="Academic Qualifications">
              <AcademicTable onChange={handleAcademicChange} />
            </FormSection>

            {/* 6️⃣ APPLICANT QUERY */}
            <FormSection title="Applicant Query">
              <textarea
                rows="4"
                className="input w-full"
                name="applicant_query"
                onChange={handleChange}
              />
            </FormSection>

            {/* 7️⃣ VERIFICATION */}
            <FormSection title="Verification">
              <div className="border-2 border-dashed border-[#b11217]/60 rounded-md p-4 text-center">
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
                  <p className="text-red-600 text-sm mt-2">{captchaError}</p>
                )}
              </div>
            </FormSection>

            <div className="bg-slate-50 px-6 py-6 border-t-2 border-[#b11217]/30">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#b11217] text-white py-3 rounded-md font-semibold"
              >
                {loading ? "Submitting..." : "Submit Admission Enquiry"}
              </button>
            </div>

          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ================= HELPERS ================= */

function Alert({ color, children }) {
  return (
    <div className={`bg-${color}-100 text-${color}-700 p-4 text-center`}>
      {children}
    </div>
  );
}

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
      <label className="text-sm font-semibold text-slate-700">{label}</label>
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

function AcademicTable({ onChange }) {
  const rows = [
    { label: "High School", key: "high_school", required: true },
    { label: "Intermediate", key: "intermediate", required: true },
    { label: "Graduation", key: "graduation" },
    { label: "Post Graduation", key: "post_graduation" },
    { label: "Other / Diploma", key: "other" },
  ];

  return (
    <div className="overflow-x-auto border-2 border-slate-400 rounded-md">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-slate-200 border-b-2 border-slate-400">
          <tr>
            <th className="border p-2">Level</th>
            <th className="border p-2">Board / University</th>
            <th className="border p-2">Year</th>
            <th className="border p-2">Stream</th>
            <th className="border p-2">% / Division</th>
          </tr>
        </thead>

        <tbody>
          {rows.map(({ label, key, required }) => (
            <tr key={key}>
              <td className="border p-2 font-medium">
                {label} {required && <span className="text-red-600">*</span>}
              </td>

              <td className="border p-2">
                <input
                  required={required}
                  placeholder="e.g. CBSE / ICSE / AKTU"
                  className="w-full border border-slate-400 rounded px-2 py-1"
                  onChange={(e) => onChange(key, "board", e.target.value)}
                />
              </td>

              <td className="border p-2">
                <input
                  required={required}
                  placeholder="e.g. 2021"
                  className="w-full border border-slate-400 rounded px-2 py-1"
                  onChange={(e) => onChange(key, "year", e.target.value)}
                />
              </td>

              <td className="border p-2">
                <input
                  placeholder="e.g. Science / PCM"
                  className="w-full border border-slate-400 rounded px-2 py-1"
                  onChange={(e) => onChange(key, "stream", e.target.value)}
                />
              </td>

              <td className="border p-2">
                <input
                  required={required}
                  placeholder="e.g. 85"
                  className="w-full border border-slate-400 rounded px-2 py-1"
                  onChange={(e) => onChange(key, "percentage", e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
