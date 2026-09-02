import { Mail, Phone, Linkedin, Download } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-navy-slate text-white pt-20 pb-10 relative overflow-hidden">
      {/* Light blue gradient band at the top of footer */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-blue via-accent-cyan to-primary-blue" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's turn data into <span className="text-accent-cyan">decisions</span> together.
            </h2>
            <p className="text-slate-300 text-lg">
              Open for opportunities in Business Analytics & Strategy.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:justify-end gap-6">
            <a 
              href="https://drive.google.com/file/d/1Pnj6hbwwuEFVR_s12YtBLm_kzxUhaRf2/view?usp=sharing" target="_blank" rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 bg-primary-blue hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium transition-all shadow-lg shadow-blue-500/20"
            >
              Download Résumé
              <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 py-8 border-t border-slate-700/50">
          <a href="mailto:palak.bhatnagar.pgdm2027@schoolofbusinessdesign.com" className="flex items-center gap-3 text-slate-300 hover:text-primary-blue transition-colors group">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-900/30 transition-colors shrink-0">
              <Mail className="w-5 h-5" />
            </div>
            <span className="truncate">palak.bhatnagar.pgdm2027@schoolofbusinessdesign.com</span>
          </a>
          <a href="tel:+917599074312" className="flex items-center gap-3 text-slate-300 hover:text-primary-blue transition-colors group">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-900/30 transition-colors shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <span>+91 75990 74312</span>
          </a>
          <a href="https://linkedin.com/in/palak-bhatnagar-9a201b1b6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-slate-300 hover:text-primary-blue transition-colors group lg:justify-end">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-900/30 transition-colors shrink-0">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="truncate">linkedin.com/in/palak-bhatnagar-9a201b1b6</span>
          </a>
        </div>

        <div className="text-center pt-8 border-t border-slate-700/50 text-slate-400 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Palak Bhatnagar. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Real text links */}
            <a href="#hero" className="hover:text-white transition-colors">Home</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
