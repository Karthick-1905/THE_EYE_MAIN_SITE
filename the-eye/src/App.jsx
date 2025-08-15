import Dither from "./components/Dither";
import DitherHome from "./components/DitherHome";
import CommandCenter from "./components/CommandCenter";
import JoinUs from "./pages/JoinUs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import DitherEventPage from "./components/DietherEventsPage";
// import EventsRetro from "./components/EventsRetro";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}>
        <Dither
          waveColor={[0.5, 0.5, 0.5]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={.05}
          colorNum={4}
          waveAmplitude={0.3}
          waveFrequency={3}
          waveSpeed={.05}
        />
      </div>
      <Routes>
        <Route path="/" element={<>
          <DitherHome />
          <CommandCenter />
        </>} />
        <Route path="/join" element={<JoinUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
