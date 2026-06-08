"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, Mail, Phone, MoveRight } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default function ConfirmationContent() {
  const params = useSearchParams();

  const ref = params.get("ref") || "MBL-000000";
  const name = params.get("name") || "Guest";
  const room = params.get("room") || "Suite";
  const checkIn = params.get("checkIn") || "";
  const checkOut = params.get("checkOut") || "";
  const nights = params.get("nights") || "0";
  const total = params.get("total") || "0";

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center px-5 py-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920"
          alt="Lake Malawi"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 w-full max-w-2xl bg-background"
      >
        {/* Top accent */}
        <div className="h-1 bg-gradient-to-r from-secondary via-accent to-secondary" />

        <div className="p-8 md:p-12">
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
              stiffness: 200,
              damping: 15,
            }}
            className="flex justify-center mb-8"
          >
            <div className="w-20 h-20 bg-secondary/10 flex items-center justify-center">
              <CheckCircle size={40} className="text-secondary" />
            </div>
          </motion.div>

          {/* Heading */}
          <div className="text-center mb-10">
            <p className="font-body text-xs tracking-[0.3em] uppercase text-secondary mb-3">
              Booking Received
            </p>
            <h1 className="font-display text-3xl md:text-4xl text-primary mb-4">
              Thank You, {name.split(" ")[0]}
            </h1>
            <p className="font-body text-base text-on-surface-variant leading-relaxed max-w-md mx-auto">
              Your booking request has been received. Our guest services team
              will contact you within 24 hours to confirm your stay.
            </p>
          </div>

          {/* Status + Reference */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-surface p-5 border border-outline-variant/30">
              <p className="font-body text-xs tracking-widest uppercase text-on-surface-variant mb-2">
                Booking Status
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                <span className="font-display text-lg text-primary">
                  Pending Confirmation
                </span>
              </div>
            </div>
            <div className="bg-surface p-5 border border-outline-variant/30">
              <p className="font-body text-xs tracking-widest uppercase text-on-surface-variant mb-2">
                Reference Number
              </p>
              <span className="font-display text-lg text-primary tracking-wider">
                {ref}
              </span>
            </div>
          </div>

          {/* Booking Summary */}
          <div className="bg-surface border border-outline-variant/30 mb-8">
            <div className="px-5 py-4 border-b border-outline-variant/30">
              <h3 className="font-body text-xs tracking-[0.2em] uppercase text-on-surface-variant font-semibold">
                Booking Summary
              </h3>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-on-surface-variant">
                  Suite
                </span>
                <span className="font-body text-sm font-semibold text-on-surface">
                  {room}
                </span>
              </div>
              {checkIn && (
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-on-surface-variant">
                    Check-In
                  </span>
                  <span className="font-body text-sm font-semibold text-on-surface">
                    {formatDate(checkIn)}
                  </span>
                </div>
              )}
              {checkOut && (
                <div className="flex justify-between items-center">
                  <span className="font-body text-sm text-on-surface-variant">
                    Check-Out
                  </span>
                  <span className="font-body text-sm font-semibold text-on-surface">
                    {formatDate(checkOut)}
                  </span>
                </div>
              )}
              <div className="flex justify-between items-center">
                <span className="font-body text-sm text-on-surface-variant">
                  Duration
                </span>
                <span className="font-body text-sm font-semibold text-on-surface">
                  {nights} {parseInt(nights) === 1 ? "night" : "nights"}
                </span>
              </div>
              {parseInt(total) > 0 && (
                <div className="flex justify-between items-center pt-3 border-t border-outline-variant/30">
                  <span className="font-body text-sm font-semibold text-primary">
                    Estimated Total
                  </span>
                  <span className="font-display text-xl text-primary">
                    MK {parseInt(total).toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* What's Next */}
          <div className="border border-outline-variant/30 p-5 mb-8">
            <p className="font-body text-xs tracking-[0.2em] uppercase text-on-surface-variant font-semibold mb-4">
              What Happens Next?
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail size={16} className="text-secondary shrink-0 mt-0.5" />
                <span className="font-body text-sm text-on-surface-variant">
                  Check your inbox a summary of your booking request has been
                  noted with reference{" "}
                  <span className="text-primary font-semibold">{ref}</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-secondary shrink-0 mt-0.5" />
                <span className="font-body text-sm text-on-surface-variant">
                  Our guest services team will call or email you within 24 hours
                  to confirm availability and finalize your stay.
                </span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/"
              className="flex-1 bg-primary text-white font-body text-xs font-semibold tracking-[0.2em] uppercase py-4 text-center hover:bg-primary-light transition-colors duration-300"
            >
              Return Home
            </Link>
            <Link
              href="/rooms"
              className="flex-1 border border-primary text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase py-4 text-center hover:bg-primary hover:text-white transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              Explore Rooms <MoveRight size={14} />
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}