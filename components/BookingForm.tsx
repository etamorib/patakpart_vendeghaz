"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const BookingForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [captcha, setCaptcha] = useState<string | null>(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!captcha) {
      setStatus("⚠️ Kérlek igazold, hogy nem vagy robot!");
      return;
    }

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message, captcha }),
      });
      const data = await res.json();
      setStatus(data.message);
    } catch (error) {
      setStatus("❌ Hiba történt, próbáld újra!");
    }
  };

  return (
    <div className="p-6 bg_amber_400_gradient_booking rounded-lg shadow-2xl">
      <h2 className="text-2xl font-semibold mb-4">Foglalási Üzenet</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email címed"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          placeholder="Üzeneted"
          className="w-full p-2 border rounded"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <ReCAPTCHA
          sitekey="YOUR_GOOGLE_RECAPTCHA_SITE_KEY"
          onChange={setCaptcha}
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Küldés
        </button>
      </form>
      {status && <p className="mt-2 text-red-500">{status}</p>}
    </div>
  );
};

export default BookingForm;
