import React from "react";
import { CardCarousel } from "@/components/ui/card-carousel";
import { TextScroll } from "@/components/ui/text-scroll";
import TypographySystem from "@/components/TypographySystem";
import '../css/Events.css';

export default function Verticals() {
    const cards = [
    {
      title: "Projects and Research",
      content: "Advanced threat detection and prevention systems",
      route: "/projects-and-research",
    },
    {
      title: "Events Resources",
      content: "Penetration testing and vulnerability assessment",
      route: "/events-resources",
    },
    {
      title: "Events Management",
      content: "Evidence collection and cyber crime investigation",
      route: "/events-management",
    },
    {
      title: "Design and Publicity",
      content: "Infrastructure protection and monitoring solutions",
      route: "/design-and-publicity",
    },
  ]; 
  return (
    <div className="pt-40">
       <div className="events-title-container">
        <div className="events-title-track">
          <h1 className="events-main-title">
            THE EYE - EVENTS & WORKSHOPS • THE EYE - EVENTS & WORKSHOPS • THE EYE - EVENTS & WORKSHOPS • THE EYE - EVENTS & WORKSHOPS • 
          </h1>
          <h1 className="events-main-title" aria-hidden="true">
            THE EYE - EVENTS & WORKSHOPS • THE EYE - EVENTS & WORKSHOPS • THE EYE - EVENTS & WORKSHOPS • THE EYE - EVENTS & WORKSHOPS • 
          </h1>
        </div>
      </div>
      <CardCarousel
        cards={cards}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
}
