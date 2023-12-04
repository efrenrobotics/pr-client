import React from "react";
/* React Imports */
import { Route, Routes, useLocation } from "react-router-dom";
/* Component Imports */
import LandingPage from "./LandingPage";
import DestinationPage from "./DestinationPage";
import NotFoundPage from "./NotFoundPage";
/* Framer Motion Imports */
import { AnimatePresence } from "framer-motion";
import DurationPage from "./DurationPage";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/destination" element={<DestinationPage />} />
        <Route path="/duration" element={<DurationPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
