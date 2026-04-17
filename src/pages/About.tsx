import { motion } from "motion/react";
import { Star, MessageCircle, Heart, Globe } from "lucide-react";

export const About = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-primary font-display font-bold uppercase tracking-widest mb-4"
          >
            Behind the Backpack
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl mb-10 leading-none"
          >
            We're Travelers, <br />
            <span className="text-primary">Not Corporates.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-earth-700 text-lg md:text-xl font-sans text-balance leading-relaxed"
          >
            GypsyCircle started in 2021 with a simple idea: travel shouldn't be about checklists and tourist traps. 
            It should be about the people you meet, the stories you share, and the raw beauty of the places you see.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
           <div className="aspect-[4/3] rounded-sm overflow-hidden border-8 border-white shadow-xl rotate-1">
             <img src="https://picsum.photos/seed/founders/1200/900" alt="Founders" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
           </div>
           <div className="flex flex-col justify-center">
             <h2 className="text-4xl mb-6">Our <span className="text-primary">Journey</span></h2>
             <p className="text-earth-700 mb-6 font-sans">
                Our founders, Rahul and Sneha, spent three years backpacking across India before realizing that 
                most group trips were too corporate and rigid. They wanted to create something that felt like 
                traveling with friends, even if you started as strangers.
             </p>
             <p className="text-earth-700 font-sans">
                Today, GypsyCircle is a community of 12,000+ travelers. We don't just book hotels; 
                we curate experiences that change the way you see the world.
             </p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
           <div>
             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
               <Globe size={32} />
             </div>
             <h4 className="text-xl mb-3">Real India</h4>
             <p className="text-earth-700 text-sm font-sans italic">"Beyond the brochures, finding the hidden gems that make India magical."</p>
           </div>
           <div>
             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
               <Heart size={32} />
             </div>
             <h4 className="text-xl mb-3">Community First</h4>
             <p className="text-earth-700 text-sm font-sans italic">"Solo travelers are never alone here. We build bonds that last forever."</p>
           </div>
           <div>
             <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-6">
               <Star size={32} />
             </div>
             <h4 className="text-xl mb-3">Budget Friendly</h4>
             <p className="text-earth-700 text-sm font-sans italic">"Adventure shouldn't be a luxury. We make it accessible for everyone."</p>
           </div>
        </div>
      </div>
    </div>
  );
};
