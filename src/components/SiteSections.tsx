import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Phone, Mail, MapPin, CheckCircle2, Star, Shield, Users, Trophy, Menu, X } from "lucide-react";
import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/90 backdrop-blur-md border-b border-white/5" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-brand-yellow rounded-lg flex items-center justify-center p-1 group-hover:scale-105 transition-transform">
              <img 
                src="https://picsum.photos/seed/forklift-logo/100/100" 
                alt="Precision Logo" 
                className="w-full h-full object-contain brightness-0"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display tracking-tight leading-none uppercase">Precision</span>
              <span className="text-[10px] text-brand-yellow font-bold tracking-[0.2em] uppercase">Forklift Training</span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path} 
                className={`${isActive(link.path) ? 'text-brand-yellow' : 'text-white'} hover:text-brand-yellow transition-colors relative`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div layoutId="nav-line" className="absolute -bottom-1 left-0 right-0 h-[1px] bg-brand-yellow" />
                )}
              </Link>
            ))}
            <Link to="/booking" className="bg-brand-yellow text-brand-black px-6 py-2.5 rounded-sm font-bold hover:bg-white transition-all">
              BOOK NOW
            </Link>
          </div>
          
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-gray border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 py-8 flex flex-col gap-6 text-sm font-bold uppercase tracking-[0.2em]">
              {navLinks.map((link) => (
                <Link 
                  key={link.path} 
                  to={link.path} 
                  onClick={() => setIsOpen(false)} 
                  className={`${isActive(link.path) ? 'text-brand-yellow' : 'text-white'} hover:text-brand-yellow transition-colors font-black`}
                >
                  {link.name}
                </Link>
              ))}
              <Link to="/booking" onClick={() => setIsOpen(false)} className="bg-brand-yellow text-brand-black px-6 py-4 rounded-sm font-bold w-full text-center">
                BOOK NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/warehouse/1920/1080" 
          alt="Warehouse" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-brand-black/60 to-transparent"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-2 mb-6">
            <div className="h-[1px] w-12 bg-brand-yellow"></div>
            <span className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase">Professional Certification</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black font-display leading-[0.9] uppercase mb-6">
            Trained Today.<br />
            <span className="text-brand-yellow">Safer Tomorrow.</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
            Professional forklift training that builds skills, confidence, and safety. Get certified with the UK's leading training provider.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/courses" className="bg-brand-yellow text-brand-black px-8 py-4 rounded-sm font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2 group">
              VIEW COURSES <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="border-2 border-white/20 hover:border-brand-yellow px-8 py-4 rounded-sm font-bold text-lg text-white transition-all text-center">
              LEARN MORE
            </Link>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "CERTIFIED TRAINING", icon: Trophy },
              { label: "EXPERIENCED INSTRUCTORS", icon: Users },
              { label: "HANDS-ON LEARNING", icon: Shield },
              { label: "SAFETY FOCUSED", icon: Star }
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <item.icon className="w-6 h-6 text-brand-yellow" />
                <span className="text-[10px] font-bold tracking-widest uppercase opacity-80">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:block">
         <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-full w-full flex items-center justify-center"
         >
            <img 
              src="https://picsum.photos/seed/forklift/800/1200" 
              alt="Yellow Forklift" 
              className="h-4/5 object-contain"
              referrerPolicy="no-referrer"
            />
         </motion.div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-gray relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden border-2 border-brand-yellow/30">
              <img 
                src="https://picsum.photos/seed/training/800/600" 
                alt="Training Session" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-yellow text-brand-black p-8 rounded-lg shadow-2xl hidden md:block">
              <div className="text-4xl font-black mb-1">15+</div>
              <div className="text-xs font-bold leading-tight uppercase tracking-wider">Years of Training<br/>Excellence</div>
            </div>
          </div>
          
          <div>
            <span className="text-brand-yellow text-sm font-bold tracking-widest uppercase block mb-4">About Us</span>
            <h2 className="text-4xl md:text-5xl font-black font-display uppercase mb-8 leading-tight">
              Leading the Way in <span className="text-brand-yellow">Industrial Safety.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At Precision Forklift Training, we are committed to providing the highest standard of forklift operator training. Our mission is to ensure that every student who passes through our doors becomes a safe, efficient, and confident operator.
            </p>
            
            <div className="space-y-4">
              {[
                "Certified Training Programs",
                "Fully Accredited Instructors",
                "On-Site & Off-Site Training",
                "Competitive Pricing & Flexible Scheduling"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-yellow/20 flex items-center justify-center text-brand-yellow">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span className="text-sm font-medium text-gray-200">{item}</span>
                </div>
              ))}
            </div>
            
            <button className="mt-12 bg-white text-brand-black px-8 py-3 rounded-sm font-bold hover:bg-brand-yellow transition-all uppercase">
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Courses = () => {
  const courses = [
    {
      title: "Novice Operator",
      duration: "3-5 Days",
      description: "Complete training for those with little to no experience in operating a forklift.",
      features: ["Theory & Safety", "Pre-use Inspection", "Full Controls Training", "Final Assessment"]
    },
    {
      title: "Refresher Course",
      duration: "1 Day",
      description: "For experienced operators who need to renew their certification or improve skills.",
      features: ["Safety Updates", "Skills Review", "Control Check", "Re-certification"]
    },
    {
      title: "Conversion Training",
      duration: "1-2 Days",
      description: "For operators looking to switch between different types of forklift machines.",
      features: ["Machine Specifics", "Control Differences", "Load Management", "Safety Protocol"]
    }
  ];

  return (
    <section id="courses" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-yellow text-sm font-bold tracking-widest uppercase block mb-4">Training Programs</span>
          <h2 className="text-4xl md:text-5xl font-black font-display uppercase leading-tight">
            Our Certified <span className="text-brand-yellow">Courses</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-brand-gray p-8 rounded-sm border border-white/5 hover:border-brand-yellow/50 transition-all flex flex-col"
            >
              <div className="mb-6 flex justify-between items-start">
                <h3 className="text-2xl font-bold font-display uppercase max-w-[150px]">{course.title}</h3>
                <span className="text-[10px] font-bold text-brand-yellow border border-brand-yellow/30 px-2 py-1 rounded tracking-tighter uppercase">{course.duration}</span>
              </div>
              <p className="text-gray-400 text-sm mb-8 flex-grow leading-relaxed">
                {course.description}
              </p>
              <ul className="space-y-3 mb-10">
                {course.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2 text-xs font-semibold text-gray-300 opacity-80 uppercase tracking-wide">
                    <div className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />
                    {feat}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-white/5 hover:bg-brand-yellow hover:text-brand-black text-white font-bold py-3 transition-all uppercase tracking-widest text-xs">
                Book Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const FAQ = () => {
  const faqs = [
    {
      q: "What certifications will I receive?",
      a: "Upon successful completion, you will receive a nationally recognized certification valid for 3 years, documented on a physical card."
    },
    {
      q: "Do I need a driver's license?",
      a: "No, a standard driver's license is not required to operate a forklift in most private industrial settings, but basic hand-eye coordination is essential."
    },
    {
      q: "Can you provide training at my company?",
      a: "Yes, we offer on-site training for businesses. Our instructors will come to your location and train your staff on your specific machinery."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-brand-gray">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-brand-yellow text-sm font-bold tracking-widest uppercase block mb-4">Questions</span>
          <h2 className="text-4xl font-black font-display uppercase tracking-tight">Frequently Asked</h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-white/10 pb-6">
              <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-4">
                <span className="text-brand-yellow text-xs font-black">0{i+1}</span>
                {faq.q}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed pl-8">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-gray p-8 md:p-16 rounded-lg relative overflow-hidden">
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
             <img src="https://picsum.photos/seed/forklift-silhouette/800/800" className="w-[400px] h-auto" referrerPolicy="no-referrer" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl font-black font-display uppercase mb-6 leading-tight">
                Ready to <span className="text-brand-yellow">Start?</span>
              </h2>
              <p className="text-gray-400 mb-10">
                Contact us today for a free quote or to book your training session. We reply to all inquiries within 24 hours.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-yellow">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1">Call Us</div>
                    <div className="text-xl font-bold">+44 (0) 123 456 7890</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-yellow">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1">Email Us</div>
                    <div className="text-xl font-bold">info@precisionforklift.co.uk</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center text-brand-yellow">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-gray-500 uppercase mb-1">Visit Us</div>
                    <div className="text-xl font-bold">Unit 14, Industrial Estate, UK</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-black p-8 rounded-lg shadow-xl">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-gray-500">Name</label>
                    <input type="text" className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm" placeholder="John Doe" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-gray-500">Email</label>
                    <input type="email" className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-gray-500">Course Type</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm text-gray-400">
                      <option>Novice Operator</option>
                      <option>Refresher</option>
                      <option>Conversion</option>
                    </select>
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-gray-500">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm resize-none" placeholder="Tell us about your requirements..."></textarea>
                </div>
                <button className="w-full bg-brand-yellow text-brand-black font-black py-4 rounded-sm hover:bg-white transition-all uppercase tracking-widest">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-black border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <Link to="/" className="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer text-white">
            <div className="w-8 h-8 bg-brand-yellow rounded flex items-center justify-center p-1">
              <img 
                src="https://picsum.photos/seed/forklift-logo/100/100" 
                alt="Precision Logo" 
                className="w-full h-full object-contain brightness-0"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold font-display tracking-tight leading-none uppercase">Precision</span>
              <span className="text-[8px] text-brand-yellow font-bold tracking-[0.2em] uppercase">Forklift Training</span>
            </div>
          </Link>
          
          <div className="flex gap-8 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
            <Link to="/about" className="hover:text-white">About Us</Link>
            <Link to="/courses" className="hover:text-white">Courses</Link>
            <Link to="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
        
        <div className="text-center text-[10px] font-medium text-gray-600 uppercase tracking-tighter">
          © {new Date().getFullYear()} Precision Forklift Training Ltd. ALL RIGHTS RESERVED. REGISTERED IN ENGLAND & WALES.
        </div>
      </div>
    </footer>
  );
};
