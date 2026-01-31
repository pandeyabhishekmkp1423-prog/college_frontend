import { useEffect, useState, useCallback } from "react";
import publicApi from "../services/publicApi";
import {
  FaBullhorn,
  FaClipboardList,
  FaGraduationCap,
} from "react-icons/fa";

/* =========================
   SINGLE NOTICE ROW
========================= */
function NoticeRow({ index, title, description }) {
  return (
    <div
      className="
        relative py-4 pl-10 pr-3
        border-b border-dashed border-slate-300
        last:border-b-0
      "
    >
      {/* NUMBER */}
      <span
        className="
          absolute left-0 top-4
          text-slate-500 font-semibold
        "
      >
        {index + 1}.
      </span>

      {/* CONTENT */}
      <h4 className="text-sm font-semibold text-slate-900 leading-snug">
        {title}
      </h4>

      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

/* =========================
   NOTICE CARD (FIXED HEIGHT)
========================= */
function NoticeSection({ icon, title, notices }) {
  return (
    <div
      className="
        bg-white rounded-xl shadow-md
        border border-slate-300
        min-h-[520px] flex flex-col
        overflow-hidden
      "
    >
      {/* HEADER */}
      <div className="flex items-center gap-4 px-6 py-5 bg-[#b11217]/10 border-b border-slate-300">
        <div className="w-11 h-11 rounded-md bg-[#b11217] text-white flex items-center justify-center text-lg">
          {icon}
        </div>

        <div>
          <h3 className="text-lg font-bold text-slate-900">
            {title}
          </h3>
          <p className="text-xs text-slate-600">
            Total Notices: {notices.length}
          </p>
        </div>
      </div>

      {/* NOTEBOOK BODY */}
      <div
        className="
          flex-1 overflow-y-auto
          px-6 py-4
          bg-[linear-gradient(to_bottom,transparent_31px,#e5e7eb_32px)]
          bg-[length:100%_32px]
        "
      >
        {notices.length === 0 ? (
          <div className="h-full flex items-center justify-center text-slate-400 italic text-sm">
            No notices available
          </div>
        ) : (
          notices.map((n, i) => (
            <NoticeRow
              key={n.id}
              index={i}
              title={n.title}
              description={n.description}
            />
          ))
        )}
      </div>
    </div>
  );
}

/* =========================
   MAIN NOTICE BOARD
========================= */
export default function NoticeBoard() {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotices = useCallback(async () => {
    try {
      setLoading(true);
      const res = await publicApi.get("/notices");
      setNotices(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Failed to load public notices", err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNotices();
    const onFocus = () => fetchNotices();
    window.addEventListener("focus", onFocus);
    return () => window.removeEventListener("focus", onFocus);
  }, [fetchNotices]);

  const byCategory = (cat) =>
    notices.filter((n) => n.category === cat);

  if (loading) {
    return (
      <div className="py-24 text-center text-slate-500 text-lg">
        Loading notices…
      </div>
    );
  }

  return (
    <section className="py-28 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Notice Board
          </h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-lg">
            Official announcements and academic updates from
            Rajarshi Rananjay Sinh Institute of Management & Technology.
          </p>
        </div>

        {/* GRID WITH DIVIDERS */}
        <div className="grid md:grid-cols-3 gap-10 relative">

          {/* GENERAL */}
          <NoticeSection
            title="General Announcements"
            icon={<FaBullhorn />}
            notices={byCategory("general")}
          />

          {/* EXAMINATION */}
          <NoticeSection
            title="Examination Updates"
            icon={<FaClipboardList />}
            notices={byCategory("examination")}
          />

          {/* ADMISSIONS */}
          <NoticeSection
            title="Admissions & Academics"
            icon={<FaGraduationCap />}
            notices={byCategory("admission")}
          />

        </div>
      </div>
    </section>
  );
}
