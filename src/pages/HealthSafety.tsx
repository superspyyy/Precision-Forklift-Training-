import { Shield, Hammer, Users, AlertTriangle, CheckSquare } from "lucide-react";

export default function HealthSafety() {
  return (
    <div className="pt-24 min-h-screen bg-brand-black text-white">
      <section className="py-16 bg-brand-gray border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <span className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase block mb-3">Statutory Commitment</span>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight mb-4">
            Health & <span className="text-brand-yellow italic underline">Safety</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed uppercase tracking-widest font-bold">
            Health & Safety at Work Act 1974 • HSE L117 Approved Standards.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-gray p-8 md:p-12 rounded-sm border border-white/5 space-y-8 leading-relaxed text-sm text-gray-300">
            
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Shield className="w-6 h-6 text-brand-yellow shrink-0" />
              <h2 className="text-lg font-black uppercase tracking-wider text-white">Statement of General Policy</h2>
            </div>
            
            <p>
              Under the UK Health and Safety at Work etc. Act 1974, Precision Forklift Training considers the safety of our candidates, instructors, and on-site staff as our paramount administrative priority. We conduct all operations under strict adherence to the HSE Approved Code of Practice (ACOP L117) for Rider-Controlled Lift Truck Training.
            </p>

            <div className="space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-brand-yellow" /> 1. Safe On-Site Conduct Principles
              </h3>
              <p>
                As an on-site provider, training takes place on-premises utilizing our client's operating machines. Our instructors possess legal authority to instantly pause or cancel sessions if:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Trucks fail to pass the preliminary pre-use inspection checklist (e.g., faulty brakes, fluid leaks, missing load-capacity labels).</li>
                <li>The nominated operational yard suffers active, unmitigated interference from factory production or external vehicles.</li>
                <li>Candidates lack essential steel-toe safety boots, high-visibility waistcoats, or necessary thermal equipment.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <CheckSquare className="w-4 h-4 text-brand-yellow" /> 2. Key Safety Guidelines (L117 Compliant)
              </h3>
              <p>
                Our certification schemes enforce core regulatory safety objectives to guarantee operations accuracy:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>PUWER 1998:</strong> Provision and Use of Work Equipment Regulations. We ensure operators master device controls and stop actions.</li>
                <li><strong>LOLER 1998:</strong> Lifting Operations and Lifting Equipment Regulations. Forklift stability profiles and heavy load-testing mastery.</li>
                <li><strong>Dynamic Stability:</strong> Clear instructions on the "Stability Triangle" to avoid overturning under load.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-yellow" /> 3. Accountability
              </h3>
              <p>
                Each party holds reciprocal safety commitments. The candidate must obey the direct instruction of the tutor, and the client managers must report any known hidden on-site facility hazards before arrival. Direct questions regarding health and safety policies can be processed at <strong className="text-white">contact@precisionforklift.co.uk</strong>.
              </p>
            </div>

            <div className="pt-8 border-t border-t-white/5 text-[10px] text-gray-500 uppercase font-mono flex justify-between">
              <span>Last Revised: May 2026</span>
              <span>Doc ID: PFT-HEALTH-01</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
