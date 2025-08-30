import React from "react";
import { CardCarousel } from "@/components/ui/card-carousel";
import { TextScroll } from "@/components/ui/text-scroll";
import TypographySystem from "@/components/TypographySystem";

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
      <TextScroll
        text="The Eye - verticals"
        default_velocity={5}
        className="text-6xl font-roboto text-white"
      />
      <CardCarousel
        cards={cards}
        autoplayDelay={2000}
        showPagination={true}
        showNavigation={true}
      />
    </div>
  );
}
