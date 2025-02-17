import { CONTACT } from "@/constants";

const BookingContact = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Foglalás és Kapcsolat</h2>
      <p>
        ☎️ <strong>Telefon:</strong> {CONTACT.tel}
      </p>
      <p>
        📧 <strong>Email:</strong> {CONTACT.email}
      </p>
      <p>
        🏡 <strong>Nyitvatartás:</strong> Április 1 - Október 15
      </p>
      <p>
        💰 <strong>Ár:</strong> 7000 Ft/fő/éj (IFA: 400 Ft/fő/éj)
      </p>
    </div>
  );
};

export default BookingContact;
