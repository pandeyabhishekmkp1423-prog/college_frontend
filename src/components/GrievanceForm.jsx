import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

/* =====================================================
   GRIEVANCE REDRESSAL FORM – LANDING PAGE STYLE
===================================================== */

export default function GrievanceForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
              Grievance Redressal Form
            </h1>
            <p className="text-slate-600 mt-2">
              Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi
            </p>
          </div>

          {/* FORM CARD */}
          <form
            className="
              bg-white rounded-xl shadow-xl
              border-2 border-[#b11217]/50
              overflow-hidden
            "
          >

            {/* APPLICANT DETAILS */}
            <FormSection title="Applicant Details">
              <TwoCol>
                <Field label="Name of Applicant *">
                  <input className="input" name="applicant_name" onChange={handleChange} />
                </Field>

                <Field label="Class *">
                  <input className="input" name="class" onChange={handleChange} />
                </Field>
              </TwoCol>

              <TwoCol>
                <Field label="Semester *">
                  <input className="input" name="semester" onChange={handleChange} />
                </Field>

                <Field label="Roll Number *">
                  <input className="input" name="roll_no" onChange={handleChange} />
                </Field>
              </TwoCol>

              <Field label="Department *">
                <select className="input" name="department" onChange={handleChange}>
                  <option value="">Select</option>
                  <option>Dept. of Civil Engineering</option>
                  <option>Dept. of Computer Science & Engineering</option>
                  <option>Dept. of Electrical Engineering</option>
                  <option>Dept. of Mechanical Engineering</option>
                  <option>Dept. of Bio-Technology</option>
                </select>
              </Field>
            </FormSection>

            {/* GRIEVANCE DETAILS */}
            <FormSection title="Grievance Details">
              <TwoCol>
                <Field label="Type of Grievance *">
                  <select className="input" name="grievance_type" onChange={handleChange}>
                    <option value="">Select</option>
                    <option>Academic Problem</option>
                    <option>Financial Matter</option>
                    <option>Library Problem</option>
                    <option>Accommodation Matter</option>
                    <option>Any Other Harassment</option>
                  </select>
                </Field>

                <Field label="Event Occurred Date *">
                  <input type="date" className="input" name="event_date" onChange={handleChange} />
                </Field>
              </TwoCol>

              <Field label="Complaint Description *">
                <textarea
                  rows="4"
                  className="input"
                  name="complaint_description"
                  onChange={handleChange}
                />
              </Field>

              <Field label="Root Cause *">
                <textarea
                  rows="3"
                  className="input"
                  name="root_cause"
                  onChange={handleChange}
                />
              </Field>
            </FormSection>

            {/* CAPTCHA */}
            <FormSection title="Verification">
              <div
                className="
                  border-2 border-dashed border-[#b11217]/60
                  rounded-md p-4 text-center
                  text-slate-600 bg-slate-50
                "
              >
                CAPTCHA will be added here
              </div>
            </FormSection>

            {/* SUBMIT */}
            <div className="bg-slate-50 px-6 py-6 border-t-2 border-[#b11217]/30">
              <button
                disabled
                className="
                  w-full bg-[#b11217] text-white
                  py-3 rounded-md font-semibold
                  opacity-70 cursor-not-allowed
                "
              >
                Submit Grievance
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

/* ================= HELPERS (SAME AS ADMISSION) ================= */

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
