import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { AuthProvider } from "./hooks/useAuth.tsx";
import "./index.css";
import "./styles/aoda.css";

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Application root element is missing");
}

createRoot(rootElement).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);
