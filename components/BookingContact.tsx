import { CONTACT } from "@/constants";

const BookingContact = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-2xl break-all">
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
        💰 <strong>Ár:</strong> 6000 Ft/fő/éj (IFA: 400 Ft/fő/éj)
      </p>
      <p className="m-1">
        ℹ️{" "}
        <small>
          Fűtési szezonban fűtési felár: fogyasztás alapján mérőórák szerint{" "}
        </small>
      </p>
    </div>
  );
};

export default BookingContact;
