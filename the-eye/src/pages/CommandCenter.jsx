import React, { useEffect, useRef } from "react";
import TypographySystem from "../components/TypographySystem";
import "../css/CommandCenter.css";
import { World } from "@/components/ui/globe";
import Accordion from "@/components/Accordion";

export default function CommandCenter() {
  // Pure GSAP marquee animation - no CSS conflicts
  const marqueeRef = useRef(null);
  useEffect(() => {
    if (!marqueeRef.current) return;
    import("gsap").then(({ gsap }) => {
      // Clear any existing transforms
      gsap.set(marqueeRef.current, { clearProps: "all" });

      // Create timeline for seamless infinite loop
      const tl = gsap.timeline({ repeat: -1 });

      tl.fromTo(
        marqueeRef.current,
        { x: "0%" },
        {
          x: "-50%",
          duration: 25,
          ease: "none",
        }
      );
    });
  }, []);
  const agents = [
    { id: "G-078W", name: "VENGEFUL SPIRIT", status: "active" },
    { id: "G-079X", name: "OBSIDIAN SENTINEL", status: "standby" },
    { id: "G-080Y", name: "GHOSTLY FURY", status: "active" },
    { id: "G-081Z", name: "CURSED REVENANT", status: "compromised" },
  ];

  const activity = [
    {
      time: "25/06/2025 09:29",
      agent: "gh0st_Fire",
      action: "completed mission in",
      location: "Berlin",
      target: "zer0_Nigh",
    },
    {
      time: "25/06/2025 08:12",
      agent: "dr4g0n_V3in",
      action: "extracted high-value target in",
      location: "Cairo",
      target: null,
    },
    {
      time: "24/06/2025 22:55",
      agent: "sn4ke_Sh4de",
      action: "lost communication in",
      location: "Havana",
      target: null,
    },
    {
      time: "24/06/2025 21:33",
      agent: "ph4nt0m_R4ven",
      action: "initiated surveillance in",
      location: "Tokyo",
      target: null,
    },
    {
      time: "24/06/2025 19:45",
      agent: "v0id_Walk3r",
      action: "compromised security in",
      location: "Moscow",
      target: "d4rk_M4trix",
    },
  ];

  return (
    <div className="cc-page cc-space-y">
      <div className="cc-inner">
        <div className=" h-[70vh]  gap-3.5 grid grid-cols-2 grid-rows-2  ">
          <div className="row-span-2 min-w-[500px] h-[500px] cc-card bg-linear-to-r  from-[#202020] to-[#100e0e] rounded-2xl">
            <div style={{ width: 500, height: 500 }}>
              <World
                globeConfig={{
                  globeColor: "#1d072e",
                  showAtmosphere: false,
                  atmosphereColor: "#ffffff",
                  atmosphereAltitude: 0.1,
                  autoRotate: true,
                  autoRotateSpeed: 1,
                }}
              />
            </div>
          </div>
          <div className="cc-card h-[255px] ">
            <div className="cc-card-header">
              <TypographySystem.Label>THE EYE- EVENTS</TypographySystem.Label>
            </div>
            <div
              className="cc-card-content"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className="cc-sphere">
                <div className="cc-circle" />
                <div className="cc-circle-2" />
                <div className="cc-circle-3" />
                <div className="cc-sphere-hline" />
                <div className="cc-sphere-vline" />
              </div>

              <div className="cc-chat">
                <div className="line">
                  <TypographySystem.MonoSmall className="cc-text-muted-2">
                    # Scanning for New Events
                  </TypographySystem.MonoSmall>
                </div>
                <div className="line">
                  <TypographySystem.MonoSmall>
                    {"> [AGT:admin] ::: INIT >> ^^^ logging in.."}
                  </TypographySystem.MonoSmall>
                </div>
              </div>
            </div>
          </div>
          <div className="  cc-card bg-linear-to-r h-[330px]  from-[#1c1b1b] to-[#010101] rounded-2xl">
            <Accordion></Accordion>
          </div>
        </div>
        <div className="big-fo cc-card h-[70px] w-[546px] overflow-hidden pl-[3px]">
          <TypographySystem.DisplayLarge
            id="hero-title"
            className="dh-hero-title"
            data-text="UNCOVER THE UNSEEN"
          >
            <div className="marquee-gsap" ref={marqueeRef}>
              <span>THE EYE - EVENTS | UNCOVER THE UNSEEN&nbsp;&nbsp;</span>
              <span>THE EYE - EVENTS | UNCOVER THE UNSEEN&nbsp;&nbsp;</span>
            </div>
          </TypographySystem.DisplayLarge>
        </div>
      </div>
    </div>
  );
}
