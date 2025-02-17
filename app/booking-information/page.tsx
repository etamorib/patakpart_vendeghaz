import BookingContact from "@/components/BookingContact";
import BookingForm from "@/components/BookingForm";
import BookingTerms from "@/components/BookingTerms";

export default function BookingInformation() {
  return (
    <div className="mt-16 mb-5 max-w-2xl mx-auto space-y-6 p-6">
      <h1 className="text-3xl font-bold">Foglalási Információk</h1>
      <BookingTerms />
      <BookingContact />
      <BookingForm />
    </div>
  );
}
