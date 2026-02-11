import { clientSideRoutes } from "@/helper/constant";
import { AuthPage, LazyHomePage } from "@/pages";
import type React from "react";
import { Route, Routes } from "react-router-dom";

const { homeRoute, authPageRoute } = clientSideRoutes;

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path={homeRoute} element={<LazyHomePage />} />
      <Route path={authPageRoute} element={<AuthPage />} />
    </Routes>
  );
};

export default MainRoutes;
