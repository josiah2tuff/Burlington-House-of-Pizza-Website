import { motion } from 'motion/react';
import { Star, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with cinematic overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full pt-20">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="flex text-brand-orange">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
                <Star size={16} className="opacity-50" />
              </div>
              <span className="text-sm font-medium tracking-wide text-white/70">
                4.0 stars from 115+ reviews
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-[1.1] tracking-tight">
              Burlington's <span className="text-brand-red">Favorite</span> Pizza Spot
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed">
              Fresh pizza, subs, pasta, wings, salads, and more made with quality ingredients and a local heart since the beginning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-red px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-xl shadow-brand-red/20"
              >
                Order Online <ShoppingBag size={20} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all border border-white/10"
              >
                View Menu <ArrowRight size={20} />
              </motion.button>
            </div>

            <div className="flex flex-wrap gap-6">
              {['Dine-In', 'Takeout', 'No-Contact Delivery'].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-white/60 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative side text */}
      <div className="hidden lg:block absolute right-[-5%] top-1/2 -translate-y-1/2 font-display text-[20vh] font-bold opacity-[0.03] select-none pointer-events-none whitespace-nowrap rotate-90">
        HOUSE OF PIZZA
      </div>
    </section>
  );
}
