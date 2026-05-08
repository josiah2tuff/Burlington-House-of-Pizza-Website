import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { MenuItem } from '../types';
import { ShoppingCart, Plus } from 'lucide-react';

const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    title: 'Signature Pepperoni',
    description: 'Double pepperoni, extra mozzarella, house-made tomato sauce, Italian herbs.',
    price: '$16.99',
    category: 'pizza',
    image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Buffalo Wings',
    description: 'Crispy bone-in wings tossed in our signature spicy buffalo sauce. Served with blue cheese.',
    price: '$12.99',
    category: 'wings',
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Penne Alla Vodka',
    description: 'Creamy tomato vodka sauce with parmesan, fresh basil, and perfectly cooked penne.',
    price: '$14.99',
    category: 'pasta',
    image: 'https://images.unsplash.com/photo-1598866594230-a7c12756260f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Italian Sub',
    description: 'Genoa salami, capicola, provolone, lettuce, tomato, onions, and house dressing.',
    price: '$11.50',
    category: 'subs',
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c170db0f?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Garden Fresh Salad',
    description: 'Crisp romaine, vine-ripened tomatoes, cucumbers, black olives, and house vinaigrette.',
    price: '$9.99',
    category: 'salads',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '6',
    title: 'Tiramisu',
    description: 'Authentic Italian coffee-flavored dessert with layers of ladyfingers and mascarpone.',
    price: '$6.50',
    category: 'desserts',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=800&auto=format&fit=crop'
  }
];

const CATEGORIES = [
  { id: 'all', name: 'All Items' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'wings', name: 'Wings' },
  { id: 'pasta', name: 'Pasta' },
  { id: 'subs', name: 'Subs' },
  { id: 'salads', name: 'Salads' },
  { id: 'desserts', name: 'Desserts' }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-bold tracking-widest uppercase text-sm block mb-2">Our Menu</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">The House Favorites</h2>
          </motion.div>

          <div className="flex gap-2 p-1 glass rounded-full overflow-x-auto no-scrollbar max-w-full">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === cat.id 
                    ? 'bg-brand-red text-white shadow-lg' 
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group glass p-4 rounded-3xl hover:bg-white/10 transition-colors"
              >
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <motion.img 
                    src={item.image} 
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-brand-dark/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 font-bold text-brand-orange">
                    {item.price}
                  </div>
                </div>
                
                <div className="px-2">
                  <h3 className="font-display text-2xl font-bold mb-2 transition-colors group-hover:text-brand-red">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-sm mb-6 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full border-2 border-brand-dark bg-zinc-800" />
                      <div className="w-8 h-8 rounded-full border-2 border-brand-dark bg-zinc-700" />
                      <div className="w-8 h-8 rounded-full border-2 border-brand-dark bg-zinc-600 flex items-center justify-center text-[10px] font-bold">
                        +12
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="w-12 h-12 bg-white text-brand-dark rounded-full flex items-center justify-center shadow-lg group-hover:bg-brand-red group-hover:text-white transition-colors"
                    >
                      <Plus size={24} />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
