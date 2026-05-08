import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag } from 'lucide-react';

export default function FloatingOrderButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 md:hidden w-[calc(100%-48px)] max-w-sm"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full bg-brand-red py-5 rounded-full font-bold flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(227,24,55,0.4)] text-lg"
      >
        ORDER NOW <ShoppingBag size={22} />
      </motion.button>
    </motion.div>
  );
}
