const galleryItems = [
  {
    id: 1,
    src: "/assets/uploads/image-19-19.png",
    label: "Hotel Exterior",
    alt: "Park Eastern Hotel — exterior night view with glowing signage on AJC Bose Road, Kolkata",
    source: "Park Eastern Hotel",
  },
  {
    id: 2,
    src: "/assets/uploads/image-5-5.png",
    label: "Balcony Suite",
    alt: "Park Eastern Hotel — spacious balcony suite with floor-to-ceiling glass and lush city view",
    source: "Park Eastern Hotel",
  },
  {
    id: 3,
    src: "/assets/uploads/image-6-6.png",
    label: "Balcony Suite — View 2",
    alt: "Park Eastern Hotel — balcony suite showing green city panorama from a different angle",
    source: "Park Eastern Hotel",
  },
  {
    id: 4,
    src: "/assets/uploads/image-9-9.png",
    label: "Balcony Room — City Greenery",
    alt: "Park Eastern Hotel — balcony room with sweeping view of Kolkata's city greenery",
    source: "Park Eastern Hotel",
  },
  {
    id: 5,
    src: "/assets/uploads/image-13-13.png",
    label: "Deluxe Balcony Suite",
    alt: "Park Eastern Hotel — deluxe suite with balcony glass wall and bright city view",
    source: "Park Eastern Hotel",
  },
  {
    id: 6,
    src: "/assets/uploads/image-14-14.png",
    label: "Deluxe Suite — Second Angle",
    alt: "Park Eastern Hotel — deluxe balcony suite showing a slightly different crop of the city view",
    source: "Park Eastern Hotel",
  },
  {
    id: 7,
    src: "/assets/uploads/image-1.png",
    label: "Cozy King Room",
    alt: "Park Eastern Hotel — king bed room with warm tones and city window view",
    source: "Park Eastern Hotel",
  },
  {
    id: 8,
    src: "/assets/uploads/image-12-12.png",
    label: "Standard King — Feature Wall",
    alt: "Park Eastern Hotel — standard room with textured feature wall and king bed",
    source: "Park Eastern Hotel",
  },
  {
    id: 9,
    src: "/assets/uploads/image-15-15.png",
    label: "Standard Twin Room",
    alt: "Park Eastern Hotel — twin room with dark wood furniture and comfortable beds",
    source: "Park Eastern Hotel",
  },
  {
    id: 10,
    src: "/assets/uploads/image-11-11.png",
    label: "Work Desk & TV",
    alt: "Park Eastern Hotel — ergonomic work desk with large TV and dark wood furniture",
    source: "Park Eastern Hotel",
  },
  {
    id: 11,
    src: "/assets/uploads/image-10-10.png",
    label: "Ensuite Bathroom",
    alt: "Park Eastern Hotel — ensuite bathroom with hairdryer and quality toiletries",
    source: "Park Eastern Hotel",
  },
  {
    id: 12,
    src: "/assets/uploads/image-1-2.png",
    label: "Tea & Coffee Tray",
    alt: "Park Eastern Hotel — in-room tea and coffee tray with kettle and Nescafe",
    source: "Park Eastern Hotel",
  },
  {
    id: 13,
    src: "/assets/uploads/image-3-3.png",
    label: "In-Room Mini Fridge",
    alt: "Park Eastern Hotel — mini fridge stocked with Coke, Frooti, Red Bull and beverages",
    source: "Park Eastern Hotel",
  },
  {
    id: 14,
    src: "/assets/uploads/image-4-4.png",
    label: "Wardrobe & Safe",
    alt: "Park Eastern Hotel — wardrobe with clothes iron, in-room safe and ironing board",
    source: "Park Eastern Hotel",
  },
];

export default function GalleryPage() {
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
            ✦ Through Our Lens ✦
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-semibold"
            style={{ color: "#FAF6EF" }}
          >
            Gallery
          </h2>
          <p
            className="font-sans text-base mt-4 max-w-xl mx-auto opacity-80"
            style={{ color: "#FAF6EF" }}
          >
            A visual tour of Park Eastern — from welcoming corridors to cozy
            rooms.
          </p>
        </div>
      </div>

      {/* Gallery grid */}
      <section
        aria-labelledby="gallery-heading"
        className="py-14 lg:py-20"
        style={{ backgroundColor: "var(--hotel-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="gallery-heading" className="sr-only">
            A Peek Inside Park Eastern
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-5">
            {galleryItems.map((item) => (
              <figure
                key={item.id}
                data-ocid={`gallery.item.${item.id}`}
                className="group overflow-hidden rounded-xl shadow-warm"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)",
                    }}
                    aria-hidden="true"
                  >
                    <p className="text-white text-sm font-serif font-semibold p-3 pb-2">
                      {item.label}
                    </p>
                  </div>
                </div>
                <figcaption className="pt-2 pb-3 px-1">
                  <p
                    className="font-serif text-sm font-semibold"
                    style={{ color: "var(--hotel-heading)" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-xs font-sans mt-0.5"
                    style={{ color: "var(--hotel-text)", opacity: 0.5 }}
                  >
                    {item.source}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>

          {/* Note */}
          <p
            className="text-xs font-sans text-center mt-10 max-w-2xl mx-auto"
            style={{ color: "var(--hotel-text)", opacity: 0.5 }}
          >
            All photos are from Park Eastern Hotel. For more listings and guest
            reviews, visit{" "}
            <a
              href="https://www.booking.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-opacity"
            >
              Booking.com
            </a>{" "}
            or{" "}
            <a
              href="https://www.agoda.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-opacity"
            >
              Agoda
            </a>
            .
          </p>
        </div>
      </section>
    </article>
  );
}
