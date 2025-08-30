import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { SparklesIcon } from "lucide-react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

import { Badge } from "@/components/ui/badge";
import TypographySystem from "@/components/TypographySystem";

interface CarouselProps {
  cards: { title: string; content: string; route: string }[];
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
}

export const CardCarousel: React.FC<CarouselProps> = ({
  cards = [
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
  ],
  autoplayDelay = 1500,
  showPagination = true,
  showNavigation = true,
}) => {
  const css = `
  .swiper {
    width: 100%;
    padding-bottom: 50px;
  }
  
  .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 300px;
    /* height: 300px; */
    /* margin: 20px; */
  }
  
  .swiper-slide img {
    display: block;
    width: 100%;
  }
  
  
  .swiper-3d .swiper-slide-shadow-left {
    background-image: none;
  }
  .swiper-3d .swiper-slide-shadow-right{
    background: none;
  }
  `;
  return (
    <section className="w-ace-y-4">
      <style>{css}</style>
      <div className="mx-auto w-full max-w-4xl rounded-[24px] border border-black/5 p-2 shadow-sm md:rounded-t-[44px]">
        <div className="relative mx-auto flex w-full flex-col rounded-[24px] border border-black/5 bg-neutral-800/5 p-2 shadow-sm md:items-start md:gap-8 md:rounded-b-[20px] md:rounded-t-[40px] md:p-2">
          <div className="flex w-full items-center justify-center gap-4">
            <div className="w-full">
              <Swiper
                spaceBetween={50}
                autoplay={{
                  delay: autoplayDelay,
                  disableOnInteraction: false,
                }}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={showPagination}
                navigation={
                  showNavigation
                    ? {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }
                    : undefined
                }
                modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
              >
                {cards.map((card, index) => (
                  <SwiperSlide key={index}>
                    <Link to={card.route}>
                      <div className="size-full rounded-3xl bg-[#0a0a0a] border border-gray-800 p-6 flex flex-col justify-center items-center text-center min-h-[500px] cursor-pointer hover:border-gray-600 transition-colors">
                        <TypographySystem.HeadlineLarge className="text-white transform rotate-270 whitespace-nowrap">
                          {card.title}
                        </TypographySystem.HeadlineLarge>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
                {cards.map((card, index) => (
                  <SwiperSlide key={`duplicate-${index}`}>
                    <Link to={card.route}>
                      <div className="size-full rounded-3xl bg-[#0a0a0a] border border-gray-800 p-6 flex flex-col justify-center items-center text-center min-h-[500px] cursor-pointer hover:border-gray-600 transition-colors">
                        <TypographySystem.HeadlineLarge className="text-white transform rotate-270 whitespace-nowrap">
                          {card.title}
                        </TypographySystem.HeadlineLarge>
                      </div>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
