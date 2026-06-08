"use client";
import { fadeUp } from "@/lib/animations";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";



type Category = "All" | "Rooms" | "Dining" | "Lake" | "Events";

const galleryImages = [
  {
    id: 1,
     src: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?w=800",
    alt: "Luxury suite interior",
    category: "Rooms" as Category,
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
    alt: "Lake Malawi shoreline at sunrise",
    category: "Lake" as Category,
  },
  {
    id: 3,
     src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900",
    alt: "Fine dining experience",
    category: "Dining" as Category,
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800",
    alt: "Executive suite bedroom",
    category: "Rooms" as Category,
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
    alt: "Spa and wellness",
    category: "Events" as Category,
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800",
    alt: "Lodge pool overlooking the lake",
    category: "Lake" as Category,
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    alt: "Lakeside restaurant dining",
    category: "Dining" as Category,
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=800",
    alt: "Family cottage interior",
    category: "Rooms" as Category,
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=800",
    alt: "Resort terrace and pool",
    category: "Events" as Category,
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800",
    alt: "Standard garden room",
    category: "Rooms" as Category,
  },
  {
    id: 11,
    src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?w=800",
    alt: "Lodge bedroom details",
    category: "Rooms" as Category,
  },
  {
    id: 12,
    src: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
    alt: "Sunset over the lake",
    category: "Lake" as Category,
  },
];

const categories: Category[] = ["All", "Rooms", "Dining", "Lake", "Events"];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const prevImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === 0 ? filtered.length - 1 : lightboxIndex - 1
    );
  };

  const nextImage = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex(
      lightboxIndex === filtered.length - 1 ? 0 : lightboxIndex + 1
    );
  };

  // Split images into 3 columns for masonry
  const col1 = filtered.filter((_, i) => i % 3 === 0);
  const col2 = filtered.filter((_, i) => i % 3 === 1);
  const col3 = filtered.filter((_, i) => i % 3 === 2);

  return (
    <>
      {/* ═══════════════════════════════════
          BREADCRUMB
      ═══════════════════════════════════ */}
      <div className="pt-[72px]">
        <Breadcrumb items={[{ label: "Gallery" }]} />
      </div>

      {/* ═══════════════════════════════════
          PAGE HEADER
      ═══════════════════════════════════ */}
      <section className="py-16 md:py-24 px-5 md:px-16 text-center">
        <div className="max-w-[1280px] mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-body text-xs tracking-[0.3em] uppercase text-secondary mb-4"
          >
            Visual Journey
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-primary mb-6"
          >
            Moments of Serenity
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="font-body text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            Explore the raw beauty of Lake Malawi and the refined organicism of
            our architecture. A curated visual journey through the soul of
            Mikoma.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          FILTER BAR
      ═══════════════════════════════════ */}
      <section className="sticky top-[72px] z-40 bg-background/95 backdrop-blur-md border-b border-outline-variant/30 px-5 md:px-16 py-4">
        <div className="max-w-[1280px] mx-auto overflow-x-auto">
          <div className="flex items-center gap-8 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`font-body text-xs font-semibold tracking-[0.18em] uppercase pb-2 transition-all duration-300 border-b-2 ${
                  activeCategory === cat
                    ? "text-secondary border-secondary"
                    : "text-on-surface-variant border-transparent hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
            <span className="ml-auto font-body text-xs text-on-surface-variant tracking-wider hidden md:block">
              {filtered.length} photos
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          MASONRY GRID
      ═══════════════════════════════════ */}
      <section className="py-12 md:py-16 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          {/* Desktop — 3 columns masonry */}
          <div className="hidden md:grid grid-cols-3 gap-4">
            {[col1, col2, col3].map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-4">
                {col.map((img) => {
                  const globalIndex = filtered.findIndex(
                    (f) => f.id === img.id
                  );
                  return (
                    <motion.div
                      key={img.id}
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      onClick={() => openLightbox(globalIndex)}
                      className="relative overflow-hidden group cursor-pointer"
                    >
                      <div className="relative w-full aspect-auto">
                        <Image
                          src={img.src}
                          alt={img.alt}
                          width={600}
                          height={400}
                          className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-end p-4">
                        <span className="font-body text-[10px] font-semibold tracking-[0.15em] uppercase text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm px-3 py-1">
                          {img.category}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Mobile — 2 columns */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {filtered.map((img, index) => (
              <motion.div
                key={img.id}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onClick={() => openLightbox(index)}
                className="relative overflow-hidden group cursor-pointer"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-all duration-300" />
              </motion.div>
            ))}
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="font-display text-2xl text-primary mb-3">
                No photos found
              </p>
              <p className="font-body text-sm text-on-surface-variant">
                Try selecting a different category
              </p>
            </div>
          )}
        </div>
      </section>

      {/* ═══════════════════════════════════
          CTA STRIP
      ═══════════════════════════════════ */}
      <section className="bg-primary py-14 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-body text-xs tracking-[0.2em] uppercase text-accent mb-2">
              Your Turn
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-white">
              Stay and make your own memories.
            </h3>
          </div>
          <Link
            href="/booking"
            className="inline-flex items-center gap-3 bg-white text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-accent hover:text-white transition-all duration-300 shrink-0"
          >
            Reserve Your Stay <MoveRight size={16} />
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════
          LIGHTBOX
      ═══════════════════════════════════ */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors z-10"
            >
              <X size={28} />
            </button>

            {/* Counter */}
            <div className="absolute top-5 left-5 font-body text-xs tracking-widest text-white/50 z-10">
              {lightboxIndex + 1} / {filtered.length}
            </div>

            {/* Prev */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-5xl max-h-[85vh] w-full mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[85vh] object-contain"
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <p className="font-body text-xs tracking-widest uppercase text-white/70">
                  {filtered[lightboxIndex].category}
                </p>
                <p className="font-body text-sm text-white mt-1">
                  {filtered[lightboxIndex].alt}
                </p>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                  className={`h-px transition-all duration-300 ${
                    i === lightboxIndex
                      ? "w-8 bg-white"
                      : "w-4 bg-white/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}