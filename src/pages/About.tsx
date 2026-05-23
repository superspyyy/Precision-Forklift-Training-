import { About as AboutSection } from "../components/SiteSections";
import { Shield, Users, Trophy, Star, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

export default function About() {
  return (
    <div className="bg-brand-black">
      {/* Header */}
      <section className="py-20 bg-brand-gray border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black font-display uppercase mb-4 tracking-tighter">About <span className="text-brand-yellow italic underline">Us</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed uppercase tracking-widest font-bold">
            RTITB Accredited Training Provider.
          </p>
        </div>
      </section>

      <AboutSection />

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
