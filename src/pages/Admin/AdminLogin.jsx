import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", res.data.token);
      localStorage.setItem("adminRole", res.data.admin.role);
      navigate("/admin/dashboard");
    } catch (err) {
      // Better error differentiation for debugging
      if (err.response) {
        if (err.response.status === 401) {
          setError("Invalid admin credentials");
        } else if (err.response.status === 404) {
          setError("Login service not found");
        } else {
          setError("Server error. Please try again.");
        }
      } else {
        setError("Network error. Please check your connection.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-2xl overflow-hidden border-2 border-[#b11217]/40">

        {/* HEADER / BRANDING */}
        <div className="bg-[#b11217] text-white text-center py-6 px-4">
          <img
            src="/rrsimt-logo.png"
            alt="RRSIMT Logo"
            className="mx-auto h-16 mb-3"
          />
          <h1 className="text-xl font-bold leading-tight">
            Rajarshi Rananjay Sinh
          </h1>
          <p className="text-sm opacity-90">
            Institute of Management & Technology
          </p>
          <p className="text-xs mt-2 tracking-wider uppercase opacity-80">
            Admin Panel Login
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="text-red-600 text-sm text-center">
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Admin Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#b11217]"
              placeholder="admin@rrsimt.ac.in"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#b11217]"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="
              w-full py-3 rounded-md font-semibold text-white
              bg-[#b11217] hover:bg-[#8f0e13]
              transition disabled:opacity-60
            "
          >
            {loading ? "Signing in..." : "Login to Admin Panel"}
          </button>
        </form>

        {/* FOOTER */}
        <div className="bg-slate-50 text-center text-xs text-slate-500 py-3 border-t">
          © {new Date().getFullYear()} RRSIMT · Authorized Access Only
        </div>
      </div>
    </div>
  );
}
