import { useParams, Link } from "react-router-dom";
import { trips } from "@/src/data/trips";
import { 
  Clock, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  MessageCircle,
  ChevronDown,
  Info
} from "lucide-react";
import { Button } from "@/src/components/Button";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/src/lib/utils";

export const TripDetail = () => {
  const { slug } = useParams();
  const trip = trips.find((t) => t.slug === slug);
  const [activeDay, setActiveDay] = useState<number | null>(1);

  if (!trip) {
    return (
      <div className="pt-40 pb-20 text-center container mx-auto px-6">
        <h1 className="text-4xl mb-4">Trip Not Found</h1>
        <Link to="/trips">
          <Button>Back to all trips</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      {/* Hero Header */}
      <section className="relative h-[70vh] flex items-end pb-20 px-6">
        <div className="absolute inset-0 z-0">
          <img 
            src={trip.mainImage} 
            alt={trip.title} 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 cinematic-overlay" />
        </div>
        
        <div className="container mx-auto relative z-10">
          <Link to="/trips" className="inline-flex items-center gap-2 text-white/70 hover:text-white mb-8 group overflow-hidden">
            <ArrowLeft className="group-hover:-translate-x-1 transition-transform" /> Back to Explorations
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h1 className="text-white text-5xl md:text-8xl mb-4">{trip.title}</h1>
              <div className="flex flex-wrap gap-6 text-white font-display uppercase tracking-widest text-sm font-bold">
                <div className="flex items-center gap-2"><Clock size={16} className="text-primary" /> {trip.duration}</div>
                <div className="flex items-center gap-2"><Calendar size={16} className="text-primary" /> {trip.dates}</div>
                <div className="flex items-center gap-2"><MapPin size={16} className="text-primary" /> India</div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm shadow-2xl min-w-[300px]">
              <p className="text-[11px] font-bold uppercase tracking-widest text-earth-700 mb-1">Starting Price</p>
              <p className="text-4xl font-display font-bold text-earth-900 mb-6">{trip.price} <span className="text-sm font-normal text-earth-700">/ person</span></p>
              <a href={`https://wa.me/919876543210?text=Hi, I want to book the ${trip.title} trip.`} target="_blank" rel="noreferrer">
                <Button size="lg" className="w-full gap-2 rounded-full">
                  <MessageCircle size={20} /> Book via WhatsApp
                </Button>
              </a>
              <p className="text-center text-[10px] uppercase font-bold text-earth-700 mt-4 tracking-widest">Instant availability check</p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-20">
        <div className="lg:col-span-2">
          {/* Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl mb-8 border-b-2 border-primary/20 pb-4 inline-block">Trip <span className="text-primary">Highlights</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {trip.highlights.map((h, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-earth-700/5 rounded-sm">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                    <CheckCircle2 size={18} />
                  </div>
                  <span className="font-bold text-earth-800 uppercase text-xs tracking-wider">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Itinerary */}
          <div className="mb-16">
             <h2 className="text-3xl mb-8 border-b-2 border-primary/20 pb-4 inline-block">The <span className="text-primary">Itinerary</span></h2>
             <div className="space-y-4">
                {trip.itinerary.map((day) => (
                  <div key={day.day} className="border border-earth-700/10 rounded-sm overflow-hidden bg-white">
                    <button 
                      onClick={() => setActiveDay(activeDay === day.day ? null : day.day)}
                      className="w-full flex items-center justify-between p-6 text-left hover:bg-earth-100/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-earth-900 text-white rounded-full flex flex-col items-center justify-center font-display leading-none shrink-0">
                          <span className="text-[10px] font-bold uppercase scale-75">Day</span>
                          <span className="text-xl font-bold">{day.day}</span>
                        </div>
                        <h4 className="text-xl normal-case">{day.title}</h4>
                      </div>
                      <ChevronDown className={cn("transition-transform duration-300", activeDay === day.day && "rotate-180")} />
                    </button>
                    
                    <AnimatePresence>
                      {activeDay === day.day && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="px-6 pb-6 pt-2 ml-16"
                        >
                          <ul className="space-y-3">
                            {day.activities.map((act, i) => (
                              <li key={i} className="text-earth-700 flex items-start gap-2">
                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                                <span>{act}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
             </div>
          </div>

          {/* Inclusions / Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-10 bg-earth-900 rounded-sm text-white">
             <div>
               <h4 className="font-display font-bold uppercase text-primary mb-6 flex items-center gap-2">
                 <CheckCircle2 size={20} /> What's Included
               </h4>
               <ul className="space-y-4">
                 {trip.inclusions.map((item, i) => (
                    <li key={i} className="text-sm flex gap-3 text-white/70">
                      <span className="text-primary">•</span> {item}
                    </li>
                 ))}
               </ul>
             </div>
             <div>
                <h4 className="font-display font-bold uppercase text-red-500 mb-6 flex items-center gap-2">
                 <XCircle size={20} /> Exclusions
               </h4>
               <ul className="space-y-4">
                 {trip.exclusions.map((item, i) => (
                    <li key={i} className="text-sm flex gap-3 text-white/40">
                      <span className="text-red-500">•</span> {item}
                    </li>
                 ))}
               </ul>
             </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-primary/5 p-8 border border-primary/20 rounded-sm">
            <h4 className="font-display font-bold uppercase mb-4 flex items-center gap-2">
              <Info size={18} className="text-primary" /> Booking Policy
            </h4>
            <p className="text-sm text-earth-700 mb-4">Secure your spot by paying a token amount of <strong>₹5,000</strong>. Remaining balance can be paid 15 days before departure.</p>
            <ul className="text-xs space-y-2 text-earth-700/60">
              <li>• Fully refundable if cancelled 30 days before</li>
              <li>• Batch shifting allowed once</li>
              <li>• Safe for solo female travelers</li>
            </ul>
          </div>

          <div className="bg-earth-100 p-8 border border-earth-700/10 rounded-sm">
            <h4 className="font-display font-bold uppercase mb-6">Related <span className="text-primary">Trips</span></h4>
            <div className="space-y-6">
              {trips.filter(t => t.id !== trip.id).slice(0, 2).map(t => (
                <Link key={t.id} to={`/trips/${t.slug}`} className="flex gap-4 group">
                  <div className="w-20 h-20 rounded-sm overflow-hidden shrink-0">
                    <img src={t.thumbnail} alt={t.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h5 className="text-sm font-bold uppercase leading-tight mb-1 group-hover:text-primary transition-colors">{t.title}</h5>
                    <p className="text-primary font-display font-bold text-lg">{t.price}</p>
                  </div>
                </Link>
              ))}
            </div>
            <Link to="/trips" className="mt-8 block">
              <Button variant="outline" size="sm" className="w-full border-earth-700 rounded-full">View All Trips</Button>
            </Link>
          </div>

          <div className="sticky top-28 bg-earth-900 text-white p-8 rounded-sm">
            <img src="https://picsum.photos/seed/leader/100/100" alt="Leader" className="w-16 h-16 rounded-full mb-4 mx-auto object-cover border-2 border-primary" referrerPolicy="no-referrer" />
            <h5 className="text-center font-bold mb-1 uppercase tracking-widest">Talk to the Host</h5>
            <p className="text-center text-xs text-white/50 mb-6">Have doubts? Chat directly with the trip leader of our next Spiti batch.</p>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="w-full">
              <Button variant="primary" className="w-full rounded-full bg-green-500 hover:bg-green-600 border-none shadow-none font-sans normal-case">
                <MessageCircle size={18} className="mr-2" /> Message on WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
