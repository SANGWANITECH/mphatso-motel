"use client";

import { Phone, MessageCircle } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex md:hidden border-t border-outline-variant bg-[#FAFAF7]">
      <a
        href="tel:+265983578271"
        className="flex flex-col items-center justify-center gap-1 w-full py-3 text-on-surface-variant hover:text-secondary transition-colors"
      >
        <Phone size={20} />
        <span className="font-body text-[11px] font-semibold tracking-widest uppercase">
          Call Us
        </span>
      </a>

      <a
      
        href="https://wa.me/265892259165"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 w-full py-3 bg-primary text-on-primary hover:bg-primary-light transition-colors"
      >
        <MessageCircle size={20} />
        <span className="font-body text-[11px] font-semibold tracking-widest uppercase">
          WhatsApp
        </span>
      </a>
    </nav>
  );
}