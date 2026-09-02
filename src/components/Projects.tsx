import { motion } from 'framer-motion';
import { FolderGit2 } from 'lucide-react';

const projects = [
  {
    role: "Business Analyst Trainee",
    project: "B School Buzz",
    description: "Analyzed 10 business processes, recommended 3 growth strategies."
  },
  {
    role: "Research Study",
    project: "AI-Assisted Learning Tools",
    description: "Analyzed ~450 survey responses on AI adoption trends using a statistical model."
  },
  {
    role: "Business Feasibility Study",
    project: "Dropshipping",
    description: "Evaluated 25 suppliers on cost/quality/feasibility, shortlisted 5 viable options."
  },
  {
    role: "Strategic Marketing & Revenue Model",
    project: "ETASHA",
    description: "Built a revenue model across 5 customer segments."
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#F8FAFC] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12 text-center">
          <p className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-2">
            Applied Knowledge
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-slate">
            Academic & Live Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-blue-100 hover:blue-shadow transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-blue transition-colors">
                  <FolderGit2 className="w-6 h-6 text-primary-blue group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm font-medium text-accent-cyan mb-1">{proj.role}</p>
                  <h3 className="text-xl font-bold text-navy-slate mb-3">{proj.project}</h3>
                  <p className="text-body-slate text-sm leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full gradient-divider"></div>
    </section>
  );
}
