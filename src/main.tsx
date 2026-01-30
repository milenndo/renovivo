import { createRoot } from "react-dom/client";
import App from "./App.tsx";
// Import fonts explicitly in entry file to ensure they load before styles
import "@fontsource/tenor-sans";
import "@fontsource/plus-jakarta-sans";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
