import { useEffect, useState } from "react";
import publicApi from "../services/publicApi";

/* =========================
   FIXED CATEGORY SOURCE
========================= */
const categories = [
  { key: "convocation", title: "Convocation" },
  { key: "events", title: "Events" },
  { key: "fresher", title: "Fresher Party" },
  { key: "placements", title: "Placement Cell" },
  { key: "labs", title: "Labs" },
  { key: "sports", title: "Sports" },
];

/* =========================
   DUMMY IMAGES (TEMP)
========================= */
const DUMMY_IMAGES = {
  convocation: [
    "https://img.freepik.com/free-photo/students-graduation-ceremony_23-2148522276.jpg?w=740&q=80",
  ],
  events: [
    "https://groupdynamix.com/wp-content/uploads/2025/01/November-34-Event-Ideas-for-College-Students-Boost-Fun-Engagement-945x945.png",
  ],
  fresher: [
    "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80",
  ],
  placements: [
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80",
  ],
  labs: [
    "https://designcollaborative.com/wp-content/uploads/2024/02/11.16.22_066-scaled.webp",
  ],
  sports: [
    "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=800&q=80",
  ],
};

export default function CampusMemories() {
  const [galleryMap, setGalleryMap] = useState({});
  const [active, setActive] = useState(null);
  const [index, setIndex] = useState(0);

  /* =========================
     FETCH IMAGES (PARALLEL)
  ========================= */
  useEffect(() => {
    const fetchGalleries = async () => {
      try {
        const requests = categories.map(async (cat) => {
          const res = await publicApi.get(`/gallery/${cat.key}`);
          return [
            cat.key,
            res.data && res.data.length > 0
              ? res.data.map((i) => i.image_url)
              : DUMMY_IMAGES[cat.key],
          ];
        });

        const results = await Promise.all(requests);
        setGalleryMap(Object.fromEntries(results));
      } catch (err) {
        console.error("Campus memories error:", err);
      }
    };

    fetchGalleries();
  }, []);

  const open = (cat) => {
    setActive(cat);
    setIndex(0);
  };

  return (
    <section className="py-32 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
            Campus Memories
          </h2>
          <p className="text-lg text-slate-600 mt-5 max-w-2xl mx-auto">
            Life, learning, celebrations and achievements at RRSIMT
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {categories.map((cat) => {
            const images =
              galleryMap[cat.key] || DUMMY_IMAGES[cat.key];

            return (
              <div
                key={cat.key}
                onClick={() => open({ title: cat.title, images })}
                className="group relative h-[420px] cursor-pointer
                           overflow-hidden rounded-[28px]
                           shadow-lg
                           transition-transform duration-500 hover:-translate-y-3"
              >
                {/* IMAGE */}
                <img
                  src={images[0]}
                  alt={cat.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover
                             transition-transform duration-[1200ms]
                             group-hover:scale-105"
                  style={{ willChange: "transform" }}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t
                                from-black/70 via-black/30 to-transparent" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="text-2xl font-bold text-white">
                    {cat.title}
                  </h3>

                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-slate-300">
                      {images.length} moments
                    </span>

                    <span className="text-sm font-semibold text-[#b11217]
                                     opacity-0 group-hover:opacity-100
                                     translate-y-2 group-hover:translate-y-0
                                     transition-all duration-300">
                      View →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* MODAL */}
      {active && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <div className="relative max-w-6xl w-full px-6">

            <img
              src={active.images[index]}
              alt="Campus Memory"
              loading="eager"
              decoding="async"
              className="w-full h-[75vh] object-cover rounded-2xl"
            />

            {active.images.length > 1 && (
              <button
                onClick={() =>
                  setIndex((index + 1) % active.images.length)
                }
                className="absolute right-10 top-1/2 -translate-y-1/2
                           text-white text-6xl hover:text-[#b11217] transition"
              >
                ›
              </button>
            )}

            <button
              onClick={() => setActive(null)}
              className="absolute top-8 right-8 text-white text-3xl
                         hover:text-[#b11217] transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
