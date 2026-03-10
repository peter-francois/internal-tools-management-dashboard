import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  </StrictMode>,
);
