"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useForm, Resolver } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { rooms } from "@/data/rooms";
import { BookingFormData } from "@/types";
import { calculateNights, generateBookingReference } from "@/lib/utils";
import Breadcrumb from "@/components/ui/Breadcrumb";
import { AlertCircle } from "lucide-react";
import { fadeUp } from "@/lib/animations";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Phone number is required"),
  checkIn: z.string().min(1, "Check-in date is required"),
  checkOut: z.string().min(1, "Check-out date is required"),
  guests: z.number().min(1).max(10),
  roomType: z.string().min(1, "Please select a room"),
  specialRequests: z.string().optional(),
});

export default function BookingContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const preselectedRoom = searchParams.get("room") || "";
  const [nights, setNights] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema) as Resolver<BookingFormData>,
    defaultValues: {
      roomType: preselectedRoom,
      guests: 2,
    },
  });

  const checkIn = watch("checkIn");
  const checkOut = watch("checkOut");
  const selectedRoomSlug = watch("roomType");
  const selectedRoom = rooms.find((r) => r.slug === selectedRoomSlug);

  useEffect(() => {
    if (checkIn && checkOut) {
      const n = calculateNights(checkIn, checkOut);
      setNights(n > 0 ? n : 0);
    }
  }, [checkIn, checkOut]);

  const estimatedTotal =
    selectedRoom && nights > 0 ? selectedRoom.price * nights : 0;

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    const ref = generateBookingReference();
    const params = new URLSearchParams({
      ref,
      name: data.fullName,
      room: selectedRoom?.name || data.roomType,
      checkIn: data.checkIn,
      checkOut: data.checkOut,
      nights: nights.toString(),
      total: estimatedTotal.toString(),
    });
    router.push(`/booking/confirmation?${params.toString()}`);
  };

  return (
    <>
      <div className="pt-[72px]">
        <Breadcrumb items={[{ label: "Book Your Stay" }]} />
      </div>

      <main className="py-12 md:py-20 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-center mb-12 md:mb-16 max-w-2xl mx-auto"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-secondary mb-4">
              Reservations
            </p>
            <h1 className="font-display text-4xl md:text-5xl text-primary mb-5">
              Secure Your Stay
            </h1>
            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              Your journey to the tranquil shores of Lake Malawi begins here.
              Complete the form below and our team will confirm within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left — Sticky Image Panel */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.1 }}
              className="hidden lg:block lg:col-span-4 sticky top-24"
            >
              <div className="relative h-[600px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900"
                  alt="Mikoma Beach Lodge Suite"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="font-body text-xs tracking-[0.2em] uppercase text-white/60 mb-2">
                    Mikoma Beach Lodge
                  </p>
                  <h3 className="font-display text-2xl text-white mb-3">
                    Refined Lakeside Sanctuary
                  </h3>
                  <p className="font-body text-sm text-white/70 leading-relaxed">
                    Experience the harmony of contemporary design and Malawi's
                    raw natural beauty.
                  </p>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                {[
                  { label: "Free Cancellation", sub: "Up to 48hrs before" },
                  { label: "No Payment Now", sub: "Pay on arrival" },
                  { label: "24hr Confirmation", sub: "Quick response" },
                  { label: "Secure Booking", sub: "Your data is safe" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-surface p-4 border border-outline-variant/30"
                  >
                    <p className="font-body text-xs font-semibold text-primary mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-xs text-on-surface-variant">
                      {item.sub}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.2 }}
              className="lg:col-span-8"
            >
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-surface border border-outline-variant/30"
              >
                {/* Step 1 */}
                <div className="p-6 md:p-10 border-b border-outline-variant/30">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="w-8 h-8 bg-primary text-white flex items-center justify-center font-body text-sm font-semibold shrink-0">
                      1
                    </span>
                    <h2 className="font-display text-2xl text-primary">
                      Guest Information
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                        Full Name *
                      </label>
                      <input
                        {...register("fullName")}
                        type="text"
                        placeholder="John Banda"
                        className={`w-full bg-background border px-4 py-3 font-body text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors ${
                          errors.fullName
                            ? "border-red-400"
                            : "border-outline-variant/50"
                        }`}
                      />
                      {errors.fullName && (
                        <p className="flex items-center gap-1 font-body text-xs text-red-500">
                          <AlertCircle size={12} />
                          {errors.fullName.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                        Phone Number *
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+265 999 000 000"
                        className={`w-full bg-background border px-4 py-3 font-body text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors ${
                          errors.phone
                            ? "border-red-400"
                            : "border-outline-variant/50"
                        }`}
                      />
                      {errors.phone && (
                        <p className="flex items-center gap-1 font-body text-xs text-red-500">
                          <AlertCircle size={12} />
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        placeholder="hello@example.com"
                        className={`w-full bg-background border px-4 py-3 font-body text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors ${
                          errors.email
                            ? "border-red-400"
                            : "border-outline-variant/50"
                        }`}
                      />
                      {errors.email && (
                        <p className="flex items-center gap-1 font-body text-xs text-red-500">
                          <AlertCircle size={12} />
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="p-6 md:p-10 border-b border-outline-variant/30">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="w-8 h-8 bg-primary text-white flex items-center justify-center font-body text-sm font-semibold shrink-0">
                      2
                    </span>
                    <h2 className="font-display text-2xl text-primary">
                      Stay Details
                    </h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                        Check-In Date *
                      </label>
                      <input
                        {...register("checkIn")}
                        type="date"
                        className={`w-full bg-background border px-4 py-3 font-body text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors ${
                          errors.checkIn
                            ? "border-red-400"
                            : "border-outline-variant/50"
                        }`}
                      />
                      {errors.checkIn && (
                        <p className="flex items-center gap-1 font-body text-xs text-red-500">
                          <AlertCircle size={12} />
                          {errors.checkIn.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                        Check-Out Date *
                      </label>
                      <input
                        {...register("checkOut")}
                        type="date"
                        className={`w-full bg-background border px-4 py-3 font-body text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors ${
                          errors.checkOut
                            ? "border-red-400"
                            : "border-outline-variant/50"
                        }`}
                      />
                      {errors.checkOut && (
                        <p className="flex items-center gap-1 font-body text-xs text-red-500">
                          <AlertCircle size={12} />
                          {errors.checkOut.message}
                        </p>
                      )}
                    </div>

                    {nights > 0 && (
                      <div className="md:col-span-2 bg-secondary/10 border border-secondary/20 px-4 py-3 flex items-center justify-between">
                        <span className="font-body text-sm text-secondary font-semibold">
                          {nights} {nights === 1 ? "night" : "nights"} selected
                        </span>
                        {estimatedTotal > 0 && (
                          <span className="font-display text-lg text-primary">
                            Estimated: MK {estimatedTotal.toLocaleString()}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="space-y-2">
                      <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                        Number of Guests *
                      </label>
                      <select
                        {...register("guests", { valueAsNumber: true })}
                        className="w-full bg-background border border-outline-variant/50 px-4 py-3 font-body text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors"
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "Guest" : "Guests"}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                        Suite Type *
                      </label>
                      <select
                        {...register("roomType")}
                        className={`w-full bg-background border px-4 py-3 font-body text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors ${
                          errors.roomType
                            ? "border-red-400"
                            : "border-outline-variant/50"
                        }`}
                      >
                        <option value="">Select a suite</option>
                        {rooms.map((room) => (
                          <option key={room.slug} value={room.slug}>
                            {room.name} — MK {room.price.toLocaleString()}
                            /night
                          </option>
                        ))}
                      </select>
                      {errors.roomType && (
                        <p className="flex items-center gap-1 font-body text-xs text-red-500">
                          <AlertCircle size={12} />
                          {errors.roomType.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="p-6 md:p-10 border-b border-outline-variant/30">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="w-8 h-8 bg-primary text-white flex items-center justify-center font-body text-sm font-semibold shrink-0">
                      3
                    </span>
                    <h2 className="font-display text-2xl text-primary">
                      Special Requests
                    </h2>
                  </div>
                  <div className="space-y-2">
                    <label className="font-body text-xs tracking-widest uppercase text-on-surface-variant block">
                      How can we make your stay exceptional?
                    </label>
                    <textarea
                      {...register("specialRequests")}
                      rows={4}
                      placeholder="Dietary requirements, airport transfer, anniversary arrangements..."
                      className="w-full bg-background border border-outline-variant/50 px-4 py-3 font-body text-sm text-on-surface focus:outline-none focus:border-secondary transition-colors resize-none"
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="p-6 md:p-10">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-white font-body text-xs font-semibold tracking-[0.25em] uppercase py-5 hover:bg-primary-light transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-3">
                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Processing...
                      </span>
                    ) : (
                      "CONFIRM RESERVATION"
                    )}
                  </button>
                  <p className="text-center mt-4 font-body text-xs text-on-surface-variant/60">
                    No payment required at this stage. Our team will contact
                    you within 24 hours to confirm your booking.
                  </p>

                  <div className="mt-8 grid grid-cols-2 gap-3 lg:hidden">
                    {[
                      { label: "Free Cancellation", sub: "Up to 48hrs before" },
                      { label: "No Payment Now", sub: "Pay on arrival" },
                      { label: "24hr Confirmation", sub: "Quick response" },
                      { label: "Secure Booking", sub: "Your data is safe" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="bg-background p-4 border border-outline-variant/30"
                      >
                        <p className="font-body text-xs font-semibold text-primary mb-1">
                          {item.label}
                        </p>
                        <p className="font-body text-xs text-on-surface-variant">
                          {item.sub}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}