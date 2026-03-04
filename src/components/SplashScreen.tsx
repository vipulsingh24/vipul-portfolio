"use client";
import { motion } from "framer-motion";

export default function SplashScreen() {
  return (
    <motion.div
      exit={{ opacity: 0, y: -20 }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#030303]"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative"
      >
        <span className="text-6xl font-black tracking-tighter text-white">
          VS<span className="text-blue-600">.</span>
        </span>
        {/* Subtle glow effect behind logo */}
        <div className="absolute inset-0 blur-3xl bg-blue-600/20 rounded-full" />
      </motion.div>

      <div className="mt-8 w-48 h-[2px] bg-white/10 overflow-hidden rounded-full">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="w-full h-full bg-blue-600"
        />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5 }}
        className="mt-4 text-[10px] uppercase tracking-[0.3em] text-white"
      >
        Initializing Portfolio v2.4
      </motion.p>
    </motion.div>
  );
}