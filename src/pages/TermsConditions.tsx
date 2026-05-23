import { Award, ShieldAlert, BadgeInfo, Scale } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="pt-24 min-h-screen bg-brand-black text-white">
      <section className="py-16 bg-brand-gray border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <span className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase block mb-3">Service Agreements</span>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight mb-4">
            Terms & <span className="text-brand-yellow italic underline">Conditions</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed uppercase tracking-widest font-bold">
            On-site training service parameters and safety obligations.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-gray p-8 md:p-12 rounded-sm border border-white/5 space-y-8 leading-relaxed text-sm text-gray-300">
            
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Scale className="w-6 h-6 text-brand-yellow shrink-0" />
              <h2 className="text-lg font-black uppercase tracking-wider text-white">Contract terms</h2>
            </div>
            
            <p>
              By request of quotation or scheduling of on-site courses with Precision Forklift Training, clients agree to fulfill and abide by the standard operational contract terms documented below.
            </p>

            <div className="space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-brand-yellow" /> 1. On-Site Training Environment Requirements
              </h3>
              <p>
                As we specialize strictly in on-site training at your facilities, the client company accepts absolute responsibility to supply the necessary equipment and setting. You must guarantee:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Forklift trucks of the correct category (e.g. B1/B2 Counterbalance or D1 Reach) with a valid <strong>LOLER (Lifting Operations and Lifting Equipment Regulations) Certificate</strong>.</li>
                <li>A clean, designated instruction yard/area isolated from direct active manufacturing traffic to guarantee candidates and instructor safety.</li>
                <li>A complete, practical load range (such as weighted pallets) for stacking and maneuvers checks.</li>
                <li>Safe Personal Protective Equipment (PPE) for candidates, including steel-toe footwear and high-visibility apparel.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <BadgeInfo className="w-4 h-4 text-brand-yellow" /> 2. Quotation and Payments
              </h3>
              <p>
                All website submissions are inquiries for an initial quotation request. Official invoices are issued upon agreement of scheduling. Payments must be fully cleared prior to the commencement of Day 1 training to facilitate accredited registration, unless direct prior corporate account credit facilities are set in place.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-yellow" /> 3. Cancellation Policy
              </h3>
              <p>
                Schedules are highly optimized to arrange RTITB accredited instructors. Cancelation requests must be notified in writing to <strong className="text-white">contact@precisionforklift.co.uk</strong>. Cancellations within 7 working days of slot commencement will result in a 50% reservation penalty, and cancellations under 48 hours are non-refundable to secure tutor overheads.
              </p>
            </div>

            <div className="pt-8 border-t border-t-white/5 text-[10px] text-gray-500 uppercase font-mono flex justify-between">
              <span>Last Revised: May 2026</span>
              <span>Doc ID: PFT-TERMS-01</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
