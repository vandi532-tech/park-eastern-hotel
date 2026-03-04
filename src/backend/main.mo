import List "mo:core/List";
import Time "mo:core/Time";

actor {
  type ContactForm = {
    name : Text;
    email : Text;
    phone : Text;
    message : Text;
    timestamp : Time.Time;
  };

  type BookingInquiry = {
    name : Text;
    email : Text;
    checkInDate : Text;
    checkOutDate : Text;
    roomPreference : Text;
    numGuests : Nat;
    specialRequests : Text;
    timestamp : Time.Time;
  };

  let contactForms = List.empty<ContactForm>();
  let bookingInquiries = List.empty<BookingInquiry>();

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, message : Text) : async () {
    let contactForm : ContactForm = {
      name;
      email;
      phone;
      message;
      timestamp = Time.now();
    };
    contactForms.add(contactForm);
  };

  public shared ({ caller }) func submitBookingInquiry(name : Text, email : Text, checkInDate : Text, checkOutDate : Text, roomPreference : Text, numGuests : Nat, specialRequests : Text) : async () {
    let bookingInquiry : BookingInquiry = {
      name;
      email;
      checkInDate;
      checkOutDate;
      roomPreference;
      numGuests;
      specialRequests;
      timestamp = Time.now();
    };
    bookingInquiries.add(bookingInquiry);
  };

  public query ({ caller }) func getAllContactForms() : async [ContactForm] {
    contactForms.toArray();
  };

  public query ({ caller }) func getAllBookingInquiries() : async [BookingInquiry] {
    bookingInquiries.toArray();
  };
};
