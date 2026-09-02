import { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';

const SkillsOrb = lazy(() => import('./SkillsOrb'));

const skillCategories = [
  {
    title: "Tech",
    skills: ["Python", "R", "Power BI", "ML", "Advanced Excel", "MySQL", "Notion CRM", "MS Office Suite"]
  },
  {
    title: "Core",
    skills: ["Business Analytics", "Market Research", "Business Strategy", "Data Visualization", "Business Development"]
  },
  {
    title: "Soft",
    skills: ["Analytical Thinking", "Problem Solving", "Business Acumen", "Team Collaboration", "Adaptability"]
  },
  {
    title: "Certifications",
    skills: ["Python for Data Science (IBM)", "Data Analysis using Python (ICT Academy)"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        
        <div>
          <div className="mb-10">
            <p className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-2">
              Capabilities
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-slate">
              Skills & Expertise
            </h2>
          </div>

          <div className="space-y-8">
            {skillCategories.map((cat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-navy-slate mb-3 border-l-2 border-primary-blue pl-3">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 bg-[#F8FAFC] border border-slate-100 text-body-slate text-sm font-medium rounded-full hover:border-primary-blue/30 hover:bg-blue-50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative h-[400px] lg:h-[500px] bg-gradient-to-br from-[#F8FAFC] to-white rounded-3xl border border-slate-50 flex items-center justify-center overflow-hidden hidden md:flex"
        >
          {/* 3D Canvas */}
          <div className="absolute inset-0">
            <Suspense fallback={null}>
              <SkillsOrb />
            </Suspense>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
