import { motion } from 'motion/react';
import { Pizza, Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 pt-24 pb-12 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-8">
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center rotate-12">
                <Pizza className="text-white w-7 h-7" />
              </div>
              <div>
                <span className="font-display font-bold text-2xl block tracking-tight leading-none">BURLINGTON</span>
                <span className="text-brand-red font-display font-bold text-base block leading-none">HOUSE OF PIZZA</span>
              </div>
            </a>
            <p className="text-white/50 leading-relaxed font-medium">
              Feeding the Burlington community since 1995 with the best pizza, subs, and smiles in town.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ y: -5, color: '#E31837' }}
                  className="w-10 h-10 glass rounded-lg flex items-center justify-center text-white/60 transition-colors"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold mb-8">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'View Menu', 'Our Story', 'Customer Reviews', 'Location', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/60 hover:text-brand-red transition-colors font-medium">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold mb-8">Menu Highlights</h4>
            <ul className="space-y-4 text-white/50">
              <li className="flex justify-between">
                <span>Specialty Pizza</span>
                <span>$14.99+</span>
              </li>
              <li className="flex justify-between">
                <span>Buffalo Wings</span>
                <span>$12.99</span>
              </li>
              <li className="flex justify-between">
                <span>Signature Subs</span>
                <span>$10.50</span>
              </li>
              <li className="flex justify-between">
                <span>Classic Pasta</span>
                <span>$13.50+</span>
              </li>
              <li className="flex justify-between">
                <span>Fresh Salads</span>
                <span>$8.99+</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl font-bold mb-8">Newsletter</h4>
            <p className="text-white/50 mb-6 font-medium">
              Get exclusive deals and the latest news delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full glass bg-white/5 border-white/10 rounded-xl px-4 py-3 outline-none focus:border-brand-red transition-all"
              />
              <button className="bg-brand-red px-5 rounded-xl font-bold shadow-lg shadow-brand-red/20">
                GO
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-sm font-medium">
            © {new Date().getFullYear()} Burlington House of Pizza. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/40 text-sm font-bold tracking-widest uppercase">
            <a href="#" className="hover:text-white transition-colors">Order Now</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
            <a href="#" className="hover:text-white transition-colors">Franchise</a>
          </div>
        </div>
      </div>

      {/* Decorative text bg */}
      <div className="absolute right-0 bottom-0 opacity-[0.02] text-[25vw] font-display font-bold leading-none select-none -mb-[5vw] translate-x-1/4">
        BHOP
      </div>
    </footer>
  );
}
