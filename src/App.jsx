import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Calificacion from "./pages/Calificacion"; // 👈 importamos la nueva página

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calificacion" element={<Calificacion />} /> {/* 👈 nueva ruta */}
      </Routes>
      <Footer />
    </Router>
  );
}
