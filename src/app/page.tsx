"use client";
import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Waves,
  UtensilsCrossed,
  Users,
  Wifi,
  ChevronDown,
  Star,
  ChevronLeft,
  ChevronRight,
  MoveRight,
  BedDouble,
  Maximize2,
} from "lucide-react";
import { useState, useEffect } from "react";
import { testimonials } from "@/data/testimonials";
import { rooms } from "@/data/rooms";

const highlights = [
  { icon: Waves, label: "Beachfront Access" },
  { icon: UtensilsCrossed, label: "Lake Restaurant" },
  { icon: Users, label: "Conference Centre" },
  { icon: Wifi, label: "Free WiFi" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    alt: "Lake Malawi shoreline",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800",
    alt: "Lodge room interior",
  },
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    alt: "Restaurant dining",
  },
  {
    src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800",
    alt: "Spa treatment",
  },
  {
    src: "https://images.unsplash.com/photo-1530549387789-4c1017266635?w=800",
    alt: "Water sports",
  },
];



export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const featuredRooms = rooms.filter((r) => r.featured);

  const prevTestimonial = () =>
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );

  const nextTestimonial = () =>
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════════
          1. HERO SECTION
      ═══════════════════════════════════════ */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920"
            alt="Lake Malawi at sunrise"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-primary/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/60" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-white/70 mb-6"
          >
            Karonga, Lake Malawi
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3, duration: 0.7 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl text-white leading-tight text-shadow mb-8"
          >
            Experience Comfort and Serenity on the Shores of Lake Malawi
          </motion.h1>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/booking"
              className="w-full sm:w-auto bg-white text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 hover:bg-accent hover:text-white transition-all duration-300"
            >
              Book Your Stay
            </Link>
            <Link
              href="/rooms"
              className="w-full sm:w-auto border border-white text-white font-body text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 hover:bg-white hover:text-primary transition-all duration-300"
            >
              Explore Rooms
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
        >
          <span className="font-body text-[10px] tracking-[0.2em] uppercase">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════
          2. HIGHLIGHTS BAR
      ═══════════════════════════════════════ */}
      <section className="bg-surface border-b border-outline-variant/30">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center justify-center gap-3 py-8 md:py-10 border-r border-outline-variant/30 last:border-r-0 even:border-r-0 md:even:border-r md:last:border-r-0"
              >
                <item.icon size={22} className="text-secondary" />
                <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-on-surface">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          3. ABOUT PREVIEW
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-32 overflow-hidden">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image
                 src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900"
                  alt="Lodge interior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-accent/30 -z-10 hidden md:block" />
              <div className="absolute -bottom-4 -left-4 md:bottom-8 md:-left-8 bg-primary text-white px-6 py-4 text-center">
                <span className="font-display text-3xl text-accent block">
                  10+
                </span>
                <span className="font-body text-xs tracking-widest uppercase text-white/70">
                  Years of Excellence
                </span>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6 md:space-y-8 mt-8 md:mt-0"
            >
              <div>
                <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-4">
                  Our Story
                </p>
                <h2 className="font-display text-3xl md:text-4xl text-primary leading-tight">
                  A Legacy of Lakeside Luxury
                </h2>
              </div>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                Nestled on the pristine western shores of Lake Malawi, Mikoma
                Beach Lodge was born from a vision to harmonize exclusive
                comfort with the raw, rhythmic beauty of the "Lake of Stars."
              </p>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                Every stone, every piece of timber, and every view has been
                meticulously curated to offer an escape that is as deep as the
                lake itself.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-3 font-body text-xs font-semibold tracking-[0.2em] uppercase text-secondary hover:gap-5 transition-all duration-300"
              >
                Discover Our Story <MoveRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          4. FEATURED ROOMS
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4"
          >
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-3">
                Accommodation
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-primary">
                The Collection
              </h2>
            </div>
            <Link
              href="/rooms"
              className="inline-flex items-center gap-3 font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary hover:gap-5 transition-all duration-300 self-start md:self-auto"
            >
              View All Suites <MoveRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {featuredRooms.map((room, i) => (
              <motion.div
                key={room.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`group cursor-pointer ${
                  i === 0 ? "md:col-span-7" : "md:col-span-5"
                }`}
              >
                <Link href={`/rooms/${room.slug}`}>
                  <div
                    className={`relative overflow-hidden mb-5 ${
                      i === 0 ? "aspect-video" : "aspect-[4/5]"
                    }`}
                  >
                    <Image
                      src={room.images[0]}
                      alt={room.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1">
                      <span className="font-body text-xs font-semibold tracking-[0.15em] uppercase text-primary">
                        {room.category}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-xl md:text-2xl text-primary group-hover:text-secondary transition-colors duration-300">
                      {room.name}
                    </h3>
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      {room.description}
                    </p>
                    <div className="flex items-center gap-5 text-on-surface-variant pt-1">
                      <span className="flex items-center gap-2 font-body text-xs font-semibold tracking-wider uppercase">
                        <Maximize2 size={13} />
                        {room.size}
                      </span>
                      <span className="flex items-center gap-2 font-body text-xs font-semibold tracking-wider uppercase">
                        <BedDouble size={13} />
                        {room.bedType}
                      </span>
                      <span className="ml-auto font-display text-lg text-primary">
                        Mk{room.price}
                        <span className="font-body text-xs text-on-surface-variant">
                          /night
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          5. FACILITIES PREVIEW
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-primary">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4"
          >
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-3">
                What We Offer
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-white">
                Lodge Facilities
              </h2>
            </div>
            <Link
              href="/facilities"
              className="inline-flex items-center gap-3 font-body text-xs font-semibold tracking-[0.2em] uppercase text-white/70 hover:text-white hover:gap-5 transition-all duration-300 self-start md:self-auto"
            >
              View All Facilities <MoveRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {[
              {
                icon: Waves,
                label: "Beachfront Access",
                desc: "Private beach directly on Lake Malawi",
              },
              {
                icon: UtensilsCrossed,
                label: "Lakeside Restaurant",
                desc: "Fresh lake fish and international cuisine",
              },
              {
                icon: Users,
                label: "Conference Centre",
                desc: "Fully equipped for up to 80 delegates",
              },
              {
                icon: Wifi,
                label: "Water Sports",
                desc: "Kayaking, snorkelling, and boat tours",
              },
            ].map((facility, i) => (
              <motion.div
                key={facility.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-primary p-8 md:p-10 hover:bg-primary-light transition-colors duration-300 group"
              >
                <facility.icon
                  size={28}
                  className="text-accent mb-6 group-hover:scale-110 transition-transform duration-300"
                />
                <h3 className="font-display text-lg text-white mb-3">
                  {facility.label}
                </h3>
                <p className="font-body text-sm text-white/60 leading-relaxed">
                  {facility.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          6. TESTIMONIALS
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-surface">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-3">
              Guest Experiences
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-primary">
              What Our Guests Say
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-accent fill-accent" />
              ))}
            </div>

            <div className="min-h-[140px] flex items-center justify-center">
              <motion.p
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-xl md:text-2xl text-primary leading-relaxed"
              >
                "{testimonials[currentTestimonial].text}"
              </motion.p>
            </div>

            <motion.div
              key={`author-${currentTestimonial}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6"
            >
              <p className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-secondary">
                {testimonials[currentTestimonial].author}
              </p>
              <p className="font-body text-xs text-on-surface-variant mt-1">
                {testimonials[currentTestimonial].location}
              </p>
            </motion.div>

            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prevTestimonial}
                className="w-10 h-10 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-300"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2 items-center">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`h-px transition-all duration-300 ${
                      i === currentTestimonial
                        ? "w-8 bg-primary"
                        : "w-4 bg-outline-variant"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextTestimonial}
                className="w-10 h-10 border border-outline-variant flex items-center justify-center text-on-surface-variant hover:border-primary hover:text-primary transition-all duration-300"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          7. GALLERY TEASER
      ═══════════════════════════════════════ */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4"
          >
            <div>
              <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-3">
                Visual Journey
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-primary">
                Life at Mikoma
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-3 font-body text-xs font-semibold tracking-[0.2em] uppercase text-primary hover:gap-5 transition-all duration-300 self-start md:self-auto"
            >
              View Full Gallery <MoveRight size={16} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4">
            {galleryImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden group ${
                  i === 0 ? "col-span-2 row-span-2 md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <div className="relative w-full h-full min-h-[160px] md:min-h-[220px] aspect-square">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-all duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          8. CTA BANNER
      ═══════════════════════════════════════ */}
      <section className="relative py-24 md:py-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920"
            alt="Lake Malawi sunset"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>

        <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-16 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent">
              Begin Your Journey
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-white max-w-2xl mx-auto leading-tight">
              Your Lakeside Sanctuary Awaits
            </h2>
            <p className="font-body text-base text-white/70 max-w-lg mx-auto leading-relaxed">
              Book your stay today and discover why Mikoma Beach Lodge is
              Malawi's best-kept secret.
            </p>
            <Link
              href="/booking"
              className="inline-block bg-accent text-primary font-body text-xs font-semibold tracking-[0.25em] uppercase px-12 py-5 hover:bg-white transition-all duration-300 mt-4"
            >
              RESERVE YOUR EXPERIENCE
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}