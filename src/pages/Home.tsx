import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Instagram, Star, Quote } from "lucide-react";
import { Button } from "@/src/components/Button";
import { TripCard } from "@/src/components/TripCard";
import { trips } from "@/src/data/trips";

export const Home = () => {
  const featuredTrips = trips.slice(0, 3);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex flex-col md:flex-row border-b border-border bg-white overflow-hidden pt-20">
        <div className="flex-1 p-8 md:p-20 flex flex-col justify-center border-r border-border">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-6xl md:text-[100px] mb-8 leading-[0.8] text-ink font-black">
              TRAVEL MORE.<br />
              SPEND <span className="text-clay">LESS.</span>
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-md mb-10 leading-relaxed font-sans font-medium">
              Backpacking trips, community vibes, and real experiences. Designed for 18–35s who want to see India without corporate tourist checklists.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/trips">
                <Button size="lg" className="rounded-full px-12 bg-clay">Explore Next Batch</Button>
              </Link>
            </div>
          </motion.div>

          {/* Stats Grid embedded in Hero as per Design HTML */}
          <div className="grid grid-cols-2 gap-4 mt-auto pt-12">
            <div className="p-6 bg-sand border border-border rounded-2xl">
              <span className="block text-4xl font-black text-forest leading-none mb-1">800+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Trips Completed</span>
            </div>
            <div className="p-6 bg-sand border border-border rounded-2xl">
              <span className="block text-4xl font-black text-forest leading-none mb-1">12k+</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted">Happy Travelers</span>
            </div>
          </div>
        </div>

        <div className="flex-[0.8] relative min-h-[400px]">
          <img 
            src="https://picsum.photos/seed/himalayas/1200/1600" 
            alt="Real India" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-ink/5" />
        </div>
      </section>

      {/* Featured Trips with Section Tag */}
      <section className="py-24 bg-[#F3F4F1]">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <div className="text-[12px] font-black uppercase tracking-[0.2em] text-ink mb-2">Live Batches — Booking Open</div>
            <h2 className="text-4xl md:text-6xl">Next <span className="text-clay">Departures</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTrips.map((trip) => (
              <TripCard key={trip.id} trip={trip} />
            ))}
          </div>

          <div className="mt-16 flex justify-center">
            <Link to="/trips">
              <Button variant="outline" size="lg" className="rounded-full border-ink text-ink">View All Expeditions</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Conversion Bar & Social Proof */}
      <section className="bg-ink py-6 border-y border-white/10">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white/90 text-sm md:text-base font-medium font-sans">
            “Travel with strangers, leave with friends.” — Join 14k+ on Instagram <span className="text-clay font-bold">@gypsycircle</span>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">Follow Feed</Button>
            <Button variant="whatsapp" size="sm" className="gap-2">
              <MessageCircle size={16} /> Chat on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Why GypsyCircle */}
      <section className="py-24 bg-white border-y border-earth-700/10">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square rounded-sm overflow-hidden border-8 border-earth-100 shadow-2xl skew-y-3">
              <img src="https://picsum.photos/seed/community/800/800" alt="Community" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border-8 border-primary/20 -z-10 bg-primary/10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white shadow-xl animate-pulse cursor-pointer">
              <Star size={32} />
            </div>
          </div>
          
          <div>
            <p className="text-primary font-display font-bold uppercase tracking-widest mb-4">Our Philosophy</p>
            <h2 className="text-4xl md:text-6xl mb-8 leading-tight">Travel with <span className="text-primary">Strangers,</span> <br />Leave with <span className="text-primary">Friends.</span></h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center shrink-0 text-primary"><Star size={24} /></div>
                <div>
                  <h4 className="text-xl mb-1">Authentic Experiences</h4>
                  <p className="text-earth-700 text-sm">No touristy checklists. We go where the locals go, eat where they eat, and experience the raw beauty of India.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center shrink-0 text-primary"><MessageCircle size={24} /></div>
                <div>
                  <h4 className="text-xl mb-1">Thriving Community</h4>
                  <p className="text-earth-700 text-sm">Our trips are designed to foster connection. You'll meet people who share your vibe and create bonds that last a lifetime.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 bg-earth-100 rounded-full flex items-center justify-center shrink-0 text-primary"><Instagram size={24} /></div>
                <div>
                  <h4 className="text-xl mb-1">Creator-Driven</h4>
                  <p className="text-earth-700 text-sm">We document our journeys. Expect reels-worthy moments and high-quality storytelling in every trip.</p>
                </div>
              </div>
            </div>
            <Link to="/about" className="inline-block mt-10">
              <Button size="lg" className="rounded-full">Read Our Story</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-earth-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[150px] rounded-full" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <Quote className="mx-auto mb-6 text-primary" size={48} />
            <h2 className="text-4xl md:text-6xl">What <span className="text-primary">Gypsies</span> Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 rounded-sm hover:border-primary/50 transition-all">
                <div className="flex gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="text-white/80 mb-6 italic">"I went as a solo traveler to Spiti with GypsyCircle and came back with a family. The itinerary was perfectly balanced and the trip leader was amazing!"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-earth-700">
                    <img src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h5 className="font-bold text-base">Rahul Sharma</h5>
                    <p className="text-white/40 text-[10px] uppercase font-bold tracking-widest">Spiti Expedition '25</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community / Instagram Grid */}
      <section className="py-24 bg-earth-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <p className="text-primary font-display font-bold uppercase tracking-widest mb-4">#GypsyCircleAdventures</p>
             <h2 className="text-4xl md:text-6xl mb-4">The <span className="text-primary">Gram</span> Gallery</h2>
             <p className="text-earth-700 max-w-xl mx-auto">Follow our journeys in real-time. Tag us to get featured in our community hall of fame.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="group relative aspect-square overflow-hidden bg-earth-700 rounded-sm">
                <img 
                  src={`https://picsum.photos/seed/travel${i + 20}/800/800`} 
                  alt="UGC" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Instagram className="text-white" size={32} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Button variant="outline" className="rounded-full border-earth-900 text-earth-900 font-sans tracking-normal uppercase-none">
                Follow @GypsyCircle on Instagram
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-5xl md:text-7xl mb-8 leading-none">The road is calling. <br />Are you coming?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="w-full sm:w-auto">
              <Button variant="earth" size="lg" className="w-full rounded-full gap-2">
                Join Next Batch <ArrowRight size={20} />
              </Button>
            </a>
             <Link to="/trips" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full rounded-full border-white text-white hover:bg-white hover:text-primary">
                Explore All Trips
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
