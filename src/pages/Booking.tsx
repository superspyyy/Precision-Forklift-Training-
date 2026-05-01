import { useState } from "react";
import { CreditCard, ShieldCheck, Info, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

export default function Booking() {
  const [step, setStep] = useState(1);

  return (
    <div className="bg-brand-black min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black font-display uppercase mb-4 tracking-tighter">Booking & <span className="text-brand-yellow">Payment</span></h1>
          <p className="text-gray-400 text-sm font-bold uppercase tracking-[0.2em]">Secure your training spot in minutes.</p>
        </div>

        {/* Stepper */}
        <div className="flex items-center justify-between mb-12 relative">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10 -z-10 translate-y-[-50%]" />
            {[1, 2].map((s) => (
                <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-black text-sm transition-all border-2 ${step >= s ? 'bg-brand-yellow text-brand-black border-brand-yellow' : 'bg-brand-black text-white border-white/20'}`}>
                    {s}
                </div>
            ))}
        </div>

        <div className="bg-brand-gray p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl">
          {step === 1 ? (
            <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Course Selected</label>
                        <select className="w-full bg-brand-black border border-white/10 p-4 font-bold text-sm focus:border-brand-yellow outline-none appearance-none">
                            <option>Counterbalance (Novice) - £495</option>
                            <option>Reach Truck (Novice) - £525</option>
                            <option>Refresher (1 Day) - £150</option>
                        </select>
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Preferred Start Week</label>
                        <input type="week" className="w-full bg-brand-black border border-white/10 p-4 font-bold text-sm focus:border-brand-yellow outline-none invert grayscale opacity-80" />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                        <input type="text" className="w-full bg-brand-black border border-white/10 p-4 font-bold text-sm focus:border-brand-yellow outline-none" placeholder="John Doe" />
                    </div>
                    <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Phone Number</label>
                        <input type="tel" className="w-full bg-brand-black border border-white/10 p-4 font-bold text-sm focus:border-brand-yellow outline-none" placeholder="+44 7700 900XXX" />
                    </div>
                </div>

                <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                    <input type="email" className="w-full bg-brand-black border border-white/10 p-4 font-bold text-sm focus:border-brand-yellow outline-none" placeholder="john@example.com" />
                </div>

                <div className="flex justify-end pt-8">
                    <button onClick={() => setStep(2)} className="bg-brand-yellow text-brand-black flex items-center gap-3 px-10 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-white transition-all group">
                        Next Step <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
          ) : (
            <div className="space-y-12">
               <div className="flex items-start gap-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded">
                    <Info className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <p className="text-xs text-blue-200 leading-relaxed font-medium">
                        You are about to book the <strong>Counterbalance (Novice)</strong> course starting <strong>May 15th, 2026</strong>. A non-refundable deposit of £100 is required to secure your spot.
                    </p>
               </div>

                <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                        <CreditCard className="w-6 h-6 text-brand-yellow" />
                        <h3 className="text-xl font-bold uppercase tracking-tight">Payment Details</h3>
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Card Number</label>
                        <div className="w-full bg-brand-black border border-white/10 p-4 font-bold text-sm text-gray-500">•••• •••• •••• ••••</div>
                    </div>

                    <div className="grid grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Expiry Date</label>
                            <input type="text" className="w-full bg-brand-black border border-white/10 p-4 font-bold text-sm" placeholder="MM/YY" />
                        </div>
                        <div className="space-y-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">CVC</label>
                            <input type="text" className="w-full bg-brand-black border border-white/10 p-4 font-bold text-sm" placeholder="•••" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 pt-8">
                    <button className="bg-brand-yellow text-brand-black w-full py-5 font-black uppercase text-sm tracking-[0.2em] hover:bg-white transition-all">
                        Pay Deposit & Confirm Booking
                    </button>
                    <button onClick={() => setStep(1)} className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors py-2">
                        Go Back
                    </button>
                </div>

                <div className="flex items-center justify-center gap-6 pt-8 border-t border-white/5 opacity-50">
                    <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4" />
                        <span className="text-[9px] font-bold uppercase tracking-widest">SSL Encrypted</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <CreditCard className="w-4 h-4" />
                        <span className="text-[9px] font-bold uppercase tracking-widest">PCI Compliant</span>
                    </div>
                </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
