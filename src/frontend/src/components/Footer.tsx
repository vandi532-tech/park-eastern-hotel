import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";
import type { PageId } from "../App";

interface FooterProps {
  navigateTo: (page: PageId) => void;
}

export default function Footer({ navigateTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      aria-label="Site footer"
      style={{ backgroundColor: "var(--hotel-heading)", color: "#FAF6EF" }}
    >
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <h2
              className="font-serif text-2xl font-semibold mb-2"
              style={{ color: "#FAF6EF" }}
            >
              Park Eastern Hotel
            </h2>
            <p
              className="text-sm font-sans leading-relaxed opacity-80 mb-4"
              style={{ color: "var(--hotel-gold)" }}
            >
              Your cozy home away from home on Park Street.
            </p>
            <p className="text-xs font-sans opacity-60 leading-relaxed">
              A boutique hotel in the heart of Kolkata — family-friendly,
              pet-welcome, and filled with warm hospitality.
            </p>
          </div>

          {/* Contact column */}
          <div>
            <h3
              className="font-serif text-lg font-semibold mb-4"
              style={{ color: "var(--hotel-gold)" }}
            >
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm font-sans">
              <li className="flex items-start gap-2">
                <MapPin
                  className="h-4 w-4 mt-0.5 flex-shrink-0"
                  style={{ color: "var(--hotel-gold)" }}
                  aria-hidden="true"
                />
                <span className="opacity-80 leading-snug">
                  Ground Floor, 190A AJC Bose Road,
                  <br />
                  Park Street Area, Kolkata 700017
                  <br />
                  West Bengal, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone
                  className="h-4 w-4 flex-shrink-0"
                  style={{ color: "var(--hotel-gold)" }}
                  aria-hidden="true"
                />
                <a
                  href="tel:+913340645678"
                  className="opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-gold rounded"
                >
                  +91-33-4064-5678
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail
                  className="h-4 w-4 flex-shrink-0"
                  style={{ color: "var(--hotel-gold)" }}
                  aria-hidden="true"
                />
                <a
                  href="mailto:stay@parkeasternhotel.com"
                  className="opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-gold rounded"
                >
                  stay@parkeasternhotel.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock
                  className="h-4 w-4 flex-shrink-0"
                  style={{ color: "var(--hotel-gold)" }}
                  aria-hidden="true"
                />
                <span className="opacity-80">Front Desk open 24 hours</span>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div>
            <h3
              className="font-serif text-lg font-semibold mb-4"
              style={{ color: "var(--hotel-gold)" }}
            >
              Explore
            </h3>
            <ul className="space-y-2 text-sm font-sans">
              {(
                [
                  ["rooms", "Rooms & Rates"],
                  ["about", "Our Story"],
                  ["dining", "Dining & Breakfast"],
                  ["pet-family", "Pet & Family"],
                  ["gallery", "Gallery"],
                  ["location", "Location & Map"],
                  ["contact", "Book Your Stay"],
                ] as [PageId, string][]
              ).map(([page, label]) => (
                <li key={page}>
                  <button
                    type="button"
                    onClick={() => navigateTo(page)}
                    className="opacity-75 hover:opacity-100 transition-opacity text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-gold rounded"
                    style={{ color: "#FAF6EF" }}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Book */}
          <div>
            <h3
              className="font-serif text-lg font-semibold mb-4"
              style={{ color: "var(--hotel-gold)" }}
            >
              Follow Us
            </h3>
            <a
              href="https://www.instagram.com/parkeasternhotel"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.link"
              className="inline-flex items-center gap-2 text-sm font-sans opacity-80 hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-gold rounded"
              aria-label="Park Eastern Hotel on Instagram (opens in new tab)"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" />
              <span>@parkeasternhotel</span>
            </a>

            <div className="mt-6">
              <button
                type="button"
                onClick={() => navigateTo("contact")}
                className="btn-primary text-sm w-full justify-center"
              >
                Book Direct
              </button>
              <p className="text-xs mt-2 opacity-60 text-center font-sans">
                Best price guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t border-white/10"
        style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-sans opacity-60">
          <p>© {currentYear} Park Eastern Hotel. All rights reserved.</p>
          <p className="text-center">
            We respect your privacy. Your contact details are used only to
            respond to your enquiry.
          </p>
          <p>
            Built with ♥ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== "undefined" ? window.location.hostname : "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-opacity"
              aria-label="Built with caffeine.ai (opens in new tab)"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
