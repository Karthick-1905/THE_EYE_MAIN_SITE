import React from "react";
import { useNavigate } from "react-router-dom";
import TypographySystem from "../components/TypographySystem";

export default function EthicalHackingPage() {
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
          ETHICAL HACKING
        </TypographySystem.DisplayLarge>

        <TypographySystem.BodyLarge className="mb-6">
          Penetration testing and vulnerability assessment to strengthen your
          security posture.
        </TypographySystem.BodyLarge>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <TypographySystem.HeadlineMedium className="mb-4">
              Penetration Testing
            </TypographySystem.HeadlineMedium>
            <TypographySystem.BodyMedium>
              Comprehensive security testing to identify vulnerabilities.
            </TypographySystem.BodyMedium>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <TypographySystem.HeadlineMedium className="mb-4">
              Vulnerability Assessment
            </TypographySystem.HeadlineMedium>
            <TypographySystem.BodyMedium>
              Detailed analysis and reporting of security weaknesses.
            </TypographySystem.BodyMedium>
          </div>
        </div>
      </div>
    </div>
  );
}
