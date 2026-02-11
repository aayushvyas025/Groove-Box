import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { clientSideRoutes, envSecrets } from "./helper/constant";
import { helperFunctions } from "./helper/utils";
import { ClerkProvider } from "@clerk/clerk-react";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/AuthProvider/AuthProvider.tsx";

const { authApiKey } = envSecrets;
const { checkAuthApiKey } = helperFunctions;
const { homeRoute } = clientSideRoutes;

checkAuthApiKey(authApiKey);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ClerkProvider publishableKey={authApiKey} afterSignOutUrl={homeRoute}>
      <BrowserRouter>
        <AuthProvider>
          <App />
        </AuthProvider>
      </BrowserRouter>
    </ClerkProvider>
  </StrictMode>,
);
