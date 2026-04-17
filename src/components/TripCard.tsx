import { Link } from "react-router-dom";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Trip } from "@/src/data/trips";
import { Button } from "./Button";
import { motion } from "motion/react";
import React from "react";

interface TripCardProps {
  trip: Trip;
}

export const TripCard: React.FC<TripCardProps> = ({ trip }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group bg-white rounded-sm overflow-hidden border border-earth-700/10 hover:border-primary/50 transition-all flex flex-col h-full"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={trip.thumbnail} 
          alt={trip.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm">
          Budget Choice
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 cinematic-overlay flex flex-col justify-end h-1/2">
          <div className="text-white flex items-center gap-1 text-xs font-bold uppercase mb-1">
            <Clock size={12} className="text-primary" /> {trip.duration}
          </div>
          <h3 className="text-white text-xl leading-tight mb-2 group-hover:text-primary transition-colors">{trip.title}</h3>
        </div>
      </div>
      
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex justify-between items-end mb-4">
          <div>
            <p className="text-[10px] text-earth-700 uppercase font-bold tracking-widest leading-none mb-1">Starts From</p>
            <p className="text-2xl font-display font-bold text-earth-900 leading-none">{trip.price}</p>
          </div>
          <div className="text-right">
             <div className="flex items-center justify-end gap-1 text-[10px] text-earth-700 font-bold uppercase">
               <Calendar size={12} className="text-primary" /> {trip.dates}
             </div>
          </div>
        </div>
        
        <div className="mb-6 space-y-2">
          {trip.highlights.slice(0, 3).map((h, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-earth-700 capitalize">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" /> {h}
            </div>
          ))}
        </div>

        <Link to={`/trips/${trip.slug}`} className="mt-auto">
          <Button variant="earth" size="sm" className="w-full gap-2 rounded-full group-hover:bg-primary transition-colors">
            View Details <ArrowRight size={16} />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};
