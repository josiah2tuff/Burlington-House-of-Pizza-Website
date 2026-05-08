import { motion } from 'motion/react';
import { Pizza, Phone, MapPin, Clock, Menu as MenuIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-dark py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2 group"
        >
          <div className="w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Pizza className="text-white w-6 h-6" />
          </div>
          <div>
            <span className="font-display font-bold text-xl block leading-tight tracking-tight">BURLINGTON</span>
            <span className="text-brand-red font-display font-bold text-sm block leading-tight">HOUSE OF PIZZA</span>
          </div>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-medium hover:text-brand-red transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#order"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-brand-red px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-brand-red/20"
          >
            ORDER ONLINE
          </motion.a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full glass-dark py-6 flex flex-col items-center gap-6 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#order" 
            onClick={() => setIsOpen(false)}
            className="bg-brand-red px-8 py-3 rounded-full font-bold w-4/5 text-center"
          >
            ORDER ONLINE
          </a>
        </motion.div>
      )}
    </nav>
  );
}
