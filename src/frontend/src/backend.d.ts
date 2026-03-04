import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BookingInquiry {
    name: string;
    specialRequests: string;
    checkInDate: string;
    email: string;
    numGuests: bigint;
    timestamp: Time;
    checkOutDate: string;
    roomPreference: string;
}
export type Time = bigint;
export interface ContactForm {
    name: string;
    email: string;
    message: string;
    timestamp: Time;
    phone: string;
}
export interface backendInterface {
    getAllBookingInquiries(): Promise<Array<BookingInquiry>>;
    getAllContactForms(): Promise<Array<ContactForm>>;
    submitBookingInquiry(name: string, email: string, checkInDate: string, checkOutDate: string, roomPreference: string, numGuests: bigint, specialRequests: string): Promise<void>;
    submitContactForm(name: string, email: string, phone: string, message: string): Promise<void>;
}
