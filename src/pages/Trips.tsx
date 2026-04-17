import { trips } from "@/src/data/trips";
import { TripCard } from "@/src/components/TripCard";
import { motion } from "motion/react";

export const Trips = () => {
  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-display font-bold uppercase tracking-widest mb-2"
          >
            All Expeditions
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl mb-6"
          >
            Find Your <span className="text-primary">Next Adventure</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-earth-700 max-w-2xl text-lg font-sans"
          >
            From the high-altitude deserts of Spiti to the hidden lagoons of Goa, 
            choose a journey that speaks to your soul. All trips are solo-traveler friendly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
        
        {trips.length === 0 && (
          <div className="text-center py-20 border-2 border-dashed border-earth-700/10 rounded-sm">
            <p className="font-display font-bold uppercase text-earth-700/50">More trips coming soon!</p>
          </div>
        )}
      </div>
    </div>
  );
};
