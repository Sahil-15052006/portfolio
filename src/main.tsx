import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { PortfolioProvider } from "./context/PortfolioContext.tsx"

createRoot(document.getElementById("root")!).render(
  <PortfolioProvider>
    <App />
  </PortfolioProvider>,
);
