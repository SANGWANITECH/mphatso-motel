"use client";

import Link from "next/link";
import { Calendar, BedDouble } from "lucide-react";

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex md:hidden border-t border-outline-variant bg-[#fbfbe2]">
      <Link
        href="/booking"
        className="flex flex-col items-center justify-center gap-1 w-full py-3 text-on-surface-variant hover:text-secondary transition-colors"
      >
        <Calendar size={20} />
        <span className="font-body text-[11px] font-semibold tracking-widest uppercase">
          Check Availability
        </span>
      </Link>
      <Link
        href="/booking"
        className="flex flex-col items-center justify-center gap-1 w-full py-3 bg-primary text-on-primary hover:bg-primary-light transition-colors"
      >
        <BedDouble size={20} />
        <span className="font-body text-[11px] font-semibold tracking-widest uppercase">
          Book Now
        </span>
      </Link>
    </nav>
  );
}