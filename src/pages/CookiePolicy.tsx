import { useState, useEffect } from "react";
import { Info, Check, ShieldAlert, Sparkles, Cookie } from "lucide-react";

export default function CookiePolicy() {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false
  });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("precision-cookie-consent");
    if (consent) {
      try {
        setPreferences(JSON.parse(consent));
      } catch (e) {
        // ignore
      }
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("precision-cookie-consent", JSON.stringify(preferences));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="pt-24 min-h-screen bg-brand-black text-white">
      <section className="py-16 bg-brand-gray border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fadeIn">
          <span className="text-brand-yellow text-sm font-bold tracking-[0.3em] uppercase block mb-3">Transparency Policy</span>
          <h1 className="text-4xl md:text-6xl font-black font-display uppercase tracking-tight mb-4">
            Cookie <span className="text-brand-yellow italic underline">Policy</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-xs md:text-sm leading-relaxed uppercase tracking-widest font-bold">
            UK Privacy and Electronic Communications Regulations (PECR) compliant.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-gray p-8 md:p-12 rounded-sm border border-white/5 space-y-8 leading-relaxed text-sm text-gray-300">
            
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Cookie className="w-6 h-6 text-brand-yellow shrink-0" />
              <h2 className="text-lg font-black uppercase tracking-wider text-white">How we use cookies</h2>
            </div>
            
            <p>
              This website uses standard HTTP cookies to streamline page rendering and verify form interactions. Below, we provide complete, transparent classification of cookies we load and let you configure your preference settings.
            </p>

            {/* Interactive Cookie Toggles */}
            <div className="bg-brand-black p-6 rounded-sm border border-white/10 space-y-6">
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h3 className="text-sm font-black uppercase tracking-wider text-brand-yellow">
                  Consent Preference Dashboard
                </h3>
                {saved && (
                  <span className="text-[10px] bg-emerald-400/10 text-emerald-400 px-2 py-1 rounded uppercase font-bold animate-pulse">
                    Preferences Saved!
                  </span>
                )}
              </div>

              <div className="space-y-4">
                {/* Essential */}
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-md">
                    <span className="text-xs font-bold text-white block uppercase">1. Strict Essential Cookies</span>
                    <p className="text-[11px] text-gray-400 leading-normal">
                      Required for navigation, security controls, and persisting essential website form entries. Cannot be disabled.
                    </p>
                  </div>
                  <div className="pt-1">
                    <span className="text-[10px] bg-white/10 text-gray-400 px-2.5 py-1 rounded uppercase font-bold font-mono">
                      LOADED (ALWAYS OUT)
                    </span>
                  </div>
                </div>

                {/* Analytics */}
                <div className="flex items-start justify-between gap-4 border-t border-white/5 pt-4">
                  <div className="max-w-md">
                    <span className="text-xs font-bold text-white block uppercase">2. Analytics & Reporting</span>
                    <p className="text-[11px] text-gray-400 leading-normal">
                      Provides statistics to help us analyze site traffic and identify which course details are most useful to warehouse directories.
                    </p>
                  </div>
                  <div className="pt-1">
                    <button
                      onClick={() => setPreferences({ ...preferences, analytics: !preferences.analytics })}
                      className={`px-3 py-1 rounded-sm text-[10px] font-bold uppercase transition-colors ${
                        preferences.analytics 
                          ? "bg-brand-yellow text-brand-black" 
                          : "bg-white/5 text-gray-400 border border-white/10"
                      }`}
                    >
                      {preferences.analytics ? "ACTIVE" : "DISABLED"}
                    </button>
                  </div>
                </div>

                {/* Marketing */}
                <div className="flex items-start justify-between gap-4 border-t border-white/5 pt-4">
                  <div className="max-w-md">
                    <span className="text-xs font-bold text-white block uppercase">3. Promotion & Marketing</span>
                    <p className="text-[11px] text-gray-400 leading-normal">
                      Facilitates displaying our accredited reviews across external directories or mapping nodes.
                    </p>
                  </div>
                  <div className="pt-1">
                    <button
                      onClick={() => setPreferences({ ...preferences, marketing: !preferences.marketing })}
                      className={`px-3 py-1 rounded-sm text-[10px] font-bold uppercase transition-colors ${
                        preferences.marketing 
                          ? "bg-brand-yellow text-brand-black" 
                          : "bg-white/5 text-gray-400 border border-white/10"
                      }`}
                    >
                      {preferences.marketing ? "ACTIVE" : "DISABLED"}
                    </button>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/5 pt-4 text-right">
                <button
                  onClick={handleSave}
                  className="bg-brand-yellow text-brand-black font-black text-[11px] px-5 py-2.5 rounded-sm hover:bg-white transition-colors"
                >
                  SAVE COOKIE SETTINGS
                </button>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-md font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <Info className="w-4 h-4 text-brand-yellow" /> Managing Cookies on Your Browser
              </h3>
              <p>
                In addition to our Dashboard, you possess full liberty to restrict cookie records via your standard web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari). Simply enter your browser's "Privacy and Security" properties to block and wipe local memory. Direct inquiries can reach our tech office at <strong className="text-white">contact@precisionforklift.co.uk</strong>.
              </p>
            </div>

            <div className="pt-8 border-t border-t-white/5 text-[10px] text-gray-500 uppercase font-mono flex justify-between">
              <span>Last Revised: May 2026</span>
              <span>Doc ID: PFT-COOKIE-01</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
