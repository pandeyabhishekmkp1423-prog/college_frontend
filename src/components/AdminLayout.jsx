import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminRole");
    navigate("/admin/login", { replace: true });
  };

  return (
    <div className="min-h-screen flex bg-slate-100">
      {/* ================= MOBILE SIDEBAR ================= */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />
          <aside className="relative z-50 w-72 h-full bg-slate-900 text-white flex flex-col">
            <SidebarContent logout={logout} onClose={() => setOpen(false)} />
          </aside>
        </div>
      )}

      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden lg:flex w-72 bg-slate-900 text-white flex-col">
        <SidebarContent logout={logout} />
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 flex flex-col">
        {/* HEADER */}
        <header className="bg-white border-b px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button className="lg:hidden" onClick={() => setOpen(true)}>
              <Menu />
            </button>

            <div>
              <h1 className="text-lg sm:text-xl font-semibold text-slate-800">
                RRSIMT Admin Dashboard
              </h1>
              <p className="text-xs text-slate-500 hidden sm:block">
                Authorized Access Only
              </p>
            </div>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <section className="flex-1 p-4 sm:p-6">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

/* ================= SIDEBAR ================= */

function SidebarContent({ logout, onClose }) {
  return (
    <>
      {/* BRANDING */}
      <div className="px-6 py-6 border-b border-slate-700 flex items-center gap-3">
        <img
          src="/rrsimt-logo.png"
          alt="RRSIMT Logo"
          className="h-12 w-12 object-contain bg-white rounded-md p-1"
        />
        <div>
          <h2 className="text-base font-semibold leading-tight">
            RRSIMT
          </h2>
          <p className="text-xs text-slate-400">
            Admin Panel
          </p>
        </div>

        {onClose && (
          <button
            className="absolute top-4 right-4 lg:hidden"
            onClick={onClose}
          >
            <X />
          </button>
        )}
      </div>

      {/* NAVIGATION */}
      <nav className="flex-1 px-4 py-6 space-y-6 text-sm">
        <NavGroup title="Main">
          <NavItem to="/admin/dashboard" label="Dashboard" />
        </NavGroup>

        <NavGroup title="Admissions">
          <NavItem to="/admin/admissions" label="Admission Enquiries" />
          <NavItem to="/admin/alumni" label="Alumni Registrations" />
        </NavGroup>

        <NavGroup title="Applications">
          <NavItem to="/admin/careers" label="Career Applications" />
          <NavItem to="/admin/grievances" label="Grievances" />
        </NavGroup>

        <NavGroup title="Content">
          <NavItem to="/admin/notices" label="Manage Notices" />
          <NavItem to="/admin/courses" label="Manage Courses" />
          <NavItem to="/admin/gallery" label="Manage Gallery" />
        </NavGroup>
      </nav>

      {/* LOGOUT (ONLY ONE, AS REQUESTED) */}
      <div className="px-4 py-4 border-t border-slate-700">
        <button
          onClick={logout}
          className="w-full bg-red-600 hover:bg-red-700 transition text-white py-2 rounded-md text-sm font-semibold"
        >
          Logout
        </button>
      </div>
    </>
  );
}

/* ================= NAV HELPERS ================= */

function NavGroup({ title, children }) {
  return (
    <div>
      <p className="px-2 mb-2 text-xs uppercase tracking-wider text-slate-400">
        {title}
      </p>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function NavItem({ to, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `block px-4 py-2 rounded-md transition ${
          isActive
            ? "bg-[#b11217] text-white"
            : "text-slate-300 hover:bg-slate-800 hover:text-white"
        }`
      }
    >
      {label}
    </NavLink>
  );
}
