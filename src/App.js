import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Componentes globales
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Páginas
import Home from "./pages/Home";
import Eventos from "./pages/Eventos";
import Noticias from "./pages/Noticias";
import Registro from "./pages/Registro";
import Login from "./pages/Login";
import Perfil from "./pages/Perfil";
import Calificacion from "./pages/Calificacion";
import Info from "./pages/Info";        // 🟢 Info intacta
import Carrito from "./pages/Carrito";  // 🟢 Nueva página Carrito
import Compra from "./pages/Compra";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/noticias" element={<Noticias />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/calificacion" element={<Calificacion />} />
        <Route path="/info" element={<Info />} />          {/* 🟢 Info permanece */}
        <Route path="/carrito" element={<Carrito />} />    {/* 🟢 Nueva ruta */}
        <Route path="/compra" element={<Compra />} />
      </Routes>
      <Footer />
    </Router>
  );
}
