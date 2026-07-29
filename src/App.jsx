import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeLayout from "./home/HomeLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;