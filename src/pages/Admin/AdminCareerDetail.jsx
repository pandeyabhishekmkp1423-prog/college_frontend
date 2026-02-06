import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function AdminCareerDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchCareer = useCallback(async () => {
    try {
      const res = await api.get(`/careers/${id}`);
      setData(res.data);
    } catch (err) {
      console.error("Career detail error:", err);
      setError("Failed to load career details");
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchCareer();
  }, [fetchCareer]);

  if (loading) return <div className="p-8">Loading...</div>;
  if (error) return <div className="p-8 text-red-600">{error}</div>;
  if (!data) return <div className="p-8">No data found</div>;

  const academics =
    typeof data.academic_qualifications === "string"
      ? JSON.parse(data.academic_qualifications)
      : data.academic_qualifications || {};

  return (
    <div className="p-8 bg-slate-100 min-h-screen space-y-8">

      {/* PAGE HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-[#b11217]">
          Career Application Detail
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 border rounded bg-white hover:bg-slate-50"
        >
          ← Back
        </button>
      </div>

      {/* 1. POST DETAILS */}
      <ThemeCard title="Post Details">
        <Row label="Post Applied For" value={data.applied_for} />
        <Row label="Department" value={data.department} />
      </ThemeCard>

      {/* 2. PERSONAL INFORMATION */}
      <ThemeCard title="Personal Information">
        <Row label="Name" value={data.name} />
        <Row label="Father's Name" value={data.fathers_name} />
        <Row label="Date of Birth" value={data.dob} />
        <Row label="Age" value={data.age} />
        <Row label="Gender" value={data.gender} />
        <Row label="Category" value={data.category} />
      </ThemeCard>

      {/* 3. CONTACT DETAILS */}
      <ThemeCard title="Contact Details">
        <Row label="Postal Address" value={data.postal_address} />
        <Row label="Mobile" value={data.mobile} />
        <Row label="Landline" value={data.land_line || "-"} />
        <Row label="Email" value={data.email} />
      </ThemeCard>

      {/* 4. ACADEMIC QUALIFICATIONS */}
      <ThemeCard title="Academic Qualifications">
        {Object.keys(academics).length === 0 && (
          <p className="text-sm text-slate-500">No academic data</p>
        )}

        {Object.entries(academics).map(([degree, values]) => (
          <div
            key={degree}
            className="border rounded p-4 mb-4 bg-white"
          >
            <h4 className="font-semibold text-[#b11217] mb-3">
              {degree}
            </h4>

            <Row label="Board / University" value={values.board} />
            <Row label="Year" value={values.year} />
            <Row label="Percentage" value={values.percentage} />
            <Row label="Specialization" value={values.specialization} />
          </div>
        ))}
      </ThemeCard>

      {/* 5. PRESENT JOB STATUS */}
      <ThemeCard title="Present Job Status">
        <Row label="Organization" value={data.org || "-"} />
        <Row label="Date of Joining" value={data.doj || "-"} />
        <Row label="Designation" value={data.designation || "-"} />
        <Row label="Salary" value={data.ctc || "-"} />
        <Row label="Total Experience" value={data.exp || "-"} />
        <Row label="Experience Details" value={data.exp_details || "-"} />
      </ThemeCard>

      {/* 6. RESUME DETAILS */}
      <ThemeCard title="Resume Details">
        <Row label="Resume Text" value={data.resume_text || "-"} />

        {data.resume_url && (
          <div className="mt-4">
            <a
              href={data.resume_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-[#b11217] text-white rounded hover:bg-red-700 transition"
            >
              Download Resume
            </a>
          </div>
        )}
      </ThemeCard>

      {/* 7. PHOTO */}
      <ThemeCard title="Photo">
        {data.photo_url ? (
          <div className="flex items-center gap-6">
            <img
              src={data.photo_url}
              alt="Applicant"
              className="w-40 rounded shadow border"
            />

            <a
              href={data.photo_url}
              download
              className="px-5 py-2 bg-[#b11217] text-white rounded hover:bg-red-700 transition"
            >
              Download Photo
            </a>
          </div>
        ) : (
          <p>No photo uploaded</p>
        )}
      </ThemeCard>

    </div>
  );
}

/* ================= THEME HELPERS ================= */

function ThemeCard({ title, children }) {
  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow-sm">
      <h3 className="text-xl font-bold text-[#b11217] mb-6">
        {title}
      </h3>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="grid grid-cols-3 gap-6 text-base">
      <div className="font-semibold text-slate-800">
        {label}:
      </div>
      <div className="col-span-2 text-slate-700 break-words">
        {value}
      </div>
    </div>
  );
}
