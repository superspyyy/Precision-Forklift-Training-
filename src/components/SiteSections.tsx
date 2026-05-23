import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, Phone, Mail, MapPin, CheckCircle2, Star, Shield, Users, Trophy, Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import { useState } from "react";

import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Reviews", path: "/reviews" },
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
            <Link to="/contact" className="bg-brand-yellow text-brand-black px-6 py-2.5 rounded-sm font-bold hover:bg-white transition-all uppercase tracking-wider text-xs">
              Get a Free Quote
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
              <Link to="/contact" onClick={() => setIsOpen(false)} className="bg-brand-yellow text-brand-black px-6 py-4 rounded-sm font-bold w-full text-center">
                GET A FREE QUOTE
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
            <span className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase">RTITB Accredited Training Provider</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black font-display leading-[0.9] uppercase mb-6">
            Trained Today.<br />
            <span className="text-brand-yellow">Safer Tomorrow.</span>
          </h1>
          
          <p className="text-lg text-gray-300 mb-10 max-w-lg leading-relaxed">
            Professional on-site forklift training conducted at your premises using your equipment. Build skills, confidence, and absolute safety.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/courses" className="bg-brand-yellow text-brand-black px-8 py-4 rounded-sm font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2 group italic">
              GET A FREE QUOTE <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
              Specialized <span className="text-brand-yellow">On-Site Training.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              At Precision Forklift Training, we specialize in delivering high-impact operator training directly at your facility. We utilize your machines to ensure your team is proficient with the exact equipment they use daily.
            </p>
            
            <div className="space-y-4">
              {[
                "RTITB Accredited Training",
                "Fully Licensed & Insured Instructors",
                "Training Conducted on Your Premises",
                "Your Equipment, Your Environment"
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
      description: "Full training for individuals with no previous experience on Counterbalance (B1/B2) or Reach trucks.",
      features: ["Safety & Theory", "Pre-use Inspection", "Full Controls Training", "Final Practical Exam"]
    },
    {
      title: "Experienced Operator",
      duration: "1-3 Days",
      description: "For existing operators who have experience but no formal certification or their license has expired.",
      features: ["Safety Refresher", "Competency Audit", "Machine Handling", "Updated Certification"]
    },
    {
      title: "Refresher Course",
      duration: "1 Day",
      description: "Mandatory 3-year renewal for certified operators to ensure safety standards are maintained.",
      features: ["Latest HSE Updates", "Correcting Bad Habits", "Control Mastery", "Renewal Cert"]
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
              <Link to="/contact" className="w-full bg-white/5 hover:bg-brand-yellow hover:text-brand-black text-white font-bold py-3 transition-all uppercase tracking-widest text-xs inline-block text-center">
                Get a Free Quote
              </Link>
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
                    <div className="text-xl font-bold">contact@precisionforklift.co.uk</div>
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
                    <label className="text-[10px] font-bold uppercase text-gray-500">Course of Interest</label>
                    <select className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm text-gray-400">
                      <option>Counterbalance B1 (Novice)</option>
                      <option>Counterbalance B1 (Experienced)</option>
                      <option>Counterbalance B1 (Refresher)</option>
                      <option>Counterbalance B2 (Novice)</option>
                      <option>Reach Truck D1 (Novice/Experienced)</option>
                      <option>Conversion (Category Switch)</option>
                    </select>
                </div>
                <div className="space-y-1">
                    <label className="text-[10px] font-bold uppercase text-gray-500">Message</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm resize-none" placeholder="Please specify machine types and number of operators..."></textarea>
                </div>
                <button className="w-full bg-brand-yellow text-brand-black font-black py-4 rounded-sm hover:bg-white transition-all uppercase tracking-widest">
                  Submit Quote Request
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 border-b border-white/5 pb-12">
          
          {/* Logo & Info column */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group text-white">
              <div className="w-8 h-8 bg-brand-yellow rounded flex items-center justify-center p-1 group-hover:scale-105 transition-all">
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
            <p className="text-[11px] text-gray-500 leading-relaxed uppercase">
              RTITB Accredited training specialists for B1, B2 and D1 categories. On-site training conducted on your premises.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-yellow text-gray-400 hover:text-brand-black rounded transition-all"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-yellow text-gray-400 hover:text-brand-black rounded transition-all"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="p-2 bg-white/5 hover:bg-brand-yellow text-gray-400 hover:text-brand-black rounded transition-all"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          {/* Training Programs link column */}
          <div>
            <h4 className="text-[11px] font-black uppercase text-brand-yellow tracking-widest mb-4">Core Directory</h4>
            <div className="flex flex-col gap-2 text-xs text-gray-400">
              <Link to="/" className="hover:text-white transition-colors">Home Page</Link>
              <Link to="/courses" className="hover:text-white transition-colors">Course Programs</Link>
              <Link to="/about" className="hover:text-white transition-colors">About RTITB Scope</Link>
              <Link to="/reviews" className="hover:text-white transition-colors">Trainee Reviews</Link>
              <Link to="/contact" className="hover:text-white transition-colors">Get A Quote</Link>
            </div>
          </div>

          {/* Compliance link column */}
          <div>
            <h4 className="text-[11px] font-black uppercase text-brand-yellow tracking-widest mb-4">UK Regulations</h4>
            <div className="flex flex-col gap-2 text-xs text-gray-400">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy (GDPR)</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookie preferences</Link>
              <Link to="/health-safety" className="hover:text-white transition-colors">Health & Safety Statement</Link>
              <Link to="/equality-diversity" className="hover:text-white transition-colors">Equality & Diversity policy</Link>
            </div>
          </div>

          {/* Support / Help column */}
          <div>
            <h4 className="text-[11px] font-black uppercase text-brand-yellow tracking-widest mb-4">Support & Quality</h4>
            <div className="flex flex-col gap-2 text-xs text-gray-400">
              <Link to="/complaints" className="hover:text-white transition-colors">Complaints Procedure</Link>
              <Link to="/email-diagnostics" className="hover:text-brand-yellow transition-colors font-bold flex items-center gap-1">
                <span>• Mail Diagnostics Panel</span>
              </Link>
              <div className="mt-2 text-[10px] text-gray-500 bg-white/5 p-2 rounded border border-white/5">
                <span className="block font-bold text-gray-400 uppercase mb-0.5">Email Delivery Support</span>
                Is email bouncing? Click the diagnostics link above to find correct SPF/MX fixes.
              </div>
            </div>
          </div>

        </div>
        
        <div className="text-center text-[10px] font-medium text-gray-600 uppercase tracking-tighter">
          © {new Date().getFullYear()} Precision Forklift Training Ltd. ALL RIGHTS RESERVED. REGISTERED IN ENGLAND & WALES. REGISTERED ACCREDITATION NUMBER: RTITB-PFT-49120.
        </div>
      </div>
    </footer>
  );
};
