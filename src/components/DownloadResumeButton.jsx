import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Icon } from "@iconify/react/dist/iconify.js";

const DownloadResumeButton = ({ 
  variant = "primary", 
  className = "",
  withScrollTrigger = false 
}) => {
  const buttonRef = useRef(null);
  const iconRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useGSAP(() => {
    // Initial setup
    gsap.set(bgRef.current, {
      scaleX: 0,
      transformOrigin: "left center"
    });
    
    // Align icon with text baseline - slight upward adjustment
    gsap.set(iconRef.current, {
      y: -2
    });

    // Entry animation with scroll trigger if needed
    if (withScrollTrigger) {
      gsap.from(buttonRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%"
        }
      });
    }

    // Hover animations
    const handleMouseEnter = () => {
      const tl = gsap.timeline();
      
      tl.to(bgRef.current, {
        scaleX: 1,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(iconRef.current, {
        y: 1, // -2 + 3 = 1 (moves down 3px from aligned position)
        duration: 0.3,
        ease: "power2.out"
      }, "<+0.1")
      .to(textRef.current, {
        x: 5,
        duration: 0.3,
        ease: "power2.out"
      }, "<");
    };

    const handleMouseLeave = () => {
      const tl = gsap.timeline();
      
      tl.to(bgRef.current, {
        scaleX: 0,
        duration: 0.3,
        ease: "power2.in"
      })
      .to(iconRef.current, {
        y: -2, // Back to aligned position
        duration: 0.3,
        ease: "power2.out"
      }, "<")
      .to(textRef.current, {
        x: 0,
        duration: 0.3,
        ease: "power2.out"
      }, "<");
    };

    const button = buttonRef.current;
    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [withScrollTrigger]);

  const handleDownload = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/assets/resume/Abdellah Raissouni CV en.pdf';
    link.download = 'Abdellah_Raissouni_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Enhanced click animation - icon moves down more dramatically
    const tl = gsap.timeline();
    tl.to(iconRef.current, {
      y: 6, // -2 + 8 = 6 (moves down 8px from aligned position)
      duration: 0.2,
      ease: "power2.out"
    })
    .to(iconRef.current, {
      y: 1, // -2 + 3 = 1 (back to hover position)
      duration: 0.3,
      ease: "back.out(1.7)"
    });
  };

  const baseClasses = "relative overflow-hidden cursor-pointer group transition-all duration-300";
  
  const variantClasses = {
    primary: "border border-black text-black hover:text-white md:border-2",
    secondary: "border border-white text-white hover:text-black md:border-2"
  };

  const sizeClasses = "px-3 py-2 sm:px-4 sm:py-2.5 md:px-10 md:py-5 lg:px-12 lg:py-6";

  return (
    <button
      ref={buttonRef}
      onClick={handleDownload}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses} ${className}`}
    >
      {/* Background overlay */}
      <div
        ref={bgRef}
        className={`absolute inset-0 ${variant === 'primary' ? 'bg-black' : 'bg-white'} -z-10`}
      />
      
      {/* Content */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-2 md:gap-4">
        <span
          ref={textRef}
          className="font-light uppercase tracking-wide text-[10px] sm:text-xs md:text-base lg:text-lg leading-none whitespace-nowrap"
        >
          Download Resume
        </span>
        <div ref={iconRef} className="flex items-center">
          <Icon
            icon="lucide:download"
            className="text-sm sm:text-base md:text-xl lg:text-2xl"
          />
        </div>
      </div>
    </button>
  );
};

export default DownloadResumeButton;

