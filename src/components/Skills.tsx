"use client";
import { motion } from "framer-motion";

export default function Skills({ categories }: { categories: any[] }) {
  return (
    <div className="container mx-auto px-6 py-24">
      <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
        <span className="h-px w-12 bg-blue-500"></span>
        CORE COMPETENCIES
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <h3 className="text-blue-400 text-xs font-mono uppercase tracking-[0.2em] mb-4">{cat.category}</h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((skill: string, j: number) => (
                <span key={j} className="text-sm px-3 py-1 bg-white/5 rounded-full border border-white/5 opacity-80 hover:border-blue-500/50 transition-colors">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}