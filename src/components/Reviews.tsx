import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Sarah Jenkins',
    rating: 5,
    comment: 'Best pizza in Burlington hands down! The crust is perfectly crispy and the toppings are always fresh. My kids love the buffalo wings too.',
    date: '2 days ago'
  },
  {
    name: 'Mark Thompson',
    rating: 4,
    comment: 'Great local spot. Always reliable for a quick lunch or dinner. Their subs are huge and definitely worth the price. Highly recommend the Italian sub.',
    date: '1 week ago'
  },
  {
    name: 'Elena Rodriguez',
    rating: 5,
    comment: 'I recently ordered the Penne Alla Vodka and it was incredible. Tasted like it came from a high-end Italian restaurant. Delivery was fast too!',
    date: '3 days ago'
  }
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-red font-bold tracking-widest uppercase text-sm block mb-4">Testimonials</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold">What Our Locals Say</h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REVIEWS.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-10 rounded-[2.5rem] relative"
            >
              <Quote className="absolute top-8 right-10 text-white/5 w-20 h-20 -z-0" />
              <div className="relative z-10">
                <div className="flex text-brand-orange mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <p className="text-white/80 text-lg italic mb-8 leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="flex justify-between items-center border-t border-white/10 pt-6">
                  <span className="font-bold text-lg">{review.name}</span>
                  <span className="text-white/40 text-sm">{review.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
