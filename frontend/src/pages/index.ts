import { lazy } from "react";

export const LazyHomePage = lazy(() => import("./home/HomePage"));
export const AuthPage = lazy(() => import("./Auth/AuthPage"));