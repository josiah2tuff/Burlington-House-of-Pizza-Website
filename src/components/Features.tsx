import { motion } from 'motion/react';
import { Leaf, Truck, Users, Tag, Heart, Globe } from 'lucide-react';

const FEATURES = [
  {
    title: 'Fresh Ingredients',
    description: 'We source only the finest, freshest local produce and meats daily.',
    icon: Leaf,
    color: 'text-green-400'
  },
  {
    title: 'Fast Delivery',
    description: 'Hot pizza at your doorstep in record time with real-time tracking.',
    icon: Truck,
    color: 'text-blue-400'
  },
  {
    title: 'Family Friendly',
    description: 'A warm, welcoming atmosphere perfect for family dinners and parties.',
    icon: Users,
    color: 'text-brand-orange'
  },
  {
    title: 'Affordable Prices',
    description: 'Premium quality food that fits your budget without compromising taste.',
    icon: Tag,
    color: 'text-purple-400'
  },
  {
    title: 'Local Favorite',
    description: 'Trusted by the Burlington community for over two decades.',
    icon: Heart,
    color: 'text-brand-red'
  },
  {
    title: 'Online Ordering',
    description: 'Seamless ordering experience through our website and mobile app.',
    icon: Globe,
    color: 'text-teal-400'
  }
];

export default function Features() {
  return (
    <section className="section-padding bg-zinc-950/50 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-bold tracking-widest uppercase text-sm block mb-4">Why Burlington HOP?</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">The Standard of Excellence</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-[2rem] hover:border-brand-red/50 transition-all group"
            >
              <div className={`w-14 h-14 rounded-2xl glass mb-6 flex items-center justify-center group-hover:bg-brand-red/10 transition-colors`}>
                <feature.icon className={`${feature.color} w-7 h-7`} />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
