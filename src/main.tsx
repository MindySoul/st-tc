import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { captureClickIds } from "./lib/site";

// Captura gclid/fbclid da URL logo no boot, antes de qualquer navegação limpar
// os parâmetros — é o que vira conversão offline quando o lead fecha venda.
captureClickIds();

createRoot(document.getElementById("root")!).render(<App />);
