import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate(); // 👈 Hook para navegar entre páginas

  return (
    <div className="container text-center mt-5 text-white">
      <h1 className="mb-4 gamer-title">Bienvenido A Level-Up! Gamer Store</h1>
      <p>
        Aca podras encontrar todo lo que necesitas para jugar, eventos, noticias de juegos y más. 
        20% de descuento para los estudiantes con correo de DuocUC (@duocuc.cl) y 100 Puntos Level-Up! 🔥🔥🔥
      </p>

      {/* 👇 Botón que lleva a /registro */}
      <button 
        className="btn btn-accent"
        onClick={() => navigate("/registro")}
      >
        REGISTRARSE/INICIAR SESIÓN
      </button>

      <div className="productos mt-5 d-flex flex-wrap justify-content-center">
        <div
          className="card custom-card m-2"
          style={{ width: "18rem", cursor: "pointer" }}
          onClick={() => navigate("/calificacion")} // enlace directo a Calificación
        >
          <img
            src="assets/img/MousePadDigitalCircus.webp"
            className="card-img-top"
            alt="MousePad Digital Circus"
          />
          <div className="card-body bg-dark text-white">
            <h5 className="card-title">MousePad Digital Circus Oficial!</h5>
            <p className="card-text">
              MousePad de Digital Circus Original. 
              <br />
              <span className="precio-original">$30.000</span>{" "}
              <span className="precio-descuento">$24.000</span>
              <br />
              <span className="descuento">20% de descuento activado con correo @duocuc.cl</span>
            </p>
          </div>
        </div>
        {/* Aquí podrías agregar más tarjetas de productos */}
      </div>
    </div>
  );
}
