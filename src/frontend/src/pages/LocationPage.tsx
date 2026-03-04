import { Clock, Mail, MapPin, Phone } from "lucide-react";

const walkTimes = [
  { place: "Park Street dining strip", time: "~2 min walk", emoji: "🍽️" },
  { place: "South Park Street Cemetery", time: "~5 min walk", emoji: "🌿" },
  {
    place: "Kolkata Metro (Park Street station)",
    time: "~3 min walk",
    emoji: "🚇",
  },
  { place: "New Market", time: "~10 min walk", emoji: "🛍️" },
  { place: "Victoria Memorial", time: "~15 min walk / short cab", emoji: "🏛️" },
  { place: "Eden Gardens", time: "~25 min by cab", emoji: "🏏" },
];

export default function LocationPage() {
  return (
    <article>
      {/* Page header */}
      <div
        className="py-14 lg:py-20 text-center"
        style={{ backgroundColor: "var(--hotel-heading)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p
            className="text-xs font-sans uppercase tracking-widest mb-3"
            style={{ color: "var(--hotel-gold)" }}
          >
            ✦ In the Heart of Kolkata ✦
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-semibold"
            style={{ color: "#FAF6EF" }}
          >
            Location &amp; Directions
          </h2>
        </div>
      </div>

      {/* Main content */}
      <section
        aria-labelledby="location-heading"
        className="py-14 lg:py-20"
        style={{ backgroundColor: "var(--hotel-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div>
              <h2
                id="location-heading"
                className="section-heading gold-underline mb-8"
              >
                Find Us
              </h2>
              <div
                className="rounded-xl overflow-hidden shadow-warm-lg"
                style={{ border: "2px solid rgba(212,176,91,0.3)" }}
              >
                <iframe
                  data-ocid="location.map_marker"
                  title="Park Eastern Hotel location on Google Maps"
                  src="https://maps.google.com/maps?q=190A+Acharya+Jagadish+Chandra+Bose+Road+Kolkata&output=embed"
                  width="100%"
                  height="400"
                  className="block"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps showing Park Eastern Hotel location at 190A AJC Bose Road, Kolkata"
                />
              </div>
              <p
                className="text-xs font-sans mt-2 text-center"
                style={{ color: "var(--hotel-text)", opacity: 0.5 }}
              >
                Map: 190A Acharya Jagadish Chandra Bose Road, Kolkata (via
                Google Maps)
              </p>
            </div>

            {/* Address & contact */}
            <div>
              <div
                className="rounded-xl p-6 lg:p-8 mb-6"
                style={{ backgroundColor: "var(--hotel-cream)" }}
              >
                <h3
                  className="font-serif text-xl font-semibold mb-5"
                  style={{ color: "var(--hotel-heading)" }}
                >
                  Park Eastern Hotel
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin
                      className="h-5 w-5 flex-shrink-0 mt-0.5"
                      style={{ color: "var(--hotel-accent)" }}
                      aria-hidden="true"
                    />
                    <address
                      className="font-sans text-sm not-italic leading-relaxed"
                      style={{ color: "var(--hotel-text)" }}
                    >
                      Ground Floor, 190A Acharya Jagadish Chandra Bose Road
                      <br />
                      Park Street Area, Kolkata — 700 017
                      <br />
                      West Bengal, India
                    </address>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone
                      className="h-5 w-5 flex-shrink-0"
                      style={{ color: "var(--hotel-accent)" }}
                      aria-hidden="true"
                    />
                    <a
                      href="tel:+913340645678"
                      className="font-sans text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-gold rounded"
                      style={{ color: "var(--hotel-text)" }}
                    >
                      +91-33-4064-5678
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail
                      className="h-5 w-5 flex-shrink-0"
                      style={{ color: "var(--hotel-accent)" }}
                      aria-hidden="true"
                    />
                    <a
                      href="mailto:stay@parkeasternhotel.com"
                      className="font-sans text-sm hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-gold rounded"
                      style={{ color: "var(--hotel-text)" }}
                    >
                      stay@parkeasternhotel.com
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock
                      className="h-5 w-5 flex-shrink-0"
                      style={{ color: "var(--hotel-accent)" }}
                      aria-hidden="true"
                    />
                    <span
                      className="font-sans text-sm"
                      style={{ color: "var(--hotel-text)" }}
                    >
                      Front Desk: Open 24 hours, 7 days a week
                    </span>
                  </li>
                </ul>
              </div>

              {/* Walk times */}
              <div>
                <h3
                  className="font-serif text-lg font-semibold mb-4"
                  style={{ color: "var(--hotel-heading)" }}
                >
                  From Our Front Door
                </h3>
                <ul className="space-y-2">
                  {walkTimes.map((item) => (
                    <li
                      key={item.place}
                      className="flex items-center gap-3 py-2 border-b"
                      style={{ borderColor: "rgba(212,176,91,0.25)" }}
                    >
                      <span
                        className="text-lg w-8 text-center flex-shrink-0"
                        aria-hidden="true"
                      >
                        {item.emoji}
                      </span>
                      <span
                        className="font-sans text-sm flex-1"
                        style={{ color: "var(--hotel-text)" }}
                      >
                        {item.place}
                      </span>
                      <span
                        className="font-sans text-xs font-semibold flex-shrink-0 px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: "var(--hotel-gold)",
                          color: "var(--hotel-heading)",
                        }}
                      >
                        {item.time}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
