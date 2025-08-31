import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TypographySystem from "../components/TypographySystem";
import "../css/DitherHome.css";
import TerminalOverlay from "../components/TerminalOverlay";
import Logo from "../components/Logo";
import LOGO_FINAL_SQUARE from "../assets/LOGO_FINAL_SQUARE.png";
import tplogo from "../assets/tplogo.png";
import CometCardDemo from "../components/comet-card-demo";
import { World } from "@/components/ui/globe";
import TypeIt from "typeit-react";
// import DraggableCardDemo from '@/components/draggable-card-demo';

export default function DitherHome() {
  const [showTerminal, setShowTerminal] = useState(false);

  // Keyboard shortcut: Ctrl+` (backtick) to toggle terminal
  useEffect(() => {
    const onKey = (e) => {
      const isToggle = (e.ctrlKey || e.metaKey) && e.key === "`";
      if (isToggle) {
        e.preventDefault();
        setShowTerminal((v) => !v);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <main className="dither-home">
      <div className="dither-home-inner">
        {/* HEADER */}
        <header className="dh-header">
          <div className="dh-logo" role="banner">
            <svg
              viewBox="0 0 100 100"
              className="dh-logo-svg"
              aria-hidden="true"
            >
              <circle
                cx="50"
                cy="50"
                r="44"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <path
                d="M50 22 L70 50 L50 78 L30 50 Z"
                fill="currentColor"
                opacity="0.12"
              />
              <circle cx="50" cy="50" r="12" fill="currentColor" />
            </svg>
            <img
              src={tplogo}
              alt="THE EYE logo"
              style={{ height: 64, width: "auto" }}
            />
            {/* <Logo /> */}
          </div>
        </header>

        <section className="dh-hero" aria-labelledby="hero-title">
          <div className="dh-hero-left">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TypographySystem.DisplayLarge
                id="hero-title"
                className="dh-hero-title"
                data-text="UNCOVER THE UNSEEN"
              >
                UNCOVER THE UNSEEN <br />
              </TypographySystem.DisplayLarge>
              
              <img
                src={LOGO_FINAL_SQUARE}
                alt="THE EYE logo"
                style={{ height: 72, width: "auto", marginTop: -12 }}
              />
            </div>
            <TypographySystem.BodyLarge className="dh-hero-subtitle">
              THE EYE is a cybersecurity & ethical hacking club focused on
              hands-on learning, capture-the-flag (CTF) challenges,
              defensive/blue-team practice, and responsible disclosure culture.
              Dive in, learn, build, defend.
            </TypographySystem.BodyLarge>
            <br />
            {/* HERO ACTIONS */}
            <div className="dh-actions">
              <Link
                to="/join"
                className="retro-button dh-primary"
                aria-label="Join the community"
              >
                <TypographySystem.Button>
                  JOIN THE COMMUNITY
                </TypographySystem.Button>
              </Link>
              <button
                className="retro-button dh-secondary"
                aria-label="Explore events"
              >
                <TypographySystem.Button>
                  EXPLORE EVENTS
                </TypographySystem.Button>
              </button>
            </div>

            {/* HERO STATS */}
            <ul className="dh-stats" aria-label="System statistics">
              <li>
                <TypographySystem.HeadlineSmall>
                  <TypeIt
                    options={{ 
                      cursor: false, 
                      speed: 30
                    }}
                  >
                    127
                  </TypeIt>
                </TypographySystem.HeadlineSmall>
                <TypographySystem.Label>
                  <TypeIt
                    getBeforeInit={(instance) => {
                      instance
                        .type("TCTIVE")
                        .pause(750).move(-5, {delay: 40})
                        .delete(1)
                        .pause(100)
                        .type("A").move(5, {delay: 40})
                        .type("SCANS");
                      return instance;
                    }}
                    options={{ 
                      cursor: false, 
                      speed: 30,
                      startDelay: 90
                    }}
                  />
                </TypographySystem.Label>
              </li>
              
              <li>
                <TypographySystem.HeadlineSmall>
                  <TypeIt
                    getBeforeInit={(instance) => {
                      instance
                        .type("2").pause(750).delete(1)
                        .type(1).pause(500).delete(1).pause(300)
                        .type("0");
                      return instance;
                    }}
                    options={{ 
                      cursor: false, 
                      speed: 75,
                      startDelay: 4000
                    }}
                  />
                </TypographySystem.HeadlineSmall>
                <TypographySystem.Label>
                  <TypeIt
                    getBeforeInit={(instance) => {
                      instance
                        .type("VULNERABILITIES");
                      return instance;
                    }}
                    options={{ 
                      cursor: false, 
                      speed: 75,
                      startDelay: 7000
                    }}
                  />
                </TypographySystem.Label>
              </li>
              
              <li>
                <TypographySystem.HeadlineSmall>
                  <TypeIt
                    getBeforeInit={(instance) => {
                      instance
                        .type("LOW")
                        .pause(750)
                        .delete(3)
                        .pause(300)
                        .type("MAX");
                      return instance;
                    }}
                    options={{ 
                      cursor: true, 
                      speed: 30,
                      startDelay: 9000
                    }}
                  />
                </TypographySystem.HeadlineSmall>
                <TypographySystem.Label>
                  <TypeIt
                    getBeforeInit={(instance) => {
                      instance
                        .type("SECURITY");
                      return instance;
                    }}
                    options={{ 
                      cursor: false, 
                      speed: 30,
                      startDelay: 11000
                    }}
                  />
                </TypographySystem.Label>
              </li>
            </ul>
          </div>

          {/* HERO RIGHT VISUAL */}
          <div className="dh-hero-right">
            {/* STATUS PANEL */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                maxWidth: 360,
              }}
            >
              <CometCardDemo />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                width: "100%",
                maxWidth: 360,
              }}
            ></div>
            <div className="dh-panel" aria-label="System status panel">
              {[
                [
                  { label: "SYSTEM", value: "ONLINE" },
                  { label: "EVENTS", value: "4" },
                ],
                [
                  { label: "ACCESS", value: "AUTHORIZED" },
                  { label: "MODE", value: "OBSERVE" },
                ],
              ].map((row, i) => (
                <div className="dh-panel-row" key={i}>
                  {row.map((item) => (
                    <div className="dh-panel-item" key={item.label}>
                      <TypographySystem.MonoMedium>
                        {item.label}: <span>{item.value}</span>
                      </TypographySystem.MonoMedium>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <TerminalOverlay
            open={showTerminal}
            onClose={() => setShowTerminal(false)}
          />
        </section>

        {/* FOOTER */}
        <footer className="dh-footer">
          <TypographySystem.BodySmall>
            © THE EYE — Visio Protectoris
          </TypographySystem.BodySmall>
        </footer>
      </div>
    </main>
  );
}
