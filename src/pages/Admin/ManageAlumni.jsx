import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function ManageAlumni() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAlumni = async () => {
      try {
        const res = await api.get("/alumni");
        setData(res.data);
      } catch (err) {
        console.error("Failed to fetch alumni", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAlumni();
  }, []);

  if (loading) {
    return <div className="p-6">Loading alumni registrations...</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Alumni Registrations
      </h1>

      <div className="overflow-x-auto bg-white shadow rounded">
        <table className="w-full text-sm">
          <thead className="bg-slate-200 text-left">
            <tr>
              <th className="p-3">Name</th>
              <th className="p-3">Branch</th>
              <th className="p-3">Year</th>
              <th className="p-3">Email</th>
              <th className="p-3">Submitted On</th>
            </tr>
          </thead>

          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan="5" className="p-4 text-center text-slate-500">
                  No alumni registrations found
                </td>
              </tr>
            )}

            {data.map((a) => (
              <tr
                key={a.id}
                className="border-t hover:bg-slate-50 cursor-pointer"
                onClick={() => navigate(`/admin/alumni/${a.id}`)}
              >
                <td className="p-3 font-semibold text-[#b11217]">
                  {a.name}
                </td>
                <td className="p-3">{a.branch}</td>
                <td className="p-3">{a.year_of_qua}</td>
                <td className="p-3">{a.email}</td>
                <td className="p-3">
                  {new Date(a.created_at).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
