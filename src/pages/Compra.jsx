import React from "react";
import { Link } from "react-router-dom";

export default function Compra() {
  return (
    <div className="container mt-5 text-white">
      <div className="text-center">
        <h1 className="mb-4">
          <span className="gamer-title">¡Gracias Por Su Compra!</span>
        </h1>
        <p>
          Con su compra ha ganado 300 pts Level-Up y esta cerca del nivel 6! y tambien está ayudando a que podamos traer más productos, organizar eventos y financiar más premios! 🔥🔥🔥
          Aquí tiene productos que quizás le interesen para complementar su compra.
        </p>
        <Link to="/" className="btn btn-accent">Volver A La Tienda</Link>
      </div>

      <div className="productos d-flex flex-wrap justify-content-center gap-3 mt-4">
        <div className="card" style={{ width: "18rem" }}>
          <img src="assets/img/SillaGamer.webp" className="card-img-top" alt="Silla Gamer" />
          <div className="card-body">
            <h5 className="card-title">Silla Gamer Black and White!</h5>
            <p className="card-text">
              Silla gamer blanca y negra por Sodimac
              <br />
              <span className="precio-original">$120.000</span>{" "}
              <span className="precio-descuento">$96.000</span>
              <br />
              <span className="descuento">20% de descuento activado con correo @duocuc.cl</span>
            </p>
            <button className="btn btn-primary">Agregar Al Carrito</button>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="assets/img/AudifonosHyperX.webp" className="card-img-top" alt="Audifonos HyperX" />
          <div className="card-body">
            <h5 className="card-title">Audífonos Gamer HyperX!</h5>
            <p className="card-text">
              Audífonos HyperX originales
              <br />
              <span className="precio-original">$75.000</span>{" "}
              <span className="precio-descuento">$60.000</span>
              <br />
              <span className="descuento">20% de descuento activado con correo @duocuc.cl</span>
            </p>
            <button className="btn btn-primary">Agregar Al Carrito</button>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="assets/img/MouseGamerTrust.png" className="card-img-top" alt="Mouse Gamer" />
          <div className="card-body">
            <h5 className="card-title">Mouse Gamer Trust!</h5>
            <p className="card-text">
              Mouse Gamer oficial por Trust
              <br />
              <span className="precio-original">$15.000</span>{" "}
              <span className="precio-descuento">$12.000</span>
              <br />
              <span className="descuento">20% de descuento activado con correo @duocuc.cl</span>
            </p>
            <button className="btn btn-primary">Agregar Al Carrito</button>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <img src="assets/img/NotebookVictus.webp" className="card-img-top" alt="Notebook Gamer" />
          <div className="card-body">
            <h5 className="card-title">Notebook Gamer Victus!</h5>
            <p className="card-text">
              Notebook Gamer Victus con RTX3050, 1TB SSD, i5 por HP
              <br />
              <span className="precio-original">$730.000</span>{" "}
              <span className="precio-descuento">$584.000</span>
              <br />
              <span className="descuento">20% de descuento activado con correo @duocuc.cl</span>
            </p>
            <button className="btn btn-primary">Agregar Al Carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}
