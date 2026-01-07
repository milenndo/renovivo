import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean; // For above-the-fold images
  sizes?: string;
  aspectRatio?: string; // e.g., "4/5", "16/9"
}

/**
 * Optimized image component with:
 * - Lazy loading for below-the-fold images
 * - Explicit width/height to prevent CLS
 * - Responsive sizing with srcset (when using external URLs)
 * - Priority loading for above-the-fold images
 */
const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  aspectRatio,
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px", // Start loading 200px before entering viewport
        threshold: 0,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority]);

  // Determine if it's an imported asset (starts with data: or /assets/)
  const isImportedAsset = src.startsWith("data:") || src.includes("/assets/");
  
  return (
    <div
      ref={imgRef}
      className={cn(
        "overflow-hidden bg-muted/30",
        aspectRatio && `aspect-[${aspectRatio}]`,
        className
      )}
      style={{
        width: width ? `${width}px` : undefined,
        height: height ? `${height}px` : undefined,
        aspectRatio: aspectRatio,
      }}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          loading={priority ? "eager" : "lazy"}
          decoding={priority ? "sync" : "async"}
          fetchPriority={priority ? "high" : "auto"}
          sizes={!isImportedAsset ? sizes : undefined}
          onLoad={() => setIsLoaded(true)}
          className={cn(
            "w-full h-full object-cover transition-opacity duration-300",
            isLoaded ? "opacity-100" : "opacity-0"
          )}
        />
      )}
      {/* Placeholder while loading */}
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-muted/50 animate-pulse"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export { OptimizedImage };
