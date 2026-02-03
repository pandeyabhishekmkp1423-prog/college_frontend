import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api"; // ✅ STANDARD ADMIN API

export default function ManageAdmissions() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAdmissions = async () => {
      try {
        const res = await api.get("/admissions");
        setData(res.data);
      } catch (err) {
        console.error("Failed to fetch admissions", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAdmissions();
  }, []);

  if (loading) {
    return <div className="p-6">Loading admission enquiries...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Admission Enquiries</h1>

      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="w-full text-sm">
          <thead className="bg-slate-200 text-left">
            <tr>
              <th className="p-3">Applicant Name</th>
              <th className="p-3">Course</th>
              <th className="p-3">Branch</th>
              <th className="p-3">Status</th>
              <th className="p-3">Submitted On</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-slate-500">
                  No admission enquiries found
                </td>
              </tr>
            )}

            {data.map((d) => (
              <tr
                key={d.id}
                className="border-t hover:bg-slate-50 cursor-pointer"
                onClick={() => navigate(`/admin/admissions/${d.id}`)}
              >
                <td className="p-3 font-semibold text-[#b11217]">
                  {d.applicant_name}
                </td>
                <td className="p-3">{d.course}</td>
                <td className="p-3">{d.branch}</td>
                <td className="p-3">
                  <span className="px-2 py-1 rounded text-xs bg-slate-200">
                    {d.status}
                  </span>
                </td>
                <td className="p-3">
                  {new Date(d.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
