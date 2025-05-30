import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HeroUIProvider } from "@heroui/react";
import Navbar from "./components/Navbar.jsx";
import Port from "./page/port.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HeroUIProvider>
      <main className="ligth text-foreground bg-background">
        <Navbar />
        <Port />
      </main>
    </HeroUIProvider>
  </StrictMode>
);
