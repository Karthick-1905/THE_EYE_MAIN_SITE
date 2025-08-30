import Dither from "./components/Dither";
import DitherHome from "./pages/DitherHome";
import CommandCenter from "./pages/CommandCenter";
import JoinUs from "./pages/JoinUs";
import ProjectsAndResearchPage from "./pages/ProjectsAndResearchPage";
import EventsResourcesPage from "./pages/EventsResourcesPage";
import EventsManagementPage from "./pages/EventsManagementPage";
import DesignAndPublicityPage from "./pages/DesignAndPublicityPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CometCard } from "./components/ui/comet-card";
import CometCardDemo from "./components/comet-card-demo";
import Verticals from "./pages/Verticals";
import gsap from "gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis();

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 400);
    });

    gsap.ticker.lagSmoothing(0);
  }, []);

  return (
    <BrowserRouter>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: -1,
        }}
      >
        <Dither
          waveColor={[0.3, 0.3, 0.3]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.05}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={0.05}
        />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <DitherHome />
              <CommandCenter />
              <Verticals />
            </>
          }
        />
        <Route path="/join" element={<JoinUs />} />
        <Route path="/projects-and-research" element={<ProjectsAndResearchPage />} />
        <Route path="/events-resources" element={<EventsResourcesPage />} />
        <Route path="/events-management" element={<EventsManagementPage />} />
        <Route path="/design-and-publicity" element={<DesignAndPublicityPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
