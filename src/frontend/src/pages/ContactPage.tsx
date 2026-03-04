import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { AlertCircle, CheckCircle, ExternalLink, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useActor } from "../hooks/useActor";

type FormState = "idle" | "submitting" | "success" | "error";

interface BookingForm {
  name: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomPreference: string;
  numGuests: string;
  message: string;
}

const emptyForm: BookingForm = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  roomPreference: "",
  numGuests: "1",
  message: "",
};

export default function ContactPage() {
  const { actor, isFetching } = useActor();
  const [form, setForm] = useState<BookingForm>(emptyForm);
  const [formState, setFormState] = useState<FormState>("idle");

  const updateField = (field: keyof BookingForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!actor) {
      toast.error("Unable to connect. Please try again.");
      return;
    }

    setFormState("submitting");
    try {
      await actor.submitBookingInquiry(
        form.name,
        form.email,
        form.checkIn,
        form.checkOut,
        form.roomPreference || "Undecided",
        BigInt(Number.parseInt(form.numGuests || "1", 10)),
        `Phone: ${form.phone}\n${form.message}`,
      );
      setFormState("success");
      toast.success("Your enquiry has been sent! We'll be in touch soon.");
    } catch {
      setFormState("error");
      toast.error("Something went wrong. Please try calling us directly.");
    }
  };

  const handleReset = () => {
    setForm(emptyForm);
    setFormState("idle");
  };

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
            ✦ Reserve Your Stay ✦
          </p>
          <h2
            className="font-serif text-4xl lg:text-5xl font-semibold"
            style={{ color: "#FAF6EF" }}
          >
            Book Your Stay
          </h2>
          <p
            className="font-sans text-base mt-4 max-w-xl mx-auto opacity-80"
            style={{ color: "#FAF6EF" }}
          >
            Choose your preferred path — book direct for the best rate, or check
            availability on OTAs.
          </p>
        </div>
      </div>

      {/* Booking CTAs */}
      <section
        aria-labelledby="booking-options-heading"
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--hotel-cream)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="booking-options-heading"
            className="section-heading gold-underline mb-10 text-center"
          >
            How to Book
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Book direct */}
            <div
              className="md:col-span-1 rounded-xl p-6 flex flex-col items-center text-center"
              style={{ backgroundColor: "var(--hotel-heading)" }}
            >
              <p
                className="text-xs font-sans uppercase tracking-widest mb-3"
                style={{ color: "var(--hotel-gold)" }}
              >
                Recommended
              </p>
              <h3
                className="font-serif text-xl font-semibold mb-2"
                style={{ color: "#FAF6EF" }}
              >
                Book Direct
              </h3>
              <p
                className="font-sans text-sm mb-6 opacity-75"
                style={{ color: "#FAF6EF" }}
              >
                Call us or email — our team will arrange everything personally.
              </p>
              <a
                href="tel:+913340645678"
                data-ocid="contact.primary_button"
                className="btn-primary w-full justify-center mb-3 text-sm"
              >
                Call +91-33-4064-5678
              </a>
              <a
                href="mailto:stay@parkeasternhotel.com"
                className="font-sans text-xs opacity-70 hover:opacity-100 transition-opacity"
                style={{ color: "var(--hotel-gold)" }}
              >
                stay@parkeasternhotel.com
              </a>
              <p
                className="text-xs font-sans mt-4 italic"
                style={{ color: "var(--hotel-gold)", opacity: 0.8 }}
              >
                ✓ Best price guarantee when you book direct.
              </p>
            </div>

            {/* OTA options */}
            <div
              className="md:col-span-2 rounded-xl p-6"
              style={{ backgroundColor: "var(--hotel-bg)" }}
            >
              <h3
                className="font-serif text-xl font-semibold mb-2"
                style={{ color: "var(--hotel-heading)" }}
              >
                Check on OTAs
              </h3>
              <p
                className="font-sans text-sm mb-6"
                style={{ color: "var(--hotel-text)", opacity: 0.75 }}
              >
                You can also check rates and availability on these platforms.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.secondary_button"
                  className="btn-outline-dark flex-1 justify-center text-sm py-3"
                  aria-label="Check rates on Booking.com (opens in new tab)"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Check on Booking.com
                </a>
                <a
                  href="https://www.agoda.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="contact.secondary_button"
                  className="btn-outline-dark flex-1 justify-center text-sm py-3"
                  aria-label="Check rates on Agoda (opens in new tab)"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Check on Agoda
                </a>
              </div>
              <p
                className="font-sans text-xs mt-5 leading-relaxed"
                style={{ color: "var(--hotel-text)", opacity: 0.6 }}
              >
                Note: Booking direct (by phone or email) often gives you greater
                flexibility and personal service. Our team is available 24 hours
                to assist you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry form */}
      <section
        aria-labelledby="inquiry-form-heading"
        className="py-12 lg:py-16"
        style={{ backgroundColor: "var(--hotel-bg)" }}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            id="inquiry-form-heading"
            className="section-heading gold-underline mb-2"
          >
            Send an Enquiry
          </h2>
          <p
            className="font-sans text-sm mt-6 mb-8"
            style={{ color: "var(--hotel-text)", opacity: 0.75 }}
          >
            Fill in your details and we'll get back to you promptly — usually
            within a few hours.
          </p>

          {/* Success state */}
          {formState === "success" && (
            <div
              data-ocid="contact.success_state"
              role="alert"
              className="rounded-xl p-6 flex items-start gap-4 mb-6"
              style={{
                backgroundColor: "rgba(198,90,58,0.08)",
                border: "1px solid rgba(198,90,58,0.3)",
              }}
            >
              <CheckCircle
                className="h-6 w-6 flex-shrink-0 mt-0.5"
                style={{ color: "var(--hotel-accent)" }}
                aria-hidden="true"
              />
              <div>
                <p
                  className="font-serif text-lg font-semibold mb-1"
                  style={{ color: "var(--hotel-heading)" }}
                >
                  Enquiry Sent!
                </p>
                <p
                  className="font-sans text-sm"
                  style={{ color: "var(--hotel-text)", opacity: 0.85 }}
                >
                  Thank you for reaching out. Our team will contact you at{" "}
                  <strong>{form.email}</strong> very soon. For immediate
                  assistance, call{" "}
                  <a href="tel:+913340645678" className="underline">
                    +91-33-4064-5678
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-outline-dark text-xs mt-4 px-4 py-2"
                >
                  Send Another Enquiry
                </button>
              </div>
            </div>
          )}

          {/* Error state */}
          {formState === "error" && (
            <div
              data-ocid="contact.error_state"
              role="alert"
              className="rounded-xl p-4 flex items-start gap-3 mb-6"
              style={{
                backgroundColor: "rgba(180,40,20,0.08)",
                border: "1px solid rgba(180,40,20,0.25)",
              }}
            >
              <AlertCircle
                className="h-5 w-5 flex-shrink-0 mt-0.5"
                style={{ color: "#b42814" }}
                aria-hidden="true"
              />
              <p
                className="font-sans text-sm"
                style={{ color: "var(--hotel-text)" }}
              >
                Something went wrong submitting your enquiry. Please call us
                directly at{" "}
                <a href="tel:+913340645678" className="underline font-medium">
                  +91-33-4064-5678
                </a>
                .
              </p>
            </div>
          )}

          {/* Form */}
          {formState !== "success" && (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-5"
              aria-label="Booking enquiry form"
            >
              {/* Name */}
              <div>
                <Label
                  htmlFor="contact-name"
                  className="font-sans text-sm font-medium mb-1.5 block"
                  style={{ color: "var(--hotel-heading)" }}
                >
                  Full Name{" "}
                  <span
                    aria-hidden="true"
                    style={{ color: "var(--hotel-accent)" }}
                  >
                    *
                  </span>
                </Label>
                <Input
                  id="contact-name"
                  data-ocid="contact.input"
                  type="text"
                  value={form.name}
                  onChange={(e) => updateField("name", e.target.value)}
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                  className="font-sans"
                  style={{
                    backgroundColor: "var(--hotel-cream)",
                    borderColor: "rgba(212,176,91,0.5)",
                  }}
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="contact-email"
                    className="font-sans text-sm font-medium mb-1.5 block"
                    style={{ color: "var(--hotel-heading)" }}
                  >
                    Email{" "}
                    <span
                      aria-hidden="true"
                      style={{ color: "var(--hotel-accent)" }}
                    >
                      *
                    </span>
                  </Label>
                  <Input
                    id="contact-email"
                    data-ocid="contact.input"
                    type="email"
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="font-sans"
                    style={{
                      backgroundColor: "var(--hotel-cream)",
                      borderColor: "rgba(212,176,91,0.5)",
                    }}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-phone"
                    className="font-sans text-sm font-medium mb-1.5 block"
                    style={{ color: "var(--hotel-heading)" }}
                  >
                    Phone
                  </Label>
                  <Input
                    id="contact-phone"
                    data-ocid="contact.input"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => updateField("phone", e.target.value)}
                    autoComplete="tel"
                    placeholder="+91 XXXXX XXXXX"
                    className="font-sans"
                    style={{
                      backgroundColor: "var(--hotel-cream)",
                      borderColor: "rgba(212,176,91,0.5)",
                    }}
                  />
                </div>
              </div>

              {/* Check-in / Check-out */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="contact-checkin"
                    className="font-sans text-sm font-medium mb-1.5 block"
                    style={{ color: "var(--hotel-heading)" }}
                  >
                    Check-in Date
                  </Label>
                  <Input
                    id="contact-checkin"
                    data-ocid="contact.input"
                    type="date"
                    value={form.checkIn}
                    onChange={(e) => updateField("checkIn", e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="font-sans"
                    style={{
                      backgroundColor: "var(--hotel-cream)",
                      borderColor: "rgba(212,176,91,0.5)",
                    }}
                  />
                </div>
                <div>
                  <Label
                    htmlFor="contact-checkout"
                    className="font-sans text-sm font-medium mb-1.5 block"
                    style={{ color: "var(--hotel-heading)" }}
                  >
                    Check-out Date
                  </Label>
                  <Input
                    id="contact-checkout"
                    data-ocid="contact.input"
                    type="date"
                    value={form.checkOut}
                    onChange={(e) => updateField("checkOut", e.target.value)}
                    min={form.checkIn || new Date().toISOString().split("T")[0]}
                    className="font-sans"
                    style={{
                      backgroundColor: "var(--hotel-cream)",
                      borderColor: "rgba(212,176,91,0.5)",
                    }}
                  />
                </div>
              </div>

              {/* Room preference & guests */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label
                    htmlFor="contact-room"
                    className="font-sans text-sm font-medium mb-1.5 block"
                    style={{ color: "var(--hotel-heading)" }}
                  >
                    Room Preference
                  </Label>
                  <Select
                    value={form.roomPreference}
                    onValueChange={(v) => updateField("roomPreference", v)}
                  >
                    <SelectTrigger
                      id="contact-room"
                      data-ocid="contact.select"
                      className="font-sans"
                      style={{
                        backgroundColor: "var(--hotel-cream)",
                        borderColor: "rgba(212,176,91,0.5)",
                      }}
                    >
                      <SelectValue placeholder="Select a room..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Cozy Family Room">
                        Cozy Family Room
                      </SelectItem>
                      <SelectItem value="Executive Double">
                        Executive Double
                      </SelectItem>
                      <SelectItem value="Standard Twin">
                        Standard Twin / City View
                      </SelectItem>
                      <SelectItem value="Undecided">Undecided</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="contact-guests"
                    className="font-sans text-sm font-medium mb-1.5 block"
                    style={{ color: "var(--hotel-heading)" }}
                  >
                    Number of Guests
                  </Label>
                  <Select
                    value={form.numGuests}
                    onValueChange={(v) => updateField("numGuests", v)}
                  >
                    <SelectTrigger
                      id="contact-guests"
                      data-ocid="contact.select"
                      className="font-sans"
                      style={{
                        backgroundColor: "var(--hotel-cream)",
                        borderColor: "rgba(212,176,91,0.5)",
                      }}
                    >
                      <SelectValue placeholder="Guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {["1", "2", "3", "4", "5+"].map((n) => (
                        <SelectItem key={n} value={n}>
                          {n} {n === "1" ? "guest" : "guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Message */}
              <div>
                <Label
                  htmlFor="contact-message"
                  className="font-sans text-sm font-medium mb-1.5 block"
                  style={{ color: "var(--hotel-heading)" }}
                >
                  Message / Special Requests
                </Label>
                <Textarea
                  id="contact-message"
                  data-ocid="contact.textarea"
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  rows={4}
                  placeholder="Any special requests, dietary requirements, pet details, accessibility needs..."
                  className="font-sans resize-none"
                  style={{
                    backgroundColor: "var(--hotel-cream)",
                    borderColor: "rgba(212,176,91,0.5)",
                  }}
                />
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  data-ocid="contact.submit_button"
                  disabled={formState === "submitting" || isFetching}
                  className="btn-primary w-full justify-center py-3 text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {formState === "submitting" ? (
                    <>
                      <Loader2
                        className="h-4 w-4 animate-spin"
                        aria-hidden="true"
                      />
                      Sending Enquiry...
                    </>
                  ) : (
                    "Send Enquiry"
                  )}
                </button>
                <p
                  className="text-xs font-sans text-center mt-3"
                  style={{ color: "var(--hotel-text)", opacity: 0.55 }}
                >
                  We respect your privacy. Your contact details are used only to
                  respond to your enquiry.
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </article>
  );
}
