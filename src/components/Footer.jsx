import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-20 grid gap-14 md:grid-cols-4">

        {/* BRAND */}
        <div>
          <img
            src="/rrsimt-logo.png"
            alt="RRSIMT Logo"
            className="h-16 mb-6 object-contain"
          />

          <p className="text-sm leading-relaxed">
            The foundation of this illustrious institution was laid by
            the Late Raja of Amethi, Rajarshi Rananjay Sinh, with a vision
            to empower the region through quality education, discipline,
            and opportunity.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-3 mt-6">
            <SocialIcon><FaFacebookF /></SocialIcon>
            <SocialIcon><FaInstagram /></SocialIcon>
            <SocialIcon><FaLinkedinIn /></SocialIcon>
            <SocialIcon><FaTwitter /></SocialIcon>
          </div>
        </div>

        {/* LINKS */}
        <div>
          <FooterTitle>Quick Links</FooterTitle>
          <ul className="space-y-3 text-sm">
            <FooterLink to="/">About RRS Group</FooterLink>
            <FooterLink to="/">Admission Eligibility</FooterLink>
            <FooterLink to="/">Admission Helpline</FooterLink>
            <FooterLink to="/">Placement Policy</FooterLink>
            <FooterLink to="/">Training & Development</FooterLink>
            <FooterLink to="/">Grievance Redressal</FooterLink>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <FooterTitle>Student Support</FooterTitle>
          <ul className="space-y-3 text-sm">
            <FooterText>Institute’s Happenings</FooterText>
            <FooterText>Media Coverage</FooterText>
            <FooterText>Annual Events</FooterText>
            <FooterText>Online Alumni Registration</FooterText>
            <FooterText>Career @ RRSIMT</FooterText>
            <FooterText>Mandatory Disclosure</FooterText>
          </ul>
        </div>

        {/* ADDRESS */}
        <div>
          <FooterTitle>Contact & Address</FooterTitle>

          <div className="space-y-4 text-sm">
            <div className="flex gap-3 items-start">
              <FaEnvelope className="mt-1 text-[#b11217]" />
              <span>admission@rrsimt.ac.in</span>
            </div>

            <div className="flex gap-3 items-start">
              <FaMapMarkerAlt className="mt-1 text-[#b11217]" />
              <span>
                Rajarshi Rananjay Sinh Institute of Management & Technology
                <br />
                Munshiganj, Amethi – 227405 (U.P.)
              </span>
            </div>

            <div className="flex gap-3 items-start">
              <FaPhoneAlt className="mt-1 text-[#b11217]" />
              <span>
                +91 8081528232
                <br />
                +91 9648333660
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-slate-800" />

      {/* BOTTOM BAR */}
      <div className="py-5 text-center text-sm text-slate-400">
        © {new Date().getFullYear()} RRSIMT. All Rights Reserved.
      </div>
    </footer>
  );
}

/* ======================
   HELPER COMPONENTS
====================== */

function FooterTitle({ children }) {
  return (
    <h4 className="text-white font-semibold mb-5 inline-block relative">
      {children}
      <span className="block w-12 h-[2px] bg-[#b11217] mt-2" />
    </h4>
  );
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="hover:text-white hover:translate-x-1
                   transition-all duration-300 inline-block"
      >
        {children}
      </Link>
    </li>
  );
}

function FooterText({ children }) {
  return (
    <li className="hover:text-white transition">
      {children}
    </li>
  );
}

function SocialIcon({ children }) {
  return (
    <div
      className="w-10 h-10 rounded-full bg-slate-800
                 flex items-center justify-center
                 cursor-pointer
                 hover:bg-[#b11217] hover:text-white
                 transition-all duration-300"
    >
      {children}
    </div>
  );
}
