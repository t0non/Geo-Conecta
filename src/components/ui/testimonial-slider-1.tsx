"use client"; 
 
import * as React from "react"; 
import { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import { ArrowLeft, ArrowRight } from "lucide-react"; 
import { cn } from "@/lib/utils"; 
import { Button } from "@/components/ui/button"; 
 
// Define the type for a single review 
export type Review = { 
  id: string | number; 
  name: string; 
  affiliation: string; 
  quote: string; 
  imageSrc: string; 
  thumbnailSrc: string; 
}; 
 
// Define the props for the slider component 
interface TestimonialSliderProps { 
  reviews: Review[]; 
  /** Optional class name for the container */ 
  className?: string; 
} 
 
/** 
 * A reusable, animated testimonial slider component. 
 * It uses framer-motion for animations and is styled with 
 * shadcn/ui theme variables. 
 */ 
export const TestimonialSlider = ({ 
  reviews, 
  className, 
}: TestimonialSliderProps) => { 
  const [currentIndex, setCurrentIndex] = useState(0); 
  // 'direction' helps framer-motion understand slide direction (next vs. prev) 
  const [direction, setDirection] = useState<"left" | "right">("right"); 
 
  const activeReview = reviews[currentIndex]; 
 
  const handleNext = () => { 
    setDirection("right"); 
    setCurrentIndex((prev) => (prev + 1) % reviews.length); 
  }; 
 
  const handlePrev = () => { 
    setDirection("left"); 
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length); 
  }; 
 
  const handleThumbnailClick = (index: number) => { 
    // Determine direction for animation 
    setDirection(index > currentIndex ? "right" : "left"); 
    setCurrentIndex(index); 
  }; 
 
  // Get the next 3 reviews for the thumbnails, excluding the current one 
  const thumbnailReviews = reviews 
    .filter((_, i) => i !== currentIndex) 
    .slice(0, 3); 
 
  // Animation variants for the main image 
  const imageVariants = { 
    enter: (direction: "left" | "right") => ({ 
      y: direction === "right" ? "100%" : "-100%", 
      opacity: 0, 
    }), 
    center: { y: 0, opacity: 1 }, 
    exit: (direction: "left" | "right") => ({ 
      y: direction === "right" ? "-100%" : "100%", 
      opacity: 0, 
    }), 
  }; 
 
  // Animation variants for the text content 
  const textVariants = { 
    enter: (direction: "left" | "right") => ({ 
      x: direction === "right" ? 50 : -50, 
      opacity: 0, 
    }), 
    center: { x: 0, opacity: 1 }, 
    exit: (direction: "left" | "right") => ({ 
      x: direction === "right" ? -50 : 50, 
      opacity: 0, 
    }), 
  }; 
 
  return ( 
    <div 
      className={cn( 
        "relative w-full overflow-hidden bg-zinc-900/50 text-white p-6 sm:p-8 md:p-10 lg:p-12 rounded-3xl border border-zinc-800", 
        className 
      )} 
    > 
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 lg:gap-12 items-stretch"> 
        {/* === Left Column: Meta and Thumbnails === */} 
        <div className="md:col-span-1 lg:col-span-1 flex flex-col justify-between order-3 md:order-1"> 
          <div className="flex flex-row md:flex-col items-center md:items-start justify-between md:justify-start space-x-4 md:space-x-0 md:space-y-6"> 
            {/* Pagination */}
            <span className="text-[10px] md:text-xs text-zinc-500 font-mono"> 
              {String(currentIndex + 1).padStart(2, "0")} /{" "} 
              {String(reviews.length).padStart(2, "0")} 
            </span> 
            {/* Vertical "Especialistas" Text */}
            <h2 className="text-[10px] font-bold tracking-[0.3em] uppercase [writing-mode:horizontal-tb] md:[writing-mode:vertical-rl] md:rotate-180 text-zinc-500 whitespace-nowrap"> 
              Especialistas 
            </h2> 
          </div> 
 
          {/* Thumbnail Navigation */}
          <div className="flex md:flex-col gap-3 mt-6 md:mt-10 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 scrollbar-hide snap-x snap-mandatory"> 
            {reviews.map((review, index) => { 
              const isSelected = index === currentIndex;
              return ( 
                <button 
                  key={review.id} 
                  onClick={() => handleThumbnailClick(index)} 
                  className={cn(
                    "relative flex-shrink-0 overflow-hidden rounded-xl w-14 h-14 sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-16 lg:h-16 transition-all duration-500 focus:outline-none ring-offset-zinc-900 snap-center",
                    isSelected ? "ring-2 ring-red-600 opacity-100 scale-105" : "opacity-40 hover:opacity-100 grayscale hover:grayscale-0"
                  )} 
                  aria-label={`Ver depoimento de ${review.name}`} 
                > 
                  <img 
                    src={review.thumbnailSrc} 
                    alt={review.name} 
                    className="w-full h-full object-cover" 
                  /> 
                </button> 
              ); 
            })} 
          </div> 
        </div> 
 
        {/* === Center Column: Main Image === */}
        <div className="md:col-span-5 lg:col-span-5 relative aspect-[4/5] md:aspect-[3/4] lg:aspect-auto md:h-full min-h-[400px] md:min-h-[500px] order-1 md:order-2 overflow-hidden rounded-2xl shadow-2xl"> 
          <AnimatePresence initial={false} custom={direction}> 
            <motion.img 
              key={currentIndex} 
              src={activeReview.imageSrc} 
              alt={activeReview.name} 
              custom={direction} 
              variants={imageVariants} 
              initial="enter" 
              animate="center" 
              exit="exit" 
              transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} 
              className="absolute inset-0 w-full h-full object-cover" 
            /> 
          </AnimatePresence> 
          {/* Decorative Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent pointer-events-none" />
        </div> 
 
        {/* === Right Column: Text and Navigation === */}
        <div className="md:col-span-6 lg:col-span-6 flex flex-col justify-center md:pl-6 lg:pl-10 order-2 md:order-3"> 
          {/* Text Content */}
          <div className="relative min-h-[260px] md:min-h-[320px] lg:min-h-[380px] flex flex-col justify-center"> 
            <AnimatePresence initial={false} custom={direction} mode="wait"> 
              <motion.div 
                key={currentIndex} 
                custom={direction} 
                variants={textVariants} 
                initial="enter" 
                animate="center" 
                exit="exit" 
                transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }} 
                className="py-4"
              > 
                <p className="text-[10px] md:text-xs font-bold text-red-600 uppercase tracking-[0.2em]"> 
                  {activeReview.affiliation} 
                </p> 
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-light mt-3 text-white"> 
                  {activeReview.name} 
                </h3> 
                <blockquote className="mt-6 md:mt-8 text-lg lg:text-xl xl:text-2xl font-light leading-relaxed text-zinc-300 italic border-l-2 border-red-600/30 pl-6"> 
                  "{activeReview.quote}" 
                </blockquote> 
              </motion.div> 
            </AnimatePresence> 
          </div> 
 
          {/* Navigation Buttons */}
          <div className="flex items-center space-x-4 mt-8 md:mt-10"> 
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full w-10 h-10 md:w-12 md:h-12 border-zinc-700 bg-transparent hover:bg-zinc-800 text-white transition-all duration-300 hover:scale-110 active:scale-95" 
              onClick={handlePrev} 
              aria-label="Anterior" 
            > 
              <ArrowLeft className="w-4 h-4 md:w-5 md:h-5" /> 
            </Button> 
            <Button 
              variant="default" 
              size="icon" 
              className="rounded-full w-10 h-10 md:w-12 md:h-12 bg-red-600 hover:bg-red-700 text-white border-none shadow-lg shadow-red-600/20 transition-all duration-300 hover:scale-110 active:scale-95" 
              onClick={handleNext} 
              aria-label="Próximo" 
            > 
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5" /> 
            </Button> 
          </div> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
