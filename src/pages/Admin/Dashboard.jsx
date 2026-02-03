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

/* =========================
   INITIAL STATE
========================= */
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
    grievances: [],
  },
};

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(INITIAL_DASHBOARD);
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
     FETCH DASHBOARD
  ========================= */
  const fetchDashboard = useCallback(async () => {
    try {
      setError("");
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
          grievances: data.recent?.grievances ?? [],
        },
      });
    } catch (err) {
      console.error("Dashboard error:", err);
      if ([401, 403].includes(err.response?.status)) {
        handleAuthFail();
      } else {
        setError("Dashboard service unavailable");
        setDashboard(INITIAL_DASHBOARD);
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

    fetchDashboard();
    const interval = setInterval(fetchDashboard, 15000);
    return () => clearInterval(interval);
  }, [fetchDashboard, navigate]);

  if (loading) {
    return (
      <div className="p-6 text-slate-500">
        Loading dashboard…
      </div>
    );
  }

  const { stats, recent } = dashboard;

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
          Dashboard Overview
        </h1>
        <p className="text-sm text-slate-500 mt-1">
          RRSIMT Management Panel
        </p>
      </div>

      {/* ERROR */}
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md text-sm">
          {error}
          <button
            onClick={fetchDashboard}
            className="ml-4 underline font-semibold"
          >
            Retry
          </button>
        </div>
      )}

      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
        <StatCard title="Admissions" value={stats.admissions} icon={<FileText />} />
        <StatCard title="Alumni" value={stats.alumni} icon={<GraduationCap />} />
        <StatCard title="Careers" value={stats.careers} icon={<Briefcase />} />
        <StatCard title="Grievances" value={stats.grievances} icon={<AlertTriangle />} />
        <StatCard title="Notices" value={stats.notices} icon={<Bell />} />
        <StatCard title="Courses" value={stats.courses} icon={<BookOpen />} />
      </div>

      {/* RECENT SECTIONS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <ListCard title="Recent Admissions">
          {recent.admissions.length === 0
            ? <Empty />
            : recent.admissions.map(a => (
                <Row
                  key={a.id}
                  title={a.applicant_name || a.name}
                  subtitle={a.course}
                />
              ))}
        </ListCard>

        <ListCard title="Recent Alumni Registrations">
          {recent.alumni.length === 0
            ? <Empty />
            : recent.alumni.map(a => (
                <Row
                  key={a.id}
                  title={a.name}
                  subtitle={a.branch}
                />
              ))}
        </ListCard>

        <ListCard title="Recent Grievances">
          {recent.grievances.length === 0
            ? <Empty />
            : recent.grievances.map(g => (
                <Row
                  key={g.id}
                  title={g.applicant_name}
                  subtitle={g.grievance_type}
                />
              ))}
        </ListCard>
      </div>
    </div>
  );
}

/* =========================
   UI COMPONENTS
========================= */

function StatCard({ title, value, icon }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5 flex items-center justify-between hover:shadow transition">
      <div>
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {title}
        </p>
        <p className="text-3xl font-bold text-slate-800 mt-1">
          {value}
        </p>
      </div>
      <div className="text-slate-400">
        {icon}
      </div>
    </div>
  );
}

function ListCard({ title, children }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6">
      <h3 className="font-semibold text-slate-800 mb-4">
        {title}
      </h3>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

function Row({ title, subtitle }) {
  return (
    <div className="border-b last:border-b-0 pb-3 last:pb-0">
      <p className="font-medium text-slate-800">
        {title}
      </p>
      <p className="text-xs text-slate-500">
        {subtitle}
      </p>
    </div>
  );
}

function Empty() {
  return (
    <p className="text-sm text-slate-400 italic">
      No data available
    </p>
  );
}
