import { motion } from 'framer-motion';
import { Award, Star, Lightbulb, FileText } from 'lucide-react';

const awards = [
  {
    icon: <Star className="w-5 h-5 text-primary-blue" />,
    title: "President's Honor Roll",
    desc: "Batch Topper, 1st Year, SOIL"
  },
  {
    icon: <Award className="w-5 h-5 text-primary-blue" />,
    title: "Academic Excellence Award",
    desc: "Batch Topper, B.Tech, IMSEC"
  },
  {
    icon: <Lightbulb className="w-5 h-5 text-primary-blue" />,
    title: "Patent Holder",
    desc: "Predictive Maintenance of HVAC Systems"
  },
  {
    icon: <FileText className="w-5 h-5 text-primary-blue" />,
    title: "Research Paper Presenter",
    desc: "Predictive Maintenance of HVAC Systems, ICICC 2023"
  }
];

export default function Awards() {
  return (
    <section id="awards" className="py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <p className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-2">
            Milestones
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-slate">
            Awards & Recognition
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="bg-white flex items-center gap-4 p-4 pr-6 rounded-full border border-blue-100 shadow-sm hover:blue-shadow group"
            >
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100 group-hover:bg-primary-blue group-hover:border-primary-blue transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]" />
                <span className="group-hover:text-white transition-colors z-10">
                  {award.icon}
                </span>
              </div>
              <div>
                <h3 className="font-bold text-navy-slate text-sm">{award.title}</h3>
                <p className="text-xs text-body-slate">{award.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full gradient-divider"></div>
      
      {/* Tailwind config for shimmer animation */}
      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
}
