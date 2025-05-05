import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutMe from "./pages/AboutMe";
import MyCity from "./pages/MyCity";
import MyFuture from "./pages/MyFuture";

import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/city" element={<MyCity />} />
        <Route path="/future" element={<MyFuture />} />
      </Routes>
      <Footer />
    </Router>
  );
}
