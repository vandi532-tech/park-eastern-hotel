import { ChevronDown, ChevronUp, PawPrint, Users } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    q: "What size pets are allowed?",
    a: "We welcome small pets (typically under 10 kg). Please contact us before booking so we can prepare accordingly.",
  },
  {
    id: 2,
    q: "Is there a pet fee?",
    a: "A nominal cleaning fee may apply. We'll confirm the details when you get in touch with reception.",
  },
  {
    id: 3,
    q: "Are there parks nearby for walks?",
    a: "Yes — Maidan, one of Kolkata's largest open green spaces, is a short ride away. Victoria Memorial Gardens are also nearby.",
  },
  {
    id: 4,
    q: "What amenities are available for kids?",
    a: "We can arrange extra bedding, cots for infants, and are happy to suggest family-friendly dining spots on Park Street.",
  },
  {
    id: 5,
    q: "How do I request pet arrangements?",
    a: "Simply mention it when booking or call us at +91-33-4064-5678. We'll arrange a cozy corner and pet bed.",
  },
];

function FaqItem({ item }: { item: (typeof faqs)[number] }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      data-ocid="faq.panel"
      className="border-b last:border-b-0"
      style={{ borderColor: "rgba(212,176,91,0.3)" }}
    >
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left flex items-start justify-between gap-4 py-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hotel-gold focus-visible:ring-offset-1 rounded"
        aria-expanded={open}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span
          className="font-serif text-base font-semibold leading-snug"
          style={{ color: "var(--hotel-heading)" }}
        >
          {item.q}
        </span>
        <span
          className="flex-shrink-0 mt-0.5"
          style={{ color: "var(--hotel-accent)" }}
          aria-hidden="true"
        >
          {open ? (
            <ChevronUp className="h-5 w-5" />
          ) : (
            <ChevronDown className="h-5 w-5" />
          )}
        </span>
      </button>
      <div
        id={`faq-answer-${item.id}`}
        aria-label={item.q}
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "200px" : "0", opacity: open ? 1 : 0 }}
      >
        <p
          className="font-sans text-sm leading-relaxed pb-5"
          style={{ color: "var(--hotel-text)", opacity: 0.85 }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function PetFamilyPage() {
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
            ✦ Everyone is Welcome ✦
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-semibold"
            style={{ color: "#FAF6EF" }}
          >
            Pet &amp; Family Friendly
          </h2>
        </div>
      </div>

      {/* Hero strip */}
      <section
        aria-labelledby="petfamily-intro-heading"
        className="py-14 lg:py-20"
        style={{ backgroundColor: "var(--hotel-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <figure>
              <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-warm-lg">
                <img
                  src="/assets/uploads/image-1.png"
                  alt="Park Eastern Hotel — welcoming king bed room, family and pet friendly stay"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption
                className="text-xs font-sans mt-2 text-center"
                style={{ color: "var(--hotel-text)", opacity: 0.5 }}
              >
                Family-Friendly Room — Park Eastern Hotel
              </figcaption>
            </figure>

            {/* Text */}
            <div>
              <h2
                id="petfamily-intro-heading"
                className="section-heading gold-underline mb-8"
              >
                We Love Families &amp; Pets
              </h2>
              <p
                className="font-sans text-base leading-relaxed mb-6"
                style={{ color: "var(--hotel-text)" }}
              >
                We love families and pets — just let us know, and we'll make
                your stay smooth.
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div
                  className="flex items-start gap-3 p-4 rounded-lg"
                  style={{ backgroundColor: "var(--hotel-cream)" }}
                >
                  <PawPrint
                    className="h-5 w-5 flex-shrink-0 mt-0.5"
                    style={{ color: "var(--hotel-accent)" }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3
                      className="font-serif text-sm font-semibold mb-1"
                      style={{ color: "var(--hotel-heading)" }}
                    >
                      Pet Welcome
                    </h3>
                    <p
                      className="font-sans text-xs leading-snug"
                      style={{ color: "var(--hotel-text)", opacity: 0.75 }}
                    >
                      Small pets under 10 kg. Pet bed &amp; corner ready on
                      request.
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-start gap-3 p-4 rounded-lg"
                  style={{ backgroundColor: "var(--hotel-cream)" }}
                >
                  <Users
                    className="h-5 w-5 flex-shrink-0 mt-0.5"
                    style={{ color: "var(--hotel-accent)" }}
                    aria-hidden="true"
                  />
                  <div>
                    <h3
                      className="font-serif text-sm font-semibold mb-1"
                      style={{ color: "var(--hotel-heading)" }}
                    >
                      Family-Ready
                    </h3>
                    <p
                      className="font-sans text-xs leading-snug"
                      style={{ color: "var(--hotel-text)", opacity: 0.75 }}
                    >
                      Extra bedding, infant cots, and family room options
                      available.
                    </p>
                  </div>
                </div>
              </div>

              {/* Reassurance note */}
              <div
                className="rounded-xl p-4 border"
                style={{
                  backgroundColor: "rgba(198,90,58,0.07)",
                  borderColor: "rgba(198,90,58,0.25)",
                }}
              >
                <p
                  className="font-sans text-sm italic"
                  style={{ color: "var(--hotel-heading)" }}
                >
                  "Please let us know in advance — we arrange a cozy space for
                  your pet."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        aria-labelledby="faq-heading"
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--hotel-cream)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="faq-heading"
            className="section-heading gold-underline mb-10 text-center"
          >
            Frequently Asked
          </h2>
          <div
            className="rounded-xl overflow-hidden border"
            style={{
              backgroundColor: "var(--hotel-bg)",
              borderColor: "rgba(212,176,91,0.3)",
            }}
          >
            <div className="divide-y px-6">
              {faqs.map((faq) => (
                <FaqItem key={faq.id} item={faq} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nearby parks */}
      <section
        aria-labelledby="nearby-parks-heading"
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--hotel-bg)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="nearby-parks-heading"
            className="section-heading gold-underline mb-10"
          >
            Pet Walk &amp; Family Spots
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {[
              {
                name: "Maidan",
                dist: "Short ride",
                desc: "One of Kolkata's largest open green spaces — ideal for morning walks with your pet.",
              },
              {
                name: "Victoria Memorial Gardens",
                dist: "~15 min walk",
                desc: "Beautiful colonial gardens — popular with families and great for evening strolls.",
              },
              {
                name: "Park Street Restaurants",
                dist: "~2 min walk",
                desc: "Several family-friendly eateries on Kolkata's most famous dining strip.",
              },
              {
                name: "South Park Street Cemetery",
                dist: "~5 min walk",
                desc: "A peaceful, historically significant site — a quiet walk for the whole family.",
              },
            ].map((place) => (
              <div
                key={place.name}
                className="flex items-start gap-4 p-4 rounded-lg border"
                style={{
                  backgroundColor: "var(--hotel-cream)",
                  borderColor: "rgba(212,176,91,0.25)",
                }}
              >
                <div
                  className="flex-shrink-0 text-xs font-sans font-semibold px-2 py-1 rounded-full mt-0.5 whitespace-nowrap"
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
