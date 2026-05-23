import { Users, Scale, Shield, Award, HelpCircle } from "lucide-react";

export default function EqualityDiversity() {
  return (
    <div className="pt-24 min-h-screen bg-brand-black text-white">
      <section className="py-16 bg-brand-gray border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <span className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase block mb-3">Professional Conduct</span>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight mb-4">
            Equality & <span className="text-brand-yellow italic underline">Diversity</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed uppercase tracking-widest font-bold">
            Compliance under UK Equality Act 2010 • Fair Treatment for All Candidates.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-gray p-8 md:p-12 rounded-sm border border-white/5 space-y-8 leading-relaxed text-sm text-gray-300">
            
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Scale className="w-6 h-6 text-brand-yellow shrink-0" />
              <h2 className="text-lg font-black uppercase tracking-wider text-white">Our Core Ethos</h2>
            </div>
            
            <p>
              At Precision Forklift Training, we promote an inclusive educational environment. We strongly believe that everyone deserves equal opportunity to learn, qualify, and secure active employment in warehousing and logistics without facing barriers or discriminatory conduct.
            </p>

            <div className="space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-yellow" /> 1. Compliance with the Equality Act 2010
              </h3>
              <p>
                We do not differentiate, exclude, or make prejudicial assumptions based on any protected characteristics including age, disability, gender reassignment, marriage or civil partnership, pregnancy and maternity, race, religion, sex, or sexual orientation. Our training schemes are open to all individuals who possess the minimum physical capability required to operate a heavy lift vehicle safely.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-yellow" /> 2. Overcoming Learning Differences (Dyslexia and Neurodiversity Support)
              </h3>
              <p>
                We acknowledge that theoretical written examinations can pose unique obstacles. Precision Forklift Training works proactively to accommodate candidates with reading differences, dyslexia, or language barriers:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Verbal Questioning:</strong> Tutors can conduct the final theoretical examination verbally, reading the questions aloud and recording candidate answers directly.</li>
                <li><strong>Extra Time Allotment:</strong> Extension of time for written and practical components to ensure stress-free comprehension.</li>
                <li><strong>Visual Instructional Aids:</strong> Heavy reliance on visual slides and practical demonstrative patterns during classroom segments.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Shield className="w-4 h-4 text-brand-yellow" /> 3. Hostility Exclusion Rule
              </h3>
              <p>
                We maintain an absolute zero-tolerance policy against any form of abusive behavior, harassment, or verbal degradation based on difference. Any such action will lead to immediate candidate suspension and notification to the sponsoring employer.
              </p>
              <p>
                To request specific exam accommodations or query learning options, email our support crew in confidence at <strong className="text-white">contact@precisionforklift.co.uk</strong>.
              </p>
            </div>

            <div className="pt-8 border-t border-t-white/5 text-[10px] text-gray-500 uppercase font-mono flex justify-between">
              <span>Last Revised: May 2026</span>
              <span>Doc ID: PFT-EQUALITY-01</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
