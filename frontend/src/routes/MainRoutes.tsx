import { LazyHomePage } from "@/pages";
import type React from "react";
import { Route, Routes } from "react-router-dom";

const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<LazyHomePage />} />
    </Routes>
  );
};

export default MainRoutes;
