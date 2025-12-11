import { useState } from "react";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useInspectionRequest } from "@/contexts/InspectionRequestContext";

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { openModal } = useInspectionRequest();

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background with video overlay */}
      <div className="absolute inset-0 z-0">
        {/* Fallback gradient background while video loads */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-foreground/90 transition-opacity duration-700 ${
            videoLoaded ? "opacity-0" : "opacity-100"
          }`}
        />

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onCanPlay={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-700 ${
            videoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/hero-background.webm" type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground
