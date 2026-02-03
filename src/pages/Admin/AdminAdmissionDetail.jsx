import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function AdminAdmissionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAdmission = async () => {
      try {
        const res = await api.get(`/admissions/${id}`);
        setData(res.data);
        setStatus(res.data.status);
      } catch (err) {
        console.error(err);
        setError("Failed to load admission details");
      } finally {
        setLoading(false);
      }
    };

    fetchAdmission();
  }, [id]);

  const updateStatus = async () => {
    setSaving(true);
    try {
      await api.put(`/admissions/${id}/status`, { status });
      alert("Status updated successfully");
    } catch (err) {
      alert("Failed to update status");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-6">Loading admission details…</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!data) return null;

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#b11217]">
          Admission Detail
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="text-sm px-4 py-2 border rounded"
        >
          ← Back
        </button>
      </div>

      {/* STATUS */}
      <div className="bg-white p-4 rounded shadow flex items-center gap-4">
        <label className="font-semibold">Status:</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded px-3 py-2"
        >
          <option value="NEW">NEW</option>
          <option value="IN_PROGRESS">IN PROGRESS</option>
          <option value="CLOSED">CLOSED</option>
        </select>

        <button
          onClick={updateStatus}
          disabled={saving}
          className="bg-[#b11217] text-white px-4 py-2 rounded"
        >
          {saving ? "Saving..." : "Update"}
        </button>
      </div>

      {/* 1️⃣ COURSE SELECTION */}
      <Section title="Course Selection">
        <Row label="Course" value={data.course} />
        <Row label="Branch" value={data.branch} />
      </Section>

      {/* 2️⃣ BASIC INFORMATION */}
      <Section title="Basic Information">
        <Row label="Applicant Name" value={data.applicant_name} />
        <Row label="Date of Birth" value={data.date_of_birth} />
        <Row label="Father Name" value={data.father_name} />
        <Row label="Father Occupation" value={data.father_occupation || "-"} />
        <Row label="Gender" value={data.gender} />
        <Row label="Category" value={data.category} />
      </Section>

      {/* 3️⃣ CONTACT INFORMATION */}
      <Section title="Contact Information">
        <Row label="Address" value={data.address} />
        <Row label="Contact Number" value={data.contact_number} />
        <Row label="WhatsApp Number" value={data.whatsapp_number} />
        <Row label="Email" value={data.email} />
      </Section>

      {/* 4️⃣ ENTRANCE DETAILS */}
      <Section title="Entrance Examination Details">
        <Row label="Roll Number" value={data.entrance_roll_number || "-"} />
        <Row label="Rank" value={data.entrance_rank || "-"} />
        <Row label="Score" value={data.entrance_score || "-"} />
      </Section>

      {/* 5️⃣ ACADEMIC QUALIFICATIONS */}
      <Section title="Academic Qualifications">
        {data.academic_qualifications &&
          Object.entries(data.academic_qualifications).map(
            ([level, info]) => (
              <div key={level} className="border p-3 rounded mb-3">
                <h4 className="font-semibold mb-2">{level}</h4>
                <div className="grid md:grid-cols-4 gap-3 text-sm">
                  <Info label="Board" value={info.board} />
                  <Info label="Year" value={info.year} />
                  <Info label="Stream" value={info.stream} />
                  <Info label="%" value={info.percentage} />
                </div>
              </div>
            )
          )}
      </Section>

      {/* 6️⃣ APPLICANT QUERY */}
      <Section title="Applicant Query">
        <p className="text-slate-700">
          {data.applicant_query || "—"}
        </p>
      </Section>

      {/* META */}
      <div className="text-sm text-slate-500">
        Submitted on: {new Date(data.created_at).toLocaleString()}
      </div>
    </div>
  );
}

/* ================= HELPERS ================= */

function Section({ title, children }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-lg font-bold mb-4 text-[#b11217]">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex gap-2">
      <span className="font-semibold w-52">{label}:</span>
      <span>{value}</span>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <div className="text-slate-500 text-xs">{label}</div>
      <div className="font-medium">{value || "-"}</div>
    </div>
  );
}
