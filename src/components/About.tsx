import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img 
                src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?q=80&w=800&auto=format&fit=crop" 
                alt="Pizza Oven"
                className="rounded-[2.5rem] h-64 w-full object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?q=80&w=800&auto=format&fit=crop" 
                alt="Chef prepping"
                className="rounded-[2.5rem] h-80 w-full object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-4 pt-12">
              <img 
                src="https://images.unsplash.com/photo-1593504049359-74330189a355?q=80&w=800&auto=format&fit=crop" 
                alt="Fresh pizza"
                className="rounded-[2.5rem] h-80 w-full object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <img 
                src="https://images.unsplash.com/photo-1555072956-7758afb20e8f?q=80&w=800&auto=format&fit=crop" 
                alt="Inside restaurant"
                className="rounded-[2.5rem] h-64 w-full object-cover shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          {/* Decorative element */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-brand-red/5 blur-[120px] rounded-full" />
        </div>

        <motion.div 
          className="lg:w-1/2"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-orange font-bold tracking-widest uppercase text-sm block mb-4">Our Story</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 leading-tight">
            A Burlington Tradition, <span className="text-brand-red">Crafted with Passion.</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Burlington House of Pizza has been a local favorite for generations. We believe that great food brings people together, which is why we never compromise on quality. Our dough is made fresh daily, and our signature sauce is a family recipe passed down through years of pizza mastery.
          </p>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            From our sizzling hot wings to our loaded subs and perfectly al dente pasta, everything that leaves our kitchen is made to order with the finest ingredients available. Whether you're dining in with family or ordering a late-night feast, we promise a taste of Burlington in every bite.
          </p>
          
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="text-brand-red font-display text-4xl font-bold mb-2">25+</h4>
              <p className="text-white/50 text-sm font-medium tracking-wide">YEARS OF SERVICE</p>
            </div>
            <div>
              <h4 className="text-brand-red font-display text-4xl font-bold mb-2">100%</h4>
              <p className="text-white/50 text-sm font-medium tracking-wide">FRESH INGREDIENTS</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
