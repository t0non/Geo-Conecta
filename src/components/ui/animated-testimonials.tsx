import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// --- Helper Components & Data ---

export type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

// --- Main Animated Testimonials Component ---
export const AnimatedTestimonials = ({
  testimonials,
  autoplay = true,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = React.useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [autoplay, handleNext]);

  const isActive = (index: number) => index === active;

  const randomRotate = () => `${Math.floor(Math.random() * 16) - 8}deg`;

  return (
    <div className="mx-auto w-full font-sans antialiased">
      <div className="relative grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-20 items-center">
        {/* Image Section */}
        <div className="flex items-center justify-center">
            <div className="relative h-80 w-full max-w-sm sm:h-96">
              <AnimatePresence>
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.src}
                    initial={{ opacity: 0, scale: 0.9, y: 50, rotate: randomRotate() }}
                    animate={{
                      opacity: isActive(index) ? 1 : 0.5,
                      scale: isActive(index) ? 1 : 0.9,
                      y: isActive(index) ? 0 : 20,
                      zIndex: isActive(index) ? testimonials.length : testimonials.length - Math.abs(index - active),
                      rotate: isActive(index) ? '0deg' : randomRotate(),
                    }}
                    exit={{ opacity: 0, scale: 0.9, y: -50 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute inset-0 origin-bottom"
                    style={{ perspective: '1000px' }}
                  >
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                      className="h-full w-full rounded-[2rem] object-contain object-bottom shadow-2xl transition-all duration-700 bg-zinc-800"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        e.currentTarget.src = `https://placehold.co/500x500/e2e8f0/64748b?text=${testimonial.name.charAt(0)}`;
                        e.currentTarget.onerror = null;
                      }}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
        </div>

        {/* Text and Controls Section */}
        <div className="flex flex-col justify-center py-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col justify-between"
            >
                <div>
                    <h3 className="text-3xl font-display font-bold text-white">
                        {testimonials[active].name}
                    </h3>
                    <p className="text-xs font-bold uppercase tracking-widest text-zinc-500 mt-3 mb-6">
                        {testimonials[active].designation}
                    </p>
                    <motion.p className="text-xl lg:text-2xl font-light text-zinc-300 leading-relaxed italic">
                        "{testimonials[active].quote}"
                    </motion.p>
                </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex gap-4 pt-10">
            <button
              onClick={handlePrev}
              aria-label="Anterior"
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              <ArrowLeft className="h-5 w-5 text-zinc-300 transition-transform duration-300 group-hover:-translate-x-1" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Próximo"
              className="group flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 transition-colors hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-400 focus:ring-offset-2 focus:ring-offset-zinc-900"
            >
              <ArrowRight className="h-5 w-5 text-zinc-300 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
