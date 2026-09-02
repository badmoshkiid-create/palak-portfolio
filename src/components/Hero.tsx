import { motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { Download, ChevronDown } from 'lucide-react';

const Minimal3D = lazy(() => import('./Minimal3D'));

export default function Hero() {
  const scrollToExperience = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <Suspense fallback={null}>
        <Minimal3D />
      </Suspense>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-4 md:gap-12 items-center z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 lg:order-1"
        >
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-navy-slate leading-tight">
                Palak Bhatnagar
              </h1>
              <p className="text-xl md:text-2xl font-medium text-body-slate mt-4">
                Business Analytics & Strategy Professional | PGDM Candidate, SOIL School of Business Design
              </p>
            </div>
            
            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-blue-100 blue-shadow inline-block">
              <p className="text-lg md:text-xl italic text-navy-slate font-medium">
                "I see analytics as the bridge between data and decision-making, turning numbers into strategy."
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <button 
                onClick={scrollToExperience}
                className="bg-primary-blue hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-all shadow-lg shadow-blue-500/30"
              >
                View My Work
              </button>
              <a 
                href="https://drive.google.com/file/d/1Pnj6hbwwuEFVR_s12YtBLm_kzxUhaRf2/view?usp=sharing" target="_blank" rel="noopener noreferrer"
                className="group flex items-center gap-2 border-2 border-primary-blue text-primary-blue hover:bg-blue-50 px-8 py-3 rounded-full font-medium transition-all"
              >
                Download Résumé
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 relative h-[280px] md:h-[400px] lg:h-[600px] w-full flex justify-center items-center mt-8 md:mt-0 mb-4 md:mb-0"
        >
          {/* Subtle blue/orange neon glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] max-w-[500px] aspect-square">
            <div className="absolute top-[10%] left-[20%] w-[60%] h-[60%] bg-primary-blue/40 rounded-full blur-[60px] md:blur-[80px] mix-blend-multiply opacity-80 animate-[pulse_4s_ease-in-out_infinite]" />
            <div className="absolute bottom-[20%] right-[10%] w-[50%] h-[50%] bg-orange-400/30 rounded-full blur-[50px] md:blur-[70px] mix-blend-multiply opacity-70 animate-[pulse_5s_ease-in-out_infinite_reverse]" />
            <div className="absolute top-[40%] left-[40%] w-[40%] h-[40%] bg-accent-cyan/30 rounded-full blur-[40px] md:blur-[60px] opacity-60" />
          </div>

          {/* Photo */}
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            className="relative z-10 flex items-center justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl shadow-primary-blue/20 bg-white">
              <img src="/profile.jpg" alt="Palak Bhatnagar, Business Analytics professional, headshot" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-blue/50"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>
  );
}
