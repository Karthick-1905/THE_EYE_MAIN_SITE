import React from "react";
import TypographySystem from "./TypographySystem";
import "../css/CommandCenter.css";

export default function CommandCenter() {
  const agents = [
    { id: "G-078W", name: "VENGEFUL SPIRIT", status: "active" },
    { id: "G-079X", name: "OBSIDIAN SENTINEL", status: "standby" },
    { id: "G-080Y", name: "GHOSTLY FURY", status: "active" },
    { id: "G-081Z", name: "CURSED REVENANT", status: "compromised" },
  ];

  const activity = [
    { time: "25/06/2025 09:29", agent: "gh0st_Fire", action: "completed mission in", location: "Berlin", target: "zer0_Nigh" },
    { time: "25/06/2025 08:12", agent: "dr4g0n_V3in", action: "extracted high-value target in", location: "Cairo", target: null },
    { time: "24/06/2025 22:55", agent: "sn4ke_Sh4de", action: "lost communication in", location: "Havana", target: null },
    { time: "24/06/2025 21:33", agent: "ph4nt0m_R4ven", action: "initiated surveillance in", location: "Tokyo", target: null },
    { time: "24/06/2025 19:45", agent: "v0id_Walk3r", action: "compromised security in", location: "Moscow", target: "d4rk_M4trix" },
  ];

  return (
    <div className="cc-page cc-space-y">
      <div className="cc-inner">
      <div className="cc-grid">
        {/* Agent Status Overview */}
        <div className="cc-card lg-col-span-4">
          <div className="cc-card-header">
            <TypographySystem.Label>AGENT ALLOCATION</TypographySystem.Label>
          </div>
          <div className="cc-card-content">
            <div className="cc-three-cols">
              <div className="cc-center">
                <TypographySystem.HeadlineSmall>190</TypographySystem.HeadlineSmall>
                <TypographySystem.Label className="cc-text-muted-2">ACTIVE FIELD</TypographySystem.Label>
              </div>
              <div className="cc-center">
                <TypographySystem.HeadlineSmall>990</TypographySystem.HeadlineSmall>
                <TypographySystem.Label className="cc-text-muted-2">UNDERCOVER</TypographySystem.Label>
              </div>
              <div className="cc-center">
                <TypographySystem.HeadlineSmall>290</TypographySystem.HeadlineSmall>
                <TypographySystem.Label className="cc-text-muted-2">TRAINING</TypographySystem.Label>
              </div>
            </div>

            <div className="cc-agent-list">
              {agents.map((agent) => (
                <div key={agent.id} className="cc-agent-item">
                  <div className="cc-agent-left">
                    <div
                      className={
                        "cc-dot " +
                        (agent.status === "active"
                          ? "cc-dot-active"
                          : agent.status === "standby"
                          ? "cc-dot-standby"
                          : "cc-dot-compromised")
                      }
                    />
                    <div>
                      <TypographySystem.MonoSmall>{agent.id}</TypographySystem.MonoSmall>
                      <TypographySystem.BodySmall className="cc-text-muted-2">{agent.name}</TypographySystem.BodySmall>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Log */}
        <div className="cc-card lg-col-span-4">
          <div className="cc-card-header">
            <TypographySystem.Label>ACTIVITY LOG</TypographySystem.Label>
          </div>
          <div className="cc-card-content">
            <div className="cc-activity-list">
              {activity.map((log, idx) => (
                <div key={idx} className="cc-activity-item">
                  <TypographySystem.MonoSmall className="cc-text-muted-2">{log.time}</TypographySystem.MonoSmall>
                  <TypographySystem.BodySmall>
                    Agent <TypographySystem.MonoSmall>{log.agent}</TypographySystem.MonoSmall> {log.action}{" "}
                    <TypographySystem.MonoSmall>{log.location}</TypographySystem.MonoSmall>
                    {log.target && (
                      <>
                        {" "}with agent <TypographySystem.MonoSmall>{log.target}</TypographySystem.MonoSmall>
                      </>
                    )}
                  </TypographySystem.BodySmall>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Encrypted Chat Activity */}
        <div className="cc-card lg-col-span-4">
          <div className="cc-card-header">
            <TypographySystem.Label>ENCRYPTED CHAT ACTIVITY</TypographySystem.Label>
          </div>
          <div className="cc-card-content" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="cc-sphere">
              <div className="cc-circle" />
              <div className="cc-circle-2" />
              <div className="cc-circle-3" />
              <div className="cc-sphere-hline" />
              <div className="cc-sphere-vline" />
            </div>

            <div className="cc-chat">
              <div className="line"><TypographySystem.MonoSmall className="cc-text-muted-2"># 2025-06-17 14:23 UTC</TypographySystem.MonoSmall></div>
              <div className="line"><TypographySystem.MonoSmall>{"> [AGT:gh0stfire] ::: INIT >> ^^^ loading secure channel"}</TypographySystem.MonoSmall></div>
              <div className="line"><TypographySystem.MonoSmall>{"> CH#2 | 1231.9082464.500...xR3"}</TypographySystem.MonoSmall></div>
              <div className="line"><TypographySystem.MonoSmall>{"> KEY LOCKED"}</TypographySystem.MonoSmall></div>
              <div className="line"><TypographySystem.MonoSmall className="cc-text-muted">{' > MSG >> "...mission override initiated... awaiting delta node clearance"'}</TypographySystem.MonoSmall></div>
            </div>
          </div>
        </div>

        {/* Mission Activity Chart */}
        <div className="cc-card lg-col-span-8">
          <div className="cc-card-header">
            <TypographySystem.Label>MISSION ACTIVITY OVERVIEW</TypographySystem.Label>
          </div>
          <div className="cc-card-content">
            <div className="cc-chart">
              <div className="cc-chart-grid">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div key={i} className="cc-chart-cell" />
                ))}
              </div>

              <svg className="cc-chart-svg">
                <polyline
                  points="0,120 50,100 100,110 150,90 200,95 250,85 300,100 350,80"
                  fill="none"
                  stroke="#e6e6e6"
                  strokeWidth="2"
                />
                <polyline
                  points="0,140 50,135 100,130 150,125 200,130 250,135 300,125 350,120"
                  fill="none"
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>

              <div className="cc-ylabels">
                <TypographySystem.MonoSmall>500</TypographySystem.MonoSmall>
                <TypographySystem.MonoSmall>400</TypographySystem.MonoSmall>
                <TypographySystem.MonoSmall>300</TypographySystem.MonoSmall>
                <TypographySystem.MonoSmall>200</TypographySystem.MonoSmall>
              </div>

              <div className="cc-xlabels">
                <TypographySystem.MonoSmall>Jan 28, 2025</TypographySystem.MonoSmall>
                <TypographySystem.MonoSmall>Feb 28, 2025</TypographySystem.MonoSmall>
              </div>
            </div>
          </div>
        </div>

        {/* Mission Information */}
        <div className="cc-card lg-col-span-4">
          <div className="cc-card-header">
            <TypographySystem.Label>MISSION INFORMATION</TypographySystem.Label>
          </div>
          <div className="cc-card-content">
            <div className="cc-info-grid">
              <div className="cc-info-section">
                <div className="cc-info-header">
                  <div className="cc-info-dot" style={{ background: "var(--bw-100)" }} />
                  <TypographySystem.Label>SUCCESSFUL MISSIONS</TypographySystem.Label>
                </div>
                <div className="cc-list">
                  <div className="cc-row">
                    <TypographySystem.BodySmall className="cc-text-muted">High Risk Mission</TypographySystem.BodySmall>
                    <TypographySystem.MonoMedium>190</TypographySystem.MonoMedium>
                  </div>
                  <div className="cc-row">
                    <TypographySystem.BodySmall className="cc-text-muted">Medium Risk Mission</TypographySystem.BodySmall>
                    <TypographySystem.MonoMedium>426</TypographySystem.MonoMedium>
                  </div>
                  <div className="cc-row">
                    <TypographySystem.BodySmall className="cc-text-muted">Low Risk Mission</TypographySystem.BodySmall>
                    <TypographySystem.MonoMedium>920</TypographySystem.MonoMedium>
                  </div>
                </div>
              </div>

              <div className="cc-info-section">
                <div className="cc-info-header">
                  <div className="cc-info-dot" style={{ background: "var(--bw-30)" }} />
                  <TypographySystem.Label>FAILED MISSIONS</TypographySystem.Label>
                </div>
                <div className="cc-list">
                  <div className="cc-row">
                    <TypographySystem.BodySmall className="cc-text-muted">High Risk Mission</TypographySystem.BodySmall>
                    <TypographySystem.MonoMedium>190</TypographySystem.MonoMedium>
                  </div>
                  <div className="cc-row">
                    <TypographySystem.BodySmall className="cc-text-muted">Medium Risk Mission</TypographySystem.BodySmall>
                    <TypographySystem.MonoMedium>426</TypographySystem.MonoMedium>
                  </div>
                  <div className="cc-row">
                    <TypographySystem.BodySmall className="cc-text-muted">Low Risk Mission</TypographySystem.BodySmall>
                    <TypographySystem.MonoMedium>920</TypographySystem.MonoMedium>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  </div>
  </div>
    </div>
  );
}
