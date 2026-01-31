import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      {/* ===== HEADER ===== */}
      <Navbar />

      <main className="w-full">

        {/* ================= HERO / BREADCRUMB ================= */}
        <section
          className="relative h-[320px] flex items-center justify-center text-center text-white"
          style={{
            backgroundImage: 'url("/contact-banner.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide">
              CONTACT US
            </h1>
            <div className="mt-4 inline-block bg-black/70 px-6 py-2 rounded text-sm font-semibold">
              CONTACT
            </div>
          </div>
        </section>

        {/* ================= CONTACT INFO CARDS ================= */}
        <section className="max-w-7xl mx-auto px-4 py-20">
          <div className="grid md:grid-cols-3 gap-8">

            <InfoCard icon={<FaPhoneAlt />} title="ADMISSION ENQUIRY">
              <p>+91 80815 28232</p>
              <p>+91 9648333660</p>
            </InfoCard>

            <InfoCard icon={<FaMapMarkerAlt />} title="ADDRESS">
              <p>
                Rajarshi Rananjay Sinh Institute Of<br />
                Management & Technology Campus<br />
                Munshiganj, Amethi – 227405, India
              </p>
            </InfoCard>

            <InfoCard icon={<FaEnvelope />} title="EMAIL US">
              <p>admission@rrsimt.ac.in</p>
            </InfoCard>

          </div>
        </section>

        {/* ================= CONTACT TABLE ================= */}
        <section className="max-w-7xl mx-auto px-4 pb-20">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3">S. No.</th>
                  <th>Name</th>
                  <th>Designation</th>
                  <th>E-mail</th>
                  <th>Contact No.</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  ["01", "Mrs. Kirti Jain", "TPO", "placement@rrsimt.ac.in", "9140046095"],
                  ["02", "Mrs. Renu Maurya", "Registrar", "registrar@rrsimt.ac.in", "9648333660"],
                  ["03", "Dr. Ashish Kumar Tripathi", "Library Incharge", "library@rrsimt.ac.in", "9554020945"],
                  ["04", "Mr. Raj Kumar Pal", "Admission Incharge", "admission@rrsimt.ac.in", "8081528232"],
                ].map((row, i) => (
                  <tr key={i} className="border-b hover:bg-slate-50">
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`py-3 ${
                          j === 1 ? "text-[#b11217] font-semibold" : ""
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ================= MAP + FORM ================= */}
        <section className="max-w-7xl mx-auto px-4 pb-24">
          <div className="grid md:grid-cols-2 gap-12">

            {/* MAP */}
            <div>
              <h3 className="text-2xl font-bold text-[#b11217] mb-4">
                Our Location
              </h3>
              <div className="w-full h-[350px] rounded overflow-hidden shadow">
                <iframe
                  title="RRSIMT Location"
                  src="https://maps.google.com/maps?q=Rajarshi%20Rananjay%20Sinh%20Institute%20Of%20Management%20%26%20Technology&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                />
              </div>
            </div>

            {/* FORM */}
            <div>
              <h3 className="text-2xl font-bold text-[#b11217] mb-4">
                Contact Us
              </h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border px-4 py-3 rounded focus:ring-2 focus:ring-[#b11217] outline-none"
                />
                <input
                  type="email"
                  placeholder="Email *"
                  className="w-full border px-4 py-3 rounded focus:ring-2 focus:ring-[#b11217] outline-none"
                />
                <input
                  type="text"
                  placeholder="Phone"
                  className="w-full border px-4 py-3 rounded focus:ring-2 focus:ring-[#b11217] outline-none"
                />
                <textarea
                  rows="4"
                  placeholder="Tell Me About Courses *"
                  className="w-full border px-4 py-3 rounded focus:ring-2 focus:ring-[#b11217] outline-none"
                />

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#0b2c4d] hover:bg-[#081f36] text-white px-6 py-3 rounded font-semibold transition"
                >
                  SEND MESSAGE <FaPaperPlane />
                </button>
              </form>
            </div>

          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <Footer />
    </>
  );
}

/* ================= HELPER ================= */

function InfoCard({ icon, title, children }) {
  return (
    <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-xl transition">
      <div className="text-4xl text-[#f2b705] flex justify-center mb-4">
        {icon}
      </div>
      <h4 className="font-bold text-[#b11217] mb-3">
        {title}
      </h4>
      <div className="text-sm text-slate-700 space-y-1">
        {children}
      </div>
    </div>
  );
}
