import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedAdminRoute() {
  const token = localStorage.getItem("adminToken");
  const role = localStorage.getItem("adminRole");

  // 🔒 Strict but correct check
  if (!token || role !== "admin") {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminRole");
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
