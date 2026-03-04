"use client";
import { motion } from "framer-motion";
import { ArrowDownRight, FileText } from "lucide-react";

export default function Hero({ data }: { data: any }) {
  return (
    <section className="relative pt-32 pb-20 container mx-auto px-6 min-h-[80vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-blue-500 font-mono text-sm tracking-[0.3em] mb-4 uppercase">
          {data.subtitle}
        </h2>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl">
          {data.name}
        </h1>
        <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-12">
          {data.summary}
        </p>

        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-300"
          >
            View Experience <ArrowDownRight className="w-4 h-4" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}