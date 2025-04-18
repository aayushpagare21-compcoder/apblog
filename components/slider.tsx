"use client";
import { useState, useEffect, useCallback, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type SliderProps = {
  children: ReactNode[];
  itemsPerView?: number;
  autoplay?: boolean;
  autoplayDelay?: number;
  showControls?: boolean;
  showIndicators?: boolean;
  className?: string;
};

export function Slider({
  children,
  itemsPerView = 2,
  autoplay = false,
  autoplayDelay = 3000,
  showControls = true,
  showIndicators = true,
  className,
}: SliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(itemsPerView);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);
  const totalItems = children.length;

  // Create a duplicated set of items for infinite scrolling
  const items = [...children];

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(Math.min(itemsPerView, 2));
      } else {
        setVisibleCount(itemsPerView);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [itemsPerView]);

  // Handle autoplay with infinite scrolling
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % totalItems);
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalItems, autoplayDelay]);

  const goToPrev = useCallback(() => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => {
      const newIndex = current - 1;
      return newIndex < 0 ? totalItems - 1 : newIndex;
    });
  }, [totalItems]);

  const goToNext = useCallback(() => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => (current + 1) % totalItems);
  }, [totalItems]);

  const goToSlide = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  }, []);

  // Get transition properties for smooth infinite scrolling
  const getTransformStyle = () => {
    // Calculate the percentage to translate
    const percentage =
      (activeIndex * (100 / visibleCount)) %
      (totalItems * (100 / visibleCount));

    return {
      transform: `translateX(-${percentage}%)`,
    };
  };

  return (
    <div className={cn("relative", className)}>
      {/* Main slider content */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={getTransformStyle()}
        >
          {items.map((child, index) => (
            <div
              key={index}
              className="w-full shrink-0 px-2"
              style={{ width: `${100 / visibleCount}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Controls - Always enabled for infinite scrolling */}
      {showControls && (
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-2 right-2 px-2">
          <button
            onClick={goToPrev}
            className="p-2 rounded-full bg-background border shadow-sm hover:bg-primary/10 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-background border shadow-sm hover:bg-primary/10 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Indicators */}
      {showIndicators && totalItems > visibleCount && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: totalItems }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={cn(
                "h-2 rounded-full transition-all",
                activeIndex === index ? "bg-primary w-6" : "bg-primary/30 w-2",
              )}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={activeIndex === index}
            />
          ))}
        </div>
      )}
    </div>
  );
}
