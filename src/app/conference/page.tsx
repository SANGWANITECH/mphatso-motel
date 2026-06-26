"use client";
import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Phone,
  MessageCircle,
  CheckCircle2,
  MoveRight,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";

const halls = [
  {
    id: "1",
    name: "Main Hall",
    capacity: 100,
    price: 100000,
    priceNote: "per day",
    description:
      "Our largest and most versatile hall, ideal for conferences, seminars, product launches, church services, and large corporate events. Fully equipped with PA system, projector, and flexible seating arrangements.",
    features: [
      "Capacity: 100 People",
      "PA Sound System",
      "Projector & Screen",
      "Flexible Seating",
      "Natural Lighting",
      "Air Ventilation",
      "Catering Available",
      "24/7 Security",
    ],
    image:
      "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1200",
    contact: "099 76 78 678",
    featured: true,
  },
  {
    id: "2",
    name: "Mphatso Hall",
    capacity: 80,
    price: 100000,
    priceNote: "per day",
    description:
      "A well-sized hall perfect for workshops, training sessions, graduation ceremonies, and mid-sized corporate meetings. Comfortable seating and a professional setup to keep your event running smoothly.",
    features: [
      "Capacity: 80 People",
      "PA Sound System",
      "Projector & Screen",
      "Flexible Seating",
      "Catering Available",
      "Dedicated Support",
      "Secure Parking",
      "24/7 Security",
    ],
    image:
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200",
    contact: "099 76 78 678",
    featured: true,
  },
  {
    id: "3",
    name: "Nyika Hall",
    capacity: 25,
    price: 50000,
    priceNote: "per day",
    description:
      "A compact boardroom-style hall suited for small meetings, interviews, committee sessions, and private gatherings. Intimate, quiet, and professionally set up for focused discussions.",
    features: [
      "Capacity: 25 People",
      "Boardroom Setup",
      "Whiteboard",
      "TV Screen",
      "Quiet Environment",
      "Catering Available",
      "Secure Parking",
      "24/7 Security",
    ],
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1200",
    contact: "099 76 78 678",
    featured: false,
  },
];

const conferenceFeatures = [
  "3 halls of different sizes",
  "Capacity from 25 to 100",
  "PA and sound systems",
  "Projectors and screens",
  "Catering on request",
  "Secure parking",
  "24/7 security",
  "Accommodation on site",
];

export default function ConferencePage() {
  return (
    <>
      {/* ═══════════════════════════════════
          BREADCRUMB
      ═══════════════════════════════════ */}
      <div className="pt-[72px]">
        <Breadcrumb items={[{ label: "Conference" }]} />
      </div>

      {/* ═══════════════════════════════════
          PAGE HERO
      ═══════════════════════════════════ */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=1920"
            alt="Mphatso Motel Conference Halls"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-body text-xs tracking-[0.3em] uppercase text-white/70 mb-5"
          >
            Events & Meetings
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="font-display text-4xl md:text-6xl text-white leading-tight text-shadow mb-6"
          >
            Conference Halls in Mzuzu
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="font-body text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Three well-equipped halls for conferences, training sessions,
            workshops, and private meetings right here at Mphatso Motel
            along the M1 Road, Mzuzu.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          QUICK STATS BAR
      ═══════════════════════════════════ */}
      <section className="bg-surface border-b border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {[
              { value: "3", label: "Conference Halls" },
              { value: "100", label: "Max Capacity" },
              { value: "MK 50K", label: "Starting From" },
              { value: "24/7", label: "Security & Support" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center py-10 md:py-12 text-center border-r border-outline-variant/30 last:border-r-0 even:border-r-0 md:even:border-r md:last:border-r-0"
              >
                <span className="font-display text-3xl md:text-4xl text-primary mb-2">
                  {stat.value}
                </span>
                <span className="font-body text-xs tracking-[0.15em] uppercase text-on-surface-variant">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          HALLS — ONE BY ONE
      ═══════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto space-y-16 md:space-y-24">
          {halls.map((hall, i) => (
            <motion.div
              key={hall.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={hall.image}
                    alt={hall.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Price Badge */}
                  <div className="absolute bottom-4 left-4 bg-primary/90 backdrop-blur-sm text-white px-5 py-3">
                    <p className="font-body text-[10px] tracking-widest uppercase text-white/60">
                      {hall.priceNote}
                    </p>
                    <p className="font-display text-xl text-accent">
                      MK {hall.price.toLocaleString()}
                    </p>
                  </div>
                  {/* Capacity Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 flex items-center gap-2">
                    <Users size={13} className="text-primary" />
                    <span className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-primary">
                      {hall.capacity} People
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div>
                  <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-3">
                    Conference Hall
                  </p>
                  <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">
                    {hall.name}
                  </h2>
                </div>

                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  {hall.description}
                </p>

                {/* Features Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {hall.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-on-surface-variant"
                    >
                      <CheckCircle2
                        size={13}
                        className="text-secondary shrink-0"
                      />
                      <span className="font-body text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <a
                    href={`tel:+265${hall.contact.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white font-body text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-primary-light transition-colors duration-300"
                  >
                    <Phone size={14} />
                    Book This Hall
                  </a>
                  <a
                    href="https://wa.me/265892259165"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-primary text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <MessageCircle size={14} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════
          WHY CHOOSE US STRIP
      ═══════════════════════════════════ */}
      <section className="py-16 md:py-20 bg-surface px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-6"
            >
              <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-4">
                Why Mphatso Motel
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-6 leading-tight">
                Everything You Need for a Successful Event
              </h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed mb-8">
                We offer more than just a hall. At Mphatso Motel, your
                delegates can stay on site, enjoy meals, and park safely —
                making us the most convenient all-in-one venue in Mzuzu.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {conferenceFeatures.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-2 text-on-surface-variant"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-secondary shrink-0"
                    />
                    <span className="font-body text-xs">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-6 relative"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=900"
                  alt="Mphatso Motel accommodation"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-primary text-white px-6 py-4 hidden md:block">
                <p className="font-display text-2xl text-accent">On-Site</p>
                <p className="font-body text-xs tracking-widest uppercase text-white/70">
                  Accommodation Available
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          PRICE COMPARISON TABLE
      ═══════════════════════════════════ */}
      <section className="py-16 md:py-20 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-3">
              Pricing
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-primary">
              Hall Rates at a Glance
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="border border-outline-variant/30 overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-4 bg-primary text-white">
              <div className="p-4 md:p-5">
                <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase">
                  Hall
                </span>
              </div>
              <div className="p-4 md:p-5">
                <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase">
                  Capacity
                </span>
              </div>
              <div className="p-4 md:p-5">
                <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase">
                  Rate / Day
                </span>
              </div>
              <div className="p-4 md:p-5">
                <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase">
                  Best For
                </span>
              </div>
            </div>

            {/* Table Rows */}
            {[
              {
                name: "Main Hall",
                capacity: "100 people",
                rate: "MK 100,000",
                bestFor: "Conferences, seminars, large events",
              },
              {
                name: "Mphatso Hall",
                capacity: "80 people",
                rate: "MK 100,000",
                bestFor: "Workshops, training sessions",
              },
              {
                name: "Nyika Hall",
                capacity: "25 people",
                rate: "MK 50,000",
                bestFor: "Board meetings, interviews",
              },
            ].map((row, i) => (
              <div
                key={row.name}
                className={`grid grid-cols-4 border-t border-outline-variant/30 ${
                  i % 2 === 0 ? "bg-background" : "bg-surface"
                }`}
              >
                <div className="p-4 md:p-5">
                  <span className="font-display text-base text-primary">
                    {row.name}
                  </span>
                </div>
                <div className="p-4 md:p-5">
                  <span className="font-body text-sm text-on-surface-variant">
                    {row.capacity}
                  </span>
                </div>
                <div className="p-4 md:p-5">
                  <span className="font-display text-base text-secondary">
                    {row.rate}
                  </span>
                </div>
                <div className="p-4 md:p-5">
                  <span className="font-body text-xs text-on-surface-variant">
                    {row.bestFor}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body text-xs text-on-surface-variant text-center mt-4"
          >
            For catering packages or special arrangements, please contact us
            directly.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CTA BANNER
      ═══════════════════════════════════ */}
      <section className="bg-primary py-16 md:py-20 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-7"
            >
              <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-3">
                Ready to Book?
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-4 leading-tight">
                Let's Plan Your Event Together
              </h2>
              <p className="font-body text-base text-white/70 leading-relaxed">
                Contact our team to check availability, discuss your
                requirements, and get your hall reserved. We're here to make
                your event a success.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-5 flex flex-col gap-4"
            >
              <a
                href="tel:+265997678678"
                className="inline-flex items-center justify-center gap-3 bg-accent text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white transition-all duration-300"
              >
                <Phone size={15} />
                CALL: 099 76 78 678
              </a>
              
              <a
                href="https://wa.me/265892259165"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 border border-white text-white font-body text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-white hover:text-primary transition-all duration-300"
              >
                <MessageCircle size={15} />
                WHATSAPP: 089 22 59 165
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 text-white/60 font-body text-xs font-semibold tracking-[0.2em] uppercase hover:text-white transition-colors"
              >
                Or send us a message <MoveRight size={14} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}