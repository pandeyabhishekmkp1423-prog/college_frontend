import { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function AdminGrievanceDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchGrievance = useCallback(async () => {
    try {
      const res = await api.get(`/grievances/${id}`);
      setData(res.data);
    } catch (err) {
      console.error("Error loading grievance", err);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchGrievance();
  }, [fetchGrievance]);

  if (loading) return <div className="p-6">Loading...</div>;
  if (!data) return <div className="p-6">No data found</div>;

  return (
    <div className="p-6 space-y-8">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#b11217]">
          Grievance Registration Detail
        </h1>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-slate-200 rounded"
        >
          ← Back
        </button>
      </div>

      {/* BASIC DETAILS */}
      <Section title="Applicant Details">
        <Row label="Name" value={data.applicant_name} />
        <Row label="Class" value={data.class} />
        <Row label="Semester" value={data.semester} />
        <Row label="Roll Number" value={data.roll_no} />
        <Row label="Department" value={data.department} />
      </Section>

      {/* GRIEVANCE DETAILS */}
      <Section title="Grievance Information">
        <Row label="Type of Grievance" value={data.grievance_type} />
        <Row label="Event Date" value={data.event_date} />
        <Row label="Complaint Description" value={data.complaint_description} />
        <Row label="Root Cause" value={data.root_cause} />
      </Section>

    </div>
  );
}

/* ===== UI HELPERS ===== */

function Section({ title, children }) {
  return (
    <div className="bg-[#f8f9fa] p-6 rounded shadow space-y-3">
      <h3 className="text-lg font-semibold text-[#b11217] border-b pb-2 mb-3">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="grid grid-cols-3 gap-4 text-sm">
      <div className="font-medium text-slate-700">
        {label}:
      </div>
      <div className="col-span-2 text-slate-800">
        {value || "-"}
      </div>
    </div>
  );
}
