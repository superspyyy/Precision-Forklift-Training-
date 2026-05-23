import { useParams, Link } from "react-router-dom";
import { ChevronLeft, CheckCircle2, Clock, Calendar, Shield, CreditCard, ArrowRight, Info } from "lucide-react";
import { motion } from "motion/react";

const COURSE_DATA: Record<string, any> = {
  "counterbalance-novice-b1": {
    title: "Counterbalance Novice B1",
    duration: "3-5 Days",
    category: "Up to 5,000kg",
    description: "Our comprehensive B1 Counterbalance novice course is designed for those with no experience. Training is conducted on your site, ensuring your operators are comfortable in their actual working environment.",
    image: "https://picsum.photos/seed/counterbalance/800/500",
    prerequisites: "None - Suitable for complete beginners.",
    outcomes: [
      "RTITB Accredited certification",
      "Safe operation of trucks up to 5000kg",
      "Full understanding of stability principles",
      "Proficiency in loading/unloading vehicles"
    ],
    modules: [
        "Machine mechanics & stability theory",
        "Pre-use safety inspections",
        "Driving and steering (laden & unladen)",
        "Stacking & de-stacking at height",
        "Practical and theoretical testing"
    ]
  },
  "counterbalance-novice-b2": {
    title: "Counterbalance Novice B2",
    duration: "3-5 Days",
    category: "Up to 13,000kg",
    description: "For larger operations requiring high-capacity lifting. This course covers the B2 category counterbalance trucks, focusing on the stability challenges of handling heavier loads up to 13,000kg.",
    image: "https://picsum.photos/seed/heavyforklift/800/500",
    prerequisites: "None - Suitable for complete beginners.",
    outcomes: [
      "RTITB Accredited B2 certification",
      "Mastery of high-capacity lift trucks",
      "Advanced load center calculations",
      "Heavy-duty loading bay safety"
    ],
    modules: [
        "High-capacity hydraulics & physics",
        "Large machine maneuvering",
        "Dynamic load testing",
        "Industrial environment hazards",
        "Final competency evaluation"
    ]
  },
  "reach-novice": {
    title: "Reach Truck Novice D1",
    duration: "3-5 Days",
    category: "D1 Category",
    description: "The Reach Truck Novice course is essential for high-intensity warehouse operations. Reach trucks require specialized training due to their mast mechanism and height capabilities.",
    image: "https://picsum.photos/seed/reachtruck/800/500",
    prerequisites: "None - Suitable for complete beginners.",
    outcomes: [
      "RTITB Accredited Reach Truck cert",
      "Mastery of high-level stacking",
      "Expertise in narrow-aisle maneuvering",
      "Understanding move-mast mechanics"
    ],
    modules: [
        "Reach truck specialized controls",
        "High-level stack management",
        "Maneuvering in confined racking",
        "Safety principles for moving masts",
        "Final efficiency evaluation"
    ]
  },
  "experienced-operator": {
    title: "Experienced Operator",
    duration: "1-3 Days",
    category: "B1 / B2 / D1",
    description: "Designed for operators who have previous experience but lack formal certification or have an expired license (by over 6 months). This course validates existing skills and updates safety knowledge.",
    image: "https://picsum.photos/seed/experienced/800/500",
    prerequisites: "Previous operational experience required.",
    outcomes: [
      "Formal RTITB Accreditation for existing skills",
      "Correction of operational bad habits",
      "Updated HSE safety awareness",
      "Validated competence for employers"
    ],
    modules: [
        "Skills assessment and audit",
        "Refining stacking precision",
        "HSE L117 Regulation update",
        "Technical handling check-off",
        "Refresher practical test"
    ]
  },
  "refresher-course": {
    title: "Refresher Training",
    duration: "1 Day",
    category: "3-Year Renewal",
    description: "A fast-paced one-day program for currently certified operators nearing their 3-year expiry. Ensures safety standards remain at the highest level.",
    image: "https://picsum.photos/seed/refresher/800/500",
    prerequisites: "Current valid certificate.",
    outcomes: [
      "Certification renewal for 3 years",
      "Updated load center knowledge",
      "Safety protocol synchronization",
      "Operational habit correction"
    ],
    modules: [
        "Pre-use inspection refresh",
        "Practical maneuvering audit",
        "Theoretical safety examination",
        "Load stability workshop",
        "Practical competency sign-off"
    ]
  },
  "conversion-training": {
    title: "Conversion Training",
    duration: "1-2 Days",
    category: "Category Switch",
    description: "For operators who are already qualified on one type of forklift (e.g. Counterbalance) and wish to 'convert' their skills to another type (e.g. Reach Truck). This course significantly reduces training time by focusing only on the differences between machines.",
    image: "https://picsum.photos/seed/conversion/800/500",
    prerequisites: "Must hold a valid certificate for at least one other forklift category.",
    outcomes: [
      "Secondary machine type certification",
      "Understanding machine-specific safety protocols",
      "Advanced control mastery for new machine category",
      "Integrated safety awareness across machine types"
    ],
    modules: [
        "Comparison of controls and stability",
        "Machine-specific pre-use inspections",
        "Operating differences (steering/reaching)",
        "Stacking with new machine characteristics",
        "Conversion competency assessment"
    ]
  }
};

export default function CourseDetail() {
  const { id } = useParams();
  const course = COURSE_DATA[id || ""] || COURSE_DATA["counterbalance-novice"];

  return (
    <div className="bg-brand-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link to="/courses" className="inline-flex items-center gap-2 text-brand-yellow hover:text-white transition-colors mb-12 uppercase font-bold text-xs tracking-widest">
            <ChevronLeft className="w-4 h-4" /> Back to Courses
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <div className="flex flex-col gap-4 mb-8">
                <span className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase">{course.category}</span>
                <h1 className="text-5xl md:text-7xl font-black font-display uppercase leading-[0.9]">{course.title}</h1>
            </div>

            <div className="aspect-video w-full rounded-sm overflow-hidden mb-12 border border-white/10 grayscale hover:grayscale-0 transition-all duration-700">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-3xl">
                {course.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
                   <h3 className="text-xl font-bold uppercase mb-6 tracking-tight flex items-center gap-2">
                        <Info className="w-5 h-5 text-brand-yellow" /> Prerequisites
                    </h3>
                    <p className="text-gray-300 text-sm italic mb-8">
                        {course.prerequisites}
                    </p>

                    <h3 className="text-xl font-bold uppercase mb-6 tracking-tight flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-brand-yellow" /> Learning Outcomes
                    </h3>
                    <ul className="space-y-4">
                        {course.outcomes.map((item: string, i: number) => (
                            <li key={i} className="flex gap-3 text-sm text-gray-300 font-medium">
                                <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full mt-1.5 flex-shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                   <h3 className="text-xl font-bold uppercase mb-6 tracking-tight flex items-center gap-2">
                        <Shield className="w-5 h-5 text-brand-yellow" /> Training Modules
                    </h3>
                    <ul className="space-y-4">
                        {course.modules.map((item: string, i: number) => (
                            <li key={i} className="flex gap-3 text-sm text-gray-400">
                                <span className="text-brand-yellow font-bold">{i+1}.</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-brand-gray p-8 rounded-sm sticky top-32 border border-white/5">
                <div className="text-3xl font-black mb-2 text-brand-yellow uppercase italic">Request Quote</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">No upfront payment required</div>

                <div className="space-y-6 mb-10">
                    <div className="flex items-center justify-between py-4 border-y border-white/5">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-brand-yellow" /> Approx Duration
                        </span>
                        <span className="text-sm font-black uppercase text-white">{course.duration}</span>
                    </div>
                </div>

                <Link to="/contact" className="w-full bg-brand-yellow text-brand-black flex items-center justify-center gap-3 py-5 font-black uppercase text-sm tracking-widest hover:bg-white transition-all group">
                    Get a Free Quote <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="mt-8 flex items-center gap-3 justify-center text-center">
                    <Shield className="w-5 h-5 text-gray-500" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-relaxed">
                        RTITB Accredited On-Site Training Specialist
                    </span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
