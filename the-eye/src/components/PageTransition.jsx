import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PageTransition = ({ isActive, onComplete }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isActive) return;

    const overlay = overlayRef.current;
    console.log("Starting transition animation"); // Debug log

    // Set initial state - overlay at bottom (hidden)
    gsap.set(overlay, {
      display: "block",
      y: "100%",
    });

    const tl = gsap.timeline({
      onComplete: () => {
        console.log("Transition animation complete"); // Debug log
        onComplete?.();
      },
    });

    // Animation sequence:
    // 1. Slide up from bottom to cover screen
    // 2. Stay for a brief moment
    // 3. Slide down to bottom revealing new content
    tl.to(overlay, {
      y: "0%",
      duration: 0.8,
      ease: "power2.out",
    })
      .to(overlay, {
        y: "-100%",
        duration: 0.8,
        ease: "power2.in",
        delay: 0.2,
      })
      .set(overlay, {
        display: "none",
        y: "100%",
      });
  }, [isActive, onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-white z-[9999] pointer-events-none"
      style={{
        display: "none",
        transform: "translateY(100%)",
      }}
    />
  );
};

export default PageTransition;
