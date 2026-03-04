"use client";
import { motion } from "framer-motion";
import { ArrowDownRight, FileText } from "lucide-react";

export default function Hero({ data, metrics }: { data: any, metrics: any[] }) {
  return (
    <section className="relative pt-32 pb-20 container mx-auto px-6 min-h-[90vh] flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-blue-500 font-mono text-sm tracking-widest mb-4 uppercase">
          {data.title}
        </h2>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl">
          {data.name}
        </h1>
        <p className="text-xl text-white/60 max-w-2xl leading-relaxed mb-10">
          {data.summary}
        </p>

        <div className="flex flex-wrap gap-4 mb-20">
          <button
            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-white text-black font-bold rounded-full flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-all"
          >
            View Experience <ArrowDownRight className="w-4 h-4" />
          </button>
          <button className="px-8 py-4 border border-white/20 rounded-full flex items-center gap-2 hover:bg-white/10 transition-all">
            Download Resume <FileText className="w-4 h-4" />
          </button>
        </div>
      </motion.div>

      {/* TOP 3 IMPACT STRIP */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
        {metrics.map((m: any, i: number) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + (i * 0.1) }}
          >
            <div className="text-4xl font-bold text-blue-500 mb-1">{m.value}</div>
            <div className="text-xs uppercase tracking-widest text-white/40">{m.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}