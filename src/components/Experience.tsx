"use client";
import { motion } from 'framer-motion';
import { ChevronRight, Briefcase, Code2 } from 'lucide-react';

export default function Experience({ items }: { items: any[] }) {
  return (
    <div className="space-y-12">
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="group relative p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl hover:bg-white/[0.08] transition-all"
        >
          <div className="flex flex-col md:flex-row justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-bold flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-blue-500" /> {item.company}
              </h3>
              <p className="text-blue-400 font-medium mt-1">{item.role}</p>
            </div>
            <div className="mt-2 md:mt-0 px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-[10px] font-mono uppercase tracking-widest border border-blue-500/20">
              {item.duration}
            </div>
          </div>

          <ul className="space-y-4 mb-8">
            {item.bullets.map((bullet: string, i: number) => (
              <li key={i} className="flex gap-4 text-sm text-white/70 leading-relaxed">
                <ChevronRight className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" />
                {bullet}
              </li>
            ))}
          </ul>

          {item.stack && (
            <div className="pt-6 border-t border-white/5 flex items-center gap-3">
              <Code2 size={16} className="text-blue-500" />
              <p className="text-[10px] font-mono text-white/40 uppercase tracking-tighter">
                {item.stack}
              </p>
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}