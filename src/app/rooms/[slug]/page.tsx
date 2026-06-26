"use client";
import { fadeUp } from "@/lib/animations";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BedDouble,
  Maximize2,
  Users,
  CheckCircle2,
  MoveRight,
  ChevronLeft,
  ChevronRight,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";
import { rooms } from "@/data/rooms";
import { use } from "react";
import Breadcrumb from "@/components/ui/Breadcrumb";

export default function RoomDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const room = rooms.find((r) => r.slug === slug);

  const [activeImage, setActiveImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  if (!room) return notFound();

  const otherRooms = rooms.filter((r) => r.slug !== slug).slice(0, 2);

  const prevImage = () =>
    setActiveImage((prev) =>
      prev === 0 ? room.images.length - 1 : prev - 1
    );

  const nextImage = () =>
    setActiveImage((prev) =>
      prev === room.images.length - 1 ? 0 : prev + 1
    );

  return (
    <>
      {/* ═══════════════════════════════════
          HERO IMAGE GALLERY
      ═══════════════════════════════════ */}
      <section className="pt-[72px] relative">
        <div
          className="relative h-[50vh] md:h-[70vh] overflow-hidden cursor-pointer"
          onClick={() => setLightboxOpen(true)}
        >
          <Image
            src={room.images[activeImage]}
            alt={room.name}
            fill
            className="object-cover transition-all duration-500"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

          <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white font-body text-xs tracking-wider px-3 py-1">
            {activeImage + 1} / {room.images.length}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center hover:bg-black/60 transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="flex gap-2 px-5 md:px-16 py-3 bg-surface overflow-x-auto">
          {room.images.map((img, i) => (
            <button
              key={i}
              onClick={() => setActiveImage(i)}
              className={`relative shrink-0 w-20 h-14 overflow-hidden transition-all duration-300 ${
                activeImage === i
                  ? "ring-2 ring-primary ring-offset-1"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={img}
                alt={`${room.name} ${i + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════
          BREADCRUMB
      ═══════════════════════════════════ */}
      <Breadcrumb
        items={[
          { label: "Rooms", href: "/rooms" },
          { label: room.name },
        ]}
      />

      {/* ═══════════════════════════════════
          ROOM CONTENT
      ═══════════════════════════════════ */}
      <section className="py-12 md:py-20 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">

            {/* Left — Main Content */}
            <div className="md:col-span-7 space-y-10">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
              >
                <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-3">
                  {room.category} Room
                </p>
                <h1 className="font-display text-3xl md:text-5xl text-primary leading-tight">
                  {room.name}
                </h1>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="flex flex-wrap items-center gap-6 py-6 border-y border-outline-variant/30"
              >
                <div className="flex items-center gap-3">
                  <Users size={18} className="text-secondary" />
                  <div>
                    <p className="font-body text-[10px] tracking-wider uppercase text-on-surface-variant/60">
                      Guests
                    </p>
                    <p className="font-body text-sm font-semibold text-on-surface">
                      {room.maxGuests} {room.maxGuests === 1 ? "Guest" : "Guests"}
                    </p>
                  </div>
                </div>
                <div className="w-px h-8 bg-outline-variant/30" />
                <div className="flex items-center gap-3">
                  <Maximize2 size={18} className="text-secondary" />
                  <div>
                    <p className="font-body text-[10px] tracking-wider uppercase text-on-surface-variant/60">
                      Size
                    </p>
                    <p className="font-body text-sm font-semibold text-on-surface">
                      {room.size}
                    </p>
                  </div>
                </div>
                <div className="w-px h-8 bg-outline-variant/30" />
                <div className="flex items-center gap-3">
                  <BedDouble size={18} className="text-secondary" />
                  <div>
                    <p className="font-body text-[10px] tracking-wider uppercase text-on-surface-variant/60">
                      Bed Type
                    </p>
                    <p className="font-body text-sm font-semibold text-on-surface">
                      {room.bedType}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.3 }}
                className="space-y-4"
              >
                <h2 className="font-display text-2xl text-primary">
                  About This Room
                </h2>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  {room.longDescription}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <h2 className="font-display text-2xl text-primary">
                  Room Features
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {room.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 p-3 bg-surface"
                    >
                      <CheckCircle2 size={16} className="text-secondary shrink-0" />
                      <span className="font-body text-sm text-on-surface">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Amenities */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <h2 className="font-display text-2xl text-primary">
                  Amenities
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {room.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="flex items-center gap-2 text-on-surface-variant"
                    >
                      <div className="w-1 h-1 rounded-full bg-secondary shrink-0" />
                      <span className="font-body text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right — Contact Card instead of booking form */}
            <div className="md:col-span-5">
              <div className="sticky top-24">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.3 }}
                  className="border border-outline-variant/40 bg-surface"
                >
                  {/* Price Header */}
                  <div className="bg-primary p-6 md:p-8">
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-white/60 mb-1">
                      Rate Per Night
                    </p>
                    <div className="flex items-end gap-2">
                      <span className="font-display text-3xl text-white">
                        MK {room.price.toLocaleString()}
                      </span>
                      <span className="font-body text-sm text-white/60 mb-1">
                        / night
                      </span>
                    </div>
                  </div>

                  {/* Contact to Book */}
                  <div className="p-6 md:p-8 space-y-4">
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      To reserve this room, contact us directly via call or
                      WhatsApp. We'll confirm availability and get you sorted
                      right away.
                    </p>
<a
                    
                      href="tel:+265983578271"
                      className="flex items-center justify-center gap-3 w-full bg-primary text-white font-body text-xs font-semibold tracking-[0.2em] uppercase py-4 hover:bg-primary-light transition-colors duration-300"
                    >
                      <Phone size={15} />
                      CALL TO RESERVE
                    </a>

                    <a
                      href="https://wa.me/265892259165"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full border border-primary text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase py-4 hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <MessageCircle size={15} />
                      WHATSAPP US
                    </a>

                    <div className="pt-2 border-t border-outline-variant/30">
                      <p className="font-body text-xs text-on-surface-variant text-center leading-relaxed">
                        Call or WhatsApp us on{" "}
                        <span className="text-primary font-semibold">
                          098 35 78 271
                        </span>{" "}
                        or{" "}
                        <span className="text-primary font-semibold">
                          089 22 59 165
                        </span>
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          OTHER ROOMS
      ═══════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-16 bg-surface">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-3">
                Continue Exploring
              </p>
              <h2 className="font-display text-3xl text-primary">
                Other Rooms
              </h2>
            </div>
            <Link
              href="/rooms"
              className="hidden md:inline-flex items-center gap-3 font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary hover:gap-5 transition-all duration-300"
            >
              View All <MoveRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherRooms.map((other, i) => (
              <motion.div
                key={other.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <Link href={`/rooms/${other.slug}`}>
                  <div className="relative h-[240px] overflow-hidden mb-4">
                    <Image
                      src={other.images[0]}
                      alt={other.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1">
                      <span className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-primary">
                        {other.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-primary mb-2 group-hover:text-secondary transition-colors">
                    {other.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <p className="font-body text-sm text-on-surface-variant">
                      {other.size} · {other.bedType}
                    </p>
                    <p className="font-display text-base text-primary">
                      MK {other.price.toLocaleString()}
                      <span className="font-body text-xs text-on-surface-variant">
                        /night
                      </span>
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link
              href="/rooms"
              className="inline-flex items-center gap-3 font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary"
            >
              View All Rooms <MoveRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          LIGHTBOX
      ═══════════════════════════════════ */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft size={36} />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh] mx-8">
            <Image
              src={room.images[activeImage]}
              alt={room.name}
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
          >
            <ChevronRight size={36} />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {room.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`h-px transition-all duration-300 ${
                  i === activeImage ? "w-8 bg-white" : "w-4 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}