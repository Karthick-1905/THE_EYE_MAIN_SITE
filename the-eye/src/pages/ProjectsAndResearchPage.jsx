import React from "react";
import { useNavigate } from "react-router-dom";
import TypographySystem from "../components/TypographySystem";

export default function ProjectsAndResearchPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white p-8">
      <button
        onClick={() => navigate("/")}
        className="mb-8 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
      >
        <TypographySystem.Button>← Back to Home</TypographySystem.Button>
      </button>

      <div className="max-w-4xl mx-auto">
        <TypographySystem.DisplayLarge className="mb-8">
          PROJECTS AND RESEARCH
        </TypographySystem.DisplayLarge>
      </div>
    </div>
  );
}
