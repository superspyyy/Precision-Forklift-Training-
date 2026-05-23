import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="pt-24 min-h-screen bg-brand-black text-white">
      <section className="py-16 bg-brand-gray border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <span className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase block mb-3">UK Regulatory Compliance</span>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight mb-4">
            Privacy <span className="text-brand-yellow italic underline">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed uppercase tracking-widest font-bold">
            UK GDPR & Data Protection Act 2018 Standards. Approved for Candidate Training.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-gray p-8 md:p-12 rounded-sm border border-white/5 space-y-8 leading-relaxed text-sm text-gray-300">
            
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Shield className="w-6 h-6 text-brand-yellow shrink-0" />
              <h2 className="text-lg font-black uppercase tracking-wider text-white">Statement of Intent</h2>
            </div>
            
            <p>
              At Precision Forklift Training, we operate under legal rules to keep personal information secure. This privacy document describes our processes and compliance regarding the collection, transmission, and safe storage of personal identifiers provided by our corporate booking managers and industrial site operators.
            </p>

            <div className="space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Lock className="w-4 h-4 text-brand-yellow" /> 1. Information We Collect
              </h3>
              <p>
                As a specialized RTITB Accredited training provider, we accumulate data to process licenses and operator standard listings. This includes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Candidate personal identification data (First and Last Name, Date of Birth).</li>
                <li>Employer company registration information, including business premises where on-site instruction takes place.</li>
                <li>Operator photographs required for registration on the national training database and verification on physical operator ID cards.</li>
                <li>Theoretical and practical performance details relating to operator performance checks and safety scores.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Eye className="w-4 h-4 text-brand-yellow" /> 2. Processing and Sharing
              </h3>
              <p>
                We execute safe data sharing patterns only with legal entities required to secure certifications. We share candidate records exclusively with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The nominated accrediting body (such as RTITB or ITSSAR groups) to register safety credentials.</li>
                <li>The paying corporate employer to report on-site training outcomes and safety compliance scores.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-yellow" /> 3. Data Retention Rights
              </h3>
              <p>
                In compliance with safety codes, candidate examination reports are held securely for up to 6 years. Under the UK General Data Protection Regulation (UK GDPR), you possess rights of access, correction of errors, and erasure of optional personal identifiers. For diagnostic inquiries regarding stored records, email our compliance officer directly at <strong className="text-white">contact@precisionforklift.co.uk</strong>.
              </p>
            </div>

            <div className="pt-8 border-t border-white/5 text-[10px] text-gray-500 uppercase font-mono flex justify-between">
              <span>Last Revised: May 2026</span>
              <span>Doc ID: PFT-PRIVACY-01</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
