import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Clock, Mail, ChevronRight, CheckCircle, AlertTriangle, MessageSquare } from "lucide-react";

export default function Complaints() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reference: "",
    category: "Training Delivery",
    details: "",
    resolution: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.details) {
      alert("Please fill in all required fields.");
      return;
    }
    // Generate a mock ticket ID
    const randomTicket = "PFT-" + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomTicket);
    setSubmitted(true);
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-black text-white">
      {/* Header */}
      <section className="py-16 bg-brand-gray border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase block mb-3">Feedback & Quality Care</span>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight mb-4">
            Complaints <span className="text-brand-yellow italic underline">Procedure</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed uppercase tracking-wider font-semibold">
            RTITB Accredited Quality Assurance and Formal Resolutions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Guide & Resolution Steps */}
            <div>
              <h2 className="text-3xl font-black font-display uppercase mb-6 tracking-tight">
                Our Resolving <span className="text-brand-yellow">Commitment</span>
              </h2>
              <p className="text-gray-400 text-base leading-relaxed mb-8">
                As an RTITB Accredited training provider, Precision Forklift Training operates under the highest guidelines of professionalism, safety, and candidate care. If our on-site course delivery did not meet your expectations, we maintain a robust, transparent complaints procedure.
              </p>

              {/* Status Timeline / Steps */}
              <div className="space-y-6">
                {[
                  {
                    stage: "STAGE 1",
                    title: "Local Investigation (Primary Channel)",
                    desc: "Send your inquiry details to our Customer Relations team. We guarantee to acknowledge receipt within 24 hours and finalize a full internal investigation.",
                    time: "Response within 3 working days",
                    contact: "complaints@precisionforklift.co.uk",
                    icon: MessageSquare
                  },
                  {
                    stage: "STAGE 2",
                    title: "Formal Escalation (Operations Director)",
                    desc: "If you feel the local response is unsatisfactory, you may escalate your ticket to the Training Operations Director. Your case will be audited with clean independent scrutiny.",
                    time: "Resolution within 7 working days",
                    contact: "director@precisionforklift.co.uk",
                    icon: Shield
                  },
                  {
                    stage: "STAGE 3",
                    title: "External Appeal (RTITB Standards)",
                    desc: "If internal efforts do not produce a compliant solution, clients possess the absolute right to escalate the dispute directly to the RTITB Accreditation Body.",
                    time: "External arbitration timeline",
                    contact: "RTITB Group Quality Executive",
                    icon: AlertTriangle
                  }
                ].map((step, idx) => (
                  <div key={idx} className="bg-brand-gray/50 p-6 rounded-sm border border-white/5 flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-sm bg-brand-yellow/10 flex items-center justify-center text-brand-yellow shrink-0">
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[10px] font-black uppercase text-brand-yellow tracking-widest bg-brand-yellow/10 px-2 py-0.5 rounded-sm">
                          {step.stage}
                        </span>
                        <h4 className="text-md font-bold text-white uppercase">{step.title}</h4>
                      </div>
                      <p className="text-xs text-gray-400 leading-relaxed mb-3">
                        {step.desc}
                      </p>
                      <div className="flex flex-wrap items-center justify-between gap-2 text-[10px] font-bold text-gray-400 bg-brand-black/40 p-2 rounded border border-white/5 uppercase tracking-wider">
                        <span className="flex items-center gap-1"><Clock className="w-3" /> {step.time}</span>
                        <span className="flex items-center gap-1"><Mail className="w-3" /> {step.contact}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* complaint form */}
            <div className="bg-brand-gray p-8 rounded-sm border border-white/5 relative">
              <div className="mb-6">
                <h3 className="text-xl font-bold uppercase mb-2 tracking-tight">
                  Lodge a <span className="text-brand-yellow">Formal Complaint</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Fill in the secure form below. Your report is routed straight to our Quality Assurance leads.
                </p>
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-gray-400">Your Full Name *</label>
                        <input 
                          type="text" 
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-brand-black border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm" 
                          placeholder="Jane Doe" 
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-gray-400">Email Address *</label>
                        <input 
                          type="email" 
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-brand-black border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm" 
                          placeholder="jane@company.co.uk" 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-gray-400">Phone Number</label>
                        <input 
                          type="text" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-brand-black border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm" 
                          placeholder="07123 456789" 
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-bold uppercase text-gray-400">Booking / Invoice Ref</label>
                        <input 
                          type="text" 
                          value={formData.reference}
                          onChange={(e) => setFormData({ ...formData, reference: e.target.value })}
                          className="w-full bg-brand-black border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm" 
                          placeholder="PFT-2026-X" 
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-gray-400">Nature of Concern</label>
                      <select 
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full bg-brand-black border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm text-gray-300"
                      >
                        <option>Training Delivery & Instructor Conduct</option>
                        <option>Machinery & Safety Standards</option>
                        <option>Accreditation Delay / Cards Issue</option>
                        <option>Administrative / Invoicing discrepancy</option>
                        <option>Other Operational Issues</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-gray-400">Detailed Description of Incident *</label>
                      <textarea 
                        required
                        rows={4} 
                        value={formData.details}
                        onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                        className="w-full bg-brand-black border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm resize-none" 
                        placeholder="Please include dates, times, instructor name, and specific occurrences..."
                      ></textarea>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[10px] font-bold uppercase text-gray-400">Suggested Action for Resolution</label>
                      <textarea 
                        rows={2} 
                        value={formData.resolution}
                        onChange={(e) => setFormData({ ...formData, resolution: e.target.value })}
                        className="w-full bg-brand-black border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm resize-none" 
                        placeholder="How can we resolve this matter to your complete satisfaction?"
                      ></textarea>
                    </div>

                    <div className="pt-2">
                      <button 
                        type="submit"
                        className="w-full bg-brand-yellow text-brand-black font-black py-4 rounded-sm hover:bg-white transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                      >
                        SUBMT FORM & CREATE TICKET <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-4"
                  >
                    <div className="w-16 h-16 bg-brand-yellow/10 rounded-full flex items-center justify-center text-brand-yellow mx-auto mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-black uppercase mb-2">Complaint Submitted</h4>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto mb-6">
                      Your concern has been logged securely under case token <span className="text-brand-yellow font-bold font-mono">{ticketId}</span>. A copies receipt detail has been sent to <span className="font-semibold text-gray-200">{formData.email}</span>.
                    </p>

                    <div className="bg-brand-black border border-white/10 rounded p-4 text-left font-mono text-[11px] text-gray-300 space-y-2 mb-8 max-w-md mx-auto">
                      <div><span className="text-brand-yellow">CASE ID:</span> {ticketId}</div>
                      <div><span className="text-brand-yellow">NAME:</span> {formData.name}</div>
                      <div><span className="text-brand-yellow">CATEGORY:</span> {formData.category}</div>
                      <div><span className="text-brand-yellow">DATE SECURED:</span> {new Date().toLocaleDateString()}</div>
                      <div><span className="text-brand-yellow">STATUS:</span> <span className="bg-brand-yellow/20 text-brand-yellow px-1 py-0.5 rounded uppercase">AWAITING REVIEW</span></div>
                    </div>

                    <button 
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          phone: "",
                          reference: "",
                          category: "Training Delivery",
                          details: "",
                          resolution: ""
                        });
                      }}
                      className="border border-brand-yellow text-brand-yellow px-6 py-2.5 rounded-sm font-bold text-xs hover:bg-brand-yellow hover:text-brand-black transition-all uppercase"
                    >
                      Submit Another Concern
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
