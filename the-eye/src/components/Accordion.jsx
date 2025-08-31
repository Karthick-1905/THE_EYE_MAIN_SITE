"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react"; // icon lib (npm i lucide-react)
import TypographySystem from "./TypographySystem";
const events = [
  {
    title: "The Pandemic That Never Happened",
    content: "Event details go here...",
  },
  { title: "KRIYA 2025", content: "Event details go here..." },
  { title: "EtherX Summit", content: "Event details go here..." },
  { title: "HiddenX", content: "Event details go here..." },
];

export default function Accordion() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex m-5 justify-center items-center">
      <div className="bg-transparent text-white h-full flex flex-col gap-1 w-full max-w-xl ">
        {/** Heading using TypographySystem */}
        <TypographySystem.HeadlineLarge className="mb-6">
          EVENT LOG
        </TypographySystem.HeadlineLarge>

        <div className="divide-y divide-gray-600">
          {events.map((event, index) => (
            <div
              key={index}
              className="py-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <TypographySystem.BodyLarge className="font-semibold">
                  {event.title}
                </TypographySystem.BodyLarge>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>

              {openIndex === index && (
                <TypographySystem.BodyMedium className="mt-2 text-gray-300">
                  {event.content}
                </TypographySystem.BodyMedium>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
