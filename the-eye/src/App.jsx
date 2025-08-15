import Dither from "./components/Dither";
import DitherHome from "./components/DitherHome";
import CommandCenter from "./components/CommandCenter";
// import DitherEventPage from "./components/DietherEventsPage";
// import EventsRetro from "./components/EventsRetro";

import "./App.css";

function App() {
  return (
    <>
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
      <DitherHome />
  <CommandCenter />
      {/* <DitherEventPage /> */}

    </>
  );
}

export default App;
