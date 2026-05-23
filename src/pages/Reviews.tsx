import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, MessageSquare, CheckCircle, ChevronDown, Sparkles, Filter, Calendar } from "lucide-react";

interface Review {
  id: string;
  name: string;
  company?: string;
  course: string;
  rating: number;
  text: string;
  date: string;
}

const DEFAULT_REVIEWS: Review[] = [
  {
    id: "rev-1",
    name: "Andrew Millard",
    company: "Apex Warehousing Ltd",
    course: "Counterbalance Novice B1",
    rating: 5,
    text: "Superb training conducted on-site. The instructor adjusted the training pace dynamically to suit candidates' learning speeds. Highly recommend the B1 Novice course.",
    date: "2026-04-12"
  },
  {
    id: "rev-2",
    name: "Sorcha Vance",
    company: "West Midlands Cold Storage",
    course: "Reach Truck Novice D1",
    rating: 5,
    text: "Precision's trainer brought amazing professionalism directly to our depot. The guys had some worries about height mechanics, but by Day 4 they were confident and fully licensed. 5 Stars!",
    date: "2026-04-29"
  },
  {
    id: "rev-3",
    name: "David Briggs",
    course: "Experienced Operator (B1)",
    rating: 5,
    text: "My license had expired over a year ago. Handled the 2-day experienced operator assessment. No-nonsense, safety-compliant, and focused entirely on practical on-site precision.",
    date: "2026-05-01"
  },
  {
    id: "rev-4",
    name: "Marcus K.",
    company: "Logistics First Ltd",
    course: "Counterbalance Novice B2",
    rating: 5,
    text: "Having B2 training on our heavy-capacity trucks was absolutely crucial. Great safety explanations regarding stability, load centers, and double-stacking safely.",
    date: "2026-05-08"
  },
  {
    id: "rev-5",
    name: "Rachel Collins",
    course: "Refresher Training",
    rating: 5,
    text: "A quick, efficient refresher. Perfect for cutting out bad operational habits. Excellent safety focus.",
    date: "2026-05-15"
  }
];

export default function Reviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [filter, setFilter] = useState("All");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    course: "Counterbalance Novice B1",
    rating: 5,
    text: ""
  });
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // Load persisted reviews
    const saved = localStorage.getItem("precision-forklift-reviews");
    if (saved) {
      try {
        setReviews(JSON.parse(saved));
      } catch (e) {
        setReviews(DEFAULT_REVIEWS);
      }
    } else {
      setReviews(DEFAULT_REVIEWS);
    }
  }, []);

  const saveReviews = (newList: Review[]) => {
    setReviews(newList);
    localStorage.setItem("precision-forklift-reviews", JSON.stringify(newList));
  };

  const handleRatingClick = (r: number) => {
    setFormData({ ...formData, rating: r });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.text) {
      alert("Please fill in your name and review message.");
      return;
    }

    const newReview: Review = {
      id: "rev-" + Date.now(),
      name: formData.name,
      company: formData.company || undefined,
      course: formData.course,
      rating: formData.rating,
      text: formData.text,
      date: new Date().toISOString().split("T")[0]
    };

    const updated = [newReview, ...reviews];
    saveReviews(updated);
    setSuccess(true);
    
    // Clear form except default selections
    setFormData({
      name: "",
      company: "",
      course: "Counterbalance Novice B1",
      rating: 5,
      text: ""
    });

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
  };

  // Reset to default
  const handleResetReviews = () => {
    if (window.confirm("Do you want to restore default reviews?")) {
      saveReviews(DEFAULT_REVIEWS);
    }
  };

  const roundedAverage = (reviews.reduce((acc, raw) => acc + raw.rating, 0) / (reviews.length || 1)).toFixed(1);

  const starCounts = [
    { stars: 5, count: reviews.filter(r => r.rating === 5).length },
    { stars: 4, count: reviews.filter(r => r.rating === 4).length },
    { stars: 3, count: reviews.filter(r => r.rating === 3).length },
    { stars: 2, count: reviews.filter(r => r.rating === 2).length },
    { stars: 1, count: reviews.filter(r => r.rating === 1).length },
  ];

  const filteredReviews = filter === "All" 
    ? reviews 
    : reviews.filter(r => r.course.toLowerCase().includes(filter.toLowerCase()));

  const distinctCourses = [
    "All",
    "B1",
    "B2",
    "D1",
    "Refresher",
    "Experienced"
  ];

  return (
    <div className="pt-24 min-h-screen bg-brand-black text-white">
      {/* Header */}
      <section className="py-16 bg-brand-gray border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase block mb-3">Trainee & Manager Feedback</span>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight mb-4">
            Customer <span className="text-brand-yellow italic underline">Reviews</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed uppercase tracking-wider font-semibold">
            See honest feedback or submit your experience directly below.
          </p>
        </div>
      </section>

      {/* Stats Summary Panel */}
      <section className="py-12 border-b border-white/5 bg-brand-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            
            {/* Visual Big Star Summary */}
            <div className="bg-brand-gray p-6 rounded-sm border border-white/5 text-center">
              <span className="text-brand-yellow text-xs font-bold uppercase tracking-wider block mb-2">Overall Satisfaction Rating</span>
              <div className="text-6xl font-black font-display text-white mb-2">{roundedAverage}</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} className="w-5 h-5 fill-brand-yellow text-brand-yellow" />
                ))}
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                Based on {reviews.length} total evaluations
              </span>
            </div>

            {/* Progress breakdown */}
            <div className="bg-brand-gray p-6 rounded-sm border border-white/5 space-y-2">
              {starCounts.map((row) => {
                const percentage = reviews.length > 0 ? (row.count / reviews.length) * 100 : 0;
                return (
                  <div key={row.stars} className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-gray-400 min-w-[35px]">{row.stars} Stars</span>
                    <div className="flex-grow h-2 bg-brand-black/50 overflow-hidden rounded-full">
                      <div 
                        className="bg-brand-yellow h-full rounded-full transition-all duration-500" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-400 min-w-[20px] text-right">{row.count}</span>
                  </div>
                );
              })}
            </div>

            {/* Direct Value Statement */}
            <div className="p-6">
              <h3 className="text-lg font-black uppercase mb-3 flex items-center gap-2 text-brand-yellow">
                <Sparkles className="w-5 h-5 text-brand-yellow shrink-0 animate-pulse" /> Verified RTITB Quality
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                We operate with complete on-site clarity. Training is conducted on your specific depot equipment, avoiding off-site test delays and ensuring operators learn safe habits exactly where they work.
              </p>
              <button 
                onClick={handleResetReviews}
                className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-brand-yellow transition-all"
              >
                Reset Default Reviews list
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Interactive Main Reviews Board */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            
            {/* Reviews list with Category filter */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/5 pb-6">
                <h2 className="text-2xl font-black font-display uppercase tracking-tight flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-brand-yellow" /> Trainee <span className="text-brand-yellow">Opinions</span> ({filteredReviews.length})
                </h2>

                {/* Filters */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 max-w-full">
                  <span className="text-[10px] font-black uppercase text-gray-400 mr-2 flex items-center gap-1 shrink-0">
                    <Filter className="w-3" /> Filter by type:
                  </span>
                  {distinctCourses.map((c) => (
                    <button
                      key={c}
                      onClick={() => setFilter(c)}
                      className={`px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-wider transition-all border ${
                        filter === c 
                          ? "bg-brand-yellow text-brand-black border-brand-yellow" 
                          : "bg-white/5 text-gray-400 border-white/10 hover:border-brand-yellow/30"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Reviews Grid */}
              <div className="grid grid-cols-1 gap-6">
                <AnimatePresence mode="popLayout">
                  {filteredReviews.length === 0 ? (
                    <motion.div 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-12 bg-white/5 border border-white/5 rounded-sm"
                    >
                      <p className="text-sm text-gray-400 italic">No reviews match your selected filter.</p>
                    </motion.div>
                  ) : (
                    filteredReviews.map((rev) => (
                      <motion.div
                        key={rev.id}
                        layout
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="bg-brand-gray p-6 rounded-sm border border-white/5 hover:border-brand-yellow/35 transition-all relative group"
                      >
                        <div className="flex items-start justify-between gap-4 mb-4">
                          <div>
                            <h4 className="text-lg font-bold text-white leading-tight uppercase tracking-tight">{rev.name}</h4>
                            {rev.company && (
                              <span className="text-[10px] text-brand-yellow font-semibold uppercase tracking-wider">
                                {rev.company}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-gray-500 font-mono font-bold uppercase tracking-widest flex items-center gap-1 bg-brand-black/30 px-2 py-1 rounded">
                            <Calendar className="w-3" /> {rev.date}
                          </span>
                        </div>

                        {/* Stars */}
                        <div className="flex gap-1 mb-4">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < rev.rating ? "fill-brand-yellow text-brand-yellow" : "text-gray-700"
                              }`} 
                            />
                          ))}
                        </div>

                        <p className="text-sm text-gray-300 leading-relaxed mb-6 italic">
                          "{rev.text}"
                        </p>

                        <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-between">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                            Course: <strong className="text-brand-yellow">{rev.course}</strong>
                          </span>
                          <span className="text-[9px] text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded uppercase font-black tracking-widest flex items-center gap-1">
                            <CheckCircle className="w-3 h-3" /> Verified Candidate
                          </span>
                        </div>
                      </motion.div>
                    ))
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Submission Form Block */}
            <div className="bg-brand-gray p-8 rounded-sm border border-white/5 sticky top-32">
              <div className="mb-6">
                <span className="text-brand-yellow text-[10px] font-black uppercase tracking-widest block mb-1">Pass on the feedback</span>
                <h3 className="text-xl font-bold uppercase tracking-tight mb-2">
                  Submit Your <span className="text-brand-yellow">Review</span>
                </h3>
                <p className="text-xs text-gray-400">
                  Operated on our training recently? Share your thoughts to help other warehouse managers find RTITB quality.
                </p>
              </div>

              {success && (
                <div className="bg-brand-yellow/10 border border-brand-yellow/40 p-4 rounded-sm mb-6 flex gap-3 text-brand-yellow text-xs items-center">
                  <CheckCircle className="w-5 h-5 shrink-0" />
                  <div>
                    <span className="font-bold uppercase tracking-widest block">Review Logged!</span>
                    Your review is now stored and showcased live on the directory below. Thank you!
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-400 block">Your Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-brand-black border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm font-medium" 
                    placeholder="Steve Jenkins" 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-400 block">Company / Depot Name</label>
                  <input 
                    type="text" 
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-brand-black border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm" 
                    placeholder="Jenkins Logistics (Optional)" 
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-400 block">Course Completed</label>
                  <select
                    value={formData.course}
                    onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                    className="w-full bg-brand-black border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm text-gray-300"
                  >
                    <option>Counterbalance Novice B1</option>
                    <option>Counterbalance Novice B2</option>
                    <option>Reach Truck Novice D1</option>
                    <option>Experienced Operator (B1/B2/D1)</option>
                    <option>Refresher Training (B1/B2/D1)</option>
                    <option>Conversion Training</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase text-gray-400 block">Rating Stars *</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((stars) => {
                      const isActive = stars <= (hoverRating ?? formData.rating);
                      return (
                        <button
                          key={stars}
                          type="button"
                          onMouseEnter={() => setHoverRating(stars)}
                          onMouseLeave={() => setHoverRating(null)}
                          onClick={() => handleRatingClick(stars)}
                          className="focus:outline-none transition-transform hover:scale-110"
                        >
                          <Star 
                            className={`w-6 h-6 ${
                              isActive ? "fill-brand-yellow text-brand-yellow" : "text-gray-700"
                            }`} 
                          />
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold uppercase text-gray-400 block">Review Details *</label>
                  <textarea 
                    required
                    rows={4} 
                    value={formData.text}
                    onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    className="w-full bg-brand-black border border-white/10 rounded-sm py-2 px-4 focus:outline-none focus:border-brand-yellow text-sm resize-none" 
                    placeholder="Tell us about the instructor conduct, practical setups, and overall safety efficiency..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-brand-yellow text-brand-black font-black py-4 rounded-sm hover:bg-white transition-all uppercase tracking-widest text-xs flex items-center justify-center gap-2"
                >
                  PUBLISH REVIEW NOW
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
