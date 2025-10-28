import React from "react";

export default function Footer() {
  return (
    <footer id="footer" className="footer text-center mt-5">
      <p>SÍGUENOS O CONTACTANOS EN NUESTRAS REDES SOCIALES PARA SERVICIO TÉCNICO Y MÁS!:</p>
      <div className="container">
        <a href="https://www.instagram.com" target="_blank" className="social-icon instagram">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" className="social-icon twitter">
          <i className="fab fa-x-twitter"></i>
        </a>
        <a href="https://facebook.com" target="_blank" className="social-icon facebook">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://wa.me/123456789" target="_blank" className="social-icon whatsapp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <p>Level-Up! Gamer 2025 ® Todos Los Derechos Reservados.</p>
      </div>
    </footer>
  );
}
