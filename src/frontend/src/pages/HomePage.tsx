import {
  ChevronDown,
  Clock,
  Coffee,
  MapPin,
  PawPrint,
  Users,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { PageId } from "../App";

interface HomePageProps {
  navigateTo: (page: PageId) => void;
}

const highlights = [
  {
    icon: <Users className="h-7 w-7" aria-hidden="true" />,
    title: "Family Rooms",
    desc: "Spacious, cozy rooms designed for families of all sizes.",
  },
  {
    icon: <PawPrint className="h-7 w-7" aria-hidden="true" />,
    title: "Pet Friendly",
    desc: "Small pets welcome with prior notice. We'll prepare a cozy corner.",
  },
  {
    icon: <Coffee className="h-7 w-7" aria-hidden="true" />,
    title: "Complimentary Breakfast",
    desc: "Bengali favourites and continental options served every morning.",
  },
  {
    icon: <Clock className="h-7 w-7" aria-hidden="true" />,
    title: "24-hr Front Desk",
    desc: "Our team is here around the clock, ready to help.",
  },
  {
    icon: <MapPin className="h-7 w-7" aria-hidden="true" />,
    title: "Walk to Park Street",
    desc: "Kolkata's iconic dining and cultural strip — just 2 minutes away.",
  },
];

const featuredPhotos = [
  {
    src: "/assets/uploads/image-5-5.png",
    label: "Balcony Suite",
    caption: "Balcony Suite with city views — Park Eastern Hotel",
    alt: "Park Eastern Hotel — spacious balcony suite with green city view",
  },
  {
    src: "/assets/uploads/image-1.png",
    label: "Cozy King Room",
    caption: "Cozy King Room — Park Eastern Hotel",
    alt: "Park Eastern Hotel — king bed room with warm tones and city window view",
  },
  {
    src: "/assets/uploads/image-11-11.png",
    label: "Work Desk",
    caption: "Ergonomic work desk with TV — Park Eastern Hotel",
    alt: "Park Eastern Hotel — work desk with television and ergonomic chair",
  },
  {
    src: "/assets/uploads/image-19-19.png",
    label: "Hotel Exterior",
    caption: "Park Eastern Hotel glowing signage at night",
    alt: "Park Eastern Hotel — exterior night view with glowing hotel signage on AJC Bose Road, Kolkata",
  },
];

function AnimatedSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      {children}
    </div>
  );
}

export default function HomePage({ navigateTo }: HomePageProps) {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ──────────────────── HERO ──────────────────── */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        aria-labelledby="hero-heading"
      >
        {/* Background image */}
        <img
          src="/assets/uploads/image-9-9.png"
          alt="Park Eastern Hotel — spacious balcony room with lush city and greenery view, Kolkata"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0,0,0,0.52)" }}
          aria-hidden="true"
        />
        {/* Warm tone overlay */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(123,75,50,0.18)" }}
          aria-hidden="true"
        />

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}
          >
            <p
              className="text-xs sm:text-sm font-sans font-medium uppercase tracking-widest mb-4"
              style={{ color: "var(--hotel-gold)" }}
            >
              ✦ Kolkata's Boutique Retreat ✦
            </p>
            <h1
              id="hero-heading"
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{
                color: "#FAF6EF",
                textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              }}
            >
              Your cozy home away from home on Park Street.
            </h1>
          </div>

          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(32px)",
              transition: "opacity 0.8s ease 0.25s, transform 0.8s ease 0.25s",
            }}
          >
            <p
              className="font-sans text-base sm:text-lg leading-relaxed mb-8 max-w-2xl mx-auto"
              style={{ color: "rgba(250,246,239,0.9)" }}
            >
              Family-friendly rooms • Pet-welcome • Boutique comfort in the
              heart of Kolkata.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                type="button"
                data-ocid="hero.primary_button"
                onClick={() => navigateTo("contact")}
                className="btn-primary text-sm sm:text-base px-8 py-3 shadow-warm-lg"
              >
                Check Availability
              </button>
              <button
                type="button"
                data-ocid="hero.secondary_button"
                onClick={() => navigateTo("rooms")}
                className="btn-secondary text-sm sm:text-base px-8 py-3"
              >
                Explore Rooms
              </button>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          aria-hidden="true"
          style={{
            opacity: heroVisible ? 0.7 : 0,
            transition: "opacity 1s ease 1s",
          }}
        >
          <ChevronDown className="h-7 w-7 text-white" />
        </div>
      </section>

      {/* ──────────────────── QUICK HIGHLIGHTS ──────────────────── */}
      <section
        aria-labelledby="highlights-heading"
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--hotel-cream)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 id="highlights-heading" className="sr-only">
              Hotel Highlights
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
              {highlights.map((item, i) => (
                <AnimatedSection
                  key={item.title}
                  delay={i * 80}
                  className="text-center"
                >
                  <div
                    className="inline-flex items-center justify-center w-14 h-14 rounded-full mb-3 mx-auto"
                    style={{ backgroundColor: "rgba(198,90,58,0.12)" }}
                  >
                    <span style={{ color: "var(--hotel-accent)" }}>
                      {item.icon}
                    </span>
                  </div>
                  <h3
                    className="font-serif text-sm font-semibold mb-1"
                    style={{ color: "var(--hotel-heading)" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-xs font-sans leading-snug"
                    style={{ color: "var(--hotel-text)", opacity: 0.75 }}
                  >
                    {item.desc}
                  </p>
                </AnimatedSection>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ──────────────────── FEATURED PHOTO STRIP ──────────────────── */}
      <section
        aria-labelledby="photos-heading"
        className="py-14 lg:py-20"
        style={{ backgroundColor: "var(--hotel-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="mb-10 text-center">
            <h2
              id="photos-heading"
              className="section-heading gold-underline mb-4"
            >
              A Glimpse of Park Eastern
            </h2>
            <p
              className="font-sans text-base mt-6 max-w-xl mx-auto"
              style={{ color: "var(--hotel-text)", opacity: 0.75 }}
            >
              Warmth in every corner — from sunlit rooms to the lively streets
              of Park Street.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredPhotos.map((photo, i) => (
              <AnimatedSection key={photo.label} delay={i * 100}>
                <figure className="group overflow-hidden rounded-lg shadow-warm">
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
                      }}
                      aria-hidden="true"
                    />
                  </div>
                  <figcaption className="pt-2 pb-1 px-1">
                    <p
                      className="font-serif text-sm font-semibold"
                      style={{ color: "var(--hotel-heading)" }}
                    >
                      {photo.label}
                    </p>
                    <p
                      className="text-xs font-sans mt-0.5"
                      style={{ color: "var(--hotel-text)", opacity: 0.55 }}
                    >
                      {photo.caption}
                    </p>
                  </figcaption>
                </figure>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────── CTA BAND ──────────────────── */}
      <section
        aria-label="Book your stay call to action"
        className="py-14 lg:py-20 text-center"
        style={{ backgroundColor: "var(--hotel-heading)" }}
      >
        <AnimatedSection className="max-w-2xl mx-auto px-4 sm:px-6">
          <p
            className="text-xs font-sans uppercase tracking-widest mb-3"
            style={{ color: "var(--hotel-gold)" }}
          >
            ✦ Boutique stays in central Kolkata ✦
          </p>
          <h2
            className="font-serif text-3xl lg:text-4xl font-semibold mb-4"
            style={{ color: "#FAF6EF" }}
          >
            Ready to experience Park Eastern?
          </h2>
          <p
            className="font-sans text-base mb-8 opacity-80"
            style={{ color: "#FAF6EF" }}
          >
            Book directly for the best rates, or explore our rooms to find the
            perfect fit for your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={() => navigateTo("contact")}
              className="btn-primary px-8 py-3 text-sm"
            >
              Book Your Stay
            </button>
            <button
              type="button"
              onClick={() => navigateTo("rooms")}
              className="btn-secondary px-8 py-3 text-sm"
            >
              View All Rooms
            </button>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
