import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { PageId } from "../App";

interface NavProps {
  currentPage: PageId;
  navigateTo: (page: PageId) => void;
}

const navItems: { id: PageId; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "rooms", label: "Rooms" },
  { id: "about", label: "About" },
  { id: "dining", label: "Dining" },
  { id: "pet-family", label: "Pet & Family" },
  { id: "gallery", label: "Gallery" },
  { id: "location", label: "Location" },
  { id: "contact", label: "Book Now" },
];

export default function Navigation({ currentPage, navigateTo }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const burgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        burgerRef.current &&
        !burgerRef.current.contains(e.target as Node)
      ) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [mobileOpen]);

  // Close on ESC
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileOpen]);

  const handleNav = (page: PageId) => {
    navigateTo(page);
    setMobileOpen(false);
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled
            ? "rgba(123, 75, 50, 0.97)"
            : "var(--hotel-heading)",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.25)" : "none",
        }}
      >
        <nav
          aria-label="Main navigation"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <button
              type="button"
              onClick={() => handleNav("home")}
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-gold focus-visible:ring-offset-1 rounded"
              aria-label="Park Eastern Hotel — Go to home"
            >
              <span
                className="font-serif text-lg lg:text-xl font-semibold leading-tight"
                style={{ color: "#FAF6EF" }}
              >
                Park Eastern Hotel
              </span>
              <span
                className="hidden sm:inline text-xs font-sans ml-1 opacity-75"
                style={{ color: "var(--hotel-gold)" }}
              >
                ✦ Kolkata
              </span>
            </button>

            {/* Desktop nav */}
            <ul className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    data-ocid="nav.link"
                    onClick={() => handleNav(item.id)}
                    className={[
                      "px-3 py-2 text-sm font-sans font-medium rounded transition-all duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-gold focus-visible:ring-offset-1",
                      currentPage === item.id
                        ? "text-hotel-gold"
                        : "text-stone-200 hover:text-white",
                      item.id === "contact"
                        ? "ml-2 px-4 py-2 rounded btn-primary text-xs"
                        : "",
                    ]
                      .join(" ")
                      .trim()}
                    style={
                      item.id === "contact"
                        ? { fontSize: "0.825rem", letterSpacing: "0.5px" }
                        : {}
                    }
                    aria-current={currentPage === item.id ? "page" : undefined}
                  >
                    {item.label}
                    {currentPage === item.id && item.id !== "contact" && (
                      <span
                        className="block h-0.5 mt-0.5 rounded-full"
                        style={{ backgroundColor: "var(--hotel-gold)" }}
                      />
                    )}
                  </button>
                </li>
              ))}
            </ul>

            {/* Mobile hamburger */}
            <button
              ref={burgerRef}
              type="button"
              className="lg:hidden p-2 rounded text-stone-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-gold focus-visible:ring-offset-1"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        aria-label="Mobile navigation menu"
        aria-modal="true"
        className={[
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        ].join(" ")}
        style={{ backgroundColor: "rgba(123, 75, 50, 0.98)" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-2 pt-16">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              data-ocid="nav.link"
              onClick={() => handleNav(item.id)}
              className={[
                "text-xl font-sans font-medium py-3 px-8 rounded-lg w-64 text-center",
                "transition-all duration-200",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-gold focus-visible:ring-offset-1",
                currentPage === item.id
                  ? "text-hotel-gold bg-white/10"
                  : "text-stone-100 hover:text-hotel-gold hover:bg-white/5",
              ].join(" ")}
              aria-current={currentPage === item.id ? "page" : undefined}
              style={{
                transitionDelay: mobileOpen ? `${idx * 40}ms` : "0ms",
                transform: mobileOpen ? "translateY(0)" : "translateY(10px)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16 lg:h-18" aria-hidden="true" />
    </>
  );
}
