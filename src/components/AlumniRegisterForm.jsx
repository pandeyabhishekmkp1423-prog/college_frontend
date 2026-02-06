import { useState } from "react";
import api from "../services/api";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useCaptcha from "../hooks/useCaptcha";

/* =====================================================
   ALUMNI REGISTER FORM – SAME DESIGN AS ADMISSION FORM
===================================================== */

export default function AlumniRegisterForm() {
  const [formData, setFormData] = useState({});
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    captchaQuestion,
    validateCaptcha,
    regenerateCaptcha,
  } = useCaptcha();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateCaptcha(captchaInput)) {
      setCaptchaError("Invalid CAPTCHA. Please try again.");
      regenerateCaptcha();
      setCaptchaInput("");
      return;
    }

    setCaptchaError("");
    setLoading(true);
    setSuccessMessage("");

    try {
      // ✅ THIS IS THE ONLY IMPORTANT LINE
      await api.post("/alumni", formData);

      setSuccessMessage("Alumni Registration submitted successfully!");
      setFormData({});
      regenerateCaptcha();
      setCaptchaInput("");
    } catch (error) {
      console.error("ALUMNI SUBMIT ERROR:", error);
      setSuccessMessage("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 py-14">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#b11217]">
              Alumni Register Form
            </h1>
            <p className="text-slate-600 mt-2">
              Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi
            </p>
          </div>

          {successMessage && (
            <div className="mb-6 text-center text-green-600 font-semibold">
              {successMessage}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-xl border-2 border-[#b11217]/50 overflow-hidden"
          >

            {/* BASIC DETAILS */}
            <FormSection title="Basic Details">
              <TwoCol>
                <Field label="Name *">
                  <input className="input" name="name" onChange={handleChange} />
                </Field>

                <Field label="Year of Qualification *">
                  <input className="input" name="year_of_qua" onChange={handleChange} />
                </Field>
              </TwoCol>

              <TwoCol>
                <Field label="Branch *">
                  <input className="input" name="branch" onChange={handleChange} />
                </Field>

                <Field label="Email *">
                  <input type="email" className="input" name="email" onChange={handleChange} />
                </Field>
              </TwoCol>
            </FormSection>

            {/* CURRENT STATUS */}
            <FormSection title="Current Status">
              <Field label="After Graduation You Are Now In *">
                <RadioGroup
                  name="after_gra"
                  options={["Higher Education", "Employed", "Others"]}
                  onChange={handleChange}
                />
              </Field>

              <Field label="Working Environment *">
                <RadioGroup
                  name="work_environment"
                  options={["Excellent", "Very Good", "Good", "OK"]}
                  onChange={handleChange}
                />
              </Field>
            </FormSection>

            {/* EMPLOYMENT DETAILS */}
            <FormSection title="If Employed Please State">
              <TwoCol>
                <Field label="Employed Through">
                  <RadioGroup
                    name="emp_th"
                    options={["Training Placement Cell", "Self Aspiration"]}
                    onChange={handleChange}
                  />
                </Field>

                <Field label="Name of Employing Company">
                  <input className="input" name="emp_comp" onChange={handleChange} />
                </Field>
              </TwoCol>

              <TwoCol>
                <Field label="Designation">
                  <input className="input" name="designation" onChange={handleChange} />
                </Field>

                <Field label="Date of Joining">
                  <input type="date" className="input" name="doj" onChange={handleChange} />
                </Field>
              </TwoCol>
            </FormSection>

            {/* CAPTCHA */}
            <FormSection title="Verification">
              <div className="border-2 border-dashed border-[#b11217]/60 rounded-md p-4 text-center text-slate-600 bg-slate-50">
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
                disabled={loading}
                className="w-full bg-[#b11217] text-white py-3 rounded-md font-semibold"
              >
                {loading ? "Submitting..." : "Submit Alumni Registration"}
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

function RadioGroup({ name, options, onChange }) {
  return (
    <div className="flex flex-wrap gap-6">
      {options.map((opt) => (
        <label key={opt} className="flex items-center gap-2">
          <input
            type="radio"
            name={name}
            value={opt}
            onChange={onChange}
          />
          {opt}
        </label>
      ))}
    </div>
  );
}
