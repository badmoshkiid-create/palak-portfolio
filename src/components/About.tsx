import { motion } from 'framer-motion';
import { MapPin, GraduationCap, Code } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12">
          <p className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-2">
            Introduction
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-slate">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
            className="lg:col-span-4 bg-[#F8FAFC] rounded-3xl p-6 blue-shadow border border-slate-100 perspective-1000"
          >
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <GraduationCap className="w-5 h-5 text-primary-blue mt-0.5 shrink-0" />
                <p className="text-sm font-medium">PGDM (Analytics), SOIL School of Business Design</p>
              </div>
              <div className="flex items-start gap-3">
                <Code className="w-5 h-5 text-primary-blue mt-0.5 shrink-0" />
                <p className="text-sm font-medium">B.Tech CSE, 88.9%</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-blue mt-0.5 shrink-0" />
                <p className="text-sm font-medium">Moradabad → Ghaziabad → Gurgaon</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 space-y-6 text-lg"
          >
            <p>
              Hi, I'm Palak. I grew up in Moradabad and studied Computer Science Engineering in Ghaziabad, where I got hooked on how technical thinking translates into business acumen.
            </p>
            <p>
              Across internships at Ericsson, the Ministry of Electronics & IT (NIC), and two startups, I kept noticing the same thing: <strong className="text-navy-slate font-semibold">building the solution is only half the job; managing the process behind it is what actually creates impact.</strong>
            </p>
            <p>
              That realization is what pulled me toward Analytics and Strategy, and eventually toward an MBA. I realized that my technical foundation was powerful, but applying it to solve real user and business problems through design thinking and stakeholder management is where my true passion lies.
            </p>
          </motion.div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full gradient-divider"></div>
    </section>
  );
}
