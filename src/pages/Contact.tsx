import { Contact as ContactSection } from "../components/SiteSections";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="bg-brand-black min-h-screen">
      {/* Header */}
      <section className="py-20 bg-brand-gray border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black font-display uppercase mb-4">Contact <span className="text-brand-yellow">Us</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed uppercase tracking-widest font-bold">
            We're here to help with your training needs.
          </p>
        </div>
      </section>

      <ContactSection />

      {/* Map & Operating Hours */}
      <section className="py-24 border-t border-white/5">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h3 className="text-2xl font-black font-display uppercase mb-8 italic">Operating <span className="text-brand-yellow underline">Hours</span></h3>
                    <div className="space-y-4">
                        {[
                            { day: "Monday - Friday", hours: "08:00 - 18:00" },
                            { day: "Saturday", hours: "09:00 - 13:00" },
                            { day: "Sunday", hours: "Closed" }
                        ].map((time, i) => (
                            <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                                <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{time.day}</span>
                                <span className="text-sm font-black uppercase text-white">{time.hours}</span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 p-8 bg-brand-gray border border-white/5 rounded-sm">
                        <h4 className="text-sm font-bold uppercase tracking-widest text-brand-yellow mb-4 flex items-center gap-2">
                            <Clock className="w-4 h-4" /> Response Time
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            We aim to respond to all website inquiries within **2 business hours**. For urgent training requests, please call us directly.
                        </p>
                    </div>
                </div>

                <div className="h-[400px] bg-brand-gray rounded-sm border border-white/5 overflow-hidden flex items-center justify-center relative">
                    <img src="https://picsum.photos/seed/map/800/800" className="w-full h-full object-cover opacity-20 grayscale" referrerPolicy="no-referrer" />
                    <div className="absolute z-10 flex flex-col items-center gap-4">
                        <div className="w-16 h-16 bg-brand-yellow rounded-full flex items-center justify-center text-brand-black shadow-2xl animate-bounce">
                            <MapPin className="w-8 h-8" />
                        </div>
                        <span className="bg-brand-black px-4 py-2 border border-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">Precision Headquarters UK</span>
                    </div>
                    {/* Mock map overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black to-transparent opacity-80" />
                </div>
            </div>
         </div>
      </section>
    </div>
  );
}
