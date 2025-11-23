"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="my-15 text-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-sky-400">About Us</span>
          </h2>

          <p className="text-gray-900 leading-relaxed mb-6">
            We’re a future-focused digital team committed to building intuitive,
            elegant and high-performance products. Our mission is to empower
            businesses through impactful storytelling, design innovation, and
            human-centered technology.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { label: "Active Users", value: "20,123" },
              { label: "Installed Apps", value: "1,400" },
              { label: "Active Clients", value: "13,560" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="p-4 rounded-xl bg-gray-900 border border-gray-700 hover:border-sky-400 transition-all"
                whileHover={{ scale: 1.07 }}
              >
                <p className="text-sky-400 text-xl font-bold">{stat.value}</p>
                <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="relative group">
            <Image
              src="/about.jpeg"
              width={400}
              height={450}
              alt="Team working together"
              className="rounded-xl shadow-xl"
            />

            {/* Floating Coins Micro-interaction */}
            <motion.div
              className="absolute -right-6 top-10 bg-sky-400 rounded-full w-10 h-10"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />

            <motion.div
              className="absolute -right-16 top-32 bg-sky-400 rounded-full w-14 h-14 opacity-70"
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 2.4 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
