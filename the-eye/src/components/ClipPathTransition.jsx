import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const ClipPathTransition = ({ isActive }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    const overlay = overlayRef.current;

    if (isActive) {
      // Set initial state - overlay at bottom (hidden)
      gsap.set(overlay, {
        display: "block",
        y: "100%",
      });

      // Create timeline for the animation
      const tl = gsap.timeline();

      // Animation sequence:
      // 1. Slide up from bottom to cover screen
      // 2. Stay for a brief moment
      // 3. Slide down to top revealing new content
      tl.to(overlay, {
        y: "0%",
        duration: 0.5,
        ease: "power2.out",
      })
        .to(overlay, {
          y: "-100%",
          duration: 0.5,
          ease: "power2.in",
          delay: 0.1,
        })
        .set(overlay, {
          display: "none",
          y: "100%",
        });
    } else {
      // Reset to initial state when not active
      gsap.set(overlay, {
        display: "none",
        y: "100%",
      });
    }
  }, [isActive]); // Fixed dependency array - only isActive

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 bg-white z-50 pointer-events-none"
      style={{
        display: "none",
        transform: "translateY(100%)",
      }}
    />
  );
};

export default ClipPathTransition;
