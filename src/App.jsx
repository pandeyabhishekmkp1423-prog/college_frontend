import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import AdminLayout from "./components/AdminLayout";

/* ========= PUBLIC PAGES ========= */
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Gallery from "./pages/Gallery";
import Login from "./pages/Login";
import Enquiry from "./pages/Enquiry";
import Contact from "./pages/Contact";

/* ========= FORM PAGES (LANDING PAGES) ========= */
import Admission from "./pages/Admission";
import AlumniRegister from "./pages/AlumniRegister";
import Career from "./pages/Career";
import Grievance from "./pages/Grievance";
import AppliedSciences from "./pages/AppliedSciences";
import MBA from "./pages/MBA";
import CivilEngineering from "./pages/CivilEngineering";
import CSE from "./pages/CSE";
import ElectricalEngineering from "./pages/ElectricalEngineering";
import ElectronicsCommunication from "./pages/ElectronicsCommunication";
import InformationTechnology from "./pages/InformationTechnology";
import MechanicalEngineering from "./pages/MechanicalEngineering";

/* ========= ADMIN PAGES ========= */
import AdminLogin from "./pages/Admin/AdminLogin";
import Dashboard from "./pages/Admin/Dashboard";
import ManageNotices from "./pages/Admin/ManageNotices";
import ManageGallery from "./pages/Admin/ManageGallery";
import ManageCourses from "./pages/Admin/ManageCourses";
import RegisteredUsers from "./pages/Admin/RegisteredUsers";

export default function App() {
  return (
    <BrowserRouter>

      {/* 🌫️ GLOBAL AMBIENT BACKGROUND */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1576495199011-eb94736d05d6?q=80&w=1172&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(2px)",
          transform: "scale(1.03)",
          opacity: 0.45,
        }}
      />

      <Routes>

        {/* ===== PUBLIC ROUTES ===== */}
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/login" element={<Login />} />
        <Route path="/enquiry" element={<Enquiry />} />
        <Route path="/contact" element={<Contact />} />


        {/* ===== FORM LANDING PAGES ===== */}
        <Route path="/admission" element={<Admission />} />
        <Route path="/alumni-register-form" element={<AlumniRegister />} />
        <Route path="/career" element={<Career />} />
        <Route path="/grievance" element={<Grievance />} />
        <Route path="/applied-sciences-humanities"element={<AppliedSciences />}/>
        <Route path="/mba" element={<MBA />} />
        <Route path="/courses/civil-engineering"element={<CivilEngineering />}/>
        <Route path="/courses/cse" element={<CSE />} />
        <Route path="/courses/electrical-engineering"element={<ElectricalEngineering />}/>
        <Route path="/courses/electronics-communication"element={<ElectronicsCommunication />}/>
        <Route path="/courses/information-technology"element={<InformationTechnology />}/>
        <Route path="/courses/mechanical-engineering"element={<MechanicalEngineering />}/>



        {/* ===== ADMIN ROUTES (DEV ONLY) ===== */}
        {!import.meta.env.PROD && (
          <>
            <Route path="/admin/login" element={<AdminLogin />} />

            <Route element={<ProtectedAdminRoute />}>
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="notices" element={<ManageNotices />} />
                <Route path="gallery" element={<ManageGallery />} />
                <Route path="courses" element={<ManageCourses />} />
                <Route path="users" element={<RegisteredUsers />} />
              </Route>
            </Route>
          </>
        )}

        {/* ===== FALLBACK ===== */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
}
