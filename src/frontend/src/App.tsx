import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import DiningPage from "./pages/DiningPage";
import GalleryPage from "./pages/GalleryPage";
import HomePage from "./pages/HomePage";
import LocationPage from "./pages/LocationPage";
import PetFamilyPage from "./pages/PetFamilyPage";
import RoomsPage from "./pages/RoomsPage";

export type PageId =
  | "home"
  | "rooms"
  | "about"
  | "dining"
  | "pet-family"
  | "gallery"
  | "location"
  | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>("home");

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle hash-based routing on load
  useEffect(() => {
    const hash = window.location.hash.replace("#", "") as PageId;
    const validPages: PageId[] = [
      "home",
      "rooms",
      "about",
      "dining",
      "pet-family",
      "gallery",
      "location",
      "contact",
    ];
    if (hash && validPages.includes(hash)) {
      setCurrentPage(hash);
    }
  }, []);

  // Update hash when page changes
  useEffect(() => {
    window.history.replaceState(null, "", `#${currentPage}`);
    // Update page title
    const titles: Record<PageId, string> = {
      home: "Park Eastern Hotel, Park Street Kolkata — Cozy Boutique Stay",
      rooms: "Rooms — Park Eastern Hotel, Kolkata",
      about: "About Us — Park Eastern Hotel, Kolkata",
      dining: "Dining & Breakfast — Park Eastern Hotel, Kolkata",
      "pet-family": "Pet & Family Friendly — Park Eastern Hotel, Kolkata",
      gallery: "Gallery — Park Eastern Hotel, Kolkata",
      location: "Location & Directions — Park Eastern Hotel, Kolkata",
      contact: "Book Your Stay — Park Eastern Hotel, Kolkata",
    };
    document.title = titles[currentPage];
  }, [currentPage]);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage navigateTo={navigateTo} />;
      case "rooms":
        return <RoomsPage navigateTo={navigateTo} />;
      case "about":
        return <AboutPage />;
      case "dining":
        return <DiningPage />;
      case "pet-family":
        return <PetFamilyPage />;
      case "gallery":
        return <GalleryPage />;
      case "location":
        return <LocationPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <HomePage navigateTo={navigateTo} />;
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--hotel-bg)", color: "var(--hotel-text)" }}
    >
      <Navigation currentPage={currentPage} navigateTo={navigateTo} />
      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>
      <Footer navigateTo={navigateTo} />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "var(--hotel-cream)",
            color: "var(--hotel-text)",
            border: "1px solid var(--hotel-gold)",
          },
        }}
      />
    </div>
  );
}
