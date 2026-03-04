import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { useState } from "react";

const menuSections = [
  {
    title: "Bengali Favourites",
    emoji: "🍛",
    items: ["Luchi with Aloo Dum", "Mishti Doi (sweet yoghurt)", "Cholar Dal"],
  },
  {
    title: "Continental",
    emoji: "🍳",
    items: [
      "Eggs to Order (boiled, scrambled, or omelette)",
      "Toast with butter & jam",
      "Seasonal Fruit Plate",
    ],
  },
  {
    title: "Hot Beverages",
    emoji: "☕",
    items: ["Masala Chai", "Darjeeling Tea", "Filter Coffee"],
  },
];

export default function DiningPage() {
  const [menuOpen, setMenuOpen] = useState(false);

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
            ✦ Morning Rituals ✦
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-semibold"
            style={{ color: "#FAF6EF" }}
          >
            Dining &amp; Breakfast
          </h2>
        </div>
      </div>

      {/* Main content */}
      <section
        aria-labelledby="dining-heading"
        className="py-14 lg:py-20"
        style={{ backgroundColor: "var(--hotel-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <figure>
              <div className="aspect-[4/3] overflow-hidden rounded-xl shadow-warm-lg">
                <img
                  src="/assets/uploads/image-1-2.png"
                  alt="Park Eastern Hotel — in-room tea and coffee tray with kettle and Nescafe, complimentary for all guests"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption
                className="text-xs font-sans mt-2 text-center"
                style={{ color: "var(--hotel-text)", opacity: 0.5 }}
              >
                Complimentary tea &amp; coffee tray — Park Eastern Hotel
              </figcaption>
            </figure>

            {/* Text */}
            <div>
              <h2
                id="dining-heading"
                className="section-heading gold-underline mb-8"
              >
                Start Your Day Right
              </h2>
              <div
                className="space-y-4 font-sans text-base leading-relaxed mb-8"
                style={{ color: "var(--hotel-text)" }}
              >
                <p>
                  Every morning begins with a complimentary breakfast in our
                  cozy breakfast nook. We bring you the best of both worlds —
                  warming Bengali staples like luchi with aloo dum and mishti
                  doi alongside continental favourites: eggs to order, fresh
                  toast, seasonal fruit, and a selection of hot beverages.
                </p>
                <p>
                  It's the perfect fuel before you step out to explore Park
                  Street and beyond.
                </p>
              </div>

              {/* CTA */}
              <button
                type="button"
                data-ocid="dining.open_modal_button"
                onClick={() => setMenuOpen(true)}
                className="btn-primary px-6 py-3 text-sm"
                aria-haspopup="dialog"
              >
                See Sample Menu
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu highlights */}
      <section
        aria-labelledby="menu-highlights-heading"
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--hotel-cream)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="menu-highlights-heading"
            className="section-heading gold-underline mb-2"
          >
            What's on the Table
          </h2>
          <p
            className="font-sans text-sm mt-8 mb-10"
            style={{ color: "var(--hotel-text)", opacity: 0.7 }}
          >
            A complimentary spread — because every great day starts with a great
            breakfast.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {menuSections.map((section) => (
              <div
                key={section.title}
                className="p-6 rounded-xl text-left"
                style={{ backgroundColor: "var(--hotel-bg)" }}
              >
                <div className="text-3xl mb-3" aria-hidden="true">
                  {section.emoji}
                </div>
                <h3
                  className="font-serif text-lg font-semibold mb-3"
                  style={{ color: "var(--hotel-heading)" }}
                >
                  {section.title}
                </h3>
                <ul className="space-y-1.5">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-sans text-sm"
                      style={{ color: "var(--hotel-text)", opacity: 0.85 }}
                    >
                      <span
                        className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--hotel-gold)" }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <button
              type="button"
              data-ocid="dining.open_modal_button"
              onClick={() => setMenuOpen(true)}
              className="btn-outline-dark px-8 py-3 text-sm"
              aria-haspopup="dialog"
            >
              View Full Sample Menu
            </button>
          </div>
        </div>
      </section>

      {/* Sample Menu Dialog */}
      <Dialog open={menuOpen} onOpenChange={setMenuOpen}>
        <DialogContent
          data-ocid="dining.dialog"
          className="max-w-lg"
          style={{ backgroundColor: "var(--hotel-cream)" }}
        >
          <DialogHeader>
            <DialogTitle
              className="font-serif text-2xl"
              style={{ color: "var(--hotel-heading)" }}
            >
              Sample Breakfast Menu
            </DialogTitle>
          </DialogHeader>

          <div className="mt-2 space-y-5">
            {menuSections.map((section) => (
              <div key={section.title}>
                <h3
                  className="font-serif text-base font-semibold mb-2 flex items-center gap-2"
                  style={{ color: "var(--hotel-heading)" }}
                >
                  <span aria-hidden="true">{section.emoji}</span>
                  {section.title}
                </h3>
                <ul className="space-y-1 pl-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-sans text-sm"
                      style={{ color: "var(--hotel-text)" }}
                    >
                      <span
                        className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "var(--hotel-gold)" }}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p
              className="text-xs font-sans italic pt-2 border-t"
              style={{
                color: "var(--hotel-text)",
                opacity: 0.6,
                borderColor: "rgba(212,176,91,0.3)",
              }}
            >
              Menu items may vary by season and availability. Complimentary for
              all hotel guests.
            </p>
          </div>

          <div className="mt-4 flex justify-end">
            <button
              type="button"
              data-ocid="dining.close_button"
              onClick={() => setMenuOpen(false)}
              className="btn-primary px-6 py-2 text-sm"
              aria-label="Close sample menu"
            >
              <X className="h-4 w-4" aria-hidden="true" />
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </article>
  );
}
