import { motion } from 'framer-motion';
import { Users, Globe, Trophy } from 'lucide-react';

const leadership = [
  {
    icon: <Users className="w-6 h-6 text-primary-blue" />,
    role: "Secretary, Cultural Club (SSOBD)",
    desc: "Led planning/execution of 10 campus events."
  },
  {
    icon: <Globe className="w-6 h-6 text-primary-blue" />,
    role: "Student Convener, 3rd IC (SSOBD)",
    desc: "Managed stakeholder coordination & conference ops."
  },
  {
    icon: <Users className="w-6 h-6 text-primary-blue" />,
    role: "President, WINGS–Umeedon Ko Pankh NGO (IMSEC)",
    desc: "Led volunteer teams on educational outreach."
  },
  {
    icon: <Trophy className="w-6 h-6 text-primary-blue" />,
    role: "Community & Athletics",
    desc: "Elected President during B.Tech; built a digital community of ~50K followers across YouTube & Instagram; State-Level Skating Player."
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-12">
          <p className="text-primary-blue font-semibold tracking-wider uppercase text-sm mb-2">
            Beyond the Desk
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-navy-slate">
            Leadership & Impact
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {leadership.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-50 hover:border-blue-100 hover:blue-shadow transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-navy-slate mb-2 leading-tight">
                {item.role}
              </h3>
              <p className="text-sm text-body-slate">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full gradient-divider"></div>
    </section>
  );
}
