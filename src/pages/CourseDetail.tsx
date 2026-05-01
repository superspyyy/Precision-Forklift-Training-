import { useParams, Link } from "react-router-dom";
import { ChevronLeft, CheckCircle2, Clock, Calendar, Shield, CreditCard, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

const COURSE_DATA: Record<string, any> = {
  "counterbalance-novice": {
    title: "Counterbalance (Novice)",
    price: "£495",
    duration: "5 Days",
    category: "B1 Category",
    description: "Our comprehensive novice counterbalance forklift training course is designed for individuals with little or no experience in operating a forklift. This course covers everything from the basics of machine operation to advanced safety protocols.",
    outcomes: [
      "Industry-recognized certificate and operator card",
      "Full understanding of pre-use inspections",
      "Proficient handling of various load types",
      "Knowledge of latest HSE health and safety regulations"
    ],
    modules: [
        "Introduction to machine & controls",
        "Elementary driving and steering",
        "Stacking & de-stacking at various heights",
        "Daily maintenance and safety checks",
        "Final practical and theoretical test"
    ]
  },
  // Add other courses as needed
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
                <h1 className="text-5xl md:text-7xl font-black font-display uppercase leading-none">{course.title}</h1>
            </div>

            <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-3xl">
                {course.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div>
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
                <div className="text-4xl font-black mb-2 text-brand-yellow">{course.price}</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-8">Including Assessment Fees</div>

                <div className="space-y-6 mb-10">
                    <div className="flex items-center justify-between py-4 border-y border-white/5">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                            <Clock className="w-4 h-4 text-brand-yellow" /> Duration
                        </span>
                        <span className="text-sm font-black uppercase text-white">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between py-4 border-b border-white/5">
                        <span className="text-xs font-bold uppercase tracking-widest text-gray-400 flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-brand-yellow" /> Schedule
                        </span>
                        <span className="text-sm font-black uppercase text-white">Mon - Fri</span>
                    </div>
                </div>

                <Link to="/booking" className="w-full bg-brand-yellow text-brand-black flex items-center justify-center gap-3 py-5 font-black uppercase text-sm tracking-widest hover:bg-white transition-all group">
                    Book This Course <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="mt-8 flex items-center gap-3 justify-center">
                    <CreditCard className="w-5 h-5 text-gray-500" />
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Safe & Secure Payment via Stripe</span>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
