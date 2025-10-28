import React from "react";

export default function Info() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">
        <span className="gamer-title">MousePads!</span>
      </h1>
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img
          src="assets/img/MousePadDigitalCircus.webp"
          className="card-img-top"
          alt="MousePad Digital Circus"
        />
        <div className="card-body">
          <h5 className="card-title">MousePad Digital Circus Oficial!</h5>
          <p className="card-text">
            MousePad de Digital Circus Original por Glitch Productions.
            <br />
            <span className="precio-original">$30.000</span>{" "}
            <span className="precio-descuento">$24.000</span>
            <br />
            <span className="descuento">
              20% de descuento activado con correo @duocuc.cl
            </span>
          </p>
          <a href="#" className="btn btn-primary">
            Agregar al carrito
          </a>
        </div>
      </div>
    </div>
  );
}
