import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function AlumniDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const res = await api.get(`/alumni/${id}`);
        setData(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load alumni details");
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, [id]);

  if (loading) return <div className="p-6">Loading alumni details…</div>;
  if (error) return <div className="p-6 text-red-600">{error}</div>;
  if (!data) return null;

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#b11217]">
          Alumni Registration Detail
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="text-sm px-4 py-2 border rounded"
        >
          ← Back
        </button>
      </div>

      {/* 1️⃣ BASIC DETAILS */}
      <Section title="Basic Details">
        <Row label="Name" value={data.name} />
        <Row label="Year of Qualification" value={data.year_of_qua} />
        <Row label="Branch" value={data.branch} />
        <Row label="Email" value={data.email} />
      </Section>

      {/* 2️⃣ CURRENT STATUS */}
      <Section title="Current Status">
        <Row label="After Graduation" value={data.after_gra} />
        <Row label="Work Environment" value={data.work_environment} />
      </Section>

      {/* 3️⃣ EMPLOYMENT DETAILS */}
      <Section title="Employment Details">
        <Row label="Employed Through" value={data.emp_th || "—"} />
        <Row label="Company" value={data.emp_comp || "—"} />
        <Row label="Designation" value={data.designation || "—"} />
        <Row label="Date of Joining" value={data.doj || "—"} />
      </Section>

      {/* META */}
      <div className="text-sm text-slate-500">
        Submitted on: {new Date(data.created_at).toLocaleString()}
      </div>
    </div>
  );
}

/* ================= HELPERS (IDENTICAL STYLE) ================= */

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
