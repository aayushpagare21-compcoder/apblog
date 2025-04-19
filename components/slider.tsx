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
  autoplayDelay = 5000,
  showControls = true,
  showIndicators = true,
  className,
}: SliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(itemsPerView);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoplay);
  const totalItems = children.length;

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

  // Handle autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;

    const maxIndex = Math.max(0, totalItems - visibleCount);
    const interval = setInterval(() => {
      setActiveIndex((current) => (current >= maxIndex ? 0 : current + 1));
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [isAutoPlaying, visibleCount, totalItems, autoplayDelay]);

  const goToPrev = useCallback(() => {
    setIsAutoPlaying(false);
    setActiveIndex((current) => Math.max(0, current - 1));
  }, []);

  const goToNext = useCallback(() => {
    setIsAutoPlaying(false);
    const maxIndex = Math.max(0, totalItems - visibleCount);
    setActiveIndex((current) => (current >= maxIndex ? current : current + 1));
  }, [totalItems, visibleCount]);

  const goToSlide = useCallback((index: number) => {
    setIsAutoPlaying(false);
    setActiveIndex(index);
  }, []);

  const maxIndex = Math.max(0, totalItems - visibleCount);
  const canGoNext = activeIndex < maxIndex;
  const canGoPrev = activeIndex > 0;

  return (
    <div className={cn("relative", className)}>
      {/* Main slider content */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
          }}
        >
          {children.map((child, index) => (
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

      {/* Controls */}
      {showControls && (
        <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-2 right-2 px-2">
          <button
            onClick={goToPrev}
            disabled={!canGoPrev}
            className="p-2 rounded-full bg-background border shadow-sm hover:bg-primary/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            disabled={!canGoNext}
            className="p-2 rounded-full bg-background border shadow-sm hover:bg-primary/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Indicators */}
      {showIndicators && totalItems > visibleCount && (
        <div className="flex justify-center gap-2 mt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
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
