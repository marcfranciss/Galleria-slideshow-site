import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { DataProvider } from "./contexts/DataContext.tsx";
import { StateProvider } from "./contexts/StateContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DataProvider>
      <StateProvider>
        <App />
      </StateProvider>
    </DataProvider>
  </StrictMode>
);
