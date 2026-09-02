import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-navy-slate tracking-tight mb-2">
          Palak<span className="text-primary-blue">Bhatnagar</span>
        </h1>
        <p className="text-sm font-medium text-slate-400 tracking-widest uppercase">
          Business Analytics & Strategy
        </p>
      </motion.div>

      {/* Progress Bar Container */}
      <div className="w-64 h-1 bg-slate-100 rounded-full mt-10 overflow-hidden relative">
        {/* Progress Bar Fill */}
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary-blue to-accent-cyan"
        />
      </div>
    </motion.div>
  );
}
