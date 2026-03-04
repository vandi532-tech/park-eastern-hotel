import { Heart, MapPin, Star } from "lucide-react";

const highlights = [
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Prime Location",
    text: "Steps from Park Street — Kolkata's cultural and dining heartbeat.",
  },
  {
    icon: <Heart className="h-5 w-5" />,
    title: "Personal Hospitality",
    text: "A small, independently run team who remembers your name and your morning tea.",
  },
  {
    icon: <Star className="h-5 w-5" />,
    title: "Boutique Character",
    text: "Handpicked furnishings, warm tones, and a homely atmosphere — unlike a chain hotel.",
  },
];

export default function AboutPage() {
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
            ✦ Our Story ✦
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-semibold"
            style={{ color: "#FAF6EF" }}
          >
            About Park Eastern Hotel
          </h2>
        </div>
      </div>

      {/* Main story section */}
      <section
        aria-labelledby="about-story-heading"
        className="py-14 lg:py-20"
        style={{ backgroundColor: "var(--hotel-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-warm-lg">
                  <img
                    src="/assets/uploads/image-19-19.png"
                    alt="Park Eastern Hotel — exterior at night with glowing hotel signage on AJC Bose Road, Kolkata"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative accent */}
                <div
                  className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl -z-10 hidden sm:block"
                  style={{
                    backgroundColor: "var(--hotel-gold)",
                    opacity: 0.25,
                  }}
                  aria-hidden="true"
                />
              </div>
              <p
                className="text-xs font-sans mt-3 text-center"
                style={{ color: "var(--hotel-text)", opacity: 0.5 }}
              >
                Park Eastern Hotel — AJC Bose Road, Kolkata
              </p>
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <h2
                id="about-story-heading"
                className="section-heading gold-underline mb-8"
              >
                Our Story
              </h2>
              <div
                className="space-y-4 font-sans text-base leading-relaxed"
                style={{ color: "var(--hotel-text)" }}
              >
                <p>
                  Nestled on Acharya Jagadish Chandra Bose Road in Kolkata's
                  beloved Park Street area, Park Eastern Hotel is a boutique
                  property with a big heart. We're a small, independently run
                  hotel that believes in warm, personal hospitality — the kind
                  where the staff remembers your name and your morning tea
                  preference.
                </p>
                <p>
                  Park Street puts you steps away from Kolkata's most celebrated
                  dining strip, world-class confectioneries, and buzzing
                  cultural venues. Stroll to the South Park Street Cemetery, one
                  of the oldest non-Church cemeteries in the world, or head out
                  toward Eden Gardens — the iconic cricket ground — just a short
                  ride away.
                </p>
                <p>
                  Whether you're here for business, leisure, or a family
                  holiday, we aim to make Park Eastern feel less like a hotel
                  and more like your home in Kolkata.
                </p>
                <p className="text-xs italic opacity-60">
                  (Source: Booking.com, Agoda — public listing information)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights cards */}
      <section
        aria-labelledby="about-highlights-heading"
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--hotel-cream)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="about-highlights-heading" className="sr-only">
            What Makes Us Special
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-6 rounded-xl"
                style={{ backgroundColor: "var(--hotel-bg)" }}
              >
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-full mb-4"
                  style={{ backgroundColor: "rgba(198,90,58,0.12)" }}
                  aria-hidden="true"
                >
                  <span style={{ color: "var(--hotel-accent)" }}>
                    {item.icon}
                  </span>
                </div>
                <h3
                  className="font-serif text-lg font-semibold mb-2"
                  style={{ color: "var(--hotel-heading)" }}
                >
                  {item.title}
                </h3>
                <p
                  className="font-sans text-sm leading-relaxed"
                  style={{ color: "var(--hotel-text)", opacity: 0.8 }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby attractions */}
      <section
        aria-labelledby="nearby-heading"
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--hotel-bg)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="nearby-heading"
            className="section-heading gold-underline mb-10 text-center"
          >
            Nearby Kolkata
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                name: "Park Street Dining Strip",
                dist: "~2 min walk",
                desc: "Kolkata's iconic street lined with restaurants and confectioneries.",
              },
              {
                name: "South Park Street Cemetery",
                dist: "~5 min walk",
                desc: "One of the oldest non-Church cemeteries in the world.",
              },
              {
                name: "Victoria Memorial",
                dist: "~15 min walk",
                desc: "A grand colonial landmark and museum, beautifully lit at night.",
              },
              {
                name: "Eden Gardens",
                dist: "~25 min by cab",
                desc: "The iconic cricket ground — a bucket-list venue for cricket fans.",
              },
              {
                name: "New Market",
                dist: "~10 min walk",
                desc: "Kolkata's historic shopping market with everything under one roof.",
              },
              {
                name: "Park Street Metro",
                dist: "~3 min walk",
                desc: "Quick access to the Kolkata Metro network.",
              },
            ].map((place) => (
              <div
                key={place.name}
                className="flex items-start gap-4 p-4 rounded-lg border"
                style={{
                  backgroundColor: "var(--hotel-cream)",
                  borderColor: "rgba(212,176,91,0.3)",
                }}
              >
                <div
                  className="flex-shrink-0 text-xs font-sans font-semibold px-2 py-1 rounded-full mt-0.5"
                  style={{
                    backgroundColor: "var(--hotel-gold)",
                    color: "var(--hotel-heading)",
                  }}
                >
                  {place.dist}
                </div>
                <div>
                  <p
                    className="font-serif text-sm font-semibold"
                    style={{ color: "var(--hotel-heading)" }}
                  >
                    {place.name}
                  </p>
                  <p
                    className="font-sans text-xs mt-0.5 leading-snug"
                    style={{ color: "var(--hotel-text)", opacity: 0.7 }}
                  >
                    {place.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
