import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import useCaptcha from "../hooks/useCaptcha";
import api from "../services/api";

/* =====================================================
   CAREER FORM – FULL DATA CAPTURE (FINAL UPDATED)
===================================================== */

export default function CareerForm() {

  const academicRows = [
    "High School",
    "Intermediate",
    "Graduation",
    "Post Graduation",
    "Other"
  ];

  const [formData, setFormData] = useState({
    applied_for: "",
    department: "",
    name: "",
    fathers_name: "",
    dob: "",
    age: "",
    gender: "",
    category: "",
    postal_address: "",
    mobile: "",
    land_line: "",
    email: "",
    org: "",
    doj: "",
    designation: "",
    ctc: "",
    exp: "",
    exp_details: "",
    resume_text: "",
    academic_qualifications: {}
  });

  const [photoFile, setPhotoFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [captchaInput, setCaptchaInput] = useState("");
  const [captchaError, setCaptchaError] = useState("");

  const { captchaQuestion, validateCaptcha, regenerateCaptcha } = useCaptcha();

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "dob") {
      const birth = new Date(value);
      const today = new Date();
      let age = today.getFullYear() - birth.getFullYear();
      const m = today.getMonth() - birth.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) age--;
      setFormData({ ...formData, dob: value, age });
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  /* ================= ACADEMIC CHANGE ================= */
  const handleAcademicChange = (degree, field, value) => {
    setFormData({
      ...formData,
      academic_qualifications: {
        ...formData.academic_qualifications,
        [degree]: {
          ...formData.academic_qualifications[degree],
          [field]: value
        }
      }
    });
  };

  /* ================= FILE TO BASE64 ================= */
  const toBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
    });

  /* ================= SUBMIT ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateCaptcha(captchaInput)) {
      setCaptchaError("Invalid CAPTCHA. Please try again.");
      regenerateCaptcha();
      return;
    }

    if (!photoFile || !resumeFile) {
      alert("Photo and Resume are mandatory.");
      return;
    }

    try {
      const photoBase64 = await toBase64(photoFile);
      const resumeBase64 = await toBase64(resumeFile);

      await api.post("/careers", {
        ...formData,
        academic_qualifications: JSON.stringify(formData.academic_qualifications),
        photo_base64: photoBase64,
        resume_base64: resumeBase64
      });

      alert("Career application submitted successfully");

      regenerateCaptcha();
      setCaptchaInput("");
    } catch (err) {
      console.error("CAREER SUBMIT ERROR:", err);
      alert("Submission failed");
    }
  };

  return (
    <>
      <Navbar />

      <section className="bg-slate-100 py-14">
        <div className="max-w-5xl mx-auto px-4">

          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-[#b11217]">
              Career @ RRSIMT – Online Application Form
            </h1>
            <p className="text-slate-600 mt-2">
              Rajarshi Rananjay Sinh Institute of Management & Technology, Amethi
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-xl border-2 border-[#b11217]/50 overflow-hidden"
          >

            {/* 1️⃣ POST DETAILS */}
            <FormSection title="1. Post Details">
              <TwoCol>
                <Field label="Post Applied For *">
                  <select required className="input" name="applied_for" onChange={handleChange}>
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
                  <select required className="input" name="department" onChange={handleChange}>
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

              <Field label="Upload Photo * (Max 150KB | JPG/PNG)">
                <input
                  type="file"
                  required
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file && file.size > 150 * 1024) {
                      alert("Photo must be less than 150KB");
                      e.target.value = "";
                      return;
                    }
                    setPhotoFile(file);
                  }}
                />
                <p className="text-xs text-slate-500 mt-1">
                  Maximum size: 150KB
                </p>
              </Field>
            </FormSection>

            {/* 2️⃣ PERSONAL INFORMATION */}
            <FormSection title="2. Personal Information">
              <TwoCol>
                <Field label="Name *">
                  <input required pattern="[A-Za-z\s]+" placeholder="Alphabets only"
                    className="input" name="name" onChange={handleChange} />
                </Field>

                <Field label="Father's Name *">
                  <input required pattern="[A-Za-z\s]+" placeholder="Alphabets only"
                    className="input" name="fathers_name" onChange={handleChange} />
                </Field>
              </TwoCol>

              <ThreeCol>
                <Field label="Date of Birth *">
                  <input type="date" required className="input" name="dob" onChange={handleChange} />
                </Field>

                <Field label="Age (Auto)">
                  <input readOnly className="input" value={formData.age} />
                </Field>

                <Field label="Gender *">
                  <select required className="input" name="gender" onChange={handleChange}>
                    <option value="">Select</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </Field>
              </ThreeCol>
            </FormSection>
            <FormSection>
            <TwoCol>
            <Field label="Category *">
               <select
                 required  className="input"name="category"onChange={handleChange}>
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

            {/* 3️⃣ CONTACT DETAILS */}
            <FormSection title="3. Contact Details">
              <Field label="Postal Address *">
                <textarea required rows="3" className="input"
                  name="postal_address" onChange={handleChange} />
              </Field>

              <ThreeCol>
                <Field label="Mobile *">
                  <input required pattern="[0-9]{10}" placeholder="10 digits"
                    className="input" name="mobile" onChange={handleChange} />
                </Field>

                <Field label="Landline">
                  <input className="input" name="land_line" onChange={handleChange} />
                </Field>

                <Field label="Email *">
                  <input required type="email"
                    className="input" name="email" onChange={handleChange} />
                </Field>
              </ThreeCol>
            </FormSection>

            {/* 4️⃣ ACADEMIC QUALIFICATIONS */}
            <FormSection title="4. Academic Qualifications">
              <p className="text-sm text-slate-500 mb-4">
                High School, Intermediate and Graduation are mandatory.
              </p>

              <div className="overflow-x-auto border-2 border-slate-400 rounded-md">
                <table className="w-full text-sm border-collapse">
                  <thead className="bg-slate-200 border-b-2 border-slate-400">
                    <tr>
                      <th className="border p-2">Degree</th>
                      <th className="border p-2">Board / University</th>
                      <th className="border p-2">Year</th>
                      <th className="border p-2">% (Max 100)</th>
                      <th className="border p-2">Specialization</th>
                    </tr>
                  </thead>
                  <tbody>
                    {academicRows.map((r) => {
                      const isMandatory =
                        r === "High School" ||
                        r === "Intermediate" ||
                        r === "Graduation";

                      return (
                        <tr key={r}>
                          <td className="border p-2 font-medium">
                            {r} {isMandatory && <span className="text-red-600">*</span>}
                          </td>

                          <td className="border p-2">
                            <input
                              required={isMandatory}
                              pattern="[A-Za-z\s]+"
                              placeholder="Alphabets only"
                              className="w-full border border-slate-400 rounded px-2 py-1"
                              onChange={(e) =>
                                handleAcademicChange(r, "board", e.target.value)
                              }
                            />
                          </td>

                          <td className="border p-2">
                            <input
                              required={isMandatory}
                              pattern="[0-9]{4}"
                              placeholder="YYYY"
                              className="w-full border border-slate-400 rounded px-2 py-1"
                              onChange={(e) =>
                                handleAcademicChange(r, "year", e.target.value)
                              }
                            />
                          </td>

                          <td className="border p-2">
                            <input
                              required={isMandatory}
                              type="number"
                              max="100"
                              placeholder="0-100"
                              className="w-full border border-slate-400 rounded px-2 py-1"
                              onChange={(e) =>
                                handleAcademicChange(r, "percentage", e.target.value)
                              }
                            />
                          </td>

                          <td className="border p-2">
                            <input
                              pattern="[A-Za-z\s]*"
                              placeholder="Alphabets only"
                              className="w-full border border-slate-400 rounded px-2 py-1"
                              onChange={(e) =>
                                handleAcademicChange(r, "specialization", e.target.value)
                              }
                            />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </FormSection>

            {/* 5️⃣ PRESENT JOB STATUS */}
<FormSection title="5. Present Job Status">
  <TwoCol>
    <Field label="Organization">
      <input
        className="input"
        name="org"
        onChange={handleChange}
      />
    </Field>

    <Field label="Date of Joining">
      <input
        type="date"
        className="input"
        name="doj"
        onChange={handleChange}
      />
    </Field>
  </TwoCol>

  <TwoCol>
    <Field label="Designation">
      <input
        className="input"
        name="designation"
        onChange={handleChange}
      />
    </Field>

    <Field label="Salary">
      <input
        type="number"
        className="input"
        name="ctc"
        onChange={handleChange}
        placeholder="Enter salary amount"
      />
    </Field>
  </TwoCol>

  <Field label="Total Experience">
    <input
      className="input"
      name="exp"
      onChange={handleChange}
      placeholder="Example: 5 Years"
    />
  </Field>

  <Field label="Experience Details">
    <textarea
      rows="3"
      className="input"
      name="exp_details"
      onChange={handleChange}
    />
  </Field>
</FormSection>

            {/* 6️⃣ RESUME DETAILS */}
            <FormSection title="6. Resume Details">
              <Field label="Upload Resume * (Max 2MB | PDF/DOC/DOCX)">
                <input
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    if (file && file.size > 2 * 1024 * 1024) {
                      alert("Resume must be less than 2MB");
                      e.target.value = "";
                      return;
                    }
                    setResumeFile(file);
                  }}
                />
                <p className="text-xs text-slate-500 mt-1">
                  Maximum size: 2MB
                </p>
              </Field>

              <Field label="Paste Resume">
                <textarea rows="4" className="input"
                  name="resume_text" onChange={handleChange} />
              </Field>
            </FormSection>

            {/* 7️⃣ VERIFICATION */}
            <FormSection title="7. Verification">
              <div className="border-2 border-dashed border-[#b11217]/60 rounded-md p-4 text-center bg-slate-50">
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

            {/* SUBMIT BUTTON */}
            <div className="bg-slate-50 px-6 py-6 border-t-2 border-[#b11217]/30">
              <button
                type="submit"
                className="w-full bg-[#b11217] text-white py-3 rounded-md font-semibold"
              >
                Submit Career Application
              </button>
            </div>

          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* HELPERS */

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
