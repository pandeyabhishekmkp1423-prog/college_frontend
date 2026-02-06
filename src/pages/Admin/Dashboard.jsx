import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import {
  FileText,
  GraduationCap,
  Briefcase,
  AlertTriangle,
  Bell,
  BookOpen,
} from "lucide-react";

const INITIAL_DASHBOARD = {
  stats: {
    admissions: 0,
    alumni: 0,
    careers: 0,
    grievances: 0,
    notices: 0,
    courses: 0,
  },
  recent: {
    admissions: [],
    alumni: [],
    careers: [],
    grievances: [],
  },
};

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(INITIAL_DASHBOARD);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAuthFail = useCallback(() => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login", { replace: true });
  }, [navigate]);

  const fetchDashboard = useCallback(async () => {
    try {
      const res = await api.get("/admin/dashboard");
      const data = res.data || {};

      setDashboard({
        stats: {
          admissions: data.stats?.admissions ?? 0,
          alumni: data.stats?.alumni ?? 0,
          careers: data.stats?.careers ?? 0,
          grievances: data.stats?.grievances ?? 0,
          notices: data.stats?.notices ?? 0,
          courses: data.stats?.courses ?? 0,
        },
        recent: {
          admissions: data.recent?.admissions ?? [],
          alumni: data.recent?.alumni ?? [],
          careers: data.recent?.careers ?? [],
          grievances: data.recent?.grievances ?? [],
        },
      });
    } catch (err) {
      if ([401, 403].includes(err.response?.status)) {
        handleAuthFail();
      } else {
        setError("Dashboard service unavailable");
      }
    } finally {
      setLoading(false);
    }
  }, [handleAuthFail]);

  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (!token) {
      navigate("/admin/login", { replace: true });
      return;
    }

    fetchDashboard();
  }, [fetchDashboard, navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen text-slate-400">
        Loading dashboard…
      </div>
    );
  }

  const { stats, recent } = dashboard;
  const total =
    stats.admissions +
    stats.alumni +
    stats.careers +
    stats.grievances;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 p-4 sm:p-8 space-y-12">

      {/* HEADER */}
      <div className="relative overflow-hidden rounded-3xl p-6 sm:p-10 bg-gradient-to-r from-[#b11217] via-red-600 to-red-700 text-white shadow-2xl">
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full blur-2xl" />

        <div className="relative z-10">
          <h1 className="text-2xl sm:text-4xl font-bold tracking-wide">
            RRSIMT Admin Dashboard
          </h1>
          <p className="text-sm sm:text-base opacity-90 mt-2">
            College Management Overview
          </p>

          {/* PROGRESS BAR */}
          <div className="mt-6">
            <div className="flex justify-between text-xs opacity-90 mb-2">
              <span>Total Records</span>
              <span>{total}</span>
            </div>
            <div className="h-3 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-3 bg-white transition-all duration-700"
                style={{
                  width: total
                    ? `${(stats.admissions / total) * 100}%`
                    : "0%",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
        <StatCard title="Admissions" value={stats.admissions} icon={<FileText />} color="blue" />
        <StatCard title="Alumni" value={stats.alumni} icon={<GraduationCap />} color="emerald" />
        <StatCard title="Careers" value={stats.careers} icon={<Briefcase />} color="purple" />
        <StatCard title="Grievances" value={stats.grievances} icon={<AlertTriangle />} color="red" />
        <StatCard title="Notices" value={stats.notices} icon={<Bell />} color="amber" />
        <StatCard title="Courses" value={stats.courses} icon={<BookOpen />} color="indigo" />
      </div>

      {/* RECENT DATA */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        <ListCard title="Recent Admissions" items={recent.admissions} field1="applicant_name" field2="course" />
        <ListCard title="Recent Alumni" items={recent.alumni} field1="name" field2="branch" />
        <ListCard title="Recent Careers" items={recent.careers} field1="name" field2="applied_for" />
        <ListCard title="Recent Grievances" items={recent.grievances} field1="applicant_name" field2="grievance_type" />
      </div>
    </div>
  );
}

/* ================= COMPONENTS ================= */

function StatCard({ title, value, icon, color }) {
  const colors = {
    blue: "bg-blue-500/10 text-blue-600",
    emerald: "bg-emerald-500/10 text-emerald-600",
    purple: "bg-purple-500/10 text-purple-600",
    red: "bg-red-500/10 text-red-600",
    amber: "bg-amber-500/10 text-amber-600",
    indigo: "bg-indigo-500/10 text-indigo-600",
  };

  return (
    <div className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 p-6 border border-slate-100 hover:-translate-y-1">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-xs uppercase text-slate-500 tracking-wide">
            {title}
          </p>
          <p className="text-3xl font-bold text-slate-800 mt-1">
            {value}
          </p>
        </div>
        <div className={`p-3 rounded-xl ${colors[color]} transition`}>
          {icon}
        </div>
      </div>
    </div>
  );
}

function ListCard({ title, items, field1, field2 }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 border border-slate-100">
      <h3 className="font-semibold text-slate-800 mb-4 pb-2 border-b">
        {title}
      </h3>

      {items.length === 0 ? (
        <p className="text-sm text-slate-400 italic">
          No data available
        </p>
      ) : (
        <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
          {items.map((item) => (
            <div
              key={item.id}
              className="border-b last:border-b-0 pb-3"
            >
              <p className="font-medium text-slate-800 truncate">
                {item[field1]}
              </p>
              <p className="text-xs text-slate-500 truncate">
                {item[field2]}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
