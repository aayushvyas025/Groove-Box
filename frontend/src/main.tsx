import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { envSecrets } from "./helper/constant";
import { helperFunctions } from "./helper/utils";
import { ClerkProvider } from "@clerk/clerk-react";

const { authApiKey } = envSecrets;
const { checkAuthApiKey } = helperFunctions;

checkAuthApiKey(authApiKey);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={authApiKey}>
      <App />
    </ClerkProvider>
  </StrictMode>,
);
