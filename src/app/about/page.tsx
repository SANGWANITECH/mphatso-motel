"use client";
import { fadeUp } from "@/lib/animations";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Waves, Leaf, Users, MoveRight } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";



const stats = [
  { value: 30, suffix: "+", label: "Years of Excellence" },
  { value: 10000, suffix: "+", label: "Guests Welcomed" },
  { value: 100, suffix: "%", label: "Solar Powered" },
  { value: 50, suffix: "+", label: "Local Staff" },
];

const values = [
  {
    icon: Waves,
    title: "Personal Service",
    description:
      "We believe in the luxury of anticipation. Every detail of your stay is tailored to your silent desires, delivered with genuine Malawian warmth.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Our operations are deeply integrated with the lake's ecology. From solar power to water conservation, we tread lightly on the earth.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We are part of the village fabric. We support local artisans, schools, and healthcare, ensuring our growth is shared by all.",
  },
];

const timeline = [
  {
    year: "1994",
    title: "The First Foundation",
    description:
      "Founded as a small family retreat with just four timber chalets, driven by a passion for the Lake's unique biodiversity and the warmth of Malawian culture.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900",
  },
  {
    year: "2008",
    title: "The Green Pivot",
    description:
      "Transitioned to 100% solar energy and established our first community outreach program, funding the local primary school and supporting over 200 families.",
    image: null,
  },
  {
    year: "2016",
    title: "Expanding the Vision",
    description:
      "Added the Executive Horizon Wing and the Lakeside Restaurant, bringing world-class dining and ultra-luxury accommodation to the shores of Lake Malawi.",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900",
  },
  {
    year: "2024",
    title: "Refining Excellence",
    description:
      "Opening of our new Sky Suites — an architectural fusion of contemporary Malawian art and ultra-luxury ecological design.",
    image:
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=900",
  },
];

const gridImages = [
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
      alt: "Culinary excellence",
    },
    {
      src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
      alt: "Spa and wellness",
    },
    {
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800",
      alt: "Lake Malawi views",
    },
    {
      src:  "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900",
      alt: "Lodge suite interior",
    },
  ];

// Animated counter hook
function useCountUp(target: number, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return count;
}

function StatCard({
  value,
  suffix,
  label,
  isVisible,
}: {
  value: number;
  suffix: string;
  label: string;
  isVisible: boolean;
}) {
  const count = useCountUp(value, isVisible);
  return (
    <div className="flex flex-col items-center justify-center py-10 md:py-14 text-center border-r border-outline-variant/30 last:border-r-0 even:border-r-0 md:even:border-r md:last:border-r-0">
      <span className="font-display text-4xl md:text-5xl text-primary mb-2">
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="font-body text-xs tracking-[0.15em] uppercase text-on-surface-variant">
        {label}
      </span>
    </div>
  );
}

export default function AboutPage() {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* ═══════════════════════════════════
          BREADCRUMB
      ═══════════════════════════════════ */}
      <div className="pt-[72px]">
        <Breadcrumb items={[{ label: "The Lodge" }]} />
      </div>

      {/* ═══════════════════════════════════
          HERO
      ═══════════════════════════════════ */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920"
            alt="Lake Malawi at Mikoma Beach Lodge"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-primary/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="font-body text-xs tracking-[0.3em] uppercase text-white/70 mb-5"
          >
            Our Story
          </motion.p>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
            className="font-display text-4xl md:text-6xl text-white leading-tight text-shadow mb-6"
          >
            Our Legacy of Hospitality
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
            className="font-body text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Rooted in the pristine shores of Lake Malawi, Mikoma is more than a
            destination it is a decades-long commitment to harmony between man
            and nature.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════
          STATS BAR
      ═══════════════════════════════════ */}
      <section
        ref={statsRef}
        className="bg-surface border-b border-outline-variant/30"
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-16">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat) => (
              <StatCard
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                isVisible={statsVisible}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          MISSION & VISION
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-32 px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Mission Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-7 bg-surface p-10 md:p-16 flex flex-col justify-center border border-outline-variant/30"
            >
              <div className="w-10 h-px bg-secondary mb-8" />
              <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-4">
                Our Mission
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-6 leading-tight">
                Where Luxury Meets the Lake
              </h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                To curate unparalleled experiences that celebrate the spirit of
                Lake Malawi, providing a sanctuary where luxury meets ecological
                stewardship. We strive to offer our guests a profound connection
                to the landscape through meticulous service and authentic
                engagement with local culture.
              </p>
            </motion.div>

            {/* Mission Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-5 relative overflow-hidden min-h-[400px] group"
            >
              <Image
                src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=900"
                alt="Lodge hospitality"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Vision Image */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:col-span-5 relative overflow-hidden min-h-[400px] group"
            >
              <Image
                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=900"
                alt="Lake Malawi vision"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Vision Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-7 bg-primary p-10 md:p-16 flex flex-col justify-center"
            >
              <div className="w-10 h-px bg-accent mb-8" />
              <p className="font-body text-xs tracking-[0.25em] uppercase text-accent mb-4">
                Our Vision
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-white mb-6 leading-tight">
                A Beacon of Sustainable Luxury
              </h2>
              <p className="font-body text-base text-white/70 leading-relaxed">
                To be the global benchmark for refined organicism — a place
                where the luxury of tomorrow is defined by the preservation of
                today. We envision a future where every guest journey contributes
                directly to the flourishing of our local community and the
                vibrant ecosystem of the Lake.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          CORE VALUES
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-32 bg-surface px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-4">
              What We Stand For
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-primary">
              The Pillars of Mikoma
            </h2>
            <div className="w-16 h-px bg-secondary mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-outline-variant/20">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface p-10 md:p-12 text-center group hover:bg-primary transition-colors duration-500"
              >
                <div className="w-16 h-16 bg-surface-high flex items-center justify-center mx-auto mb-8 group-hover:bg-white/10 transition-colors duration-500">
                  <value.icon
                    size={28}
                    className="text-secondary group-hover:text-accent transition-colors duration-500"
                  />
                </div>
                <h3 className="font-display text-xl text-primary group-hover:text-white mb-4 transition-colors duration-500 uppercase tracking-wider">
                  {value.title}
                </h3>
                <p className="font-body text-sm text-on-surface-variant group-hover:text-white/70 leading-relaxed transition-colors duration-500">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          TIMELINE
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-32 px-5 md:px-16 overflow-hidden">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
            {/* Sticky Heading */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="md:w-1/3 md:sticky md:top-28"
            >
              <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-4">
                Our History
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-primary mb-6 leading-tight">
                A Journey Through Time
              </h2>
              <p className="font-body text-base text-on-surface-variant leading-relaxed">
                Witness the evolution of Mikoma Beach Lodge, from a humble
                lakeside retreat to a beacon of sustainable luxury on Africa's
                finest freshwater lake.
              </p>
            </motion.div>

            {/* Timeline Items */}
            <div className="md:w-2/3 relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-outline-variant/50" />

              <div className="space-y-16 md:space-y-20">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-14 group"
                  >
                    {/* Dot */}
                    <div className="absolute left-[9px] top-1 w-3 h-3 bg-primary group-hover:bg-secondary transition-colors duration-300 ring-4 ring-background" />

                    {/* Year */}
                    <span className="font-display text-2xl text-secondary block mb-2">
                      {item.year}
                    </span>

                    {/* Title */}
                    <h4 className="font-display text-xl md:text-2xl text-primary mb-3">
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Image */}
                    {item.image && (
                      <div className="relative h-52 md:h-64 overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          PHOTO GRID
      ═══════════════════════════════════ */}
      <section className="py-20 md:py-24 bg-surface px-5 md:px-16">
        <div className="max-w-[1280px] mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="font-body text-xs tracking-[0.25em] uppercase text-secondary mb-4">
              Life at Mikoma
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-primary">
              Moments Worth Remembering
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {gridImages.map((img, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative overflow-hidden group ${
                  i % 2 !== 0 ? "mt-6 md:mt-8" : ""
                }`}
              >
                <div className="relative aspect-square">
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

      {/* ═══════════════════════════════════
          CTA
      ═══════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1920"
            alt="Lake Malawi sunset"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-16 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-accent">
              Begin Your Journey
            </p>
            <h2 className="font-display text-3xl md:text-5xl text-white max-w-2xl mx-auto leading-tight">
              Come Experience It Yourself
            </h2>
            <p className="font-body text-base text-white/70 max-w-lg mx-auto leading-relaxed">
              Words and photographs can only tell part of our story. The rest is
              waiting for you on the shores of Lake Malawi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link
                href="/booking"
                className="inline-flex items-center justify-center gap-3 bg-accent text-primary font-body text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 hover:bg-white transition-all duration-300"
              >
                Reserve Your Stay <MoveRight size={16} />
              </Link>
              <Link
                href="/rooms"
                className="inline-flex items-center justify-center gap-3 border border-white text-white font-body text-xs font-semibold tracking-[0.2em] uppercase px-10 py-4 hover:bg-white hover:text-primary transition-all duration-300"
              >
                Explore Suites
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}