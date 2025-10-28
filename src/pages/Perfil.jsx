import React from "react";

export default function Perfil() {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-3 card-perfil">
            <div className="card-body text-center">
              <img
                src="assets/img/jax.webp"
                className="rounded-circle mb-3"
                alt="Avatar"
                width="100"
              />
              <h5 className="card-title">Nombre: Ezequiel Andrade</h5>
              <p className="card-text">Correo: ez.aravena@duocuc.cl</p>
              <p className="card-text">Dirección: Av. Gamer 123, Santiago</p>
              <p className="card-text">Puntos Level-Up!: 1000</p>
              <p className="card-text">Nivel Level-Up!: 5</p>
            </div>
            <div className="card-footer d-flex flex-column gap-2">
              <button className="btn btn-outline-light">Modificar Nombre</button>
              <button className="btn btn-outline-light">Modificar Dirección</button>
              <button className="btn btn-outline-light">Modificar Correo</button>
              <button className="btn btn-outline-light">Modificar Contraseña</button>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-center mt-5">Mis Productos</h3>
      <div className="productos justify-content-center mt-3 d-flex flex-wrap gap-3">
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="assets/img/MousePadDigitalCircus.webp"
            className="card-img-top"
            alt="MousePad Digital Circus"
          />
          <div className="card-body">
            <h5 className="card-title">MousePad Digital Circus Oficial!</h5>
            <p className="card-text">
              MousePad De Digital Circus Original Por Glitch Productions
              <br />
              <span className="precio-original">$30.000</span>{" "}
              <span className="precio-descuento">$24.000</span>
              <br />
              <span className="descuento">
                20% de descuento activado con correo @duocuc.cl
              </span>
            </p>
            <button className="btn btn-primary">Agregar Al Carrito</button>
          </div>
        </div>
        {/* Aquí puedes agregar más productos */}
      </div>
    </div>
  );
}
