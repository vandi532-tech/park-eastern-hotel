import { Brush, Coffee, Droplets, PawPrint, Wifi, Wind } from "lucide-react";
import type { PageId } from "../App";

interface RoomsPageProps {
  navigateTo: (page: PageId) => void;
}

const amenities = [
  { icon: <Wind className="h-4 w-4" />, label: "Air Conditioning" },
  { icon: <Wifi className="h-4 w-4" />, label: "Free Wi-Fi" },
  { icon: <Droplets className="h-4 w-4" />, label: "Ensuite Bathroom" },
  { icon: <Brush className="h-4 w-4" />, label: "Daily Housekeeping" },
  { icon: <Coffee className="h-4 w-4" />, label: "Tea / Coffee Tray" },
  { icon: <PawPrint className="h-4 w-4" />, label: "Pet Bed on Request" },
];

const rooms = [
  {
    id: 1,
    ocidItem: "rooms.item.1",
    ocidBook: "rooms.book_button.1",
    name: "Balcony Suite",
    tag: "Best Views",
    image: "/assets/uploads/image-5-5.png",
    alt: "Park Eastern Hotel — spacious balcony suite with floor-to-ceiling glass wall and city greenery view",
    caption: "Balcony Suite — Park Eastern Hotel",
    description:
      "Wake up to lush city greenery from your private balcony. Generous floor space, a king bed, and floor-to-ceiling glass bring the outside in — our most aspirational stay.",
    features: [
      "Private Balcony",
      "King Bed",
      "City View",
      "Floor-to-Ceiling Glass",
    ],
  },
  {
    id: 2,
    ocidItem: "rooms.item.2",
    ocidBook: "rooms.book_button.2",
    name: "Cozy King Room",
    tag: "Most Popular",
    image: "/assets/uploads/image-1.png",
    alt: "Park Eastern Hotel — king bed room with warm tones and city window view",
    caption: "Cozy King Room — Park Eastern Hotel",
    description:
      "Our most popular choice. Settle into a plush king bed, enjoy warm ambient lighting, and gaze out at city views through a large window — comfort in every detail.",
    features: ["King Bed", "City Window", "Warm Lighting", "Family Friendly"],
  },
  {
    id: 3,
    ocidItem: "rooms.item.3",
    ocidBook: "rooms.book_button.3",
    name: "Standard Twin",
    tag: "Great Value",
    image: "/assets/uploads/image-15-15.png",
    alt: "Park Eastern Hotel — twin room with dark wood furniture and comfortable beds",
    caption: "Standard Twin — Park Eastern Hotel",
    description:
      "Bright, well-appointed, and cheerful. Two comfortable beds, tasteful dark-wood furniture, and everything you need for a restful stay — at a price that makes sense.",
    features: [
      "Twin Beds",
      "Dark Wood Furniture",
      "Natural Light",
      "Compact & Bright",
    ],
  },
];

export default function RoomsPage({ navigateTo }: RoomsPageProps) {
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
            ✦ Comfort & Character ✦
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-semibold"
            style={{ color: "#FAF6EF" }}
          >
            Our Rooms
          </h2>
          <p
            className="font-sans text-base mt-4 max-w-xl mx-auto opacity-80"
            style={{ color: "#FAF6EF" }}
          >
            Each room is designed to feel like a warm, personal retreat. Find
            the space that suits your stay.
          </p>
        </div>
      </div>

      {/* Rooms grid */}
      <section
        aria-labelledby="rooms-list-heading"
        className="py-14 lg:py-20"
        style={{ backgroundColor: "var(--hotel-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 id="rooms-list-heading" className="sr-only">
            Room Types
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <article
                key={room.id}
                data-ocid={room.ocidItem}
                className="group rounded-xl overflow-hidden shadow-warm flex flex-col transition-transform duration-300 hover:-translate-y-1 hover:shadow-warm-lg"
                style={{ backgroundColor: "var(--hotel-cream)" }}
                aria-labelledby={`room-heading-${room.id}`}
              >
                <figure className="relative">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.alt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div
                    className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-sans font-semibold"
                    style={{
                      backgroundColor: "var(--hotel-gold)",
                      color: "var(--hotel-heading)",
                    }}
                  >
                    {room.tag}
                  </div>
                  <figcaption className="sr-only">{room.caption}</figcaption>
                </figure>

                <div className="p-6 flex flex-col flex-1">
                  <h3
                    id={`room-heading-${room.id}`}
                    className="font-serif text-xl font-semibold mb-2"
                    style={{ color: "var(--hotel-heading)" }}
                  >
                    {room.name}
                  </h3>
                  <p
                    className="font-sans text-sm leading-relaxed mb-4"
                    style={{ color: "var(--hotel-text)", opacity: 0.85 }}
                  >
                    {room.description}
                  </p>

                  {/* Room features */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {room.features.map((f) => (
                      <span
                        key={f}
                        className="text-xs font-sans px-2 py-1 rounded"
                        style={{
                          backgroundColor: "rgba(198,90,58,0.10)",
                          color: "var(--hotel-accent)",
                        }}
                      >
                        {f}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto flex gap-3">
                    <button
                      type="button"
                      onClick={() => navigateTo("gallery")}
                      className="btn-outline-dark text-xs flex-1 justify-center py-2"
                      aria-label={`View photos of ${room.name}`}
                    >
                      View Photos
                    </button>
                    <button
                      type="button"
                      data-ocid={room.ocidBook}
                      onClick={() => navigateTo("contact")}
                      className="btn-primary text-xs flex-1 justify-center py-2"
                      aria-label={`Book the ${room.name}`}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* All Amenities */}
      <section
        aria-labelledby="amenities-heading"
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--hotel-cream)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="amenities-heading"
            className="section-heading gold-underline mb-10 text-center"
          >
            In Every Room
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {amenities.map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div
                  className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded-full"
                  style={{ backgroundColor: "rgba(198,90,58,0.12)" }}
                  aria-hidden="true"
                >
                  <span style={{ color: "var(--hotel-accent)" }}>
                    {item.icon}
                  </span>
                </div>
                <span
                  className="font-sans text-sm font-medium"
                  style={{ color: "var(--hotel-text)" }}
                >
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room amenity detail photos */}
      <section
        aria-labelledby="amenity-photos-heading"
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--hotel-bg)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="amenity-photos-heading"
            className="section-heading gold-underline mb-10 text-center"
          >
            Room Details
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                src: "/assets/uploads/image-1-2.png",
                label: "Tea & Coffee Tray",
                alt: "Park Eastern Hotel — in-room tea and coffee tray with kettle and Nescafe",
              },
              {
                src: "/assets/uploads/image-3-3.png",
                label: "In-Room Mini Fridge",
                alt: "Park Eastern Hotel — mini fridge stocked with Coke, Frooti, Red Bull and drinks",
              },
              {
                src: "/assets/uploads/image-4-4.png",
                label: "Wardrobe & Safe",
                alt: "Park Eastern Hotel — wardrobe with iron, safe and ironing board",
              },
              {
                src: "/assets/uploads/image-10-10.png",
                label: "Ensuite Bathroom",
                alt: "Park Eastern Hotel — ensuite bathroom with hairdryer and toiletries",
              },
            ].map((item, i) => (
              <figure
                key={item.label}
                data-ocid={`rooms.detail.item.${i + 1}`}
                className="group overflow-hidden rounded-xl shadow-warm"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
                    Park Eastern Hotel
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pet policy */}
      <section
        aria-labelledby="pet-policy-heading"
        className="py-10 lg:py-14"
        style={{ backgroundColor: "var(--hotel-cream)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-xl p-6 lg:p-8 border"
            style={{
              backgroundColor: "rgba(198,90,58,0.07)",
              borderColor: "rgba(198,90,58,0.25)",
            }}
          >
            <div className="flex items-start gap-4">
              <PawPrint
                className="h-7 w-7 flex-shrink-0 mt-0.5"
                style={{ color: "var(--hotel-accent)" }}
                aria-hidden="true"
              />
              <div>
                <h2
                  id="pet-policy-heading"
                  className="font-serif text-lg font-semibold mb-2"
                  style={{ color: "var(--hotel-heading)" }}
                >
                  Pet Policy
                </h2>
                <p
                  className="font-sans text-sm leading-relaxed italic"
                  style={{ color: "var(--hotel-text)", opacity: 0.85 }}
                >
                  Small pets welcome with prior notice. A nominal cleaning fee
                  may apply. Please contact reception for details. Please let us
                  know in advance — we arrange a cozy space for your pet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
