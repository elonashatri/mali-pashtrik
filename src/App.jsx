import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Prepare from "./pages/Prepare";
import PlanJourney from "./pages/PlanJourney";
import OnTheRoute from "./pages/OnTheRoute";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/prepare" element={<Prepare />} />
      <Route path="/plan-journey" element={<PlanJourney />} />
      <Route path="/on-the-route" element={<OnTheRoute />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
