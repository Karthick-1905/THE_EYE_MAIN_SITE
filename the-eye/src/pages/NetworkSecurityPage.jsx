import React from "react";
import { useNavigate } from "react-router-dom";
import TypographySystem from "../components/TypographySystem";

export default function NetworkSecurityPage() {
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
          NETWORK SECURITY
        </TypographySystem.DisplayLarge>

        <TypographySystem.BodyLarge className="mb-6">
          Infrastructure protection and monitoring solutions for comprehensive
          network security.
        </TypographySystem.BodyLarge>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <TypographySystem.HeadlineMedium className="mb-4">
              Network Monitoring
            </TypographySystem.HeadlineMedium>
            <TypographySystem.BodyMedium>
              24/7 monitoring of network traffic and security events.
            </TypographySystem.BodyMedium>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <TypographySystem.HeadlineMedium className="mb-4">
              Firewall Management
            </TypographySystem.HeadlineMedium>
            <TypographySystem.BodyMedium>
              Advanced firewall configuration and management services.
            </TypographySystem.BodyMedium>
          </div>
        </div>
      </div>
    </div>
  );
}
