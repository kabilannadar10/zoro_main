import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsappButton() {
  return (
    <a
      href="https://wa.me/7358780562" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center justify-center w-16 h-16 
                 bg-green-500 text-white rounded-full shadow-lg
                 hover:scale-110 hover:bg-green-600
                 transition-all duration-300 ease-in-out
                 animate-bounce"
    >
      <FaWhatsapp size={32} className="drop-shadow-md animate-pulse" />
      {/* Glow Ring Effect */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-50 animate-ping"></span>
    </a>
  );
}