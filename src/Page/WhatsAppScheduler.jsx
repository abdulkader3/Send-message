import React, { useState } from "react";

const countryCodes = [
  { code: "1", name: "USA" },
  { code: "44", name: "UK" },
  { code: "91", name: "India" },
  { code: "61", name: "Australia" },
  { code: "81", name: "Japan" },
  { code: "88", name: "Bangladesh" },
];

const WhatsAppScheduler = () => {
  const [selectedCountryCode, setSelectedCountryCode] = useState("1");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const sendWhatsAppMessage = () => {
    if (!phone || !message) {
      alert("Please enter a phone number and message.");
      return;
    }
    // Combine the selected country code with the provided phone number
    const fullPhoneNumber = selectedCountryCode + phone;
    const whatsappUrl = `https://wa.me/${fullPhoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-green-600">
          Message Sender
        </h2>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Phone Number</label>
          <div className="flex flex-col sm:flex-row w-full">
            <select
              value={selectedCountryCode}
              onChange={(e) => setSelectedCountryCode(e.target.value)}
              className="w-full sm:w-auto p-2 border border-gray-300 rounded-t-md sm:rounded-l-md sm:rounded-t-none focus:outline-none focus:border-green-500"
            >
              {countryCodes.map((country) => (
                <option key={country.code} value={country.code}>
                  +{country.code} {country.name}
                </option>
              ))}
            </select>
            <input
              type="tel"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-b-md sm:rounded-r-md sm:rounded-b-none focus:outline-none focus:border-green-500"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Message</label>
          <textarea
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
            rows="4"
          ></textarea>
        </div>
        <button
          onClick={sendWhatsAppMessage}
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default WhatsAppScheduler;
