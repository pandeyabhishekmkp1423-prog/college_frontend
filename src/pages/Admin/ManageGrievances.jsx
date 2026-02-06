import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function ManageGrievances() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchGrievances = useCallback(async () => {
    try {
      setError("");
      const res = await api.get("/grievances");
      setData(res.data || []);
    } catch (err) {
      console.error("Failed to fetch grievances", err);
      setError("Failed to load grievance applications");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGrievances();
  }, [fetchGrievances]);

  if (loading) {
    return <div className="p-6">Loading grievances...</div>;
  }

  return (
    <div className="p-6 space-y-6">

      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold text-[#b11217]">
          Grievance Applications
        </h1>
        <p className="text-sm text-slate-500">
          Manage submitted grievances
        </p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-700 p-3 rounded">
          {error}
        </div>
      )}

      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full text-sm">
          <thead className="bg-slate-200 text-left">
            <tr>
              <th className="p-3">Applicant</th>
              <th className="p-3">Department</th>
              <th className="p-3">Type</th>
              <th className="p-3">Submitted On</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-slate-500">
                  No grievances found
                </td>
              </tr>
            )}

            {data.map((g) => (
              <tr
                key={g.id}
                className="border-t hover:bg-slate-50 cursor-pointer"
                onClick={() => navigate(`/admin/grievances/${g.id}`)}
              >
                <td className="p-3 font-semibold text-[#b11217]">
                  {g.applicant_name}
                </td>
                <td className="p-3">{g.department}</td>
                <td className="p-3">{g.grievance_type}</td>
                <td className="p-3">
                  {new Date(g.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
