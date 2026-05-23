import { Courses as CoursesSection } from "../components/SiteSections";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Clock, Award, Hammer } from "lucide-react";

export default function Courses() {
  const allCourses = [
    {
      id: "counterbalance-novice-b1",
      title: "Counterbalance Novice B1",
      category: "Up to 5,000kg",
      duration: "3-5 Days",
      icon: Award
    },
    {
      id: "counterbalance-novice-b2",
      title: "Counterbalance Novice B2",
      category: "Up to 13,000kg",
      duration: "3-5 Days",
      icon: Award
    },
    {
      id: "reach-novice",
      title: "Reach Truck Novice D1",
      category: "Reach Truck",
      duration: "3-5 Days",
      icon: Award
    },
    {
      id: "experienced-operator",
      title: "Experienced Operator",
      category: "B1 / B2 / D1",
      duration: "1-3 Days",
      icon: Award
    },
    {
      id: "refresher-course",
      title: "Refresher Training",
      category: "3-Year Renewal",
      duration: "1 Day",
      icon: Clock
    },
    {
      id: "conversion-training",
      title: "Conversion Training",
      category: "Category Switch",
      duration: "1-2 Days",
      icon: Hammer
    }
  ];

  return (
    <div className="bg-brand-black min-h-screen">
      {/* Header */}
      <section className="py-20 bg-brand-gray border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black font-display uppercase mb-4 tracking-tighter">Training <span className="text-brand-yellow italic underline">Programs</span></h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed uppercase tracking-widest font-bold">
            RTITB Accredited training on your premises.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allCourses.map((course, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
                className="group relative bg-brand-gray border border-white/5 p-8 rounded-sm hover:border-brand-yellow/50 transition-all flex flex-col"
              >
                <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 bg-brand-yellow/10 rounded flex items-center justify-center text-brand-yellow">
                        <course.icon className="w-6 h-6" />
                    </div>
                </div>
                
                <div className="flex flex-col flex-grow">
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">{course.category}</span>
                    <h3 className="text-2xl font-bold uppercase mb-4 leading-tight">{course.title}</h3>
                    
                    <div className="flex items-center gap-4 mt-auto py-6 border-y border-white/5 mb-8">
                         <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-brand-yellow" />
                            <span className="text-xs font-bold uppercase tracking-wider">{course.duration}</span>
                         </div>
                    </div>
                </div>

                <Link 
                    to={`/courses/${course.id}`}
                    className="flex items-center justify-between group/link bg-white/5 hover:bg-white text-white hover:text-brand-black px-6 py-4 transition-all uppercase font-black text-xs tracking-widest"
                >
                    Course Details <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CoursesSection />
    </div>
  );
}
