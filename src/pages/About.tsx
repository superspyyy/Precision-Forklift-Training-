import { About as AboutSection } from "../components/SiteSections";
import { Shield, Users, Trophy, Star, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="bg-brand-black">
      {/* Header */}
      <section className="py-20 bg-brand-gray border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black font-display uppercase mb-4">About <span className="text-brand-yellow">Us</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed uppercase tracking-widest font-bold">
            The Gold Standard in Forklift Training since 2008.
          </p>
        </div>
      </section>

      <AboutSection />

      {/* Stats Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
            {[
              { label: "Students Trained", value: "5,000+", icon: Users },
              { label: "Pass Rate", value: "99%", icon: Trophy },
              { label: "Accreditations", value: "10+", icon: Shield },
              { label: "Safety Rating", value: "5/5", icon: Star }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-black font-display">{stat.value}</div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black font-display uppercase mb-16 text-center italic">Our Core <span className="text-brand-yellow underline">Values</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                    { title: "Precision", desc: "Every movement, every safety check, and every instruction is delivered with absolute accuracy.", icon: CheckCircle2 },
                    { title: "Integrity", desc: "We provide honest assessments and genuine certifications that employers can trust.", icon: CheckCircle2 },
                    { title: "Community", desc: "We are committed to making the industrial workforce safer one operator at a time.", icon: CheckCircle2 }
                ].map((value, i) => (
                    <div key={i} className="flex gap-6">
                        <div className="flex-shrink-0 w-12 h-12 bg-brand-yellow flex items-center justify-center">
                            <span className="text-brand-black text-xl font-black">{i+1}</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold uppercase mb-4 tracking-tighter">{value.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
}
