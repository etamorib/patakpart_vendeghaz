const BookingTerms = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Foglalási feltételek</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Minimum 3 éjszaka foglalható!</li>
        <li>Érkezés: 14:00 | Távozás: 10:00</li>
        <li>Érkezés előtti nap egyeztetés szükséges.</li>
        <li>A ház teljes felszereltsége használható.</li>
        <li>Kisállat nem hozható!</li>
        <li>Tilos bulikat és rendezvényeket tartani.</li>
        <li>Gépkocsi beállási lehetőség az udvaron.</li>
        <li>Foglalás lemondása: 7 nappal előtte 100% visszatérítés.</li>
        <li>3 napon belüli lemondás esetén 100% fizetendő.</li>
        <li>A károkozásért a vendég felel.</li>
      </ul>
    </div>
  );
};
export default BookingTerms;
