import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsertSkill from "./page/skill.jsx"; // Adjust the import path as necessary
import { HeroUIProvider } from "@heroui/react";
import Navbar from "./components/Navbar.jsx";
import Port from "./page/port.jsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Port />} />
        <Route path="/insertSkill" element={<InsertSkill />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
