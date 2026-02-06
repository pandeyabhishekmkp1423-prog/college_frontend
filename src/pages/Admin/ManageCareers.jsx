import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function ManageCareers() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  /* =========================
     AUTH FAIL HANDLER
  ========================= */
  const handleAuthFail = useCallback(() => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login", { replace: true });
  }, [navigate]);

  /* =========================
     FETCH CAREER APPLICATIONS
  ========================= */
  const fetchCareers = useCallback(async () => {
    try {
      setError("");
      const res = await api.get("/careers");
      setData(res.data || []);
    } catch (err) {
      console.error("Failed to fetch careers", err);

      if ([401, 403].includes(err.response?.status)) {
        handleAuthFail();
      } else {
        setError("Failed to load career applications");
      }
    } finally {
      setLoading(false);
    }
  }, [handleAuthFail]);

  /* =========================
     INITIAL LOAD
  ========================= */
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    fetchCareers();
  }, [fetchCareers, navigate]);

  if (loading) {
    return (
      <div className="p-6 text-slate-500">
        Loading career applications...
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl font-bold">
          Career Applications
        </h1>
        <p className="text-sm text-slate-500">
          Manage submitted job applications
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
          {error}
          <button
            onClick={fetchCareers}
            className="ml-4 underline font-semibold"
          >
            Retry
          </button>
        </div>
      )}

      {/* TABLE */}
      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="w-full text-sm">
          <thead className="bg-slate-200 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Post</th>
              <th className="p-3">Department</th>
              <th className="p-3">Submitted On</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan="4" className="p-4 text-center text-slate-500">
                  No career applications found
                </td>
              </tr>
            )}

            {data.map((c) => (
              <tr
                key={c.id}
                className="border-t hover:bg-slate-50 cursor-pointer"
                onClick={() => navigate(`/admin/careers/${c.id}`)}
              >
                <td className="p-3 font-semibold text-[#b11217]">
                  {c.name}
                </td>
                <td className="p-3">
                  {c.applied_for}
                </td>
                <td className="p-3">
                  {c.department}
                </td>
                <td className="p-3">
                  {c.created_at
                    ? new Date(c.created_at).toLocaleDateString()
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
