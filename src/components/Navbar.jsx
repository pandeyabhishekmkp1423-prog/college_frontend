import { useState } from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

/* =========================
   SHARED STYLES
========================= */
const dropdownPanel =
  "absolute left-1/2 -translate-x-1/2 top-full mt-5 w-[1000px] bg-white " +
  "rounded-xl shadow-2xl border border-slate-200 z-50 " +
  "opacity-0 invisible translate-y-3 " +
  "group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 " +
  "transition-all duration-200 ease-out";

const dropdownItem =
  "block px-3 py-2 rounded-md text-slate-700 " +
  "hover:bg-[#fdf2f2] hover:text-[#b11217] transition";

/* =========================
   NAVBAR
========================= */
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header className="w-full sticky top-0 z-50">

        {/* 🔴 TOP INFO BAR */}
        <div className="bg-[#b11217] text-white text-sm">
          <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="font-semibold">📘 COLLEGE CODE : 383</div>
            <div className="text-center">
              Approved by AICTE, New Delhi & Affiliated to AKTU, Lucknow
            </div>
            <div className="font-semibold">☎ 8081528232, 9648333660</div>
          </div>
        </div>

        {/* 🏫 MAIN NAV */}
        <div className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-20">

              {/* LOGO */}
              <Link to="/" className="flex items-center">
                <img
                  src="/rrsimt-logo.png"
                  alt="RRSIMT Logo"
                  className="h-14 md:h-16 object-contain"
                />
              </Link>

              {/* DESKTOP MENU */}
              <nav className="hidden lg:flex items-center gap-8 font-semibold text-slate-800">

                <NavLink to="/">HOME</NavLink>

                <MegaMenu label="About Us">
                  <div className="grid grid-cols-4 gap-8 p-8 text-sm">
                    <Column title="Overview">
                      <Item to="/vision">Vision & Mission</Item>
                      <Item to="/rrsg-group">About RRS Group</Item>
                      <Item to="/infrastructure">Infrastructure</Item>
                      <Item to="/mandatory-disclosure">Mandatory Disclosure</Item>
                      <Item to="/advisory-board">Advisory Board</Item>
                      <Item to="/financials">Financial & Audited Statements</Item>
                    </Column>
                    <Column title="Our Leadership">
                      <Item to="/chairman-message">Chairman Message</Item>
                      <Item to="/vice-chairman-message">Vice-Chairman Message</Item>
                      <Item to="/director-message">Director Message</Item>
                    </Column>
                    <Column title="Statutory Committees">
                      <Item to="/anti-ragging">Anti Ragging Committee</Item>
                      <Item to="/grievance">Student Grievance Redressal</Item>
                      <Item to="/icc">Internal Complaint Committee</Item>
                      <Item to="/proctorial">Proctorial Board</Item>
                    </Column>
                    <Column title="Approvals">
                      <Item to="/aicte">AICTE Approvals</Item>
                      <Item to="/aktu">AKTU Affiliation</Item>
                    </Column>
                  </div>
                </MegaMenu>

                <MegaMenu label="Academics">
                  <div className="grid grid-cols-5 gap-8 p-8 text-sm">
                    <Column title="Undergraduate">
                   <Item to="/courses/civil-engineering">Civil Engineering</Item>                      
                   <Item to="/courses/cse">Computer Science & Engineering</Item>
                      <Item to="/courses/electrical-engineering">Electrical Engineering</Item>
                      <Item to="/courses/electronics-communication">Electronics & Communication Engineering</Item>
                      <Item to="/courses/information-technology">Information Technology</Item>
                      <Item to="/courses/mechanical-engineering">Mechanical Engineering</Item>
                    </Column>
                    <Column title="Applied Sciences">
                      <Item to="/applied-sciences-humanities">
                        Applied Sciences & Humanities
                       </Item>
                      <Item className="font-semibold text-[#b11217]">
                        Academic Calendar
                      </Item>
                    </Column>
                    <Column title="Postgraduate">
                      <Item to="/mba">MBA</Item>
                    </Column>
                    <Column title="Policies">
                      <Item>Anti Ragging</Item>
                      <Item>Research & Development</Item>
                      <Item>Student Grievance Policy</Item>
                      <Item>Internal Complaint Policy</Item>
                    </Column>
                    <Column title="IIC">
                      <Item>IIC Policy</Item>
                      <Item>IIC Certificate</Item>
                      <Item>IIC Activities</Item>
                    </Column>
                  </div>
                </MegaMenu>

                <MegaMenu label="Admissions">
                  <div className="grid grid-cols-2 gap-10 p-8 text-sm">
                    <Column title="Overview">
                      <Item>Admission Eligibility</Item>
                      <Item>Admission Helpline</Item>
                      <Item to="/admission">Online Admission Enquiry</Item>
                      <Item>Required Document List</Item>
                      <Item>Fee Structure & Payment</Item>
                    </Column>
                    <Column title="Anti Ragging Affidavits">
                      <Item>For Parents</Item>
                      <Item>For Students</Item>
                    </Column>
                  </div>
                </MegaMenu>

                <MegaMenu label="Placements">
                  <div className="p-6 text-sm">
                    <Item>Our Top Recruiters</Item>
                    <Item>Top Placed Students</Item>
                    <Item>Placement Policy</Item>
                    <Item>Training</Item>
                  </div>
                </MegaMenu>

                <NavLink to="/contact">CONTACT</NavLink>
              </nav>

              {/* DRAWER BUTTON */}
              <button
                className="text-3xl"
                onClick={() => setDrawerOpen(true)}
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* OVERLAY */}
      {drawerOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* RIGHT DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-[90%] max-w-sm bg-white z-50
        transform transition-transform duration-300
        ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-3xl text-red-600"
            onClick={() => setDrawerOpen(false)}
          >
            ✕
          </button>
        </div>

        {/* 🔽 SCROLLABLE CONTENT */}
        <div className="px-6 pb-10 space-y-12 overflow-y-auto h-[calc(100vh-80px)]">

          <DrawerSection title="Additional Links">
            <DrawerLink to="/facilities">Facilities</DrawerLink>
            <DrawerLink to="/happenings">Institute's Happenings</DrawerLink>
            <DrawerLink to="/alumni-register-form">
              Online Alumni Registration
            </DrawerLink>
            <DrawerLink to="/career">Career@RRSIMT Online Form</DrawerLink>
            <DrawerLink to="/grievance">Grievance Redressal</DrawerLink>
            <DrawerLink to="/media">Media Coverage</DrawerLink>
            <DrawerLink to="/events">Annual Events</DrawerLink>
          </DrawerSection>

          <DrawerSection title="Quick Links">
            <ExternalLink href="https://aktu.ac.in">AKTU</ExternalLink>
            <ExternalLink href="https://aicte.gov.in">AICTE</ExternalLink>
            <ExternalLink href="https://aishe.gov.in">AISHE</ExternalLink>
            <ExternalLink href="https://uptac.admissions.nic.in">UPTAC</ExternalLink>
            <ExternalLink href="https://nta.ac.in">NTA</ExternalLink>
            <ExternalLink href="https://cuet.nta.nic.in">CUET</ExternalLink>
          </DrawerSection>

          <DrawerSection title="Connect With Us">
            <div className="flex gap-4">
              <Social
                href="https://www.facebook.com/rrsimtamethi/"
                className="bg-[#1877F2]"
              >
                <FaFacebookF />
              </Social>

              <Social
                href="https://www.instagram.com/rrsimtamethi/"
                className="bg-[#E4405F]"
              >
                <FaInstagram />
              </Social>

              <Social
                href="https://www.youtube.com/@rrsimt-amethi7017"
                className="bg-[#FF0000]"
              >
                <FaYoutube />
              </Social>
            </div>
          </DrawerSection>

        </div>
      </aside>
    </>
  );
}

/* =========================
   HELPERS
========================= */

function NavLink({ to, children }) {
  return <Link to={to} className="hover:text-[#b11217]">{children}</Link>;
}

function MegaMenu({ label, children }) {
  return (
    <div className="relative group">
      <span className="cursor-pointer hover:text-[#f2b705] flex gap-1">
        {label.toUpperCase()} <span className="text-xs">▾</span>
      </span>
      <div className={dropdownPanel}>{children}</div>
    </div>
  );
}

function Column({ title, children }) {
  return (
    <div>
      <h4 className="font-bold mb-4 uppercase">{title}</h4>
      <ul className="space-y-2">{children}</ul>
    </div>
  );
}

function Item({ to, children, className = "" }) {
  return to ? (
    <Link to={to} className={`${dropdownItem} ${className}`}>
      {children}
    </Link>
  ) : (
    <li className={`${dropdownItem} ${className}`}>{children}</li>
  );
}

function MobileLink({ to, close, children }) {
  return <Link to={to} onClick={() => close(false)}>{children}</Link>;
}

function DrawerSection({ title, children }) {
  return (
    <section>
      <h3 className="text-[#b11217] font-bold text-lg uppercase">
        {title}
      </h3>
      <div className="w-12 h-[2px] bg-[#f2b705] my-3" />
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function DrawerLink({ to, children }) {
  return (
    <Link
      to={to}
      className="block text-slate-700 font-medium hover:text-[#b11217]"
    >
      {children}
    </Link>
  );
}

function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block hover:text-[#b11217]"
    >
      {children}
    </a>
  );
}

function Social({ href, className, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-12 h-12 text-white flex items-center justify-center rounded ${className}`}
    >
      {children}
    </a>
  );
}
