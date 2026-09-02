import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: "GUNI Advisory",
    role: "Market Intelligence & Analytics Intern",
    date: "Apr–Jun 2026",
    details: [
      "Mapped buyer-seller fit across demand, supply, pricing, cost & logistics.",
      "Researched 25 countries via PESTLE/trade analysis.",
      "Built a CRM prospect database from primary & secondary sources.",
      "Coordinated 10+ stakeholder interactions."
    ]
  },
  {
    company: "SolveForge Technologies",
    role: "Founder & Entrepreneur, EdTech/AI Platform",
    date: "Sept 2023–Nov 2024",
    details: [
      "Identified 5+ college-industry skill gaps and defined 3 solution areas.",
      "Built an ERP/CRM for end-to-end student/customer management.",
      "Analyzed ~10K records via SQL.",
      "Grew the platform to ~250 students and a network of 25 industry mentors across 50 sessions."
    ]
  },
  {
    company: "Ericsson India Global Services",
    role: "Network Analytics & Automation Intern",
    date: "Feb–Jul 2023",
    details: [
      "Analyzed ~200K network alarms across 5 modules to improve fault detection.",
      "Automated reporting workflows with Power Automate.",
      "Built 25 monitoring/analytics dashboards."
    ]
  },
  {
    company: "National Informatics Centre (MeitY)",
    role: "Software Developer Intern",
    date: "Jul–Sept 2022",
    details: [
      "Worked on the mParivahan e-Governance ecosystem.",
      "Analyzed ~5K operational records, shipped 2 features from requirements to spec.",
      "Ran 15 pre-release test cases, coordinated with 3+ stakeholders."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <p className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-2">
            Professional History
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-slate">
            Experience Timeline
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-blue/50 via-accent-cyan/30 to-transparent md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Node */}
                <div className="absolute left-0 md:left-1/2 top-6 md:top-8 -translate-x-1/2 w-12 h-12 bg-white rounded-full border-4 border-[#F8FAFC] flex items-center justify-center shadow-sm z-10 hidden md:flex">
                  <div className="w-3 h-3 bg-primary-blue rounded-full" />
                </div>

                {/* Mobile Node */}
                <div className="absolute left-[23px] top-6 -translate-x-1/2 w-8 h-8 bg-white rounded-full border-4 border-[#F8FAFC] flex items-center justify-center shadow-sm z-10 md:hidden">
                   <div className="w-2 h-2 bg-primary-blue rounded-full" />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 ml-12 md:ml-0 md:px-8">
                  <div className="bg-white rounded-2xl p-6 blue-shadow border border-slate-50 hover:-translate-y-1 transition-transform duration-300 relative group">
                    <div className="absolute top-0 left-0 w-1 h-full bg-primary-blue rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold text-navy-slate">{exp.role}</h3>
                      <span className="text-sm font-medium text-accent-cyan bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                        {exp.date}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-4 text-primary-dark font-medium">
                      <Briefcase className="w-4 h-4" />
                      <h4>{exp.company}</h4>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-body-slate">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50 mt-1.5 shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 w-full gradient-divider"></div>
    </section>
  );
}
