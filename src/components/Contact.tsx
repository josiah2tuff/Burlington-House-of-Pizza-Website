import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Send, Navigation } from 'lucide-react';

export default function Contact() {
  return (
    <section id="location" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-bold tracking-widest uppercase text-sm block mb-4">Contact Us</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-12">Visit the House</h2>

            <div className="space-y-12 mb-12">
              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0">
                  <MapPin className="text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Our Location</h4>
                  <p className="text-white/60 leading-relaxed max-w-xs">
                    114 Cambridge St, Burlington, MA 01803
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 flex items-center gap-2 text-brand-orange text-sm font-bold tracking-wide"
                  >
                    GET DIRECTIONS <Navigation size={14} />
                  </motion.button>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0">
                  <Phone className="text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Call to Order</h4>
                  <p className="text-white/60 leading-relaxed">
                    (781) 272-5839
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0">
                  <Clock className="text-brand-red" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Our Hours</h4>
                  <ul className="text-white/60 space-y-1">
                    <li className="flex justify-between w-64">
                      <span>Mon - Friday</span>
                      <span className="text-white font-medium">10:00AM - 10:00PM</span>
                    </li>
                    <li className="flex justify-between w-64 text-brand-orange">
                      <span>Fri - Sat</span>
                      <span className="font-medium">10:00AM - 11:00PM</span>
                    </li>
                    <li className="flex justify-between w-64">
                      <span>Sunday</span>
                      <span className="text-white font-medium">11:00AM - 9:00PM</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-10 rounded-[3rem] shadow-2xl relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 blur-3xl rounded-full" />
             
             <h3 className="text-2xl font-display font-bold mb-8">Send a Message</h3>
             <form className="space-y-6">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-white/40">Full Name</label>
                   <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:border-brand-red outline-none transition-all"
                   />
                 </div>
                 <div className="space-y-2">
                   <label className="text-xs font-bold uppercase tracking-widest text-white/40">Email Address</label>
                   <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:border-brand-red outline-none transition-all"
                   />
                 </div>
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-white/40">Subject</label>
                 <select className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:border-brand-red outline-none transition-all appearance-none">
                    <option className="bg-brand-dark">General Inquiry</option>
                    <option className="bg-brand-dark">Catering Request</option>
                    <option className="bg-brand-dark">Feedback</option>
                 </select>
               </div>
               <div className="space-y-2">
                 <label className="text-xs font-bold uppercase tracking-widest text-white/40">Message</label>
                 <textarea 
                  rows={4}
                  placeholder="Tell us what's on your mind..."
                  className="w-full glass bg-white/5 border-white/10 rounded-2xl px-6 py-4 focus:border-brand-red outline-none transition-all resize-none"
                 />
               </div>
               <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-brand-red py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl shadow-brand-red/20"
               >
                 Send Message <Send size={20} />
               </motion.button>
             </form>
          </motion.div>
        </div>

        {/* Modern Map Placeholder */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-20 h-96 rounded-[3rem] overflow-hidden glass relative group"
        >
          <div className="absolute inset-0 bg-[url('https://api.maptiler.com/maps/darkmatter/static/-71.2185,42.4851,14/1200x600.png?key=get_your_own')] bg-cover bg-center grayscale contrast-[1.2]">
            {/* Overlay to darken and style */}
            <div className="absolute inset-0 bg-brand-dark/20 mix-blend-overlay" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-16 h-16 bg-brand-red rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(227,24,55,0.6)] animate-pulse">
                <MapPin className="text-white w-8 h-8" />
             </div>
          </div>
          <div className="absolute bottom-10 left-10 glass-dark px-6 py-4 rounded-2xl border border-white/10">
             <p className="font-bold">114 Cambridge St</p>
             <p className="text-white/60 text-sm italic">Burlington, MA 01803</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
