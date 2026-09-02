import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const whyData = [
  {
    id: 'mba',
    title: 'Why MBA?',
    content: 'At NIC, I realized I was technically equipped to build solutions, but I lacked the managerial lens to drive them efficiently. I wanted to go beyond solving problems to translating them into business outcomes.'
  },
  {
    id: 'analytics',
    title: 'Why Analytics?',
    content: 'At Ericsson, I saw how one small network issue could change an entire decision. That\'s what pulled me toward analytics. It\'s the bridge between data and decision-making.'
  }
];

export default function MyWhy() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  return (
    <section id="why" className="py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <p className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-2">
            The Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-slate">
            My Why
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {whyData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              onHoverStart={() => setExpandedId(item.id)}
              onHoverEnd={() => setExpandedId(null)}
              onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
              className={twMerge(
                clsx(
                  "bg-white rounded-2xl p-8 cursor-pointer border border-slate-100 transition-all duration-300",
                  expandedId === item.id ? "blue-shadow scale-[1.02]" : "hover:border-blue-100 hover:shadow-sm"
                )
              )}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-navy-slate">{item.title}</h3>
                <ChevronDown 
                  className={twMerge(
                    clsx(
                      "w-5 h-5 text-primary-blue transition-transform duration-300",
                      expandedId === item.id ? "rotate-180" : ""
                    )
                  )} 
                />
              </div>
              
              <AnimatePresence>
                {(expandedId === item.id || window.innerWidth >= 768) ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden md:!h-auto md:!opacity-100"
                  >
                    <p className="text-body-slate leading-relaxed">
                      "{item.content}"
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full gradient-divider"></div>
    </section>
  );
}
