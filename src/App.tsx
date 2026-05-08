/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Features from './components/Features';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingButton from './components/FloatingButton';
import { motion } from 'motion/react';

export default function App() {
  return (
    <main className="bg-brand-dark min-h-screen selection:bg-brand-red selection:text-white">
      <Navbar />
      
      <Hero />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <About />
        <Menu />
        <Features />
        
        {/* Call to Order Banner */}
        <section className="section-padding">
           <div className="max-w-7xl mx-auto px-6">
              <div className="relative glass overflow-hidden rounded-[4rem] p-12 md:p-20 text-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-brand-red/20 to-transparent" />
                 <motion.div 
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  className="relative z-10 max-w-2xl mx-auto"
                 >
                    <h2 className="font-display text-4xl md:text-6xl font-bold mb-8">Ready for a <span className="text-brand-orange">Slice</span> of Heaven?</h2>
                    <p className="text-white/60 text-lg mb-12">
                      Order now and experience the favorite pizza in Burlington. Fast, hot, and delicious delivery right to your doorstep.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                       <button className="bg-brand-red px-10 py-5 rounded-full font-bold text-xl shadow-xl shadow-brand-red/30 hover:scale-105 transition-transform">
                          Order Online Now
                       </button>
                    </div>
                 </motion.div>
                 
                 {/* Decorative floating pizzas/icons would go here */}
                 <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-brand-red/10 blur-[100px] rounded-full" />
                 <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-orange/10 blur-[100px] rounded-full" />
              </div>
           </div>
        </section>

        <Reviews />
        <Contact />
      </motion.div>
      
      <Footer />
      <FloatingButton />
    </main>
  );
}
