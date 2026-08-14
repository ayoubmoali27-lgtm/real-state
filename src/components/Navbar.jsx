import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { navLinks } from "../data/site.js";
import Logo from "../assets/Logo.png"; // adjust path depth as needed

// then in the JSX:
<img alt="PrimeState" src={Logo} className="h-9 w-9 object-contain md:h-10" />;
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-outline-variant/30"
          : "bg-surface/70 backdrop-blur-sm"
      }`}
    >
      <div className="container-prime h-20 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setOpen(false)}
        >
          <img
            alt="PrimeState"
            src={Logo}
            className="h-9 w-9 object-contain md:h-10"
          />
          <span className="hidden sm:inline heading-h3 uppercase tracking-widest text-primary">
            PrimeEstate
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                `label-lg uppercase transition-all ${
                  isActive
                    ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                    : "text-on-surface-variant hover:text-on-surface"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/calculator" className="btn-primary !px-6 !py-3 text-xs">
            Pre-Approval
          </Link>
        </div>

        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-3xl">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden absolute top-20 inset-x-0 bg-surface border-b border-outline-variant/30 transition-all duration-300 origin-top ${
          open
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <nav className="container-prime flex flex-col py-6 gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block py-3 label-lg uppercase border-b border-outline-variant/20 ${
                  isActive ? "text-secondary" : "text-on-surface"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/calculator"
            onClick={() => setOpen(false)}
            className="btn-primary text-center mt-4"
          >
            Pre-Approval
          </Link>
        </nav>
      </div>
    </header>
  );
}
